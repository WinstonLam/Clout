import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'

// TODO - This network config only works in docker environments. Proper config
//        management needs to be implemented to support cloud technologies.
//        Suggestions: Environment variables, configuration files or ???
const wordlistServerAddress = 'wordlist'
const wordlistServerPort = '5000'

const PROTO_PATH = './protos/service_def.proto'
const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  })
const wordlistServiceProto = grpc.loadPackageDefinition(packageDefinition).wlservice

const wordlistService = new wordlistServiceProto.WordlistService(
  wordlistServerAddress + ':' + wordlistServerPort,
  grpc.credentials.createInsecure())


export async function getWordExceptIds(wordlistId, filter) {
  const request = {}
  request.wordlistID = wordlistId
  request.filter = filter ? intListToIdObjList(filter) : [{}]

  const wordsProm = await new Promise((resolve, reject) => {
    wordlistService.getWordExceptIDs(request, (err, response) => {
      if (err) {
        reject(`call to wordlist service failed: ${err}`)
      } else {
        resolve(response.words);
      }
    });
  });

  return wordsProm
}

function intListToIdObjList(filter) {
  const idObjList = []

  for (let i = 0; i < filter.length; i++) {
    const n = filter[i];
    const idObj = { "id": n }

    idObjList.push(idObj)
  }

  return idObjList
}

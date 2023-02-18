// controllers
const {
  addNewWordlist,
  getWordlist,
} = require("./controllers/wordlistController");

// dependencies
const grpc = require("@grpc/grpc-web");
const protoLoader = require("@grpc/proto-loader");

// path to our proto file
const PROTO_FILE = "./protos/service_def.proto";

// options needed for loading Proto file
const options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

const pkgDefs = protoLoader.loadSync(PROTO_FILE, options);

// load Definition into gRPC
const UserService = grpc.loadPackageDefinition(pkgDefs).UserService;

// create the Client
const client = new UserService(
  "127.0.0.1:5000",
  grpc.credentials.createInsecure()
);

function createWordList(wordlist) {
  addNewWordlist(client, wordlist);
}

// tests:

// call the getWordlist method
// getWordlist(client)
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // call the addNewWordlist method
// addNewWordlist(client, {
//   wordlistName: "test",
//   words: ["maann", "roos", "vis"],
// })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

module.exports = {
  createWordList,
};


var PROTO_PATH = __dirname + '/protos/gameservice.proto';

var grpc = require('@grpc/grpc-js');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });
var gameservice_proto = grpc.loadPackageDefinition(packageDefinition).gameservice;

/**
 * Implements the SayHello RPC method.
 */
function sayHello(call, callback) {
  callback(null, { message: 'Hiya! ' + call.request.name });
}

function main() {
  console.log("Starting webserver on 0.0.0.0 port 50051");

  var server = new grpc.Server();
  server.addService(gameservice_proto.Greeter.service, { sayHello: sayHello });
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
  });
}

main();

const grpc = require("@grpc/grpc-js");
const grpcWeb = require("grpc-web");
const protoLoader = require("@grpc/proto-loader");

const server = new grpc.Server();

server.bindAsync(
  "0.0.0.0:5000",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("Server started on port 5000");
    server.start();
  }
);

const protoPath = "./protos/client.proto";
const protoDefinition = grpc.loadPackageDefinition(
  protoLoader.loadSync(protoPath)
);
const service = protoDefinition.yourServiceName;

const grpcWebConfig = {
  grpcWebProtocols: [grpcWeb.GrpcWebProtocol.PROTOCOL_WEBSOCKET],
};

server.addService(
  service,
  {
    yourRpcMethod: (call, callback) => {
      // Your implementation goes here
    },
  },
  grpcWebConfig
);

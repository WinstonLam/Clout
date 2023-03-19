# !/bin/bash
# Generate the client protos for the any serivce proto
# replace CLIENTNAME with the name of the client folder
# replace SERVICEPROTO with the name of the serviceproto you want to generate the client for


mkdir -p ./src/clientprotos/gameservice
protoc --proto_path=./serviceprotos ./serviceprotos/gameservice.proto \
  --js_out=import_style=commonjs:./src/clientprotos/gameservice \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/clientprotos/gameservice


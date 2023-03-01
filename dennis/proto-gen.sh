#!/bin/bash

npm run proto-loader-gen-types -- --grpcLib=@grpc/grpc-js --outDir=proto/ proto/*.proto

mkdir -p ./src/proto
npx grpc_tools_node_protoc -I=. ./proto/*.proto \
  --js_out=import_style=commonjs:./src \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src

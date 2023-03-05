#!/bin/bash
# Generate the client protos for the any serivce proto
# replace CLIENTNAME with the name of the client folder
# replace SERVICEPROTO with the name of the serviceproto you want to generate the client for


# mkdir -p ./src/clientprotos/CLIENTNAME
# protoc --proto_path=./serviceprotos ./serviceprotos/SERVICEPROTO.proto \
#   --js_out=import_style=commonjs:./src/clientprotos/CLIENTNAME \
#   --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/clientprotos/CLIENTNAME


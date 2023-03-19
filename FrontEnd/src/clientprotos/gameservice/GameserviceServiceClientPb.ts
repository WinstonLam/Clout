/**
 * @fileoverview gRPC-Web generated client stub for gameservice
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: gameservice.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as gameservice_pb from './gameservice_pb';


export class LingoGameClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorinitGame = new grpcWeb.MethodDescriptor(
    '/gameservice.LingoGame/initGame',
    grpcWeb.MethodType.UNARY,
    gameservice_pb.GameInitRequest,
    gameservice_pb.GameInitResponse,
    (request: gameservice_pb.GameInitRequest) => {
      return request.serializeBinary();
    },
    gameservice_pb.GameInitResponse.deserializeBinary
  );

  initGame(
    request: gameservice_pb.GameInitRequest,
    metadata: grpcWeb.Metadata | null): Promise<gameservice_pb.GameInitResponse>;

  initGame(
    request: gameservice_pb.GameInitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gameservice_pb.GameInitResponse) => void): grpcWeb.ClientReadableStream<gameservice_pb.GameInitResponse>;

  initGame(
    request: gameservice_pb.GameInitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gameservice_pb.GameInitResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gameservice.LingoGame/initGame',
        request,
        metadata || {},
        this.methodDescriptorinitGame,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gameservice.LingoGame/initGame',
    request,
    metadata || {},
    this.methodDescriptorinitGame);
  }

  methodDescriptorupdateGame = new grpcWeb.MethodDescriptor(
    '/gameservice.LingoGame/updateGame',
    grpcWeb.MethodType.UNARY,
    gameservice_pb.GameUpdateRequest,
    gameservice_pb.GameUpdateResponse,
    (request: gameservice_pb.GameUpdateRequest) => {
      return request.serializeBinary();
    },
    gameservice_pb.GameUpdateResponse.deserializeBinary
  );

  updateGame(
    request: gameservice_pb.GameUpdateRequest,
    metadata: grpcWeb.Metadata | null): Promise<gameservice_pb.GameUpdateResponse>;

  updateGame(
    request: gameservice_pb.GameUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gameservice_pb.GameUpdateResponse) => void): grpcWeb.ClientReadableStream<gameservice_pb.GameUpdateResponse>;

  updateGame(
    request: gameservice_pb.GameUpdateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gameservice_pb.GameUpdateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gameservice.LingoGame/updateGame',
        request,
        metadata || {},
        this.methodDescriptorupdateGame,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gameservice.LingoGame/updateGame',
    request,
    metadata || {},
    this.methodDescriptorupdateGame);
  }

  methodDescriptordeleteGame = new grpcWeb.MethodDescriptor(
    '/gameservice.LingoGame/deleteGame',
    grpcWeb.MethodType.UNARY,
    gameservice_pb.GameDeleteRequest,
    gameservice_pb.GameDeleteResponse,
    (request: gameservice_pb.GameDeleteRequest) => {
      return request.serializeBinary();
    },
    gameservice_pb.GameDeleteResponse.deserializeBinary
  );

  deleteGame(
    request: gameservice_pb.GameDeleteRequest,
    metadata: grpcWeb.Metadata | null): Promise<gameservice_pb.GameDeleteResponse>;

  deleteGame(
    request: gameservice_pb.GameDeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gameservice_pb.GameDeleteResponse) => void): grpcWeb.ClientReadableStream<gameservice_pb.GameDeleteResponse>;

  deleteGame(
    request: gameservice_pb.GameDeleteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gameservice_pb.GameDeleteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gameservice.LingoGame/deleteGame',
        request,
        metadata || {},
        this.methodDescriptordeleteGame,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gameservice.LingoGame/deleteGame',
    request,
    metadata || {},
    this.methodDescriptordeleteGame);
  }

  methodDescriptornextWord = new grpcWeb.MethodDescriptor(
    '/gameservice.LingoGame/nextWord',
    grpcWeb.MethodType.UNARY,
    gameservice_pb.NextWordRequest,
    gameservice_pb.NextWordResponse,
    (request: gameservice_pb.NextWordRequest) => {
      return request.serializeBinary();
    },
    gameservice_pb.NextWordResponse.deserializeBinary
  );

  nextWord(
    request: gameservice_pb.NextWordRequest,
    metadata: grpcWeb.Metadata | null): Promise<gameservice_pb.NextWordResponse>;

  nextWord(
    request: gameservice_pb.NextWordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: gameservice_pb.NextWordResponse) => void): grpcWeb.ClientReadableStream<gameservice_pb.NextWordResponse>;

  nextWord(
    request: gameservice_pb.NextWordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: gameservice_pb.NextWordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/gameservice.LingoGame/nextWord',
        request,
        metadata || {},
        this.methodDescriptornextWord,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/gameservice.LingoGame/nextWord',
    request,
    metadata || {},
    this.methodDescriptornextWord);
  }

}


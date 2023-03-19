import * as jspb from 'google-protobuf'



export class GameInitRequest extends jspb.Message {
  getWordlistId(): number;
  setWordlistId(value: number): GameInitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameInitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameInitRequest): GameInitRequest.AsObject;
  static serializeBinaryToWriter(message: GameInitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameInitRequest;
  static deserializeBinaryFromReader(message: GameInitRequest, reader: jspb.BinaryReader): GameInitRequest;
}

export namespace GameInitRequest {
  export type AsObject = {
    wordlistId: number,
  }
}

export class GameInitResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): GameInitResponse;

  getErrMsg(): string;
  setErrMsg(value: string): GameInitResponse;

  getGameId(): string;
  setGameId(value: string): GameInitResponse;

  getSecretWord(): string;
  setSecretWord(value: string): GameInitResponse;

  getWordDescription(): string;
  setWordDescription(value: string): GameInitResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameInitResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GameInitResponse): GameInitResponse.AsObject;
  static serializeBinaryToWriter(message: GameInitResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameInitResponse;
  static deserializeBinaryFromReader(message: GameInitResponse, reader: jspb.BinaryReader): GameInitResponse;
}

export namespace GameInitResponse {
  export type AsObject = {
    success: boolean,
    errMsg: string,
    gameId: string,
    secretWord: string,
    wordDescription: string,
  }
}

export class GameUpdateRequest extends jspb.Message {
  getGameId(): string;
  setGameId(value: string): GameUpdateRequest;

  getGuess(): string;
  setGuess(value: string): GameUpdateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameUpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameUpdateRequest): GameUpdateRequest.AsObject;
  static serializeBinaryToWriter(message: GameUpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameUpdateRequest;
  static deserializeBinaryFromReader(message: GameUpdateRequest, reader: jspb.BinaryReader): GameUpdateRequest;
}

export namespace GameUpdateRequest {
  export type AsObject = {
    gameId: string,
    guess: string,
  }
}

export class GameUpdateResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): GameUpdateResponse;

  getErrMsg(): string;
  setErrMsg(value: string): GameUpdateResponse;

  getFeedbackMapMap(): jspb.Map<number, string>;
  clearFeedbackMapMap(): GameUpdateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameUpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GameUpdateResponse): GameUpdateResponse.AsObject;
  static serializeBinaryToWriter(message: GameUpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameUpdateResponse;
  static deserializeBinaryFromReader(message: GameUpdateResponse, reader: jspb.BinaryReader): GameUpdateResponse;
}

export namespace GameUpdateResponse {
  export type AsObject = {
    success: boolean,
    errMsg: string,
    feedbackMapMap: Array<[number, string]>,
  }
}

export class GameDeleteRequest extends jspb.Message {
  getGameId(): string;
  setGameId(value: string): GameDeleteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameDeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GameDeleteRequest): GameDeleteRequest.AsObject;
  static serializeBinaryToWriter(message: GameDeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameDeleteRequest;
  static deserializeBinaryFromReader(message: GameDeleteRequest, reader: jspb.BinaryReader): GameDeleteRequest;
}

export namespace GameDeleteRequest {
  export type AsObject = {
    gameId: string,
  }
}

export class GameDeleteResponse extends jspb.Message {
  getSuccess(): number;
  setSuccess(value: number): GameDeleteResponse;

  getErrMsg(): string;
  setErrMsg(value: string): GameDeleteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GameDeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GameDeleteResponse): GameDeleteResponse.AsObject;
  static serializeBinaryToWriter(message: GameDeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GameDeleteResponse;
  static deserializeBinaryFromReader(message: GameDeleteResponse, reader: jspb.BinaryReader): GameDeleteResponse;
}

export namespace GameDeleteResponse {
  export type AsObject = {
    success: number,
    errMsg: string,
  }
}

export class NextWordRequest extends jspb.Message {
  getGameId(): string;
  setGameId(value: string): NextWordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NextWordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NextWordRequest): NextWordRequest.AsObject;
  static serializeBinaryToWriter(message: NextWordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NextWordRequest;
  static deserializeBinaryFromReader(message: NextWordRequest, reader: jspb.BinaryReader): NextWordRequest;
}

export namespace NextWordRequest {
  export type AsObject = {
    gameId: string,
  }
}

export class NextWordResponse extends jspb.Message {
  getSuccess(): number;
  setSuccess(value: number): NextWordResponse;

  getErrMsg(): string;
  setErrMsg(value: string): NextWordResponse;

  getSecretWord(): string;
  setSecretWord(value: string): NextWordResponse;

  getWordDescription(): string;
  setWordDescription(value: string): NextWordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NextWordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NextWordResponse): NextWordResponse.AsObject;
  static serializeBinaryToWriter(message: NextWordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NextWordResponse;
  static deserializeBinaryFromReader(message: NextWordResponse, reader: jspb.BinaryReader): NextWordResponse;
}

export namespace NextWordResponse {
  export type AsObject = {
    success: number,
    errMsg: string,
    secretWord: string,
    wordDescription: string,
  }
}


import * as jspb from 'google-protobuf'



export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class wordlist extends jspb.Message {
  getWordlistname(): string;
  setWordlistname(value: string): wordlist;

  getWordsList(): Array<string>;
  setWordsList(value: Array<string>): wordlist;
  clearWordsList(): wordlist;
  addWords(value: string, index?: number): wordlist;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): wordlist.AsObject;
  static toObject(includeInstance: boolean, msg: wordlist): wordlist.AsObject;
  static serializeBinaryToWriter(message: wordlist, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): wordlist;
  static deserializeBinaryFromReader(message: wordlist, reader: jspb.BinaryReader): wordlist;
}

export namespace wordlist {
  export type AsObject = {
    wordlistname: string,
    wordsList: Array<string>,
  }
}

export class Response extends jspb.Message {
  getStatuscode(): number;
  setStatuscode(value: number): Response;

  getResponsebody(): string;
  setResponsebody(value: string): Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    statuscode: number,
    responsebody: string,
  }
}


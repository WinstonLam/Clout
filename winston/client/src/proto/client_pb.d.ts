/* eslint-disable */
import * as jspb from "google-protobuf";

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(
    message: Empty,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(
    message: Empty,
    reader: jspb.BinaryReader
  ): Empty;
}

export namespace Empty {
  export type AsObject = {};
}

export class wordlist extends jspb.Message {
  getWordlistname(): string;
  setWordlistname(value: string): wordlist;

  getDescription(): string;
  setDescription(value: string): wordlist;

  getWordsList(): Array<word>;
  setWordsList(value: Array<word>): wordlist;
  clearWordsList(): wordlist;
  addWords(value?: word, index?: number): word;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): wordlist.AsObject;
  static toObject(includeInstance: boolean, msg: wordlist): wordlist.AsObject;
  static serializeBinaryToWriter(
    message: wordlist,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): wordlist;
  static deserializeBinaryFromReader(
    message: wordlist,
    reader: jspb.BinaryReader
  ): wordlist;
}

export namespace wordlist {
  export type AsObject = {
    wordlistname: string;
    description: string;
    wordsList: Array<word.AsObject>;
  };
}

export class word extends jspb.Message {
  getWord(): string;
  setWord(value: string): word;

  getDescription(): string;
  setDescription(value: string): word;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): word.AsObject;
  static toObject(includeInstance: boolean, msg: word): word.AsObject;
  static serializeBinaryToWriter(
    message: word,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): word;
  static deserializeBinaryFromReader(
    message: word,
    reader: jspb.BinaryReader
  ): word;
}

export namespace word {
  export type AsObject = {
    word: string;
    description: string;
  };
}

export class Response extends jspb.Message {
  getStatuscode(): number;
  setStatuscode(value: number): Response;

  getResponsebody(): string;
  setResponsebody(value: string): Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static serializeBinaryToWriter(
    message: Response,
    writer: jspb.BinaryWriter
  ): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(
    message: Response,
    reader: jspb.BinaryReader
  ): Response;
}

export namespace Response {
  export type AsObject = {
    statuscode: number;
    responsebody: string;
  };
}

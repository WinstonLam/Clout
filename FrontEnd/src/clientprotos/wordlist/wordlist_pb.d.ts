/* eslint-disable */
import * as jspb from 'google-protobuf';

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {};
}

export class Filter extends jspb.Message {
  getWordlistid(): number;
  setWordlistid(value: number): Filter;

  getFilterList(): Array<Id>;
  setFilterList(value: Array<Id>): Filter;
  clearFilterList(): Filter;
  addFilter(value?: Id, index?: number): Id;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Filter.AsObject;
  static toObject(includeInstance: boolean, msg: Filter): Filter.AsObject;
  static serializeBinaryToWriter(message: Filter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Filter;
  static deserializeBinaryFromReader(message: Filter, reader: jspb.BinaryReader): Filter;
}

export namespace Filter {
  export type AsObject = {
    wordlistid: number;
    filterList: Array<Id.AsObject>;
  };
}

export class Id extends jspb.Message {
  getId(): number;
  setId(value: number): Id;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Id.AsObject;
  static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
  static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Id;
  static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
}

export namespace Id {
  export type AsObject = {
    id: number;
  };
}

export class Wordlists extends jspb.Message {
  getWordlistinfoList(): Array<WordlistInfo>;
  setWordlistinfoList(value: Array<WordlistInfo>): Wordlists;
  clearWordlistinfoList(): Wordlists;
  addWordlistinfo(value?: WordlistInfo, index?: number): WordlistInfo;

  getServerinfo(): Response | undefined;
  setServerinfo(value?: Response): Wordlists;
  hasServerinfo(): boolean;
  clearServerinfo(): Wordlists;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Wordlists.AsObject;
  static toObject(includeInstance: boolean, msg: Wordlists): Wordlists.AsObject;
  static serializeBinaryToWriter(message: Wordlists, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Wordlists;
  static deserializeBinaryFromReader(message: Wordlists, reader: jspb.BinaryReader): Wordlists;
}

export namespace Wordlists {
  export type AsObject = {
    wordlistinfoList: Array<WordlistInfo.AsObject>;
    serverinfo?: Response.AsObject;
  };
}

export class WordlistInfo extends jspb.Message {
  getWordlistname(): string;
  setWordlistname(value: string): WordlistInfo;

  getDescription(): string;
  setDescription(value: string): WordlistInfo;

  getUserid(): number;
  setUserid(value: number): WordlistInfo;

  getWordlistid(): number;
  setWordlistid(value: number): WordlistInfo;

  getWordsList(): Array<Word>;
  setWordsList(value: Array<Word>): WordlistInfo;
  clearWordsList(): WordlistInfo;
  addWords(value?: Word, index?: number): Word;

  getServerinfo(): Response | undefined;
  setServerinfo(value?: Response): WordlistInfo;
  hasServerinfo(): boolean;
  clearServerinfo(): WordlistInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WordlistInfo.AsObject;
  static toObject(includeInstance: boolean, msg: WordlistInfo): WordlistInfo.AsObject;
  static serializeBinaryToWriter(message: WordlistInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WordlistInfo;
  static deserializeBinaryFromReader(message: WordlistInfo, reader: jspb.BinaryReader): WordlistInfo;
}

export namespace WordlistInfo {
  export type AsObject = {
    wordlistname: string;
    description: string;
    userid: number;
    wordlistid: number;
    wordsList: Array<Word.AsObject>;
    serverinfo?: Response.AsObject;
  };
}

export class Word extends jspb.Message {
  getWord(): string;
  setWord(value: string): Word;

  getDescription(): string;
  setDescription(value: string): Word;

  getId(): number;
  setId(value: number): Word;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Word.AsObject;
  static toObject(includeInstance: boolean, msg: Word): Word.AsObject;
  static serializeBinaryToWriter(message: Word, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Word;
  static deserializeBinaryFromReader(message: Word, reader: jspb.BinaryReader): Word;
}

export namespace Word {
  export type AsObject = {
    word: string;
    description: string;
    id: number;
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
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    statuscode: number;
    responsebody: string;
  };
}

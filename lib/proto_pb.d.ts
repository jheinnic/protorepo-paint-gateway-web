export class CancelPaintArtworkTask {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getSeq(): number;
  setSeq(a: number): void;
  toObject(): CancelPaintArtworkTask.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CancelPaintArtworkTask;
}

export namespace CancelPaintArtworkTask {
  export type AsObject = {
    Id: string;
    Seq: number;
  }
}

export class CommandReceived {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getSeq(): number;
  setSeq(a: number): void;
  getType(): string;
  setType(a: string): void;
  getAccepted(): boolean;
  setAccepted(a: boolean): void;
  toObject(): CommandReceived.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CommandReceived;
}

export namespace CommandReceived {
  export type AsObject = {
    Id: string;
    Seq: number;
    Type: string;
    Accepted: boolean;
  }
}

export class CreatePaintArtworkTask {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getSeedprefix(): string;
  setSeedprefix(a: string): void;
  getSeedsuffix(): string;
  setSeedsuffix(a: string): void;
  getNewmodel(): boolean;
  setNewmodel(a: boolean): void;
  getRenderpolicy(): string;
  setRenderpolicy(a: string): void;
  getStagingpolicy(): string;
  setStagingpolicy(a: string): void;
  toObject(): CreatePaintArtworkTask.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreatePaintArtworkTask;
}

export namespace CreatePaintArtworkTask {
  export type AsObject = {
    Id: string;
    Seedprefix: string;
    Seedsuffix: string;
    Newmodel: boolean;
    Renderpolicy: string;
    Stagingpolicy: string;
  }
}

export class InformationUpdate {
  constructor ();
  getMessage(): string;
  setMessage(a: string): void;
  toObject(): InformationUpdate.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => InformationUpdate;
}

export namespace InformationUpdate {
  export type AsObject = {
    Message: string;
  }
}

export class PercentDoneUpdate {
  constructor ();
  getMessage(): string;
  setMessage(a: string): void;
  getPercentdone(): number;
  setPercentdone(a: number): void;
  toObject(): PercentDoneUpdate.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => PercentDoneUpdate;
}

export namespace PercentDoneUpdate {
  export type AsObject = {
    Message: string;
    Percentdone: number;
  }
}

export class RetryableErrorUpdate {
  constructor ();
  getMessage(): string;
  setMessage(a: string): void;
  getRetryin(): number;
  setRetryin(a: number): void;
  toObject(): RetryableErrorUpdate.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => RetryableErrorUpdate;
}

export namespace RetryableErrorUpdate {
  export type AsObject = {
    Message: string;
    Retryin: number;
  }
}

export class UpdatePaintArtworkTask {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getSeq(): number;
  setSeq(a: number): void;
  getUpdatetype(): UpdateType;
  setUpdatetype(a: UpdateType): void;
  getPercentdonebody(): PercentDoneUpdate;
  setPercentdonebody(a: PercentDoneUpdate): void;
  getInformationbody(): InformationUpdate;
  setInformationbody(a: InformationUpdate): void;
  getRetryerrorbody(): RetryableErrorUpdate;
  setRetryerrorbody(a: RetryableErrorUpdate): void;
  toObject(): UpdatePaintArtworkTask.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => UpdatePaintArtworkTask;
}

export namespace UpdatePaintArtworkTask {
  export type AsObject = {
    Id: string;
    Seq: number;
    Updatetype: UpdateType;
    Percentdonebody: PercentDoneUpdate;
    Informationbody: InformationUpdate;
    Retryerrorbody: RetryableErrorUpdate;
  }
}


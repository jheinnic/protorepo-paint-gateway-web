export class ArtworkTaskProgressEvent {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getTaskstate(): TaskStateType;
  setTaskstate(a: TaskStateType): void;
  getPercentpainted(): number;
  setPercentpainted(a: number): void;
  getMessage(): string;
  setMessage(a: string): void;
  toObject(): ArtworkTaskProgressEvent.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ArtworkTaskProgressEvent;
}

export namespace ArtworkTaskProgressEvent {
  export type AsObject = {
    Id: string;
    Taskstate: TaskStateType;
    Percentpainted: number;
    Message: string;
  }
}

export class CancelPaintArtworkTask {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getAutoack(): boolean;
  setAutoack(a: boolean): void;
  toObject(): CancelPaintArtworkTask.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CancelPaintArtworkTask;
}

export namespace CancelPaintArtworkTask {
  export type AsObject = {
    Id: string;
    Autoack: boolean;
  }
}

export class CreatePaintArtworkTask {
  constructor ();
  getSeedprefix(): string;
  setSeedprefix(a: string): void;
  getSeedsuffix(): string;
  setSeedsuffix(a: string): void;
  getNewmodel(): boolean;
  setNewmodel(a: boolean): void;
  getRenderpolicy(): string;
  setRenderpolicy(a: string): void;
  getStoragepolicy(): string;
  setStoragepolicy(a: string): void;
  getAutoack(): boolean;
  setAutoack(a: boolean): void;
  toObject(): CreatePaintArtworkTask.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => CreatePaintArtworkTask;
}

export namespace CreatePaintArtworkTask {
  export type AsObject = {
    Seedprefix: string;
    Seedsuffix: string;
    Newmodel: boolean;
    Renderpolicy: string;
    Storagepolicy: string;
    Autoack: boolean;
  }
}

export class MonitorPaintArtworkTask {
  constructor ();
  getId(): string;
  setId(a: string): void;
  getAutoack(): boolean;
  setAutoack(a: boolean): void;
  toObject(): MonitorPaintArtworkTask.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => MonitorPaintArtworkTask;
}

export namespace MonitorPaintArtworkTask {
  export type AsObject = {
    Id: string;
    Autoack: boolean;
  }
}

export class RequestReceived {
  constructor ();
  getId(): string;
  setId(a: string): void;
  toObject(): RequestReceived.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => RequestReceived;
}

export namespace RequestReceived {
  export type AsObject = {
    Id: string;
  }
}


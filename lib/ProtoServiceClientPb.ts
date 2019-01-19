/**
 * @fileoverview gRPC-Web generated client stub for name.jchein.portfolio.random_art
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';
import {
  CancelPaintArtworkTask,
  CommandReceived,
  CreatePaintArtworkTask,
  InformationUpdate,
  PercentDoneUpdate,
  RetryableErrorUpdate,
  UpdatePaintArtworkTask} from './proto_pb';

export class PaintGatewayClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; }) {
    if (!options) options = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfocreatePaintArtworkTask = new grpcWeb.AbstractClientBase.MethodInfo(
    CommandReceived,
    (request: CreatePaintArtworkTask) => {
      return request.serializeBinary();
    },
    CommandReceived.deserializeBinary
  );

  createPaintArtworkTask(
    request: CreatePaintArtworkTask,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: CommandReceived) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/name.jchein.portfolio.random_art.PaintGateway/createPaintArtworkTask',
      request,
      metadata,
      this.methodInfocreatePaintArtworkTask,
      callback);
  }

  methodInfocancelPaintArtworkTask = new grpcWeb.AbstractClientBase.MethodInfo(
    CommandReceived,
    (request: CancelPaintArtworkTask) => {
      return request.serializeBinary();
    },
    CommandReceived.deserializeBinary
  );

  cancelPaintArtworkTask(
    request: CancelPaintArtworkTask,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: CommandReceived) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/name.jchein.portfolio.random_art.PaintGateway/cancelPaintArtworkTask',
      request,
      metadata,
      this.methodInfocancelPaintArtworkTask,
      callback);
  }

}


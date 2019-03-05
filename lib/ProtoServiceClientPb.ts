/**
 * @fileoverview gRPC-Web generated client stub for name.jchein.portfolio.services.paint.gateway
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


import * as grpcWeb from 'grpc-web';
import {
  ArtworkTaskProgressEvent,
  CancelPaintArtworkTask,
  CreatePaintArtworkTask,
  MonitorPaintArtworkTask,
  RequestReceived} from './proto_pb';

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

  methodInfocreate = new grpcWeb.AbstractClientBase.MethodInfo(
    RequestReceived,
    (request: CreatePaintArtworkTask) => {
      return request.serializeBinary();
    },
    RequestReceived.deserializeBinary
  );

  create(
    request: CreatePaintArtworkTask,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: RequestReceived) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/name.jchein.portfolio.services.paint.gateway.PaintGateway/create',
      request,
      metadata,
      this.methodInfocreate,
      callback);
  }

  methodInfocreateAndMonitor = new grpcWeb.AbstractClientBase.MethodInfo(
    ArtworkTaskProgressEvent,
    (request: CreatePaintArtworkTask) => {
      return request.serializeBinary();
    },
    ArtworkTaskProgressEvent.deserializeBinary
  );

  createAndMonitor(
    request: CreatePaintArtworkTask,
    metadata: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/name.jchein.portfolio.services.paint.gateway.PaintGateway/createAndMonitor',
      request,
      metadata,
      this.methodInfocreateAndMonitor);
  }

  methodInfomonitor = new grpcWeb.AbstractClientBase.MethodInfo(
    ArtworkTaskProgressEvent,
    (request: MonitorPaintArtworkTask) => {
      return request.serializeBinary();
    },
    ArtworkTaskProgressEvent.deserializeBinary
  );

  monitor(
    request: MonitorPaintArtworkTask,
    metadata: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/name.jchein.portfolio.services.paint.gateway.PaintGateway/monitor',
      request,
      metadata,
      this.methodInfomonitor);
  }

  methodInfoacknowledge = new grpcWeb.AbstractClientBase.MethodInfo(
    RequestReceived,
    (request: CancelPaintArtworkTask) => {
      return request.serializeBinary();
    },
    RequestReceived.deserializeBinary
  );

  acknowledge(
    request: CancelPaintArtworkTask,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: RequestReceived) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/name.jchein.portfolio.services.paint.gateway.PaintGateway/acknowledge',
      request,
      metadata,
      this.methodInfoacknowledge,
      callback);
  }

  methodInfocancel = new grpcWeb.AbstractClientBase.MethodInfo(
    RequestReceived,
    (request: CancelPaintArtworkTask) => {
      return request.serializeBinary();
    },
    RequestReceived.deserializeBinary
  );

  cancel(
    request: CancelPaintArtworkTask,
    metadata: grpcWeb.Metadata,
    callback: (err: grpcWeb.Error,
               response: RequestReceived) => void) {
    return this.client_.rpcCall(
      this.hostname_ +
        '/name.jchein.portfolio.services.paint.gateway.PaintGateway/cancel',
      request,
      metadata,
      this.methodInfocancel,
      callback);
  }

}


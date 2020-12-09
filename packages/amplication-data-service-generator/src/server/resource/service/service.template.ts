import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import {
  // @ts-ignore
  CREATE_ARGS,
  // @ts-ignore
  UPDATE_ARGS,
  // @ts-ignore
  DELETE_ARGS,
  // @ts-ignore
  Subset,
} from "@prisma/client";

declare const CREATE_ARGS_MAPPING: CREATE_ARGS;
declare const UPDATE_ARGS_MAPPING: UPDATE_ARGS;

@Injectable()
export class SERVICE {
  constructor(private readonly prisma: PrismaService) {}
  async create<T extends CREATE_ARGS>(args: Subset<T, CREATE_ARGS>) {
    // @ts-ignore
    return await this.prisma.DELEGATE.create<T>(CREATE_ARGS_MAPPING);
  }
  async update<T extends UPDATE_ARGS>(args: Subset<T, UPDATE_ARGS>) {
    // @ts-ignore
    return await this.prisma.DELEGATE.update<T>(UPDATE_ARGS_MAPPING);
  }
  async delete<T extends DELETE_ARGS>(args: Subset<T, DELETE_ARGS>) {
    return await this.prisma.DELEGATE.delete(args);
  }
}

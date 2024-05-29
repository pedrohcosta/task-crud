import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class PrismaRepository<T> {
  constructor(public readonly prisma: PrismaService) {}
  
  async getList(): Promise<T[]> {
    const data = <T[]>(<unknown>this.prisma.task.findMany());
    return data;
  }

  async create(model: T | any): Promise<T> {
    const data: T | any = await this.prisma.task.create({ data: model });
    return data;
  }

  async get(_id: string): Promise<T> {
    const data: T | any = await this.prisma.task.findUnique({
      where: { id: _id },
    });
    return data;
  }

  async update(_id: string, model: T | any): Promise<T> {
    const result: T | any = await this.prisma.task.update({
      where: { id: _id },
      data: { ...model },
    });
    return result;
  }

  async delete(_id: string): Promise<void> {
    await this.prisma.task.delete({ where: { id: _id } });
  }
}

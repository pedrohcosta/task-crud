import { Test, TestingModule } from "@nestjs/testing";
import { PrismaService } from "../../../src/infra/repository/prisma/prisma.service";
import { TaskPrismaRepository } from "../../../src/infra/repository/task/task.prisma.repository";
import { taskEntityRepositoryMock } from '../../__mocks__/task.repository.mock';
import { taskMock } from '../../__mocks__/task.entity.mock';

describe("TaskPrismaRepository", () => {
  
  let repository: TaskPrismaRepository;

  beforeAll(async () => {
    const mockPrismaService = {
      task: {
        findUnique: jest.fn().mockResolvedValue(taskEntityRepositoryMock),
        create: jest.fn().mockResolvedValue(taskEntityRepositoryMock),
        findMany: jest.fn().mockResolvedValue(taskEntityRepositoryMock),
        update: jest.fn().mockResolvedValue(taskEntityRepositoryMock),
        delete: jest.fn().mockResolvedValue(taskEntityRepositoryMock),
      }
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrismaService)
      .compile();
    
    const prisma = module.get(PrismaService);
    repository = new TaskPrismaRepository(prisma);
   
  });
  
  it("should insert repository and return success", async () => {
    const result = await repository.create(taskMock);
    expect(result).toEqual(taskEntityRepositoryMock);
  });

  it("should delete of repository and return success", async () => {
    const result = await repository.delete("");
    expect(result).toBeUndefined();
  });

  it("should find repository and return success", async () => {
    const result = await repository.get("");
    expect(result).toEqual(taskEntityRepositoryMock);
  });

  it("should getList repository and return success", async () => {
    const result = await repository.getList();
    expect(result).toEqual(taskEntityRepositoryMock);
  });

  it("should update repository and return success", async () => {
    const result = await repository.update("", taskMock);
    expect(result).toEqual(taskEntityRepositoryMock);
  });

});

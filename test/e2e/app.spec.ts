import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import { PrismaService } from '../../src/infra/repository/prisma/prisma.service';
import { taskEntityRepositoryMock } from '../__mocks__/task.repository.mock';
import { createTaskRequestDtoMock, updateTaskRequestDtoMock } from '../__mocks__/task.controller.mock';


let app: NestFastifyApplication;

describe('E2E', () => {
  
  beforeEach(() => {
    global.Date.now = jest.fn(() => new Date("2019-04-07T10:20:30Z").getTime());
  });

  beforeAll(async () => {
    
    const mockPrismaService = {
      task: {
        findUnique: jest.fn().mockResolvedValue(taskEntityRepositoryMock),
        create: jest.fn().mockResolvedValue(taskEntityRepositoryMock),
        findMany: jest.fn().mockResolvedValue([taskEntityRepositoryMock]),
        update: jest.fn().mockResolvedValue(taskEntityRepositoryMock),
        delete: jest.fn().mockResolvedValue(taskEntityRepositoryMock),
      }
    };

    
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue(mockPrismaService)
      .compile();

    app = moduleRef.createNestApplication<NestFastifyApplication>(
      new FastifyAdapter(),
    );

    await app.init();
    await app.getHttpAdapter().getInstance().ready();
  });
  

  it(`/POST create`, async () => {
    
    const result = await app.inject({
      method: 'POST',
      url: 'v1/tasks',
      headers: { 'Content-Type': 'application/json' },
      body: createTaskRequestDtoMock
    });
    expect(result.statusCode).toEqual(201);
  });

  it(`/POST update`, async () => {
    
    const result = await app.inject({
      method: 'PUT',
      url: 'v1/tasks/29f7ff2c-18cb-4280-8d1a-8ae98188b2fg',
      headers: { 'Content-Type': 'application/json' },
      body: updateTaskRequestDtoMock
    });
    expect(result.statusCode).toEqual(200);
  });


  it(`/POST delete`, async () => {
    
    const result = await app.inject({
      method: 'DELETE',
      url: 'v1/tasks/29f7ff2c-18cb-4280-8d1a-8ae98188b2fg',
      headers: { 'Content-Type': 'application/json' },
    });
    expect(result.statusCode).toEqual(204);
  });


  it(`/GET get`, async () => {
    
    const result = await app.inject({
      method: 'GET',
      url: 'v1/tasks/29f7ff2c-18cb-4280-8d1a-8ae98188b2fg',
      headers: { 'Content-Type': 'application/json' },
    });
    
    expect(result.statusCode).toEqual(200);
  });

  it(`/GET getList`, async () => {
    
    const result = await app.inject({
      method: 'GET',
      url: 'v1/tasks',
      headers: { 'Content-Type': 'application/json' },
    });
    
    const payload = JSON.parse(result.payload);
    expect(result.statusCode).toEqual(200);
    expect(payload).toHaveProperty('total');
    expect(payload).toHaveProperty('data');
  });

  
});

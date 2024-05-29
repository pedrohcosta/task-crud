import { CreateTaskUseCase } from "../../../src/usecase/task/create-task.usecase";
import { ITaskRepository } from "../../../src/infra/repository/task/interfaces/task.interface.repository";
import { createTaskRequestMock, taskListResultMock, taskResultMock, updateTaskRequestMock } from '../../__mocks__/task.usecase.mock';
import { taskEntityRepositoryMock } from '../../__mocks__/task.repository.mock';
import { DeleteTaskUseCase } from "../../../src/usecase/task/delete-task.usecase";
import { GetTaskUseCase } from "../../../src/usecase/task/get-task.usecase";
import { GetListTaskUseCase } from "../../../src/usecase/task/get-list-task.usecase";
import { UpdateTaskUseCase } from "../../../src/usecase/task/update-task.usecase";
import { TaskEntityRepository } from "../../../src/infra/repository/task/entities/task.entity.repository";

describe("TaskUseCase", () => {

  const mockRepository = {
    create: jest.fn().mockImplementation().mockResolvedValue(taskEntityRepositoryMock),
    get: jest.fn().mockResolvedValue(taskEntityRepositoryMock),
    getList: jest.fn().mockResolvedValue([taskEntityRepositoryMock]),
    update: jest.fn().mockResolvedValue(taskEntityRepositoryMock),
    delete: jest.fn().mockResolvedValue(taskEntityRepositoryMock),

  } as unknown as ITaskRepository;

  describe("CreateTaskUseCase", () => {
  
    const usecase = new CreateTaskUseCase(mockRepository);

    it("should create task use case and return success", async () => {
      const result = await usecase.exec(createTaskRequestMock);
      expect(result).toMatchObject(taskResultMock);
    });

  });

  describe("DeleteTaskUseCase", () => {
  
    const usecase = new DeleteTaskUseCase(mockRepository);

    it("should delete task use case and return success", async () => {
      const result = await usecase.exec("");
      expect(result).toBeUndefined();
    });

  });

  describe("GetTaskUseCase", () => {
  
    const usecase = new GetTaskUseCase(mockRepository);

    it("should get task use case and return success", async () => {
      const result = await usecase.exec("");
      expect(result).toMatchObject(taskResultMock);
    });

  });

  describe("GetListTaskUseCase", () => {
  
    const usecase = new GetListTaskUseCase(mockRepository);

    it("should getList task use case and return success", async () => {
      const result = await usecase.exec();
      expect(result).toMatchObject(taskListResultMock);
    });
    
  });

  describe("UpdateTaskUseCase", () => {
  
    const usecase = new UpdateTaskUseCase(mockRepository);

    jest.spyOn(mockRepository, "get").mockResolvedValue(taskEntityRepositoryMock);

    it("should update task use case and return success", async () => {
      const result = await usecase.exec("", updateTaskRequestMock);
      expect(result).toMatchObject(taskResultMock);
    });

    it("should update task use case and return NotFoundException", async () => {
      
      jest.spyOn(mockRepository, "get").mockResolvedValue(null as unknown as TaskEntityRepository);

      expect(
        async () => await usecase.exec("", updateTaskRequestMock)
      ).rejects.toThrow("Task Not Found!");
    
    });
  
  });

  describe("GetTaskUseCase", () => {
  
    const usecase = new GetTaskUseCase(mockRepository);

    it("should get task use case and return NotFoundException", async () => {
      
      jest.spyOn(mockRepository, "get").mockResolvedValue(null as unknown as TaskEntityRepository);

      expect(
        async () => await usecase.exec("")
      ).rejects.toThrow("Task Not Found!");
    });

  });

  describe("UpdateTaskUseCase", () => {
  
    const usecase = new UpdateTaskUseCase(mockRepository);

    jest.spyOn(mockRepository, "get").mockResolvedValue(taskEntityRepositoryMock);

    it("should update task use case and return NotFoundException", async () => {
      
      jest.spyOn(mockRepository, "get").mockResolvedValue(null as unknown as TaskEntityRepository);

      expect(
        async () => await usecase.exec("", updateTaskRequestMock)
      ).rejects.toThrow("Task Not Found!");
    
    });
  
  });

});

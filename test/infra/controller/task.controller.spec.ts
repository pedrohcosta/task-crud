import { TaskController } from '../../../src/infra/controller/task/task.controller';
import { CreateTaskUseCase } from '../../../src/usecase/task/create-task.usecase';
import { DeleteTaskUseCase } from '../../../src/usecase/task/delete-task.usecase';
import { GetTaskUseCase } from '../../../src/usecase/task/get-task.usecase';
import { GetListTaskUseCase } from '../../../src/usecase/task/get-list-task.usecase';
import { UpdateTaskUseCase } from '../../../src/usecase/task/update-task.usecase';
import { 
  createTaskRequestDtoMock, 
  taskResultDtoMock, 
  taskListResultDtoMock, 
  updateTaskRequestDtoMock,
} from '../../__mocks__/task.controller.mock';

const createTaskUseCase = {
  exec: jest.fn().mockImplementation().mockResolvedValue(taskResultDtoMock),
} as unknown as CreateTaskUseCase;


const deleteTaskUseCase = {
  exec: jest.fn(),
} as unknown as DeleteTaskUseCase;


const getTaskUseCase = {
  exec: jest.fn().mockImplementation().mockResolvedValue(taskResultDtoMock),
} as unknown as GetTaskUseCase;


const getListTaskUseCase = {
  exec: jest.fn().mockImplementation().mockResolvedValue(taskListResultDtoMock),
} as unknown as GetListTaskUseCase;


const updateTaskUseCase = {
  exec: jest.fn().mockImplementation().mockResolvedValue(taskResultDtoMock),
} as unknown as UpdateTaskUseCase;

const controller = new TaskController(createTaskUseCase, deleteTaskUseCase, getTaskUseCase, getListTaskUseCase, updateTaskUseCase);


describe('TaskController', () => {

  describe('create', () => {
    it('should create task', async () => {
      expect(await controller.create(createTaskRequestDtoMock)).toBe(taskResultDtoMock);
    });
  });

  describe('delete', () => {
    it('should delete task', async () => {
      expect(await controller.delete("")).toBeUndefined();
    });
  });

  describe('get', () => {
    it('should get task', async () => {
      expect(await controller.get("")).toBe(taskResultDtoMock);
    });
  });

  describe('getList', () => {
    it('should return list of task', async () => {
      expect(await controller.getList()).toBe(taskListResultDtoMock);
    });
  });

  describe('update', () => {
    it('should return updated task', async () => {
      expect(await controller.update("", updateTaskRequestDtoMock)).toBe(taskResultDtoMock);
    });
  });
  
});

import { NotFoundException } from '@nestjs/common';

export class NotFoundTaskException extends NotFoundException {
  constructor() {
    super('Task Not Found!');
  }
}

import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AdminController {
  constructor(@Inject('PRODUCT_SERVICE') private client: ClientProxy) {}

  @Get()
  getHello(): string {
    this.client.emit('hello', 'Hello world');

    return 'Hello sent';
  }
}

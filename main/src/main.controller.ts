import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class MainController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('hello')
  processHello(data: string) {
    console.log(data);
  }
}

import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  helloAgain() {
    return 'Hello from main';
  }
}

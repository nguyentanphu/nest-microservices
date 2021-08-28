import { Module } from '@nestjs/common';
import { MainController } from './main.controller';
import { AppService } from './app.service';
import { HelloController } from './hello.controller';

@Module({
  imports: [],
  controllers: [MainController, HelloController],
  providers: [AppService],
})
export class AppModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { MainController } from './main.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: MainController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MainController],
      providers: [AppService],
    }).compile();

    appController = app.get<MainController>(MainController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

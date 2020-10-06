import { Test, TestingModule } from '@nestjs/testing';
import { MetodPostController } from "./MetodPostController.1";


describe('MetodPostController', () => {
  let controller: MetodPostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetodPostController],
    }).compile();

    controller = module.get<MetodPostController>(MetodPostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

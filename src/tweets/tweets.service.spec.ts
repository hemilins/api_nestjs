import { TweetSchema } from './entities/tweet.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { TweetsService } from './tweets.service';

describe('TweetsService', () => {
  let service: TweetsService;
  let module: TestingModule;

  beforeEach(async () => {
    const uri =
      'mongodb://root:root@localhost:27017/tweets_test?authSource=admin';

    const module: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(uri),
        MongooseModule.forFeature([{ name: 'Tweet', schema: TweetSchema }]),
      ],
      providers: [TweetsService],
    }).compile();

    service = module.get<TweetsService>(TweetsService);
    module.get('xpto');
  });

  afterEach(async () => {
    await module.close();
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should creat a tweet', () => {
    const tweet = service.create({
      content: 'Hello World',
      screen_name: 'Hemili Naspolini',
    });

    expect(tweet.content).toBe('Hello World');
    expect(tweet.screen_name).toBe('Hemili Naspolini');
  });
});

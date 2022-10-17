/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';
import { Tweet, TweetSchema } from './tweet.entity';
describe('Tweet Tests', () => {
  it('should create a tweet', () => {
    const tweet = new Tweet({
      content: 'Hello World',
      screen_name: 'Hemili',
    });

    expect(tweet.content).toBe('Hello World');
    expect(tweet.screen_name).toBe('Hemili Naspolini');
  });

  describe('Using MongoDB', async () => {
    let conn: mongoose.Mongoose;

    beforeEach(async () => {
      conn = await mongoose.connect(
        'mongodb://root:root@db:27017/tweets_test?authSource=admin',
      );
    });

    afterEach(async () => {
      conn.disconnect();
    });
    //Document = registro no banco
    //Collection = tabela no banco

    it('create a tweet document', async () => {
      const TweetModel = conn.model('Tweet', TweetSchema);
      const tweet = new TweetModel({
        content: 'Hello World',
        screen_name: 'Hemili Naspolini',
      });
      try {
        await tweet.save();

        const tweetCreated = await TweetModel.findById(tweet._id);
        console.log(tweetCreated);
      } catch (e) {
        console.error(e);
      }
    });
  });
});

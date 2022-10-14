/* eslint-disable prettier/prettier */
import { Tweet } from './tweet.entity';
describe('Tweet Tests', () => {
  it('should create a tweet', () => {
    const tweet = new Tweet({
      content: 'Hello World',
      screen_name: 'Hemili',
    });

    expect(tweet.content).toBe('Hello World');
    expect(tweet.screen_name).toBe('Hemili Naspolini');
  });

  //Document = registro no banco
  //Collection = tabela no banco

  it('create a tweet document', () => {});
});

import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaFactory } from '@nestjs/mongoose/dist';
export type TweetsProps = {
  content: string;
  screen_name: string;
};

@Schema()
export class Tweet {
  constructor(props: TweetsProps) {
    Object.assign(this, props);
  }

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  screen_name: string;
}

export const TweetSchema = SchemaFactory.createForClass(Tweet);

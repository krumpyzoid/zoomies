import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  id: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  createdate: Date;

  @Prop()
  updateddate: Date;

  @Prop()
  last_login?: Date;

  @Prop()
  hach_refresh_token: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

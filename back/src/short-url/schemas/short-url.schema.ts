import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ShortUrlDocument = HydratedDocument<ShortUrl>;

@Schema()
export class ShortUrl {
    @Prop({ required: true })
    hash: string;

    @Prop({ required: true })
    original: string;
}

export const ShortUrlSchema = SchemaFactory.createForClass(ShortUrl);
import { Schema, Document, Model } from 'mongoose';

interface IHero extends Document {
  id?: string;
  name: String;
}




export default mongoose.model<IVideoModel>('Video', VideoSchema);

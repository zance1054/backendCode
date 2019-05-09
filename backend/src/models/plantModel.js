import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/*
 creates a new schema to use for modeling new plants
 to be added into the plants collection
*/
export const plantSchema = new Schema({
  plantName:
  {
    type: String,
    required: 'Enter the common name'
  },
  imageFileName:
  {
    type: String,
    required: 'Enter the image file name for the plant'
  },
  imageFile:
  {
    data: Buffer,
    contentType: String,
  },
  plantDescription:
  {
    type: String,
    required: 'Enter the description for the plant'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

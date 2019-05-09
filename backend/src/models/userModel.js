import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/*
 creates a new schema to use for modeling new users
 to be added into the users collection
*/
export const userSchema = new Schema({
  firstName:
  {
    type: String,
    required: 'Enter a first name'
  },
  lastName:
  {
    type: String,
    required: 'Enter a last name'
  },
  email:
  {
    type: String,
    required: 'Enter a valid email'
  },
  password:
  {
    type: String,
    required: 'Enter password'
  },
  aboutme:
  {
    type: String,
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

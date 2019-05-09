import mongoose from 'mongoose';
import {userSchema} from '../models/userModel';

const User = mongoose.model('User',userSchema);

//sends a POST reuest to the server to add a new user
export const addNewUser = (req,res) =>
{
  let newUser = new User(req.body);

  newUser.save((err, user) => {
    if (err)
    {
      res.send(err);
    }
    res.json(user);
  });
};

//sends a GET reuest to the server to return all users from the collection
export const getUsers = (req,res) => {
  User.find({},(err,user) => {
    if (err)
    {
      res.send(err);
    }
    res.json(user);
  });
};

//sends a GET request to find a user by specific ID
export const getUserID = (req,res) =>{
  User.findById(req.params.userID,(err,user) => {
    if (err)
    {
      res.send(err);
    }
    res.json(user);
  });
};

//sends a PUT request to update a specfic user bay ID
export const updateUser = (req,res) =>{
  User.findOneAndUpdate({_id:req.params.userID}, req.body, { new: true}, (err,user) =>
  {
    if (err)
    {
      res.send(err);
    }
    res.json(user);
  });
};
// sends a DELETE request to remove a user by ID
export const deleteUser = (req,res) =>{
  User.deleteOne({_id: req.params.userID}, (err) => {
    if (err)
    {
      res.send(err);
    }
    res.json({message: 'User Deleted'});
  });
};

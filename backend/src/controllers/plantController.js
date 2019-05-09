import mongoose from 'mongoose';
import {plantSchema} from '../models/plantModel';

//register the model in the database, or load if already exists
const Plant = mongoose.model('Plant',plantSchema);

// sends a post request to add a new plant, or throws an error
export const addNewPlant = (req,res) =>
{
  let newPlant = new Plant(req.body);

  newPlant.save((err, plant) => {
    if (err)
    {
      res.send(err);
    }
    res.json(plant);
  });
};

// sends a GET request for all plants that exist in the plants collection
export const getPlants = (req,res) => {
  Plant.find({},(err,plant) => {
    if (err)
    {
      res.send(err);
    }
    res.json(plant);
  });
};

// sends a GET request for a specific plant based on ID
export const getPlantID = (req,res) =>{
  Plant.findById(req.params.plantID,(err,plant) => {
    if (err)
    {
      res.send(err);
    }
    res.json(plant);
  });
};

// sends a PUT request to update a plant in the plants collection based on ID
export const updatePlant = (req,res) =>{
  Plant.findOneAndUpdate({_id:req.params.plantID}, req.body, { new: true}, (err,plant) =>
  {
    if (err)
    {
      res.send(err);
    }
    res.json(plant);
  });
};

// sends a DELETE request to remove a plant from the collection based upon id
export const deletePlant = (req,res) =>{
  Plant.deleteOne({_id: req.params.plantID}, (err) => {
    if (err)
    {
      res.send(err);
    }
    res.json({message: 'Plant Deleted'});
  });
};

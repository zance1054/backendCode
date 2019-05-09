import {
  addNewUser,
  getUsers,
  getUserID,
  updateUser,
  deleteUser,
  } from '../controllers/userController';

import {
  addNewPlant,
  getPlants,
  getPlantID,
  updatePlant,
  deletePlant,
  } from '../controllers/plantController';


const routes = (app) => {
  app.route('/user')
  .get((req,res,next) =>
  {
    // this is middleware
    console.log(`Request from : ${req.originalUrl}`)
    console.log(`Request type : ${req.method}`)
    next(); //exits middleware to the next funxction
  }, getUsers)

  //POST endpoint
  .post(addNewUser);

  app.route('/plant')
  .get((req,res,next) =>
  {
    // this is middleware
    console.log(`Request from : ${req.originalUrl}`)
    console.log(`Request type : ${req.method}`)
    next(); //exits middleware to the next funxction
  }, getPlants)

  //POST endpoint
  .post(addNewPlant);


  app.route('/user/:userID')
  //get by id
  .get(getUserID)
  // put request
  .put(updateUser)

  .delete(deleteUser);


  app.route('/plant/:plantID')
  //get by id
  .get(getPlantID)
  // put request
  .put(updatePlant)

  .delete(deletePlant);

}

export default routes;

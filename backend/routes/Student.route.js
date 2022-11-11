let mongoose = require("mongoose");
let express = require("express");
let router = express.Router();

let studentSchema = require("../models/Student"); //creacion de objeto de Modelo "Student

//Ruta para crear un Student
router.route("/create-student").post((req, res, next) => {
  studentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  }); //datos de la peticion
});
//Ruta para leer Student
router.route("/").get((req, res, next) => {
  studentSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//Ruta para obtener un solo estudiante
router.route("/edit-student/:id").get((req, res, next) => {
  studentSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

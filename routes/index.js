var express = require('express');
var router = express.Router();
var ZooAnimal = require('../models/zooanimals');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//test...
router.get('/createTest', (req, res)=>{

  celebrityData = {
    animal_ID: 23,
    animal_type: "Lion",
    animal_description: "Large and ferocious",
  };

  ZooAnimal.create(zooanimalData, (error, results)=>{
    if(error){
      return console.log(error)
    }
    else{
      return console.log(results);
    }
  });

  res.send("This is a test URL")
});

//will add an animal
router.get('/zoowebapi/:animal/:add/:animal_ID/:animal_type/:animal_description', (req, res)=>{

  zooanimalData = {
    animal_id: parseInt(req.params.animal_ID),
    animal_type: req.params.animal_type,
    animal_description: req.params.animal_description,
  };

  ZooAnimal.create(zooanimalData, (error, results)=>{
    if(error){
      return console.log(error)
    }
    else{
      return console.log(results);
    }
  });

  res.send("This is a test URL")
});

//will delete animal
router.get('/zoowebapi/:animal/:del/:animal_ID', (req, res)=>{
  ZooAnimal.deleteOne({animal_ID: parseInt(req.params.animal_ID)}, (error)=>{
    if(error) return console.log(error)
  });
  res.send("Delete By ID");
});

//will get an animal by id and return the JSON retrieved
router.get('/zoowebapi/:animal/:get/:animal_ID', (req, res)=>{
  ZooAnimal.find({animal_ID: req.params.animal_ID}, (error, results)=>{
    if (error) res.send(error);
    else res.send(results);
  });
});

//will update the TYPE and DESCRIPTION of the animal with the provided ID
// and return the updated JSON
router.get('/zoowebapi/:animal/:update/:animal_ID/:animal_type/:animal_description', (req, res)=>{
  ZooAnimal.findbyID({animal_ID: req.params.animal_ID}, (error, results)=>{
    if (error) res.send(error);
    else res.send(results);
  });


});




module.exports = router;
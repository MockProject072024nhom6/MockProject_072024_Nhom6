var Training = require('./training');
const dboperations = require('./dboperations');


var  express = require('express');
var  bodyParser = require('body-parser');
var  cors = require('cors');
var  app = express();
var  router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
    console.log('middleware');
    next();
  });

  // router.route('/training').get((request, response) => {
  //   dboperations.getTrainings().then((result) => {
  //     response.json(result[0]);
  //   })
  // })

  // router.route('/training/:training_id').get((request, response) => {
  //   dboperations.getTraining(request.params.training_id).then((result) => {
  //     response.json(result[0]);
  //   })
  // })

  // router.route('/training').post((request, response) => { 

  //   let training = {...request.body}

  //   dboperations.addTraining(trainingraining).then((result) => {
  //     response.status(500).json(result);
  //   })
  // })

  router.route('/training').get((request, response) => {
    dboperations.getTrainings().then((result) => {
        if (result && result.length > 0) {
            response.json(result[0]);
        } else {
            response.status(404).send('No training data found');
        }
    }).catch(error => {
        console.error(error);
        response.status(500).send('Error retrieving trainings');
    });
});

router.route('/training/:training_id').get((request, response) => {
    dboperations.getTraining(request.params.training_id).then((result) => {
        if (result && result.length > 0) {
            response.json(result[0]);
        } else {
            response.status(404).send('Training not found');
        }
    }).catch(error => {
        console.error(error);
        response.status(500).send('Error retrieving training');
    });
});

router.route('/training').post((request, response) => {
    let training = { ...request.body };

    dboperations.addTraining(training).then((result) => {
        if (result && result.length > 0) {
            response.status(201).json(result[0]);
        } else {
            response.status(500).send('Error adding training');
        }
    }).catch(error => {
        console.error(error);
        response.status(500).send('Error adding training');
    });
});

router.route('/training/:training_id').delete((request, response) => {
  dboperations.deleteTraining(request.params.training_id).then((result) => {
      if (result > 0) {  // Kiểm tra nếu có bản ghi bị xóa
          response.status(200).send('Training deleted successfully');
      } else {
          response.status(404).send('Training not found');
      }
  }).catch(error => {
      console.error(error);
      response.status(500).send('Error deleting training');
  });
});

router.route('/training/:training_id').put((request, response) => {
    let training = { ...request.body };
    training.training_id = request.params.training_id;

    dboperations.updateTraining(training).then((result) => {
        if (result > 0) {  // Kiểm tra nếu có bản ghi bị cập nhật
            response.status(200).send('Training updated successfully');
        } else {
            response.status(404).send('Training not found');
        }
    }).catch(error => {
        console.error(error);
        response.status(500).send('Error updating training');
    });
});



var  port = process.env.PORT || 8090;
app.listen(port);
console.log('Training API is runnning at ' + port);

dboperations.getTrainings().then( result =>{
    console.log(result);
})
const express = require('express');

const router = express.Router();

const stuffCtrl = require('../controllers/stuff')

router.post('/', stuffCtrl.CreateThing);



  router.get('/', stuffCtrl.getAllStuff);

  router.get('/:id', stuffCtrl.getOneThing);

  router.put('/:id', stuffCtrl.modifyThing);

  router.delete('/:id', stuffCtrl.deleteThing );

module.exports = router;
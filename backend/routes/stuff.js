const express = require('express');

const auth = require('../midleware/auth')

const router = express.Router();

const stuffCtrl = require('../controllers/stuff')

router.post('/', auth, stuffCtrl.CreateThing);



  router.get('/', auth, stuffCtrl.getAllStuff);

  router.get('/:id', auth, stuffCtrl.getOneThing);

  router.put('/:id', auth, stuffCtrl.modifyThing);

  router.delete('/:id', auth, stuffCtrl.deleteThing );

module.exports = router;
const express = require('express');
const router = express.Router();




var auth = require('../controller/Admin_C');



// router.get('/test', (req, res) => res.send('book route testing!'));


router.post('/Insert',auth.Insert);

// router.post('/Search',auth.Search );
// router.get('/show',auth.Show);



module.exports = router;
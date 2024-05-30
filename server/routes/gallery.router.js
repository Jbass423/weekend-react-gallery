const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/likes/:id', (req, res) => {
  const [id] = req.params.id

  const queryText = `
   UPDATE "gallery"
   SET "likes" = "likes" + 1 
   WHERE "id" = $1;
   `
  
   pool.query(queryText, [id])
   .then((response)=>{
    
    console.log(response);
    res.sendStatus(200)
  })
    .catch((error)=>{
      console.error("error in put", error )
      res.sendStatus(500)
    })

});

// GET /gallery
router.get('/', (req, res) => {
  const queryText = `
  SELECT  * FROM "gallery"
  `

  pool.query(queryText)
  .then((response)=>{
    console.log("response from get router", response.rows)
    res.send(response.rows)

  })
  . catch((error)=>{
    console.error("error in get router", error )
  })
});

module.exports = router;

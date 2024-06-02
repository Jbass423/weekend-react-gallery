const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');





// PUT /gallery/like/:id
router.put('/likes/:id', (req, res) => {
  const id = req.params.id;
  
  

  const queryText = `
   UPDATE "gallery"
   SET "likes" = "likes" + 1 
   WHERE "id" = $1;
   `;
  
   pool.query(queryText, [id])
   .then((result)=>{
    
    console.log(result);
    res.sendStatus(200);
  })
    .catch((error)=>{
      console.error("error in put", error );
      res.sendStatus(500);
    });
});

// GET /gallery
router.get('/', (req, res) => {
  const queryText = `
  SELECT  * FROM "gallery";
  `;

  pool.query(queryText)
  .then((response)=>{
    console.log("response from get router", response.rows)
    res.send(response.rows)

  })
  . catch((error)=>{
    console.error("error in get router", error )
  })
});


router.post('/',(req , res) => {
  const { url, title, description } = req.body;
 let queryText=`
  INSERT INTO "gallery" 
("url", "title", "description")
VALUES ($1, $2, $3);
  `;

  pool.query(queryText , [url, title, description])
    .then((result)=>{
      console.log("result in router get ", result);
      
     res.sendStatus(200)

    })
    .catch((error)=>{
      console.error("failed in get router", error )
      res.sendStatus(500)
    })
})

router.delete('/:id', (req, res) => {

  let reqId = [req.params.id]

  let queryText = `DELETE FROM "gallery" WHERE "id" = $1;`

  pool.query(queryText, reqId)
  .then((result) => {
      console.log("remove successful!!!");
      res.sendStatus(200)
  })
  .catch((err) => {
      console.log("error in router Delete", err);
      res.sendStatus(500)

  })
 
});

module.exports = router;

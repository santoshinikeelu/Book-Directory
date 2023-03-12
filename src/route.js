const express = require("express");
const DB = require("./config");
const router = express.Router();

/***************************************create Book**************************/
router.post("/books", (req, res) => {
  const data = req.body;
//   let findbook = DB.query(
//     "select * from BookCollection where BookName = ?",
//     data.BookName
//   );
//   console.log(findbook);
//   DB.query(findbook,(error,result)=>{
//     if( error) throw error
//  res.send("This  Book is already present in Our Directory");
//   })
   
  
  DB.query("INSERT INTO BookCollection SET?", data, (error, results) => {
    
    if (error) throw error;
    res.send(results);
  });
});

/*****************************getbooks***************************************/
router.get("/books", (req, resp) => {
  DB.query("select * from Bookcollection order by BookName", (err, result) => {
    if (err) {
      resp.send("error in api");
    } else {
      resp.send(result);
    }
  });
});

/*************************update books**************************************/
router.put("/books/:BookName", (req, res) => {
  const data = [req.body.BookName, req.body.author, req.params.BookName];
  DB.query(
    "UPDATE BookCollection SET BookName=?, author = ? WHERE BookName = ?",
    data,
    (error, results) => {
      if (error) throw error;
      res.send(results);
    }
  );
});

/***********************************delete books****************************/
router.delete("/books/:id", (req, res) => {
  const data = req.params.id;
  DB.query(
    "DELETE FROM BookCollection WHERE id = ?",
    data,
    (error, results) => {
      if (error) throw error;
      res.send(results);
    }
  );
});
/****************************search book*****************************/
router.get("/books/:BookName", (req, resp) => {
  const data = req.params.BookName;
  console.log(data);
  DB.query(
    "select * from Bookcollection where BookName=?",
    data,
    (err, result) => {
      if (err) {
        resp.send("error in api");
      } else {
        resp.send(result);
      }
    }
  );
});

module.exports = router;

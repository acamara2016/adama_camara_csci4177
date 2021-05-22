
var express = require('express');
var router = express.Router();
var uuid = require('react-uuid');
var con = require('../db/connection')

/* GET home page. */
router.get('/clients', function(req, res, next) {
  const sql = "Select * from Client";
  con.query(sql, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});
router.get('/parts', function(req, res, next) {
  const sql = "Select * from Part";
  con.query(sql, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});
router.get('/parts/:id', function(req, res, next) {
  const { id } = req.params;
  const sql = 'Select * from Part WHERE partNo = "'+id+'"';
  con.query(sql, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});
router.get('/lines/:id', function(req, res, next) {
  const { id } = req.params;
  const sql = 'Select * from LINE WHERE poNo = "'+id+'"';
  con.query(sql, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});
router.get('/pos/processed', function(req, res, next) {
  const sql1 = "Select * from `Purchase Order` where status='Processed'";
  con.query(sql1, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});

router.get('/pos/pending', function(req, res, next) {
  const sql2 = "Select * from `Purchase Order` where status='Pending'"
  con.query(sql2, function(err, result){
    if (err) throw err;
    res.json(result);
  });
});
router.get('/pos', function(req, res, next) {
  const sql2 = "Select * from `Purchase Order`"
  con.query(sql2, function(err, result){
    if (err) throw err;
    res.json(result);
  });
});


router.get('/pos/:id', function(req, res, next) {
  const { id } = req.params;
  const sql = 'Select * from `Purchase Order` where poNo= "'+id+'"';
  con.query(sql, function(err, result){
      if (err) throw err;
      console.log("Fetching all pos")
      res.json(result);
  });
});

router.get('/clients/:id', function(req, res, next) {
  const { id } = req.params;
  const sql = 'Select * from `Client` where clientCompId= "'+id+'"';
  con.query(sql, function(err, result){
      if (err) throw err;
      res.json(result);
  });
});

router.post('/addClient', function(req, res, next){
  const sql = 'INSERT INTO `Client` (`clientCompName`, `clientCity`, `clientCompPassword`, `moneyOwed`) VALUES ('+req.body.name+', '+req.body.city+', '+req.body.password+', '+req.body.owed+');'
  con.query(sql, function(err, result){
    if (err) throw err;
    res.json(result);
  });
})

router.get('/process/:id', function(req, res, next){
  const { id } = req.params;
  var clientCompId = ""+req.body.clientCompId
  const sql = "UPDATE `Purchase Order` SET `status` = 'Processed' WHERE `Purchase Order`.`poNo` = '"+id+"' AND `Purchase Order`.`clientCompId` = '4f55164152274ab58a69'"
  console.log(sql)
  con.query(sql, function(err, result){
    if (err) throw err;
    console.log("Adding a part")
    res.json(result);
  });
})
router.get('/return/:id', function(req, res, next){
  const { id } = req.params;
  const sql = "UPDATE `Purchase Order` SET `status` = 'Pending' WHERE `Purchase Order`.`poNo` = '"+id+"' AND `Purchase Order`.`clientCompId` = '4f55164152274ab58a69'"
  con.query(sql, function(err, result){
    if (err) throw err;
    console.log("Adding a part")
    res.json(result);
  });
})
//UPDATE `Purchase Order` SET `status` = 'Processed' WHERE `Purchase Order`.`poNo` = '1e077431b966404795' AND `Purchase Order`.`clientCompId` = '4f55164152274ab58a69'

router.post('/login', function(req, res, next){
  const sql = 'SELECT `clientCompId`, `clientCompFName`, `clientCompLName`, `clientCity`, `clientCompPassword`, `moneyOwed` FROM `Client` WHERE '+req.body.login_id+''
  con.query(sql, function(err, result){
    if (err) throw err;
    result.map((user)=>{
      console.log(user.clientCompPassword)
      if(user.clientCompPassword === req.body.password){
        console.log('Password macthing')
        res.json({
          user
        })
      }
      res.json({
        user
      })
    })
    
   // res.json(result);
  });
})

 router.post('/newPart', function(req, res, next){
  var partNo = ""+req.body.partNo
  var description = ""+req.body.part_description
  var name = req.body.part_name
  var price = req.body.part_current_price
  var qty = req.body.part_qty
  const sql = `insert into Part (partNo, partDescription, partName, currentPrice, part_QOH) VALUES ('${(uuid()).slice(0,9)}','${description}','${name}','${price}','${qty}')`
  con.query(sql, function(err, result){
    if (err) throw err;
    console.log("Adding a part")
    res.json(result);
  });
})
//update `Purchase Order` SET `poPrice` = (Select sum(LINE_PRICE) from LINE where poNo = '22340cd51b5f4683840') WHERE poNo='22340cd51b5f4683840'

module.exports = router;

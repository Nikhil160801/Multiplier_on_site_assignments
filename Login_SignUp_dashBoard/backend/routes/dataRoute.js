const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

router.post('/signupdetails', async (req, res) => {
  // const { data,xdata,ydata } = req.body;
  const details = req.body;
  try {
    const newData = new Data(details);
    // const newData = new Data({data,xdata,ydata});
    await newData.save();
    res.status(201).json({ message: 'Data saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save data' });
  }
});


router.post('/login', async (req, res) => {
   const body=req.body;
  //  const {mail,password}=body;
  const user=await Data.findOne({
    email:req.body.email,
    password:req.body.password
  })

  if(user){
    console.log("user exist");
    res.status(201).json({ message: "user exist" });
  }else{
    console.log("user does not exist");
    res.status(500).json({ message: "user does not exist" });
  }

});

module.exports = router;

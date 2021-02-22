
const express=require('express')
const router=express.Router()
const user=require('../../models/user')

router.post("/create", async(req, res) => {

    const data=await user.create({
      name:req.body.name,
      bio:req.body.bio
    })
    console.log(data.toJSON());
    if(data){
      res.send("done!!")
    }
    else{
      res.send("unsuccessful")
    }
  });
  
  router.post("/update", async(req, res) => {
    
    const data=await user.update({
      name:req.body.name,
      bio:req.body.bio
    },{
      where:{
        name:req.body.changeName
      }
    })
    // console.log(data.toJSON());
    if(data){
      console.log(data)
      res.send("updated successfully!!")
    }
    else{
      res.send("something went wrong!")
    }
  });
  
  
  router.post("/delete", async(req, res) => {
    
    const data=await user.destroy({
      where:{
        name:req.body.name
      }
    });
    // console.log(data.toJSON());
    if(data){
      console.log(data)
      res.send("user removed successfully!!")
    }
    else{
      res.send("something went wrong!")
    }
  });
  
  router.post("/viewAllUsers", async(req, res) => {
    const users=await user.findAll();
    
    if(users){
      console.log(users.every((userr)=> userr instanceof user))//true
      console.log("All users:", JSON.stringify(users, null, 2));
      res.send( JSON.stringify(users, null, 2))
    }
    else{
      res.send("something went wrong!")
    }
  });
  
  router.post("/search", async(req, res) => {
    const users=await user.findAll({
      where:{
        name:req.body.name
        
      }
    });
    
    if(users){
     
      console.log(users.every((userr)=> userr instanceof user))//true
     console.log("user:", JSON.stringify(users, null, 2));
     res.send( JSON.stringify(users, null, 2))
     }
    else{
      res.send("something went wrong!")
    }
  });

  module.exports=router
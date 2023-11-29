const express=require("express");
const app = express();
const router=express.Router();
const userController = require('../Controller/userController');
const userdatacontrol = require('../Controller/datacontrol')

app.use('/user/register',userController.register);
app.use('/user/delete',userdatacontrol.deletedata);
app.use('/user/update',userdatacontrol.updatedata);
app.use('/user/getdata',userdatacontrol.getdata);

app.use("",router)   
module.exports=app;



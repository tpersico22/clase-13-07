let path = require('path');

let adminController ={
    index: (req,res)=> {
        userQuery = req.query.user;
        res.send("Hola admin: "+ userQuery);
    }

}

module.exports = adminController;
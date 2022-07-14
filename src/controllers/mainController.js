let path = require('path');

let homeController ={
    index: (req,res)=> {
        res.render(path.resolve(__dirname,"../views/index"))
    }

}

module.exports = homeController;
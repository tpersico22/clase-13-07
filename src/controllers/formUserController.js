let path = require('path');

let formUserController ={
    index: (req,res)=> {
        res.render(path.resolve(__dirname,"../views/formUser"), { mensaje : mensaje });
    },
    process: (req,res)=>{

        let mensaje = {
            nombreUsuario: req.body.usuario,
            colorSeleccionado: req.body.colores,
            emailUsuario: req.body.email,
            edadUsuario: req.body.edad
        }

        console.log(mensaje)

        res.render(path.resolve(__dirname, "../views/formUser.ejs"), { mensaje : mensaje });
	},

}



module.exports = formUserController;
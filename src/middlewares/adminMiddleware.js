
/*
function verificateAdmin (req, res, next) {
    let usersAdmin = ["Ada", "Greta", "Vim", "Tim"]
    let userLog = req.query.user;
    const adminUsersLowerCase = usersAdmin.map((user)=>user.toLowerCase())

    if(adminUsersLowerCase.includes(userLog.toLowerCase())){
        next();
    } else {
        res.send("No tienes los privilegios para ingresar");
    }



   userLog = req.query.user;

    for(i = 0; i < usersAdmin.length; i++){
        if(userLog == usersAdmin[i]) {
            next();
        } else {
            res.send("No tienes los privilegios para ingresar");
        }
    } 
  
}

module.exports = verificateAdmin;

*/
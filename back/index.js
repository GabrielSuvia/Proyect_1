const app = require("./src/server.js");
const dbCon = require("./src/config/dbCon")

dbCon().then(
(res) =>{
    app.listen(3000, ()=>{
        console.log("server listening on port 3000...");
    })});



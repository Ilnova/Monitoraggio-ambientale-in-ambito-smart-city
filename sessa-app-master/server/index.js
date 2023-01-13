const express = require('express');
const mysql = require("mysql2")
const cors = require('cors')
const app = express();

const db= mysql.createPool({
    host: "localhost",
    user: "root",
    password: "G2000Sinf.",
    database:"meshliumdb" 
});

const  PORT = 5000;
app.use(cors());
app.use(express.json())
//app.use(bodyparser.urlencoded({extended:true}))

// Route to get all posts
app.get("/getData", (req,res)=>{
  const  sqlGet= "SELECT * FROM sensorparser";
    db.query(sqlGet, (err,result)=>{
        if(err) {
        console.log(err)
    } 

res.send(result)
}
    );   
});




app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})
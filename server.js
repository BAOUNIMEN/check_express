const express = require('express')
const app = express()
const PORT = 5000;


// GET method 

app.use(function (req, res, next) {
    const date = new Date();
    const hours = date.getHours();
    const day = date.getDay()
    if(hours >9 && hours <18 && day<6 && day>1){
        next();
    }else{
        res.send("This website  work from Monday to Friday 9am to 5pm")
    }
});

app.use(express.static('test'))




app.listen(PORT,err=>err? console.log(err):console.log(`Server is running on port ${PORT}`))
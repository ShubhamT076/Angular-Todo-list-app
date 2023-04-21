const express = require('express');
const app = express(); 

app.get('/getData',(req,res)=>{
res.json({
    "statuscode" : 200,
    "statusmessage" : "SUCCESS"
})
})


app.listen(3000,(req,res) =>
{
    console.log('Express API is running at port 3000');
}
)
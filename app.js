var express=require("express");
// var mongoose=require('mongoose');

var bodyparser=require('body-parser');
    var app=express();

// mongoose.connect("mangodb://localhost:27017/todolistDB");

// const itemSchema={
//     name:String
// }

// const Item=mongoose.model("Item",itemSchema);

// const item1=new Item
 
app.use(bodyparser.urlencoded({extended:true}));    
app.set('view engine','ejs');
app.use(express.static('public'));


var i1=[];
app.get('/',(req,res)=>{
    res.render('partials',{i1});
})

app.post('/',(req,res)=>{
     var i=req.body.n;
     console.log(i);
     i1.push(i);
     res.redirect('/');
})

app.listen(8000,function()
{
    console.log("listening");
})
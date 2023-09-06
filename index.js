import bodyParser from "body-parser";
import express from "express";

const app=express();
const port=3000;
var task=[] ;
var worktask=[] ;
var completedTasks=[];
var length1,length2;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>
{
    length1=task.length;
    res.render("index.ejs",{
        list:task,
        taskdone:length1
    }); 
});
app.post("/submit",(req,res)=>
{
    if(req.body.name.trim() !== "")
    {
        task.push(req.body.name);
    }
    length1=task.length;
    
    res.render("index.ejs",{
        list:task,
        taskdone:length1
    }); 
});
app.get("/work",(req,res)=>
{
    length2=worktask.length;
    res.render("work.ejs",{
        list:worktask,
        taskdone:length2
    });

});
app.post("/submitwork",(req,res)=>
{
    if(req.body.name.trim() !== " ")
    {
        worktask.push(req.body.name);
    }
    length2=worktask.length;
    res.render("work.ejs",{
        list:worktask,
        taskdone:length2
    }); 
});



app.listen(port,()=>
{
    console.log(`listening on port ${port}`);
});
const express = require('express');

const app =  express();

app.use(express.json());

require("./Connection");

const Student = require('./models/Student');

const cors = require('cors');
app.use(cors());

app.post("/student", async (req,res)=> {
    try{
        const student= new Student(req.body);
        const createStudent = await student.save();
        res.status(201).send(createStudent);
    }
    catch(e)
    {
        console.log(e);
        res.status(400).send(e);
    }
});

app.get("/student", async (req,res)=> {
    try{
        const students = await Student.find();
        res.send(students); 
    }
    catch(e)
    {
        console.log(e);
        res.status(400).send(e);
    }
});

app.put("/student/:id", async ( req,res)=>{
    try{
        const _id=req.params.id;
        const student = await Student.findByIdAndUpdate(_id, req.body,{
            new: true,
        });
        res.send(student);
    }
    catch (e)
    {
        console.log(e);
        res.status(400).send(e);
    }
});

app.delete("/student/:id", async ( req,res)=>{
    try{
        const _id=req.params.id;
        const student = await Student.findByIdAndDelete(_id, req.body,{
            new: true,
        });
        res.send(student);
    }
    catch (e)
    {
        console.log(e);
        res.status(400).send(e);
    }
});

app.listen(3002,()=>{
    console.log("Server is running on port 3002");
});

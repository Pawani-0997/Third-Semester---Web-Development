const express = require('express');

const app = express();

// Middleware to read JSON data
app.use(express.json());

// Existing student data
let students = [
    {
        id: 1,
        name: "Rahul",
        branch: "CSE"
    },
    {
        id: 2,
        name: "Aman",
        branch: "IT"
    }
];

// Home route
app.get('/', (req, res) => {
    res.send("Student API is running");
});

// GET - Get all students
app.get('/students', (req, res) => {
    res.json(students);
});

// POST - Add a new student
app.post('/students', (req, res) => {

    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        branch: req.body.branch
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student added successfully",
        student: newStudent
    });
});

// PUT - Update student by ID
app.put('/students/:id', (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student.name = req.body.name;
    student.branch = req.body.branch;

    res.json({
        message: "Student updated successfully",
        student: student
    });
});

// DELETE - Delete student by ID
app.delete('/students/:id', (req, res) => {

    const id = Number(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students = students.filter(s => s.id !== id);

    res.json({
        message: "Student deleted successfully",
        student: student
    });
});

// Start Server
app.listen(3005, () => {
    console.log("Server running at http://localhost:3005");
});
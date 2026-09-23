const express = require('express'); // 1. Fixed 'request' to 'require'
const app = express();

let students = [
  {id: 1, name: 'Pawani', branch: 'CSE', age: 22}, // 2. Fixed semicolon to comma
  {id: 2, name: 'Neha', branch: 'CSE', age: 23},   // (Optional) Changed IDs to be unique
  {id: 3, name: 'Pragya', branch: 'CSE', age: 24}, // (Optional) Changed IDs to be unique
  {id: 4, name: 'Reema', branch: 'CSE', age: 25}   // (Optional) Changed IDs to be unique
];

app.get('/students', (req, res) => {
  res.json(students);
});

app.get('/students/:id', (req, res) => {
  const id = Number(req.params.id);
  const student = students.find(s => s.id === id);
  
  if (!student) return res.status(404).json({message: 'Student not found'});
  
  res.json(student);
});

app.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

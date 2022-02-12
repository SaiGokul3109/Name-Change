var Student = { 
  name: "Sammy", 
  class: 7, 
  roll_no:21, 
  favorite_subject: "coding", 
  marks : [30,35,40,50] };

function setup() {
  createCanvas(400, 400);
  console.log(Student.name);
  Student.name="Chris"
  console.log(Student.name)
}

function draw() {
  background(220);
}
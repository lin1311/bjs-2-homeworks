function Student(name, gender, age) {

  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
  
}

let students = new Student(name, gender, age);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks.length >= 0){
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  if (marks.length < 1){
    return 0;
  } else {
    for (let i = 0; i < marks.length; i++){
        let sum = 0;
        sum += marks[i];
        let average = sum / (i+1); 
    }
    return this.average;
  }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;  
}

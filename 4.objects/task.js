function Student(name, gender, age) {

  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
  
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}


Student.prototype.addMarks = function (...marks) {
  if (this.marks === undefined && this.excluded !== undefined ){
    return 0;
  } else {
    this.marks.push(...marks);
  }
}

let average = 0;
let summ = 0;

Student.prototype.getAverage = function () {
  if (this.marks === undefined || this.marks.length == 0) {
    return 0;
  } else {
    return this.marks.reduce( ( a, v ) => a + v, 0 ) / this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;  
}


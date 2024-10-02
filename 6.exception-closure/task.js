function parseCount (number)
{
    let parseResult = Number.parseFloat(number);
    if (Number.isNaN(parseResult)){
     throw new Error("Невалидное значение");
    }
    return parseResult;
}

function validateCount(parseNumber){
  try {
    return parseCount(parseNumber);  
  } catch (error) {
    return error;
  }
}

class Triangle{
  constructor(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
        
    if (a > b + c || b > a + c || c > a + b){
      throw new Error("Треугольник с такими сторонами не существует")
    }

  }

  get perimeter (){
    return (this.a + this.b + this.c);
  }

  get area (){
    const p = this.perimeter/ 2;
    const result = (p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5;
    return Math.round(result*1000)/1000
  }
}

function getTriangle (a, b, c){
  try{
    return new Triangle(a, b, c);
  } catch (error){
    return{
      get area() { return "Ошибка! Треугольник не существует" },
      get perimeter() { return "Ошибка! Треугольник не существует" }
    }
  }
}

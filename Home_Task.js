console.log("Home_task");
console.log("");

/*
No 1
- Buatlah sebuah class dengan nama Shape, dengan property numSides untuk menyimpan jumlah sisi, dan sideLengths untuk menyimpan panjang sisi. 
Class ini akan memiliki method getNumSides() untuk mengambil jumlah sisi, getSideLengths() untuk mengambil data panjang sisinya, dan getPerimeter() untuk mengambil luasnya.
- Buatlah class Triangle, Rectangle dan Circle yang semuanya adalah class turunan dari class Shape dan dari masing - masing class ada method getArea() untuk mengambil luasnya.

No 2
- Buatlah sebuah class untuk menyimpan data seseorang dan minimal dapat menyimpan nama, NIK dan jenis kelamin. 
Terdapat incapsulation pada class ini, jadi property yang harus di set dan diambil melalui methods. 
Kemudian buat 2 class turunan seperti berikut:
1. class Employee yang akan menyimpan data pekerjaan dan salary.
2. class Student yang akan menyimpan data kampus serta jurusan dimana dia belajar.
*/

console.log("No 1 : ");

class Shape {
  constructor(numSides, sideLengths) {
    this.numSides = numSides;
    this.sideLengths = sideLengths;
  }
  getNumSides() {
    return this.numSides;
  }

  getSideLengths() {
    return this.sideLengths;
  }

  getPerimeter() {
    let perimeter = 0;
    for (let i = 0; i < this.sideLengths.length; i++) {
      perimeter += this.sideLengths[i];
    }
    return perimeter;
  }
}

class Triangle extends Shape {
  constructor(sideLengths) {
    super(3, sideLengths);
  }

  getArea() {
    const [a, b, c] = this.sideLengths;
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }
}

class Rectangle extends Shape {
  constructor(x, y) {
    super(4, [x, y, x, y]);
  }

  getArea() {
    return this.sideLengths[0] * this.sideLengths[1];
  }
}

class Circle extends Shape {
  constructor(r) {
    super(0, [r]);
  }

  getPerimeter() {
    return 2 * Math.PI * this.sideLengths[0];
  }

  getArea() {
    return Math.PI * (this.sideLengths[0] ^ 2);
  }
}

const triangle = new Triangle([5, 7, 2]);
console.log(triangle.getPerimeter());
console.log(triangle.getArea());

const rectangle = new Rectangle(8, 5);
console.log(rectangle.getPerimeter());
console.log(rectangle.getArea());

const circle = new Circle(14);
console.log(circle.getPerimeter());
console.log(circle.getArea());

console.log("No 2 : ");

class Person {
  constructor(name, NIK, gender) {
    this.name = name;
    this.NIK = NIK;
    this.gender = gender;
  }

  setPerson(name, NIK, gender) {
    this.name = name;
    this.NIK = NIK;
    this.gender = gender;
  }

  getName() {
    return this.name;
  }

  getNIK() {
    return this.NIK;
  }

  getGender() {
    return this.gender;
  }
}

class Employee extends Person {
  constructor(name, NIK, gender, job, salary) {
    super(name, NIK, gender);
    this.job = job;
    this.salary = salary;
  }

  setJob(job) {
    this.job = job;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getJob() {
    return this.job;
  }

  getSalary() {
    return this.salary;
  }
}

class Student extends Person {
  constructor(name, NIK, gender, kampus, jurusan) {
    super(name, NIK, gender);
    this.kampus = kampus;
    this.jurusan = jurusan;
  }

  setkampus(kampus) {
    this.kampus = kampus;
  }

  setjurusan(jurusan) {
    this.jurusan = jurusan;
  }

  getkampus() {
    return this.kampus;
  }

  getjurusan() {
    return this.jurusan;
  }
}

let employee = new Employee("David", "309847162", "MAN", "HRD", 5000000);
console.log(employee);

let student = new Student("Slamet", "203981381", "Man", "Undip", "Fisiology");
console.log(student);

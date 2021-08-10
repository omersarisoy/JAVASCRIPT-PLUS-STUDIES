var dog = {
    name: "Rocky",
    legs: 4,
    tail: 1,
    qualities: ["loyalty","companionship"],
    bark : function() {
        console.log("woof");  
        console.log("woof");  
        console.log("woof");  },
    result : function() {
      return this.name+ " has " + this.legs + " legs.";
    }
    };
  
  dog.bark();
  console.log(dog.result());

  let myName = new String('Matthew');

console.log('myName :>> ', myName);
console.log('myName.length :>> ', myName.length);
console.log('typeof myName :>> ', typeof myName);

const a = function() {
  return 'hello';
}

console.log('typeof a ==>', typeof a);
console.log('a ==> ', a.prototype);


// const while = 42;

const student = {
  x: 5,
  y: 6,
  ad: 'Matthew',
  'Okul Adı': 'Saint Joseph',
}

student.dob = 2014;
student['Baba Adi'] = 'Daniel'

delete student.ad;

console.log('student :>> ', student);
console.log('okul adı :>> ', student['Okul Adı']);
console.log('adı :>> ', student.ad);

// console.log(this);

/* function Person(firstName, birthDay){
this.firstName = firstName;
this.birthDay = birthDay;
};

const omer = new Person("ömer", 1993);
console.log(`omer:>>`, omer);
console.log(`omer:>>`, omer.birthDay); */


///////////////////////////////////////////

/* const omero = new Person("ömer", 1993);
const aaa = new Person("ömer", 1993);

console.log(omero == aaa);
console.log(omero === aaa);
console.log(omero.firstName === aaa.firstName) */


/////////////////////////////////////////////


/* const arr = [];
const arr1 = ["a"];
const arr2 = ["x", "y", "z"]

console.log(`arr:>>`, arr)
arr.push("omer")  
console.log(`arr:>>`, arr)  // we cant assign else value to const variable . But we can change variable's content. They have one variable in stack and same value in heap. We push it this one value. There is only one arrow. one stack >>>> one arrow >>> one heap

// arr = arr2  // We cant change const variable with another one. two stack >>> two arrow >>> one heap */

/////////////////////////////////////////////////////

/* let arr = [];
let arr2 = ["x", "y", "z"];

arr = arr2;
console.log(`arr:>>`, arr);
console.log(`arr2:>>`, arr2); // But we can do it with let keyword.



var me = "ömer";
var you = "lütfü";
 
var he = me ;
me = "hakan"
console.log(`myName:>>>`, me);
console.log(`hisName:>>>`, he)
console.log(`yourName:>>>`, you);

////////////////////////////////////

var me = {name : "ömer"};
var you = {name : "lütfü"};
 
var he = me ;
me.name = "hakan"
console.log(`myName:>>>`, me);
console.log(`hisName:>>>`, he)
console.log(`yourName:>>>`, you); */


////////////////////////////////////////////////////////////


 /* function Person(firstName, birthDay){   // constructor function
    this.firstName = firstName;
    this.birthDay = birthDay;

    this.calcAge = () => {
        return new Date().getFullYear() - this.birthDay
    }
}

const omer = new Person("omer", 1993)  // To create object from constructor function (Person) we use new keyword 
const soner = new Person("soner", 1995)

console.log(omer.calcAge())  // Inheritance

console.log(soner.firstName + " " + soner.calcAge())

const davut = new Person("davut", 2001).calcAge();
console.log(davut) 


//////////////////////////////////////////////////////////////////


Person.prototype.calcAge = function() {
    return new Date().getFullYear() - this.birthDay

}

const alperen = new Person("alperen", 2014);
console.log(`alperen_age:>>>>`, alperen.calcAge())

console.log(Person.prototype)
console.log(Person.__proto__)
console.log(omer.__proto__)
console.log(soner.__proto__)
console.log(davut.__proto__)
console.log(alperen.__proto__)
console.log(omer)
console.log(davut)
console.log(alperen)

arr = [1,2,3];
console.log(arr.__proto__)  // array nesnesinin atadan kalma fonksiyonlarını gösteririr. Biz bunları istediğimiz yerde kullanabiliriz.

arr.push(4,5)
console.log(arr) */


////////////////////////////////////////////////////////


/* class Dog {
    constructor(name) {
        this.name = name;
    }
 
    bark() {
        console.log("hav hav")
    }

}

const karabas = new Dog("karabaş");
console.log(karabas)

karabas.bark()

Dog.prototype.smallbark = function() {
    console.log("hav")
}

karabas.smallbark()
// Javascript prototype tabanlı bir programalama dilidir. Yani oluşturduğumuz class a daha sonradan ekleme yapabiliyoruz. Class tabanlı olsaydı sonradan ekleme yapamazdık. Yapacağımız değişikliği veya eklemeyi doğrudan class ın içinde yapmamız gerekecekti.
 */

/////////////////////////////////////////////////////////////////


/* class Person {
    constructor(firstName, lastName, birthYear){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.employment = "";
    }
    selamla (){
        console.log(`Merhaba ${this.firstName} ${this.lastName}`)
    }

}


class Student extends Person {
    constructor(firstName,lastName,birthYear){
        super(firstName,lastName,birthYear);  // super = parent diyebiliriz
        this.employment = "Student"

    }
    
}

let hakan = new Student("hakan", "karaahmet", 1993);

console.log(hakan)
hakan.selamla()

console.log(hakan.employment)
 


class Teacher extends Person{
       
}
*/
////////////////////////////////////////////////////////////

/* 
class Person {
    constructor(firstName, lastName, birthYear, employment = ""){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.employment = employment;
    }
    selamla (){
        console.log(`Merhaba ${this.firstName} ${this.lastName}`)
    }

}


class Student extends Person {
    constructor(firstName, lastName, birthYear){
        super(firstName, lastName, birthYear, "Student" );
        // this.employment = "Student"
    }
    derscalis(){
        super.selamla()  // Persondaki selamlayı çağırır.
        this.selamla()  // Studentdaki selamlayı çağırır.
        console.log("studying javascript...")

    }

    selamla(){
        console.log("Hi I am a student")  // polymorphism >>> overwrite yapabiliyoruz
    }
}

let hakan = new Student("hakan", "karaahmet", 1993);

console.log(hakan)

hakan.selamla()  // Student ın içindekini alacak...

hakan.derscalis()

let omer = new Person("ömer", "sarısoy" );
omer.selamla()






class Teacher extends Person{
       
}


//JS de  her şey bir yerden miras alır. Object hariç her şeyin mirası var. En son objectten miras alınır. Objectin en son prototype ı null. O yüzden object miras alamaz.


 */
/////////////////////////////////////////////////////////////

/* const person = {
    firstName: "Matthew",
    lastName: "Dunn",
    birthYear: 1980,
    skills: ["JS", "java"],
    employed: true,
    // later
    2021: "Clarusway",
    true: "is it working?",

    calcAgeBad: function (bYear) {
      return 2021 - bYear;
    },

    calcAge: function () {
      // return 2021 - this.birthYear;
      this.age = 2021 - this.birthYear;
      return this.age;
    },
  };
  
  console.log(person.calcAgeBad(1977));  
  console.log(person.age);  // main class'da age olmadığı için undefined
  console.log(person.calcAge());  // sınıfın içinde age tanımlayıp main class'a döndürdük
  console.log(person.age); // calcAge'de tanımladığığımız age'i döndürdü. */
 

 /////////////////////////////////////////////////
  
 
 /*  const calcAge = function (birthYear) {
    console.log("Regular Function in Global Scope");
    console.log(this);  // global scope'da >>> window. bulunduğumuz container window nesnesi olduğu için window geldi. 
    console.log(2021 - birthYear);
  };
  
  calcAge(1981); */
 

  //////////////////////////////////////////////////////
  
  /* 
  const calcAgeArrow = (birthYear) => {
    console.log("Arrow Function in Global Scope");
    console.log(this); // glabal scope'da >>> window.
    console.log(2021 - birthYear);
  };
  
  calcAgeArrow(1984);
  */

  ///////////////////////////////////////////////////////
  
  
  /* const teacher = {
    firstName: "Matthew",
    lastName: "Dunn",
    birthYear: 1980,
    skills: ["JS", "java"],
    employed: true,
    // later
    2021: "Clarusway",
    true: "is it working?",

    calcAge: function () {
      console.log("Regular Function in Object");
      console.log(this); // teacher object'ini verdi
      console.log(2021 - this.birthYear);
    },

    calcAgeArrow: () => {
      console.log("Arrow Function in Object");
      this.employed = false;
      console.log(this); // dağlara taşlara gitti. window verdi. arrow'da this farklı yerlere gidebilir. O yüzden kullanma.
      console.log(2021 - this.birthYear);
    },

    calcAgeDelayed: function () {
      setTimeout(function () {
        console.log("Regular Function in setTimeout");
        this.calcAge();
      }, 1000);
    },

    calcAgeDelayedArrow: function () {
      setTimeout(() => {
        console.log("Arrow Function in setTimeout");
        console.log(this);
        this.calcAge();
      }, 1000);
    },
  };
  
  teacher.calcAge();
  teacher.calcAgeArrow();
//   teacher.calcAgeDelayed();
  teacher.calcAgeDelayedArrow(); */


// arrow function object kullanımında saçmalayabiliyor. O yüzden nesne boyutunda kullanmamakta fayda var.
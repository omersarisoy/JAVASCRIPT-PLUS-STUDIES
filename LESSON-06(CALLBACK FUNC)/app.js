/* 
ömer = [2,5,6,8,9,12,23,25]

function result(ömer,callback) {
    let sum = 0;

    for (let i = 0; i<ömer.length; i++ ) {
        sum += ömer[i]
        callback(sum)
    }

    return sum;

}

 result(ömer,console.log)

console.log(result(ömer,alert)) */

////////////////////////////////////////////////////////////////////////////

// Challange 1

// You deposited $xx
// You withdrew $xxx 

//  arrDeposits =
//  arrWithdraws =


const movements = [100, 300, -200, 500, -400, 225, 1000, -700];
/* 
// Filter Method

let deposited =  movements.filter((plus) => (
    plus > 0
))
console.log(`deposited`, deposited)

let withdrew =  movements.filter((minus) => (
    minus < 0
))
console.log(`withdrew`, withdrew)

// Reduce Method

let arrDeposits = deposited.reduce((total, num) => (
    total + num
))
console.log(`arrDeposits:`,arrDeposits)


let arrWithdraws = withdrew.reduce((total,num) => {
    return total + num
})
console.log(`arrWithdraws`, Math.abs(arrWithdraws) ) */



// ForEach Method
/* 
movements.forEach((element ) => element > 0  ? 
    console.log(`Para Yatırma : ${element} TL`) :
    console.log(`Para Çekme :  ${Math.abs(element)} TL`) ) 


let arrDeposits = 0;
let arrWithdraws = 0;    

movements.forEach(element => element > 0 ? 
    arrDeposits += element : arrWithdraws += element )
    console.log(`Yatırılan Toplam Para: ${arrDeposits} TL ` )
    console.log(`Çekilen Toplam Para: ${arrWithdraws*-1} TL ` ) */



// Challange 2
// map initials
 const str = 'Clarusway Online Career IT Training School';

/*
let L1 = str.charAt(0)
let L2 = str.charAt(10)
let L3 = str.charAt(17)
let L4 = str.charAt(24)
let L5 = str.charAt(27)
let L6 = str.charAt(36)


var initial = L1.concat(L2,L3,L4,L5,L6)
console.log(`initial >>>>>`, initial)  */ 


 

// Map Function

//  console.log(str.split(" ").map(n => n[0]).join("")) 




// const str = 'The Quick Brown Fox'; // tHe YeLLoW fOx 
// Writ a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

// var user = prompt("Enter your words")
// console.log(user.split("").map(i => i==i.toLocaleUpperCase() ? i.toLocaleLowerCase() : i.toLocaleUpperCase()).join(""))



/* 
const cart = [
    {
      item: "🍫",
      price: 5,
      vat: 8,
    },
    {
      item: "🍌",
      price: 5,
      vat: 8,
    },
    {
      item: "🥐",
      price: 7,
      vat: 18,
    },
    {
      item: "🍰",
      price: 15,
      vat: 18,
    },
    {
      item: "🎂",
      price: 25,
      vat: 1,
    },
    {
      item: "🥧",
      price: 20,
      vat: 1,
    },
  ];
  // 1
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    sum += element.price;
  }
  console.log(sum);
  
  // 2
  sum = 0;
  for (const el of cart) {
    sum += el.price;
  }
  console.log(sum);


  // 3
  sum = 0;
  cart.forEach((element) => {
    sum += element.price;
  });

  // 4
  const result = cart.map((item) => item.price).reduce((acc, curr) => acc + curr);
  console.log("result :>> ", result);
  
  // 5
  const re = cart.reduce((sum, curItem) => {
    return sum + curItem.price;
  }, 0);
  console.log("re :>> ", re);
  
  const vat = cart.reduce((sum, curItem) => {
    return sum + (curItem.price * curItem.vat) / 100;
  },0);
  console.log("vat :>> ", vat); 
   */


/* 
--------------
for in example
--------------
 */


const parent = {
    firstName: "Mike",
    lastName: "Doe",
    profession: "Barber",
  };
  
  function Baby() {
    this.firstName = "unnamed";
    this.weight = 3.4;
  }
  
  Baby.prototype = parent;
  
  var sally = new Baby();
  sally.firstName = "Sally";
  // sally.weight = 5.5;
  // sally.height ="45cm"
  
  for (const prop in sally) {
    const element = sally[prop];
    // console.log(prop, ":>>", element);
    if (Object.hasOwnProperty.call(sally, prop)) {
      console.log(prop, ":>>", element);
    }
  }

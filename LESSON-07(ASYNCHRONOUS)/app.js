// console.log("Hello1")

// setTimeout(() => {
//     console.log("setTimeout")  // en sona atar. zamanı gelince yazılır.
// }, 2000);

// console.log("Hello2")
// console.log("Hello3")

////////////////////////////////////////////////////////////

// console.time("ömer")

// console.log("Hello1")
// console.timeLog("ömer")

// setTimeout(() => {
//     console.log("setTimeout")
//     console.timeLog("ömer")
// }, 1000);

// console.log("Hello2")
// console.timeLog("ömer")
// console.log("Hello3")
// console.timeLog("ömer")

////////////////////////////////////////////////////////////


// console.log("Hello1")

// alert("Do you want to allow microphone?")
// setTimeout(() => {
//     console.log("setTimeout")
// }, 2000);

// console.log("Hello2")
// console.log("Hello3")


///////////////////////////////////////////////////////////

// console.log("Hello1")

// setTimeout(() => {
//     confirm("Do you want to allow microphone?")
//     console.log("setTimeout")
// }, 0);

// console.log("Hello2")
// console.log("Hello3")

///////////////////////////////////////////////////////////

// console.log("Hello1")

// setTimeout(() => {
//     slowTask()      // fonksiyon gerçekleşene kadar sayfa üzerinde işlem yapamıyoruz.

//     console.log("setTimeout")
// }, 0);

// console.log("Hello2")
// console.log("Hello3")

// function slowTask(){
//     let i = 0
//     do {
//         i++;
//     } while (i<1000000000);
// }

///////////////////////////////////////////////////////////
// const slowTask = () => {
//     let i = 0;
//     do {
//       i++;
//     } while (i < 500_000_000);
//     return "task is completed.";
//   };
  
//   console.log("¯\\_(ツ)_/¯");
//   console.time("bir");
//   // setTimeout
//   console.log("hello1");
//   console.timeLog("bir");
//   slowTask();
//   setTimeout(() => {
//     console.log("setTimeout");
//     console.timeEnd("bir");
//   }, 1000);
//   console.log("hello2");
//   console.timeLog("bir");
//   console.log("hello3");
//   console.timeLog("bir");

///////////////////////////////////////////////////////////

// setInterval(showTime, 1000);

// function showTime(){
  
//   const timeLabel = document.querySelector("p")
  
//   timeLabel.innerHTML = new Date().toLocaleTimeString()
// }


///////////////////////////////////////////////////////////

// let counter = 0;

// function showTime(){
    
//     const timeLabel = document.querySelector("p")       
//     timeLabel.innerHTML = new Date().toLocaleTimeString()
    
//     if (counter == 10){
//         clearInterval(stop)
//         timeLabel.innerHTML = "merhaba"
//     }
//     counter++;
// }

// const stop = setInterval(showTime, 1000);

/** promise */

/* const myPromise = new Promise((resolve, reject) => {
    console.log("myPromise started");
    let condition = true;
    if (condition) {
      resolve("işlem tamam");
    }
    reject(Error("gerçekleşmedi"));
  });
  console.log("merhaba");
  myPromise
    .then((msg) => {
      console.log(msg);
    })
    .catch((msg) => {
      console.log(msg);
    });
  console.log("gule gule");
 */

/* var ömer = new Promise(function(resolve, reject) {
    if(true){
        resolve("SUCCESS");
    }
    else{
        reject("FAIL");
    }
});

ömer.then(data => {
    console.log(data)
})

ömer.catch(error => {
    console.log(error)
})
 */


new Promise((resolve,reject) =>{
    setTimeout(() => {
        resolve(5)
    }, 1000);

}).then(function(number){
    console.log(number)
    return number*number
}).then(number => {
    console.log(number)
    return number+number
}).then(function(number){
    console.log(number)
})


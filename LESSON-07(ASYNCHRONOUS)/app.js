// console.log("Hello1")

// setTimeout(() => {
//     console.log("setTimeout")  // en sona atar. zamanı gelince yazılır.
// }, 2000);

// console.log("Hello2")
// console.log("Hello3")

////////////////////////////////////////////////////////////

// console.log("Hello1")

// setTimeout(() => {
//     console.log("setTimeout")
// }, 0);

// console.log("Hello2")
// console.log("Hello3")

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
//     slowTask()      // fonksiyon gerçekleşene kadar işlem yapamıyorum.
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

// function showTime(){

//     const timeLabel = document.querySelector("p")
        
//     timeLabel.innerHTML = new Date().toLocaleTimeString()
// }


// setInterval(showTime, 1000);

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

const myPromise = new Promise((resolve, reject) => {
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
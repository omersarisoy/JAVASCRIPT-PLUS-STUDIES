
// let counter =1;

// function countSeconds () {
  
//     console.log(`${counter} second pass...`)
    
//     if (counter == 5){
//         clearInterval(stop)
//         console.log(`${counter}. seconds time is up!`)
//     }
//     counter++
    
// }

//  const stop = setInterval(countSeconds, 1000);

////////////////////////////////////////////////////////////////////////

// function countSeconds(limit){
//     let counter = 0;

//     let stop = setInterval(() => {
//         if (counter==limit){
//             clearInterval(stop)
//             console.log(`${limit} seconds passed. Time is up`)
//             return;
//         }

//         counter ++;

//         console.log(`${counter} second pass...`)
        
//     }, 1000);
// }

// countSeconds(5)

////////////////////////////////////////////////////////////////////////////

// function countSeconds(limit){
//     let counter = 0;
    
//     let stop = setInterval(() => {
//         if (counter < limit){
//             console.log(`${limit} second left...`)
//         }
        
//         else{
//             clearInterval(stop)
//             console.log(` Time is up`)
//         }
        
//         limit --;
        
//     }, 1000);
// }

// countSeconds(10)

///////////////////////////////////////////////////////////////////////////////////


// // setTimeout
// let current = 0;
// function countSeconds2(limit) {
//   // recursive
//   if (current > limit) {
//     console.log('counter finished.');
//   } else {
//     if (current != 0) {
//       console.log(`${current} seconds passed.`);
//     }
//     current++;
//     setTimeout(countSeconds2, 1000, limit);
//   }
// }
// countSeconds2(3);


// new Promise(function(resolve, reject){
//     const isSuccessfull = false;

//     if(isSuccessfull){
//         resolve("task completed successfully");
//     }
//     reject("failed");
// })

// .then((sonuc) => {
//     console.log(sonuc);
//     return "devam ediyor"
// })

// .then(console.log)  // chaining ==>>> callback function gibi düşünebiliriz. then in içine fanksiyon tanımlayıp da yazabilirdik.

// .catch((err) => {
//     console.log(err)
//     return "Game is over!"
//   }).then(console.log)


// AJAX = Asynchronous Javascript and XML

// REST = Representational state transfer
// Frontend ile backend arasındaki veri akışını sağlar.



// Application Programing Interface (API)

// let headersList = {
//     "Accept": "*/*",
//     "User-Agent": "Thunder Client (https://www.thunderclient.io)"
//    }
   
//    fetch("https://restcountries.eu/rest/v2/name/germany", { 
//     //  method: "GET",
//     //  headers: headersList
//    }).then(function(response) {
//      return response.json(); // default olark text() idi. arrray döndürmek için json formatına aldık.
//    }).then(function(data) {
//      console.log(data[0]);
//    })


   const renderCountry = (data, className = '') => {
    const countriesSection = document.querySelector('.countries');
    const html = `
    <div class="country ${className}">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span><i class="fas fa-lg fa-landmark"></i></span>${
          data.capital
        }</p>
        <p class="country__row"><span><i class="fas fa-lg fa-users"></i></span>${(
          +data.population / 1_000_000
        ).toFixed(1)}M People</p>
        <p class="country__row"><span><i class="fas fa-lg fa-comments"></i></span>${
          data.languages[0].name
        }</p>
        <p class="country__row"><span><i class="fas fa-lg fa-money-bill-wave"></i></span>${
          data.currencies[0].name
        }</p>
      </div>
    </div>`;
  
    // / ${data.nativeName}
    countriesSection.insertAdjacentHTML('beforeend', html);
    countriesSection.style.opacity = 1;
  };
  
  
  // fetch('https://restcountries.eu/rest/v2/name/turkey')
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     renderCountry(data[0]);
  //   });
   


    /////////////////////// ÖMER //////////////////////////////
    // const getCountryInfo = (countryname) =>{
    //   fetch (`https://restcountries.eu/rest/v2/name/${countryname}`)
    //   .then( response => {return response.json()})
    //   .then( data => renderCountry(data[0]))
    // }

    // getCountryInfo("italy")
    // getCountryInfo("usa")



  const getCountryData = (countryName) => {
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
      .then((response) => {
        // console.log(response);
        if (!response.ok) throw new Error('something went wrong!');
        return response.json();
      })
      .then((countryData) => {
        // console.log(countryData[0]);
        renderCountry(countryData[0]);
      })

    .catch((error) => console.log(error)); 
  };
  
  // getCountryData('italy');
  // getCountryData('Usa');
  // getCountryData('turkey');
  // getCountryData('spain');

  const getCountryCode = (countryCode) => {
    fetch (`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
    .then(response => {
     return response.json();
    })
    .then((data) =>{
      console.log(data) //burada array tanımlanmış.
      renderCountry(data)
    }
     )
  }
  
  // getCountryCode("tur")

  const getCountryNeighbours = (countryName)=>{
    fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then(response => { return response.json()})

    .then(countryData =>{ renderCountry(countryData[0]);
      // console.log(countryData[0].borders)
      return countryData[0].borders;
    })

    .then(neighbours => {
      console.log(...neighbours) // ... ile arraydan çıkıp text halini yazıyor.

      neighbours.forEach(country => {
      getCountryCode(country);
      
    })})
    .catch(error => console.log(error))
    
  }
  
getCountryNeighbours("spain")


// const getCountryNeighboursAsync = async (countryName)=>{

//   try {
    
//     let response =  await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)

//     let data = await response.json()
  
//     renderCountry(data[0]);

//     const neighbours = data[0].borders[5];

//     response = await fetch(`https://restcountries.eu/rest/v2/alpha/${neighbours}
//     `)
    
//     data = await response.json();
//     renderCountry(data, "neighbours")

//   } catch (error) {
//     console.log(error)
    
//   }
  
// }

// getCountryNeighboursAsync("turkey")
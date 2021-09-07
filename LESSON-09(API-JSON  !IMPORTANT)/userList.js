$(document).ready(function(){
  setTimeout(getUserList,2000);
  //setInterval(getUserList,5000)
})



// get methodu kullanacağımız için data göndermeye gerek olmadığından her hangi bir data tanımlamıyoruz


// const getUserList = async() => {

//     await fetch("https://reqres.in/api/users?page=2", { 
//         method:"GET"
//     })
//     .then(response => response.json())
//     .then(ömer => {
//       console.log(ömer)
//         if(ömer.data[0].id != "0"){
//           for(let i=0; i< ömer.data.length; i++){
//             $("#tbodyUserList").append(`
            
//               <tr>
//                   <td>
//                   <img src="${ömer.data[i].avatar}">
//                   </td>

//                   <td>
//                   ${ömer.data[i].id}
//                   </td>

//                   <td>
//                   ${ömer.data[i].email}
//                   </td>

//                   <td>
//                   ${ömer.data[i].first_name}
//                   </td>

//                   <td>
//                   ${ömer.data[i].last_name}
//                   </td>
//               </tr>`
//             )
//           }     
//         }
//     })
//   .catch(error=> console.log(error))
// }


///////////////////// MAP() //////////////////////

// const getUserList = async() => {

//   await fetch("https://reqres.in/api/users?page=1", { 
//       method:"GET"
//   })
//   .then(response => response.json())
//   .then(ömer => {
//     // console.log(ömer)
//       if(ömer.data[0].id != "0"){
//         ömer.data.map((item) => {
//           $("#tbodyUserList").append(`
          
//             <tr>
//                 <td>
//                 <img src="${item.avatar}">
//                 </td>

//                 <td>
//                 ${item.id}
//                 </td>

//                 <td>
//                 ${item.email}
//                 </td>

//                 <td>
//                 ${item.first_name}
//                 </td>

//                 <td>
//                 ${item.last_name}
//                 </td>
//             </tr>`
//           )
//         })     
//       }
//   })
// .catch(error=> console.log(error))
// }

////////////////////////////// AXIOS ////////////////////

const getUserList = async() => {

  const ömer = await axios({
      url: "https://reqres.in/api/users?page=2",
      method:"GET"
    })
    console.log(ömer)
    console.log(ömer.data)
    console.log(ömer.data.data)
    
  if(ömer.data.data.id != 0){   // ömer yerine data yazsaydık, data.data.data olacaktı :)
    ömer.data.data.forEach((item) => {
      $("#tbodyUserList").append(`
      
        <tr>
            <td>
            <img src="${item.avatar}">
            </td>

            <td>
            ${item.id}
            </td>

            <td>
            ${item.email}
            </td>

            <td>
            ${item.first_name}
            </td>

            <td>
            ${item.last_name}
            </td>
        </tr>`
      )
    })     
  }
}



// postman : api test aracı. 

// cdn : link vererek ilgili küyüphanelerdeki fonksiyonları kullanmaya yarar.
// axios cdn ile kullanmanın dezavantajı internet bağlantısı gittiğinde uygulama çalışmaz.

// base url : e.g. https://reqres.in/
// endpoint : Requestin altında  /api/users?page=2



window.onload = () => {
    setTimeout(fillFormInput, 1000)
}

const fillFormInput = () => {
    let email = document.getElementById("email").value = "eve.holt@reqres.in";
    let password = document.getElementById("password").value = "pistol";

    localStorage.setItem("email",email);
}

// XMLHTTP REQUEST ==>> fetch ve axios un ilk hali. dünya gaz bulutu iken

// içeriğini anlamamış olmak normal. mantığını anlamak önemli. eski kurumsal şirketlerde görülebilir.

/* 
const apiRegister = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    const bodyData = {
        email : email,
        password : password
    } //api ye yollayacağımız object dosyasını oluşturduk, içinde kullanıcının şifresi ve emaili var

    var xhr = new XMLHttpRequest();  //yeni bir istek oluşturduk
    xhr.open("POST", "https://reqres.in/api/register"); //istek içine url yi ve post şekilde gideceği bilgisini yerleştirdik
    xhr.setRequestHeader("Content-Type", "application/json");//içerik tipini tanımladık.
    xhr.send(JSON.stringify(bodyData)); //bodyData mızı API nin istediği şekle getirdik
    xhr.onload = function(){
        console.log(xhr.responseText);
        let data = JSON.parse(xhr.responseText);
        if(data.id != "0"){
            console.log(data);
            localStorage.setItem("token",data.token); //ilk kayıt sonrası verilen token ı local e kaydettik. Token: üye olunduğunda apinin üyeye verdiği jeton, her girişte bu jeton kullanılır
        }
    }
}

 */

//////////////////// FETCH //////////////////////

// const apiRegister = () => {
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//     const bodyData = {
//         email : email,
//         password : password
//     }
//     console.log(bodyData);
//     console.log(JSON.stringify(bodyData));

//     fetch("https://reqres.in/api/register", {
//         method: "POST",
//         headers: {
//             "Content-Type":"application/json"
//         },
//         body: JSON.stringify(bodyData)
//     })
//     .then(response => response.json())  //gelen response u json a çevirdik
//     .then(data => {//data = api den dönen değer
//         if(data.id != "0"){ //data mızın id sini kontrol ediyoruz
//             console.log(data)
//             alert("Welcome "+ email.split("@")[0])
//         }
//     })
//     .catch(error => console.log(error))
// }


//////////////////// ASYNC/WAIT /////////////////////

// await in bekleme süresi 300 sn

// const apiRegister = async() => {
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//         const bodyData = {
//             email : email,
//             password : password
//         }
//     console.log(bodyData);
//     console.log(JSON.stringify(bodyData));

//      //fetch işlemi gecikeceği için await keywordu kullandık, asenkron yapı oluşturduk
//     await fetch("https://reqres.in/api/register", { 
//         method:"POST",
//         headers:{
//             "Content-Type":'application/json'
//         },
//         body: JSON.stringify(bodyData)
//     })
//     .then(response => response.json())
//     .then(data => {
//         if(data.id != "0"){
//             console.log(data)
//             alert("Welcome "+ email.split("@")[0])
//             sessionStorage.setItem("token", data.token);
//         }
//     })
//     .catch(error=> console.log(error))
// }


///////////////////////////// AXIOS //////////////////////////////////////

// otomatik olarak json döndürdüğü için header a ihtiyaç olmayacak.
// method tanımlamazsak GET olarak alır.
// application yok, json yok, stringfy yok,  parse yok. O yüzden axios kıllanmak daha mantıklı

const apiRegister = async() => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    const data = await axios({
        url: "https://reqres.in/api/register",
        method:"POST",
        data : {
            email : email,
            password : password
        }
    })

    if(data.data.id != 0){
        console.log(data)
        console.log(data.data)

        setTimeout(() => {
            window.location.href = "userList.html"
            
        }, 1000);
    }


}
 

const registrationForm = document.getElementById("registration_form")

//////////////////// ALERT ////////////////////////
//  registrationForm.addEventListener("submit", function(element)
//  {element.preventDefault();
//  alert(document.getElementsByName("first_name")[0].value + " " + document.getElementsByName("last_name")[0].value) })

registrationForm.addEventListener("submit", function(element){
   element.preventDefault();
   window.location.href = "checkout.html?firstname=" + document.getElementsByName("first_name")[0].value + "&lastname=" + document.getElementsByName("last_name")[0].value
})

const lastNameInput = document.getElementsByName("last_name")[0]
const remainCharSpan = document.getElementById("charCount")

const showRemainChar = () => {
   if(lastNameInput.value.length > 0){
   remainCharSpan.style.visibility = "visible"
   remainCharSpan.innerHTML = lastNameInput.value.length + "/40"
   }

   else {
      //  remainCharSpan.style.visibility = "hidden" 
       remainCharSpan.style.display = "none" // bir kere yazıp sildikten sonra hiç gözükmüyor.
   }
}

lastNameInput.addEventListener("keyup", showRemainChar)

////////////////////// BIRTHDAY //////////////////////////////////

const birthday = document.getElementsByName("birthday")[0]

birthday.addEventListener("change", function(){
   alert(new Date(this.value).toLocaleDateString() + " date is selected")
})

/////////////////////// EMAIL //////////////////////////////////////


const validateEmail = () => {
const email = document.getElementsByName("email")[0];
const errorSpan = document.querySelector("#errorSpan");
// email.parentElement.appendChild= '<span id="errorSpan"></span>';
   
   const regexPattern = /\S+\@+\S+\.+\S/;
   if (!regexPattern.test(email.value)){
       errorSpan.innerHTML = "invalid email adress";
       errorSpan.style.color = "red";
   }
   else{
       errorSpan.innerHTML = "valid email adress";
       errorSpan.style.color = "green";        
   
      }
   
   if(email.value.length == 0 || email.value == ""){
      errorSpan.style.visibility = "hidden";
   }
   
   else {
      errorSpan.style.visibility = "visible";
      
   }
}

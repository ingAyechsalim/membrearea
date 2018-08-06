
           
        function validemail()
{
    var mail = document.getElementById("email")

   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(mail.value))
   {
       alert("mail non valid")
      return false;
   }
   else
   {
    alert("mail valid")
           return true;
   }
} 
function validpassword()
{
    var pwd = document.getElementById("password")

   var regex1 =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
   if(!regex1.test(pwd.value))
   {
alert("password Non valid");      
return false;
   }
   else
   {
    alert("password valid");
            return true;
   }
}

function validForm(f)
{
   var mailOk = validemail(f.email);
   var passwordOk = validpassword(f.password);
   var rpasswordOk = validpasswordR(f.rpassword);
   if(passwordOk && mailOk && rpasswordOk)
   {      alert("!!forme Valider!!");
   return true;
}
     
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}
function validpasswordR(){
    var password = document.getElementById("password")
    , confirm_password = document.getElementById("rpassword");
  
    if(password.value != confirm_password.value) {
      alert("mot de passe non identique");
      return false;
    } else {
      alert('identique super!!');
      return true;
    }


}
    function rest()
    {
     
     document.forms["myForm"].reset(); //reset
     alert("Reset successful!!");}
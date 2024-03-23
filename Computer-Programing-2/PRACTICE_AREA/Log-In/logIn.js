function myOnFunction() {
    var pass = document.getElementById("inputPassword");
    if (pass.type === "password") {
        pass.type = "text";
    } else {
       pass.type = "password";
    }
}

document.getElementById('fillup').addEventListener('submit',function login(){

  
    var userEmail = document.getElementById("inputEmail").value;
    var userPassword = document.getElementById("inputPassword").value;

  

   // alert("Email : " + userEmail + "\n" + " Password : " + userPassword);

   
    if (userEmail === "justin@gmail.com" && userPassword === "programmerAko05"){
        
      //   window.location = "Challenge/Activity1-Alvarez.html";
       alert("Downloading Malware Files");
   }else{
    
        alert("Invalid password or email");
     
   }
    location.reload();
})


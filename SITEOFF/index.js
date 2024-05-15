document.addEventListener("DOMContentLoaded", function() {
  
    const boxes = document.querySelectorAll(".box");

    
    function showBoxes() {
        boxes.forEach(box => {
            box.classList.remove("hidden");
            box.classList.add("visible");
        });
    }

    
    setTimeout(showBoxes, 500);
});

$('.message a').click(function(){ 
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });

 var users=[{username: 'imrane1' ,password: '12345678@', fullname: 'imrane lakniti' , email: 'imranelak11@gmail.com'},
                {username:'zakaria1',password:'zakaria123@',fullname:"zakaria zakar",email:"zakaria1@gmail.com" }   ]



function signin(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("passwordSign").value;

   

                for(var i=0;i<users.length;i++){
                    if(username===users[i].username && password===users[i].password){
                        alert("welcome "+username);
                        return true;
                    }

                    } alert("password incorrect");
                    return false;


            }

function signup(){
    var fullname = document.getElementById("name").value;
    var username = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value; 

                for(var i=0;i<users.length;i++){
                    if(username===users[i].username){
                        alert("username is already used.");
                        return false;
                    }
                }
                for(var i=0;i<users.length;i++){
                    if(password.length<8 ){
                        alert("password should be longer ");
                        return false;
                    }
                    }
                  




           alert("operation succesful");
        users.push({username:username ,password:password,fullname:fullname,email:email    });



return true;
}   


















 

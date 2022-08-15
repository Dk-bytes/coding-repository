

//make function for Initial
function Initial() {// when start button is pressed disable start
    document.getElementById("startBtn").disabled = true;
    //when start button is stop button is enabled
    document.getElementById("stopBtn").disabled = false;
    //document.getElementById
}

//make function for halt
function halt() {// when stop button is pressed enable start
    document.getElementById("startBtn").disabled = false;
    //when stop button is pressed enable stop
    document.getElementById("stopBtn").disabled = true;
}
    function Creds() {//function Creds
        var firstName = document.getElementById("1N").value;//variable firstname
       var lastName = document.getElementById("2N").value;//variable lastname
        var fullName = firstName + " " + lastName;     //variable fulltname
        var badge = document.getElementaryById("Id").value;//variable badge
      
         if (fullName.length > 4 || fullName.length < 20) {//ful name is greater than four and less then 20
             document.getElementById("login").innerHTML = "Invalid number of characters!";//invalid name length
            }else if (badge > 0 || badge < 3) {//else if badge is greater than 3
            document.getElementById("login").innerHTML = "Id is an invalid number!";// invalid login
         }else {//else statement
                alert("Access Granted, Welcome " + fullName + "!");//alert access granted
                location.replace("sound.html");//replace page
            }        
                
        }
                
            



  
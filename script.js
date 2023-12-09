let password=document.getElementById('pass')
let display=document.getElementById('display')
let n=document.getElementById('name')
function passwordValidate(){
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    if(strongPassword.test(password.value)) 
        return true;
    else
        return false;}
    function signIn(){
        if(passwordValidate()){
            display.innerHTML="Sign in successful!!! Welcome "+ n.value +" Learn More with BigStorm"
        }
        else
        display.innerHTML="Please enter a valid password(password should be of minimum 8 characters having atleast 1 small letters(a-z),1 capital letters(A-Z) ,1 digit(0-9),1 character)"
        
    }
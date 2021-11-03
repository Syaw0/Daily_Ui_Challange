const fadeinlogincom = (n) => {
    if (n == 1){
        document.getElementById("pre-form").style.display="none"
        document.getElementById("mainform").style.display="flex"
        document.getElementById("Sign-up").style.display="none"
        document.getElementById("login-form").style.display="flex"
        
        
    }else{
        document.getElementById("pre-form").style.display="none"
        document.getElementById("mainform").style.display="flex"
        document.getElementById("login-form").style.display="none"
                document.getElementById("Sign-up").style.display="flex"
    }
}

const toggleForm = (n) => {

    if (n == 1){
        document.getElementById("Sign-up").style.display="none"
        document.getElementById("login-form").style.display="flex"
    }else{
        document.getElementById("login-form").style.display="none"
        document.getElementById("Sign-up").style.display="flex"
    }
}
document.getElementById("toggletoL").addEventListener("click" , () => toggleForm(1))
document.getElementById("toggletoS").addEventListener("click" , () => toggleForm(2))
document.getElementById("s-login").addEventListener("click" ,() => fadeinlogincom(1))
document.getElementById("s-signup").addEventListener("click" ,() => fadeinlogincom(2))

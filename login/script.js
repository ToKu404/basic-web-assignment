const btnSign = document.querySelector("#signin");
btnSign.addEventListener('click',function(e){
    e.preventDefault() 
    let username = document.querySelector("#username")
    let password = document.querySelector("#password")
    const isValid = validation(username.value, password.value);

    if(isValid){
        window.open("http://toku404.github.io/portfolio/index.html","_self");
    }else{
        window.alert("Invalid username and password")
        username.value = ""
        password.value = ""
    }
})

function validation(username, password){
    let validlength = ""
    const xhr = new XMLHttpRequest();
    xhr.open('GET','/users.json',false);
    xhr.onload = function(){
        const response = JSON.parse(xhr.response)
        const users = response["Users"]

        const validData = users.filter(user => user.username==username && user.password==password)

        validlength = validData.length
    }
    xhr.send()

    if(validlength){
        return true
    }
    return false
}
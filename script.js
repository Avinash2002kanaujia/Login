

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}
if (close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}



  const container = document.querySelector('.container');
  const registerBtn = document.querySelector('.register-btn');
  const loginBtn = document.querySelector('.login-btn');


  registerBtn.addEventListener('click', () => {
    container.classList.add('active');
  });

  loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
  });
  

  document.getElementById("loginBtn").addEventListener("click", function(event){
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "avinash_2219" && password ==="12345"){
      alert("Login Successfull!");
      window.location.href ="index.html";
    }
    else{
      alert("Invalid Username/password.");
    }
  })
  
  
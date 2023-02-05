window.addEventListener('scroll', scroling);


function scroling(){
    console.log(pageYOffset);
}

function showForm() {
  document.getElementById("login_form").style.display = "block";
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('static/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

function guest_login() {
  window.location.href = "/market";
}


function login(username, password) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/login", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      localStorage.setItem("token", response.token);
      window.location.href = "/market";
      }
    else {
      console.error("Login failed:", xhr.responseText);
    }
  }
};
  xhr.send(JSON.stringify({ username: username, password: password }));
}



document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login_form");
  const form = loginForm.querySelector("form");
  form.addEventListener("submit", function(event) {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  login(encodeURIComponent(username.value), encodeURIComponent(password.value));
});
});




const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("mouseover", function() {
      button.style.transform = "scale(1.1)";
    });

    button.addEventListener("mouseout", function() {
      button.style.transform = "scale(1)";
      })
});

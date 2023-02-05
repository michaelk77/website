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


document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login_form");
  const form = loginForm.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
xhr.open("POST", "/login", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    // Здесь вы можете обрабатывать полученный результат
    var response = JSON.parse(xhr.responseText);
    if (response.success) {
      // Ваш код для успешного редиректа
      window.location.href = "/market";
    } else {
      // Код для обработки ошибки
    }
  }
};
    xhr.send("username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password));
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

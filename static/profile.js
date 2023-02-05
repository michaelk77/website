document.addEventListener("DOMContentLoaded", function() {
  getProfileData();
});

function getProfileData() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "api/profile?token=" + localStorage.getItem("token"), true);
  console.log(localStorage.getItem("token"))
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      // Обновление данных в HTML
      updateProfileData(response);
    }
  };
  xhr.send();
}

function updateProfileData(response) {
document.getElementById("userinfo").innerHTML = "Ваши данные : " + response.email+" "+response.address;
}

document.getElementById("text_button_products").addEventListener("click", function(event){
  event.preventDefault();
  window.location.href = "/market";
});




function updateProfile(email, address) {
  let xhr = new XMLHttpRequest();
  xhr.open("PUT", "api/profile?token=" + localStorage.getItem("token"), true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log("Profile updated successfully");
        location.reload();
      } else {
        console.error("Failed to update profile:", xhr.responseText);
      }
    }
  };
  xhr.send(JSON.stringify({email: email, address: address}));
}

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("profile_form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    updateProfile(form.elements.email.value,form.elements.address.value);
  });
});
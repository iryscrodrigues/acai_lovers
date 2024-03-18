function buy() {
  let name = prompt("What is your first name?");
  let email = prompt("What is your email address?");
  let times = prompt("How many times have you eaten açaí?");

  if (times <= 0) {
    alert(
      "Thank you, " +
        name +
        "! We'll be in touch by email, get ready for the best gastronomic experience of your life! 🫐💜"
    );
  } else {
    alert(
      "Thank you, " +
        name +
        "! We'll be in touch by email, get ready to eat the best açaí of your life! 🫐💜"
    );
  }
}

let buyButton = document.querySelector(".buy-button");
buyButton.addEventListener("click", buy);

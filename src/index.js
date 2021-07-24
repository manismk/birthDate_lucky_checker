var birthdateForm = document.querySelector("#birtdateForm");

var luckyNumber = document.querySelector("#luckynumber");
var birthDate = document.querySelector("#birthdate");
var resultDiv = document.querySelector(".result");

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

// birthDate.addEventListener("oninvalid", (e) => {
//   if (birthDate.validity.rangeOverflow) {
//     e.target.setCustomValidity("Birthdate can't be future date");
//   }
// });

today = yyyy + "-" + mm + "-" + dd;
if (birthDate) {
  birthDate.setAttribute("max", today);
}

if (birthdateForm) {
  birthdateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    var date = birthDate.value;

    var sum = 0;
    var luckyNo = luckyNumber.value;
    for (var i = 0; i < date.length; i++) {
      if (Number.isInteger(Number(date[i]))) {
        sum = sum + Number(date[i]);
      }
    }
    var divisible = sum % luckyNo;
    if (divisible === 0) {
      showResult("happy");
    } else {
      showResult("sad");
    }
  });
}

function showResult(result) {
  resultDiv.classList.remove("hidden");
  var imgResult = document.querySelector(".imgResult");
  var txtResult = document.querySelector(".txtResult");
  if (result === "happy") {
    imgResult.setAttribute("src", "image/happy.svg");
    txtResult.innerText = "Your birthdate is lucky!";
  } else if ((result = "sad")) {
    imgResult.setAttribute("src", "image/sad.svg");
    txtResult.innerText = "Oops! Your birthdate isn't lucky!";
  }
}

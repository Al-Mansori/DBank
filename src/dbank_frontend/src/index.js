// import { dbank_backend } from "../../declarations/dbank_backend";

// document.querySelector("form").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const button = e.target.querySelector("button");

//   const name = document.getElementById("name").value.toString();

//   button.setAttribute("disabled", true);

//   // Interact with foo actor, calling the greet method
//   const greeting = await dbank_backend.greet(name);

//   button.removeAttribute("disabled");

//   document.getElementById("greeting").innerText = greeting;

//   return false;
// });

import { dbank_backend } from "../../declarations/dbank_backend/";

window.addEventListener("load", async function () {
  // console.log("hi")
  update();
})

document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault();


  const button = e.target.querySelector("#submit-btn");
  button.setAttribute("disabled", true);


  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const withdrawAmount = parseFloat(document.getElementById("withdrawal-amount").value);


  if (document.getElementById("input-amount").value.length != 0) {
    await dbank_backend.topUp(inputAmount);
  }
  if (document.getElementById("withdrawal-amount").value.length != 0) {
    await dbank_backend.withdraw(withdrawAmount);
  }

  // await dbank_backend.compound();


  update();
  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";
  button.removeAttribute("disabled", true);

})

async function update() {
  const crrAmount = await dbank_backend.checkBalance();
  document.getElementById("value").innerText = crrAmount.toFixed(2);
}
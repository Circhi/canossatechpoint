// Cancella il testo dal form di contatto dopo l'invio

document.getElementById("contact-form").addEventListener("submit", function() {
  // Cancella il testo da tutti i campi input
  var inputs = document.querySelectorAll("#contact-form input");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }

  // Cancella il testo dall'area di testo
  var textarea = document.querySelector("#contact-form textarea");
  textarea.value = "";

  // Reindirizza l'utente alla home page
  window.location.href = "index.html";
});
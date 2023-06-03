document.getElementById("signup").addEventListener("submit", function (e) {
   e.preventDefault();

   const success_msg = document.getElementById("success-msg-wrapper");
   success_msg.style.display = "flex";
   success_msg.style.visibility = "visible";
});

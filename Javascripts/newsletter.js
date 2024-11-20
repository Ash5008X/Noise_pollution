function submitForm(event) {
      event.preventDefault(); // Prevent the form from submitting
      var email = document.getElementById("emailInput").value;
      if (email.trim() === "") {
        alert("Please enter your email address."); // Show alert if email field is empty
      } else {
        // Show dialog box after successful submission
        alert("Newsletter successfully submitted");
        // Hide submit button
        document.getElementById("submitButton").classList.add("hide");
        // Hide email input
        document.getElementById("emailInput").classList.add("hide");
        // Show submitted button
        document.getElementById("submittedButton").classList.remove("hide");
        // Show home button
        document.getElementById("homeButton").classList.remove("hide");
        // Reset the form
        document.getElementById("newsletterForm").reset();
      }
    }
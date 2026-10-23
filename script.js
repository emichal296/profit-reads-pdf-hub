const submitButton = document.getElementById("submit-pdf-button");
const statusBox = document.getElementById("form-status");


const submitButton = document.getElementById("submit-pdf-button");

if (submitButton) {
  submitButton.addEventListener("click", () => {
    window.location.href =
      "https://docs.google.com/forms/d/e/1FAIpQLScR2-w_ng4uvsfYjm1eE6ijW4cOLKExjFhg4wh6Hq5VbO4nuw/viewform?usp=sharing&ouid=103231822863852040409";
  });
}


  if (!formUrl || formUrl === "PASTE_YOUR_GOOGLE_FORM_RESPONDER_LINK_HERE") {
    statusBox.textContent = "Setup not finished yet: create your Google Form, then paste its responder link into form-config.js and upload the updated file to GitHub.";
    return;
  }

  if (!formUrl.startsWith("https://docs.google.com/forms/")) {
    statusBox.textContent = "Please check form-config.js and use the responder link copied from Google Forms.";
    return;
  }

  window.open(formUrl, "_blank", "noopener,noreferrer");
});

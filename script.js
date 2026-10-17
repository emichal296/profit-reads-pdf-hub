const submitButton = document.getElementById("submit-pdf-button");
const statusBox = document.getElementById("form-status");

submitButton.addEventListener("click", () => {
  const formUrl = (typeof PROFIT_READS_GOOGLE_FORM_URL === "string")
    ? PROFIT_READS_GOOGLE_FORM_URL.trim()
    : "";

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

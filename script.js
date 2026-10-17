// After deploying the Google Apps Script web app, paste its URL below.
// Example URL ends in /exec. Do not paste a /dev test URL.
const APPS_SCRIPT_WEB_APP_URL = "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE";

const uploadLink = document.getElementById("upload-link");
if (uploadLink && APPS_SCRIPT_WEB_APP_URL.startsWith("https://script.google.com/") &&
    !APPS_SCRIPT_WEB_APP_URL.includes("PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE")) {
  uploadLink.href = APPS_SCRIPT_WEB_APP_URL;
  uploadLink.textContent = "Open PDF submission form";
} else if (uploadLink) {
  uploadLink.removeAttribute("href");
  uploadLink.setAttribute("aria-disabled", "true");
  uploadLink.style.opacity = "0.65";
  uploadLink.addEventListener("click", (event) => {
    event.preventDefault();
    alert("The upload form is not connected yet. Follow the README instructions to deploy the Google Apps Script app and add its URL.");
  });
}

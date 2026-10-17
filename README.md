# Profit Reads PDF Portal — Google Drive upload edition

This package contains the GitHub Pages download library and a Google Apps Script upload form that stores visitor-submitted PDFs in a private Google Drive folder.

## Important
- GitHub Pages serves the download library; it cannot itself receive and store visitor uploads.
- The upload form runs as a Google Apps Script web app and saves files into the folder ID configured in `apps-script/Code.gs`.
- The folder must remain private. Do not share the folder publicly.
- Public upload forms can be abused. The sample checks PDF extension/MIME type and a 10 MB limit, but these checks are not a full malware scanner or robust anti-spam system. Monitor the folder and disable the deployment if abused.
- Google may restrict anonymous web-app access depending on account or organization settings. If the "Anyone" access option is unavailable, use a Google Form with file upload (respondents may need to sign in) or another approved service.

## Part A — Make a private Drive folder
1. In Google Drive, create a folder named `Profit Reads PDF Submissions`.
2. Keep its sharing set to **Restricted**.
3. Open the folder and copy the ID from its URL. It is the text after `/folders/`.
4. Keep this ID private; paste it only into your own Apps Script project, not into public HTML.

## Part B — Create the upload web app
1. Visit https://script.google.com and create a **New project**.
2. Rename it `Profit Reads PDF Uploads`.
3. Open `apps-script/Code.gs` from this package. Copy all its contents into the Apps Script editor's `Code.gs`, replacing the starter code.
4. In `Code.gs`, replace `PASTE_YOUR_PRIVATE_DRIVE_FOLDER_ID_HERE` with your folder ID.
5. Click **+** beside Files, choose **HTML**, name the file `Upload` (without `.html`), then copy the contents of `apps-script/Upload.html` into it.
6. Save the project.
7. From the function dropdown, select `setup` and click **Run**. Review the permissions and authorize the script to create files in your Drive folder. The setup function verifies the folder and records its ID.
8. Click **Deploy → New deployment**. Choose **Web app**.
9. Set **Execute as** to **Me**. For access, choose **Anyone** only if available and appropriate for your account. This means anyone with the web app URL may submit files to your Drive, so treat that URL as public and monitor submissions.
10. Click **Deploy** and copy the deployed web app URL ending in `/exec`. Do not use the `/dev` test URL.
11. Test the URL in a private/incognito window. Submit a harmless test PDF and confirm it appears in your private Drive folder.

## Part C — Connect it to GitHub Pages
1. Open `script.js` in this package.
2. Replace `PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE` with your deployed `/exec` URL.
3. Upload the updated `index.html`, `styles.css`, and `script.js` to the root of your existing GitHub repository, replacing the old files. Also upload the `apps-script` folder for your own reference if you wish; it is not needed by GitHub Pages.
4. Wait for GitHub Pages to update. The “Open PDF submission form” button on the portal will open your Apps Script form.
5. Your public PDF downloads continue to work from the `resources/` folder. Edit `index.html` to change the sample resource names and links to your real PDF files.

## Google Sites
Embed your GitHub Pages URL using **Insert → Embed → By URL**. The upload button opens the Apps Script form in a new tab. You can also embed the deployed Apps Script web app directly into Google Sites using **Insert → Embed → By URL**.

## Updating the app
If you change the Apps Script server code, go to **Deploy → Manage deployments → Edit**, choose a new version, and deploy the update. The deployed `/exec` URL normally remains the same when you edit an existing deployment.

Official documentation:
- Apps Script web apps: https://developers.google.com/apps-script/guides/web
- Apps Script Drive service: https://developers.google.com/apps-script/reference/drive

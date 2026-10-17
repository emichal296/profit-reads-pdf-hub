# Profit Reads PDF Resource Hub — computer uploads to Google Drive

Visitors can download your published PDFs and submit PDFs from their own devices through a Google Form.

## Visitors select files from their computer
When a visitor opens the Google Form and reaches the File upload question, they can select a PDF using File Explorer on Windows or Finder on Mac. They do not need to put the PDF in their own Google Drive first.

**Important:** Google Forms file-upload questions require respondents to sign in to a Google Account. Google stores submitted files in the Google Drive of the account that owns the form.

## 1. Create the Google Form
1. Sign in to the Google account that should own Profit Reads submissions.
2. Go to https://forms.google.com and create a blank form.
3. Title it `Profit Reads — Submit a PDF`.
4. Add a question named `Upload your PDF` and change the question type to **File upload**.
5. Allow **PDF** file types. Choose one file per response and a suitable file-size limit.
6. Add a description: `Submit a PDF for review. Do not submit private or sensitive documents. Submissions are reviewed before anything is published.`
7. Google Forms creates an upload folder in the form owner's Drive. Keep that folder private.
8. Copy the responder link (not the editing link).

## 2. Connect the form to GitHub
1. Open `form-config.js`.
2. Replace `PASTE_YOUR_GOOGLE_FORM_RESPONDER_LINK_HERE` with the responder link, keeping the quotation marks.
3. Save the file.
4. Upload/replace `form-config.js` in your GitHub repository and commit the change.
5. Test the **Open PDF submission form** button on your published website.

## 3. Add downloadable PDFs
1. Put your own downloadable PDFs in `resources/`.
2. Edit `index.html` to update resource titles, descriptions, and file paths.
3. Upload the PDFs and updated `index.html` to GitHub.

## Privacy
- Keep the Google Drive upload folder private.
- Review every submitted PDF before publishing it.
- Do not ask visitors to submit sensitive personal information.
- Only publish PDFs you own or have permission to distribute.
- Anonymous uploads are not supported by Google Forms' file-upload question; a different upload service/backend would be needed.

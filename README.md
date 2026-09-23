# LUKAS TECH SOLUTIONS — GitHub + Cloudflare Pages package

Static, dependency-free website prepared around the September 2026 immigration supplementary-document requirements discussed for the project.

## BEFORE DEPLOYMENT — REQUIRED

Open `assets/config.js` and replace:

`REPLACE BEFORE DEPLOYMENT — current legally authorised professional address`

with the **current professional / physical address that you can legally document for the immigration file**. Do not publish the old coworking address unless it is still valid and supported by the documents you will submit.

Also verify email, phone, NIE, LinkedIn and domain.

## GitHub upload

1. Create a new GitHub repository (for example `lukas-tech-solutions`).
2. Upload **the contents of this folder**, not the ZIP itself.
3. Commit the files.

## Cloudflare Pages

1. Cloudflare → Workers & Pages → Create → Pages → Connect to Git.
2. Select your GitHub repository.
3. Framework preset: **None**.
4. Build command: leave blank.
5. Build output directory: `/` (repository root).
6. Deploy.
7. Add custom domain: `lukastechsolutions.es`.
8. Confirm HTTPS works and `www`/apex behaviour is what you want.

## Form behaviour

`request-service.html` is intentionally serverless. After all required fields and the three independent checkboxes are completed, the browser opens the visitor's email application with a structured service request addressed to the business email.

This is useful as a functional pre-contractual flow without operating a paid service or payment gateway before the self-employment authorisation is granted.

## Important

This package is designed to address the website points in the administrative request, but it does not guarantee approval and is not a substitute for review by a Spanish lawyer/gestor for the final legal wording or the rest of the immigration evidence.

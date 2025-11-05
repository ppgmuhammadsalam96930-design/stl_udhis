STL-UDHIS Final Package - README_CALL

Files in this package:
- index.html              (built from your blueprint with safe meta placeholders)
- apply_hashes_module.js  (client-side module to read meta hashes and EmailJS IDs)
- README_CALL.txt         (this file)

How to use:
1) Place these files into the root of your repository (or overwrite existing index.html).
2) Locally inject hashes & EmailJS IDs using your apply_hashes script:
   - Use your local apply_hashes_manual_max.js (or the interactive apply_hashes.js)
     to insert hashed passphrases and EmailJS service IDs into index.html meta tags.
   - Example (local, not public):
     node apply_hashes_manual_max.js
   - After running, index.html's <head> will contain meta tags like:
     <meta name="stl-pass-user" content="...">
     <meta name="stl-email-primary" content="service_ond1bqz">

3) Commit and push to GitHub AFTER you have injected hashes (do NOT commit plaintext files).
   Recommended workflow:
     git add index.html
     git commit -m "Add STL-UDHIS final index with injected secure hashes"
     git push

Notes:
- apply_hashes_module.js is safe to include in public repo; it only reads meta tags.
- Do NOT include any file that contains plaintext passphrases or private keys in the repo.
- If you need help running the local apply_hashes script, I can provide step-by-step commands.


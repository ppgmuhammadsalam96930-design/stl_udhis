Index HTML prepared: index.html

IMPORTANT SECURITY NOTE
- The file does NOT contain any plaintext passphrases.
- You MUST run the included Node script 'apply_hashes.js' locally to embed hashes derived from your passphrases.
- Do NOT hardcode plaintext passphrases into distributed files. If you must share passphrases with buyers, deliver them out-of-band (e.g., email/WhatsApp) and require buyers to change them on first run.

How to embed your passphrase hashes (recommended, local-only):
1. Move 'index.html' and 'apply_hashes.js' to the same folder on your local machine.
2. Run: node apply_hashes.js
3. Follow prompts and enter the passphrases when asked:
   - 'user'  => passphrase used to unlock user's personal API key (chat AI)
   - 'dev'   => passphrase that unlocks developer-only features
   - 'backup'=> backup/universal passphrase
4. The script will compute SHA-256(base64) for each entered passphrase and replace placeholders in index.html.
5. Verify index.html works locally: open in a browser and test passVerifier.isHashConfigured() via DevTools.

Passphrases you mentioned (do NOT paste these into files yourself; run the script locally):
1) n4j1bw4h1du554l4m  (user)
2) 27091969XXn4j1bw4h1du554l4mXX  (dev)
3) pl34s3b4ckup  (backup)

If you want, I can also:
- produce a zip containing index.html and apply_hashes.js for download, or
- show you exact commands to run tests in browser console to verify verifier behavior.

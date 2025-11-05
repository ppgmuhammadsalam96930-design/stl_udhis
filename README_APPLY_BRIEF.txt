STL-UDHIS Final Sync - Mobile Compact + Splash

Files:
- index.html                      (built from your blueprint, mobile-compact, splash included)
- apply_hashes_module_with_placeholders.js   (client-side module, safe)
- README_APPLY_BRIEF.txt

Notes:
- Meta placeholders for passphrases are set to "(kosong)". Replace them with hashed base64 values via your local apply_hashes script.
- EmailJS service IDs have been populated with:
  - service_ond1bqz
  - service_xtt8prj
  - service_s82nwco
- To inject hashes locally, use apply_hashes_manual_max.js (local) or the interactive apply_hashes.js.
- After injection, verify <meta> tags in the <head> contain the base64 SHA-256 hashes and email service IDs.
- Remove any local files that contain plaintext passphrases before committing.

Quick test:
1) Open index.html locally in browser (or copy to repo as index.html).
2) Open console and run: STLUDHIS.debug();
3) Use STLUDHIS.showStatus() to display a temporary on-screen status.


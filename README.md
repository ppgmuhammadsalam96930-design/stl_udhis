# STL-UDHIS Assistant — Secure Frontend Blueprint

This repository contains the **secure, modular, and extensible** frontend of **Simply Teacher Life — UDHIS AI Assistant**.

## Overview
STL-UDHIS Assistant integrates advanced frontend security and privacy layers:
- Non-extractable AES-GCM encryption of API keys
- Memory-only ephemeral storage mode
- Worker-based PBKDF2 derivation
- IndexedDB passphrase protection
- Triple-click handling and reduced-motion fallback
- EmailJS multi-verifier integration

## Structure
```
stl-udhis-repo-ready-final/
├── index.html
├── STL-UDHIS Assistant full Proteksi_P2P3Patches.txt
├── assets/
├── js/
├── css/
└── README.md
```

## Local Testing
Open `index.html` in a browser and check the console for:
```
[UDHIS-Secure] P2+P3 patches applied
```

## Security
Before pushing to GitHub:
- Remove real API keys (`AIza`, `sk-`, etc.)
- Avoid EmailJS private keys in commits
- Use `.env` for credentials

## License
© 2025 Najib Wahidus Salam — MIT License

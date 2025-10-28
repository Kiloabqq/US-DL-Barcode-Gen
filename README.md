# BarcodeGen

A browser-based PDF417 barcode generator for U.S. driver's licenses. Built for educational and prototyping purposes only.

## 🚀 Features

- Dynamic form rendering for supported states (NM, CO)
- Sample license data generation
- ANSI AAMVA payload builder
- PDF417 barcode rendering and PNG download
- Audit overlay and payload export
- Modular state support for easy expansion

## 🧠 Purpose

This project is intended for **educational use only** — to explore barcode generation, form workflows, and modular data structures. It is **not** intended for production use, official documentation, or any form of identity replication.

## 📦 Setup

Clone the repo and open `index.html` in your browser:

```bash
git clone https://github.com/Neo/barcodegen.git
cd barcodegen

🛠️ Add Your Own State
To add a new state:
- Create a new file in states/ (e.g. tx.js)
- Define DL_STATES["TX"] with defaults and generateICN()
- Add <option value="TX">Texas</option> to the dropdown in index.html


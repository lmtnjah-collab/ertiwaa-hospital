# Ertiwaa Hospital — Resource Management System

A responsive, browser-based educational simulation of Operating System concepts applied to a hospital. Rebuilt from the original university project report and Java logic.

## Run locally
Open `index.html` in a browser. No dependencies, server, or build step are required.

## Deploy on GitHub Pages
1. Create a new public GitHub repository.
2. Upload `index.html`, `style.css`, `app.js`, `entry.js`, and `README.md` to its root.
3. In **Settings → Pages**, choose **Deploy from a branch**, `main`, `/ (root)` and save.
4. Open the Pages URL GitHub provides once deployment completes.

## Modules
- **Patient Records:** in-browser CRUD, search, edit, delete.
- **Priority Scheduling:** non-preemptive, highest priority first among arrived patients, including idle periods, deterministic ties, waiting and turnaround times, Gantt timeline.
- **Room Allocation:** original Java `calculateRequiredSize()` mapping and Best Fit selection of the smallest available room; release rooms.
- **Medical Devices:** original list of five devices and an FCFS queue with device-specific blocking and release.

## Important fidelity notes
The original project report shows Java implementations and UI screenshots, not full HTML/CSS/JS source files. This is a **new front-end implementation**, not recovered original source. The original Java room-size mapping (1→25, 2→20, 3→15, 4→12, all others→10) is preserved verbatim, even though the report's priority scheduler uses a 1–10 scale with higher numbers representing higher urgency. That mismatch should be reconciled before using the prototype for any real-world decisions. The original Java `DeviceManager.requestDevice()` allocated the first available device; this version adds an explicit per-device FCFS request queue for the demonstration.

All data is synthetic, saved in browser `localStorage`. No backend, authentication, persistent shared database, or actual patient records. **Not suitable for clinical use.**

## Interface
The responsive interface uses the original light teal, muted blue, and white identity, with shared styling in `style.css`. `entry.js` provides role selection, staff demo login, patient appointment booking, and confirmation. The five dashboard modules remain interactive using `app.js`.

**Important:** The report contains screenshots, not original HTML/CSS source. These screens are visually inspired reconstructions, not pixel-exact copies. Login and appointments are **demonstrations only**, with no server, secure authentication, or real appointment database. Do not enter real patient information.

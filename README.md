# SHIBUBU Website Revamp

## Project Overview
The website has been revamped with a modern, "elite" design using Vite + React + Tailwind CSS + Framer Motion. 

## Build Output
The production-ready build is located in the **`build_output`** folder. You can deploy the contents of this folder to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## Development Setup
Due to file permission issues encountered during setup, `node_modules` in the root directory might be in an inconsistent state.

To develop locally:

1.  **Fix Permissions (Run in Terminal)**:
    ```bash
    sudo rm -rf node_modules package-lock.json
    npm install
    ```
2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) in your browser.

3.  **Build for Production**:
    ```bash
    npm run build
    ```
    This will generate the `dist` folder (or `build_output` if configured).

## Key Features
- **Elite Design**: Dark theme with glowing accents.
- **Micro-animations**: Smooth scroll reveals and hover effects.
- **Responsive**: Optimized for all devices.

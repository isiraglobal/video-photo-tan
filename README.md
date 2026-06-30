# Working Stiff Films UI Clone

This repository is a high-fidelity clone of the Working Stiff Films website (`workingstifffilms.com`), capturing its premium layout, typography, smooth horizontal panel scrolling, and custom page transitions. 

In accordance with specifications, all copyrighted third-party media assets (commercial videos, Prismic images, Lottie character animations, and video popups) have been stripped or disabled, leaving clean empty placeholders while keeping the interactive shell fully functional.

## Key Features
- **Clean Routing**: Integrated local URL resolution so clean navigation links work perfectly (e.g. `/work`, `/about`, `/news`, `/contact`, `/capabilities`, and the 16 project detail subpages).
- **Horizontal Scroll & Slide-In Animations**: Uses GSAP (ScrollTrigger & ScrollSmoother) for premium scroll-linked movements and item slide-ins.
- **AJAX Transitions**: Replicates the original seamless, curtain-wipe transitions between pages using `smoothstate.js`.
- **Media-Stripped UI Shell**: Layout blocks, aspect ratios, and design aesthetics are fully intact but contain neutral/empty media fields.

## Tech Stack
- **Frontend**: HTML5, CSS3 (normalize, styles-custom), Vanilla Javascript (ES Modules)
- **Animation**: GSAP (GreenSock), ScrollTrigger, ScrollSmoother, SplitText, CustomEase
- **Local Dev Server**: Node.js, Express (for clean routing and avoiding CORS AJAX restrictions)

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/isiraglobal/video-photo-tan.git
   cd video-photo-tan
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3050/
   ```

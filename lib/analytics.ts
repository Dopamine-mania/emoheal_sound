// This file handles the initialization of Google Analytics (GA).

// These properties are defined by the GA script we are about to inject.
declare global {
    interface Window {
        GA_TRACKING_ID?: string; // GA ID will be set here from index.html
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}

// The GA Tracking ID is now read from a global window variable set in index.html.
// This approach is necessary because this project does not use a build tool like Vite
// that can inject environment variables.
const GA_TRACKING_ID = window.GA_TRACKING_ID;

/**
 * Initializes Google Analytics by injecting the necessary scripts into the document head.
 * It will only run if the GA_TRACKING_ID is provided.
 */
export const initGA = () => {
    // 1. Do not initialize if the tracking ID is not set.
    if (!GA_TRACKING_ID) {
        console.warn('Google Analytics tracking ID is not set in window.GA_TRACKING_ID. Tracking is disabled.');
        return;
    }

    // 2. Prevent re-initialization if the script already exists.
    if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"]`)) {
        return;
    }

    // 3. Inject the main Google Analytics script.
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // 4. Inject the inline script to initialize the dataLayer and configure gtag.
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}');
    `;
    document.head.appendChild(inlineScript);

    console.log(`Google Analytics initialized with ID: ${GA_TRACKING_ID}`);
};

// This file handles the initialization of Google Analytics (GA).

// As requested, we are using `process.env.NEXT_PUBLIC_GA_ID`.
// For this to work in a Vite project, you MUST expose this variable to the client
// in your `vite.config.ts` file. See the explanation in the chat for the code.
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Fix: Moved `declare global` to the top level of the file.
// An ambient module declaration is only allowed at the top level in a file.
// These properties are defined by the GA script we are about to inject.
declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}

/**
 * Initializes Google Analytics by injecting the necessary scripts into the document head.
 * It will only run if the GA_TRACKING_ID is provided as an environment variable.
 */
export const initGA = () => {
    // 1. Do not initialize if the tracking ID is not set.
    if (!GA_TRACKING_ID) {
        console.warn('Google Analytics tracking ID (NEXT_PUBLIC_GA_ID) is not set in environment variables. Tracking is disabled.');
        return;
    }

    // 2. Prevent re-initialization if the script already exists.
    if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"]`)) {
        return;
    }

    // 4. Inject the main Google Analytics script.
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // 5. Inject the inline script to initialize the dataLayer and configure gtag.
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

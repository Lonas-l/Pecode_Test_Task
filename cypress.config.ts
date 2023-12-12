import {defineConfig} from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
        baseUrl: "https://makeup.com.ua/ua/",
    },
    video: true,
    videosFolder: 'reports/mochawesome/videos',
    screenshotsFolder: 'reports/mochawesome/screenshots',
    reporter: 'cypress-mochawesome-reporter',
    "reporterOptions": {
        "reportDir": "reports/mochawesome",
        "videoOnFailOnly": true,
        "charts": true,
        "overwrite": true,
        "reportPageTitle": "Cypress Automation Practice",
        "embeddedScreenshots": true,
    },
    trashAssetsBeforeRuns: true,
});

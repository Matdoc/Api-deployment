import IndexController from '../controllers/index.js';

export function setRoutes(app) {
    const indexController = new IndexController();

    // Dynamically determine the base path for Netlify or local environment
    const basePath = process.env.IS_NETLIFY ? '/.netlify/functions/app' : '';

    // Define the route with the base path
    app.get(`${basePath}/`, indexController.getIndex.bind(indexController));
}

import IndexController from '../controllers/index.js';

export function setRoutes(app) {
    const indexController = new IndexController();

    app.get('/', indexController.getIndex.bind(indexController));
}


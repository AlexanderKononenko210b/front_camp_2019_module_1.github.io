import './assets/style.css';
import RootController from './controllers/rootController';

window.onload = function () {
    const rootController = new RootController();
    rootController.initiate();
};

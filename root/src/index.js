import './assets/style.css';
import RootController from './controllers/rootController';

window.onload = function () {
    let rootController = new RootController();
    rootController.initiate();
};

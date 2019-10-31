const lazyModules  = {
    errorHandler: () => import('./errorHandlerSvc.js'),
};

export default class LazyLoaderSvc {
    static get lazyModules() {
        return lazyModules;
    }
}
const lazyModules  = {
    errorHandler: () => import('./errorHandlerSvc.js'),
};

export default class LazyLoader {
    static get lazyModules() {
        return lazyModules;
    }
}
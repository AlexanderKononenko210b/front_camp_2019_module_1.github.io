import fetchWrapperSvc from './fetchWrapperSvc';
import lazyLoaderSvc from './lazyLoaderSvc';
import ErrorGeneratorSvc from './errorGeneratorSvc';
import requestFactorySvc from '../factory/requestFactory';

export default async function dataSvc(request) {

    try{
        const generator = new ErrorGeneratorSvc();
        throw new Error(generator.generate().message);
    } catch(error) {
        lazyLoaderSvc.lazyModules.errorHandler().then( errorHandler => {
            const instance = new errorHandler.ErrorHandlerSvc(error);
            instance.show(error);
            instance.log(error);
        });
    } finally {
        return await fetchWrapperSvc(request);
    }
}

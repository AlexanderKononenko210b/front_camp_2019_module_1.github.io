import fetchWrapperSvc from './fetchWrapperSvc';
import lazyLoaderSvc from './lazyLoaderSvc';
import ErrorGeneratorSvc from './errorGeneratorSvc';

export default async function dataSvc(url) {

    try{
        const generator = new ErrorGeneratorSvc();
        throw new Error(generator.generate().message);
    } catch(error) {
        lazyLoaderSvc.lazyModules.errorHandler().then( errorHandler => 
            errorHandler.errorHandlerSvc(error));
    } finally {
        return await fetchWrapperSvc(url);
    }
}

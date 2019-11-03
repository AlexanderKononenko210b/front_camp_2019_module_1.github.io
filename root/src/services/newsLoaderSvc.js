import fetchWrapper from './fetchWrapperSvc';
import ErrorGenerator from './errorGeneratorSvc';

export default async function newsLoader(request) {

    try{
        const generator = new ErrorGenerator();
        throw new Error(generator.generate().message);
    } catch(error) {
        //lazyLoader.lazyModules.errorHandler().then( errorHandler => {
            //const instance = new errorHandler.ErrorHandler(error);
            //instance.show(error);
            //instance.log(error);
        //});
        const module = await import('./errorHandlerSvc.js');
        const errorHandler = module.default;
        const handler = new errorHandler(error);
        handler.show();
        handler.log();
    } finally {
        return await fetchWrapper(request);
    }
}

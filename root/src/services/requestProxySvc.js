import createRequest from './factory/requestFactorySvc';
import ProxyPolyfill from 'proxy-polyfill/src/proxy';

const handler = {
    apply: function(target, thisArg, argList) {
        if(argList.includes("GET")) {
            console.log(Object.getOwnPropertyDescriptors({...argList}));
        }
        return target.apply(thisArg, argList);
    }
};

const NewProxy = new ProxyPolyfill();

export const requestProxy  = new NewProxy(createRequest, handler);
import createRequest from './factory/requestFactorySvc';

let handler = {
    apply: function(target, thisArg, argList) {
        if(argList.includes("GET")) {
            console.log(Object.getOwnPropertyDescriptors({...argList}));
        }
        return target.apply(thisArg, argList);
    }
};

export let requestProxy  = new Proxy(createRequest, handler);
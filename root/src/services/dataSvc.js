import fetchWrapperSvc from './fetchWrapperSvc';

export default async function dataSvc(url) {
    return await fetchWrapperSvc(url);
}

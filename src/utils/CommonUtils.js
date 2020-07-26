export const isEmptyObject = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;

export const objectToQueryString = (obj) => Object.keys(obj).map((key) => (`${key}=${obj[key]}`)).join('&');

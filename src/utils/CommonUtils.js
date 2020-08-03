export const isEmptyObject = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;

export const objectToQueryString = (obj) => Object.keys(obj).map((key) => (`${key}=${obj[key]}`)).join('&');

export const checkYoutubeUrl = (url) => {
  const indexOfYoutube = url.indexOf('youtube');
  return indexOfYoutube !== -1;
};

export const extractVideoIdFromYoutubeUrl = (url) => {
    console.log(url);
  const lastSlashIndex = url.lastIndexOf('/');
  console.log(lastSlashIndex);
  return url.substring(lastSlashIndex + 1);
};

export function getFormBody(params) {
  let FormBody = [];
  for (let property in params) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(params[property]);
    FormBody(encodedKey + '=' + encodedValue);
  }
  return FormBody.join('&');
}

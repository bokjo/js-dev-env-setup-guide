/**
 * Created by bstojchevski on 5/17/2017.
 */
export default function getBaseUrl() {
  return getQueryStringParameterByName("useMockApi") ? "http://localhost:3001/" : "/";
}

// StackOverFlow FTW
function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;

  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);

  if (!results) return null;
  if (!results[2]) return "";

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

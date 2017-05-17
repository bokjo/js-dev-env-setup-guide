/**
 * Created by bstojchevski on 5/17/2017.
 */
export default function getBaseUrl() {
  const inDevelopment = window.location.hostname === "localhost";
  return inDevelopment ? "http://localhost:3001/" : "/";
}

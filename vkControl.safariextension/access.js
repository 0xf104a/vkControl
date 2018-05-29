const allowed=["/im","/audios<YOUR_ID_HERE>"];
var loc=window.location.pathname;
console.log("VKControl:checking access...");
if((allowed.indexOf(loc) == -1)){
  console.log("***Access denied***");
  window.location.replace("https://vk.com/im");
}else{
  console.log("***Access granted***");
}

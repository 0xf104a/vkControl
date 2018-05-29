const allowed=["/im","/audios358995871"];
var loc=window.location.pathname;
console.log("VKReloaded light:checking access...");
if((allowed.indexOf(loc) == -1)){
  console.log("***Access denied***");
  window.location.replace("https://vk.com/im");
}else{
  console.log("***Access granted***");
}

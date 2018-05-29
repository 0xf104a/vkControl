const allowed=["/im"];
var loc=window.location.pathname;
console.log("VKControl:checking access...");
if((allowed.indexOf(loc) == -1)||(loc.substring(0,7)!="/audios")){
  console.log("***Access denied***");
  window.location.replace("https://vk.com/im");
}else{
  console.log("***Access granted***");
}

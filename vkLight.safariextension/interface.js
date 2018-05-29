Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
function removeById(Id){
  element=document.getElementById(Id);
  if(element){
    element.outerHTML = ""
    console.log(Id+" [OK]")
  }else{
    console.log(Id+" [IGNORED]")
  }
}
function addChildToId(Id,VNode){
  child=document.getElementById(Id);
  if(child){
    child.appendChild(VNode);
    console.log(Id+" [OK]");
  }else{
    console.log(Id+" [FAILED]");
  }
}
console.log("***VKLight is enabled***")
console.log("Removing menu elements...")
removeById("l_pr");
removeById("l_nwsf");
removeById("l_fr");
removeById("l_fav");
removeById("l_apm");
console.log("DONE!");
logo=document.getElementsByClassName("top_home_link")[0];
if(logo){
  logo.href="/im"
  console.log("Reset logo link [OK]");
}else{
  console.log("Reset logo link [IGNORED]");
}
console.log("Adding widgets...")
clock=document.getElementById("navbar_clock");
if(clock){
  console.log("Clock [IGNORED]");
}else{
  var clock_div = document.createElement('div');
  clock_div.id="navbar_clock";
  clock_div.className="head_nav_item fl_r";
  addChildToId("top_nav",clock_div);
}

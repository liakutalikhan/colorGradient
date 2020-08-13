$(document).on("keydown", function(e) {
    var kc = e.which || e.keyCode;
    console.log(kc);
    if (e.ctrlKey && e.shiftKey && kc == 73) {
        e.preventDefault();
        return false;        
    } 
    else if (e.ctrlKey && e.shiftKey && kc == 73) {
        e.preventDefault();
        return false;        
    }
    else if (kc == 123) {
        e.preventDefault();
        return false;       
    }
});
$(document).on("contextmenu", function(e) {
    e.preventDefault();
    return false;
});
var checkStatus;
var element = new Image();
Object.defineProperty(element, 'id', {
  get: function() {
    $("body,html").hide();
    throw new Error("Dev tools checker");
  }
});
requestAnimationFrame(function check() {
  $("body,html").show();
  console.dir(element);
  requestAnimationFrame(check);
});
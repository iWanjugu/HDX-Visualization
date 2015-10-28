$(function(){
  function loadJSON(callback) {
      var xobj = new XMLHttpRequest();
          xobj.overrideMimeType("application/json");
          xobj.open('GET', 'unhcr.json', true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
              // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
              callback(xobj.responseText);
            }
      };
      xobj.send(null);
   }
   function init() {
     var actual_JSON = [];
     loadJSON(function(response) {
       // Parse JSON string into object
      actual_JSON = JSON.parse(response);
    });
    return actual_JSON;
  }
  console.log(init());
});

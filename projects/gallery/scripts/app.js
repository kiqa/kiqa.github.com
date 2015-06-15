function showPic(kellypic){
     var source = kellypic.getAttribute("href");
     //alert (source);
     var placeholder = document.getElementById("placeholder");
     placeholder.setAttribute("src", source);
     var text = kellypic.getAttribute("title");
     var description = document.getElementById("description");
     description.firstChild.nodeValue = text;
 }
 
 
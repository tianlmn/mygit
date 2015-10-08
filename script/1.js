    function countnodechild(){
        var i = document.getElementsByTagName("body")[0];
        alert(i.childNodes.length);
    }
    function showPic(a){
        var h = a.getAttribute("href");
        var title = a.getAttribute("title");
        var mypic = document.getElementById("mypic");
        var discription = document.getElementById("discription");
        mypic.setAttribute("src",h);
        discription.firstChild.nodeValue=title;
    }

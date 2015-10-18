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
    function openLayer(url){
        window.open(url,"new","width=320,height=480");
    }
    function addLoadEvent(f)
    {
        var oldEventHandle = window.onload;
        if(typeof window.onload == 'function')
        {
            window.onload = function(){
                oldEventHandle();
                f();
            }
        }
        else
        {
            window.onload = f;
        }
    }
    function insertAfter(e,target)
    {
        var par = target.parentNode;
        if(par.lastChild == target)
        {
            par.appendChild(e);
        }
        else
        {
            par.insertBefore(e,target.nextSibling);
        }
    }
    function prepareImageGallery(){
        var links = document.getElementsByTagName('a');
        for(var i = 0;i<links.length;i++)
        {
            links[i].onclick = function(){
                showPic(this);
                return false;
            }
            //links[i].onkeypress = links[i].onclick;
        }
        
    }
    function prepareMyImage()
    {
        var imageGallery = document.getElementById("imageGallery");
        var img = document.createElement("img");
        var p = document.createElement("p");
        var discription = document.createTextNode("Choose an image");

        img.setAttribute("id","mypic");
        p.setAttribute("id","discription");
        p.appendChild(discription);

        insertAfter(img,imageGallery);
        insertAfter(p,img);
    }
    
    addLoadEvent(prepareImageGallery);
    addLoadEvent(prepareMyImage);
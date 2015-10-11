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
    function Init(){
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

    addLoadEvent(Init);

// This is included and executed in the inspected page
var postedflag = false;
function inserted() {
    console.log("Here is addcomments")
    // document.addEventListener('mousemove', this.log);
    // document.removeEventListener('mousemove', this.log);
    // document.removeEventListener('scroll', this.layout);
    // document.removeEventListener('click', this.toggle);
    document.body.style.cursor = "url";
    document.addEventListener("click",handler);
    function handler(event) {
        if(postedflag) {
            postedflag = false;
            return;
        }
        postedflag = true;
        event.stopPropagation();
        event.preventDefault();
        var x = event.pageX, y = event.pageY;
        var clientx = event.clientX, clienty = event.clientY;
        elementMouseIsOver = document.elementFromPoint(clientx, clienty);
        console.log('event handler',elementMouseIsOver);
        function getDIVparent(el) {
            let ptr = el;

            tag = ptr.tagName;
            // if(!tag){
            //     tag = ptr.nodeName;
            // }

        
            while(tag != 'DIV') {
                ptr = ptr.parentElement;
                tag = ptr.tagName;
                // if(!tag){
                //     tag = ptr.nodeName;
                // }
            }
            return ptr;
        }
        elementMouseIsOver = getDIVparent(elementMouseIsOver);
        elementMouseIsOver.classList.add("foraddcommentswindow")
        console.log('event handler',elementMouseIsOver);
        elecontent = `<div style="
        width: 470px;
        display: flex;
        flex-direction: column;
        background-color: #252C37;
    ">
            <div id="commentpost_header" style="
        display: flex;
        background-color: #131820;
        height: 58px;
        padding-bottom: 10px;
        padding-top: 10px;
    ">
                <div class="col" style="
        width: 40px;
        /* height: 40px; */
        margin-right: 10px;
        padding: 11px;
    ">
                    <img src="avarta.png" style="
        width: 100%;
        height: 100%;
        border-radius: 50%;
    ">
                </div>		
                <div class="col" style="
        margin: auto 50px auto 0px;
    ">
                    <p style="
        color: white;
        font-family: none;
        font-size: 15px;
    ">Max S.</p>
                </div>		
                <div class="col" style="
        padding: 0px;
        margin: auto 10px auto 10px;
        /* margin-top: auto; */
        /* margin-bottom: auto; */
    ">
                    <button class="addcomment_cancel" style="
        color: #AFD0FF;
        background-color: inherit;
        border-radius: 10px;
        border: none;
        font-size: 17px;
    ">CANCEL</button>
                </div>		
                <div class="col" style="
        /* margin-top: auto; */
        /* margin-bottom: auto; */
        margin: auto 10px auto 10px;
    ">
                    <button class="addcomment_draw" style="
        color: white;
        background-color: #252C37;
        border: none;
        font-size: 15px;
        border-radius: 12px;
        padding: 8px 15px;
    ">DRAW</button>
                </div>		
                <div class="col" style="
        /* margin-top: auto; */
        /* margin-bottom: auto; */
        margin: auto 10px auto 10px;
    ">
                    <button class="addcomment_post" style="
        color: white;
        background-color: #2982FF;
        border-radius: 12px;
        padding: 8px 15px;
        font-size: 15px;
        border: none;
    ">POST</button>
                </div>		
            </div>
            <div style="
        margin: auto 0px auto 0px;
        padding: 0px 10px 0px 10px;
        background-color: #252C37;
    "> 
                <textarea type="text" style="
        width: 90%;
        height: 38px;
        background-color: inherit;
        border: none;
        color: white;
        font-size: 19px;
    "></textarea>
            </div>
        </div>`        
        ele = document.createElement('div');
        ele.classList.add("addcommentswindow")
        ele.style.position = "absolute";
        react = ele.getBoundingClientRect();
        X = y-elementMouseIsOver.offsetTop;
        Y = x-elementMouseIsOver.offsetLeft;
        console.log(react, y, x);
        console.log(elementMouseIsOver.offsetTop,elementMouseIsOver.offsetLeft, elementMouseIsOver.offsetWidth, elementMouseIsOver.offsetHeight);
        // left = ((X/elementMouseIsOver.offsetWidth) * 100).toString() + "%";
        // top = ((Y/elementMouseIsOver.offsetHeight) * 100).toString() + "%";
        
        // ele.style.top = top;
        // ele.style.left = left;
        ele.style.top = X.toString() + 'px';
        ele.style.left = Y.toString() + 'px';
        ele.style.zIndex = 900000;
        elementMouseIsOver.style.position = "relative";
        // console.log(left, top);
        // ele.style.top = y-elementMouseIsOver.style.top;
        // ele.style.left = x-elementMouseIsOver.style.left;
        // ele.style.zIndex = 90;
        ele.innerHTML = elecontent;
        console.log(elementMouseIsOver.style.top,elementMouseIsOver.style.left, x, y)
        elementMouseIsOver.appendChild(ele);
        // document.body.appendChild(ele);
        ele.style.position = "absolute";
            // document.addEventListener('mousemove', this.log);
        document.removeEventListener('click', handler);
        document.addEventListener('click', nothing)
        function nothing(event) {
            event.stopPropagation();
            event.preventDefault();
        }
        cancel = ele.querySelector('.addcomment_cancel');
        draw = ele.querySelector('.addcomment_draw');
        post = ele.querySelector('.addcomment_post');
        post.addEventListener('click', addcomment);
        cancel.addEventListener('click', cancelcomment);
        console.log(cancel, draw, post)
        function cancelcomment(e) {
            console.log(e)
            console.log('click cancel')
            post.removeEventListener('click', addcomment);
            cancel.removeEventListener('click', cancelcomment);
            document.removeEventListener('click', nothing);
            document.addEventListener('click', handler);
            document.querySelector('.addcommentswindow').remove();    
        }
        function addcomment() {
            
        }
       
    }
	console.log('External script attached');
}
inserted();
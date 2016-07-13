 <!--
     	    var imgObj = null;
            var animate ;
	    var clicks = 1;            
	    var down = 0;
            function init(){
		
               imgObj = document.getElementById('myImage');
               imgObj.style.position= 'relative'; 
               imgObj.style.left = '0px'; 
		img.Obj.style.top = '0px';
            }
            
            function moveRight(){
              // imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
		imgObj.style.top = parseInt(imgObj.style.top) + 5 + 'px';
		down = down + 1;
               animate = setTimeout(moveRight,20); // call moveRight in 20msec
		if( down>100)
		{
			reset();
		}
            }

	    function stop(){
		clearTimeout(animate);
		imgObj.style.top = '0px';
		down = 0;
		}

            
	    function reset(){
	     	clearTimeout(animate);
		imgObj.style.top = '0px';
		down = 0;
		moveRight();
            }

	    function count(){
		clicks += 1;
	    };

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            if(down < 85 && down > 80)
	    alert('YOU WIN');
	    else
	    reset();
            break;
        case 38:
            alert('up');
            break;
        case 39:
            alert('right');
            break;
        case 40:
            alert('down');
            break;
    }
};
            window.onload =init;
         //-->

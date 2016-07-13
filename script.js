 <!--
	    var score = 0;
     	    var imgObj = null;
	    var imgObj2 = null;
            var animate1, animate2;
	    var clicks = 1;            
	    var down = 0;
	    var up = 0;
            function init(){	
               imgObj = document.getElementById('downArrow');
	       imgObj2 = document.getElementById('upArrow');
               imgObj.style.position= 'relative'; 
               imgObj.style.left = '0px'; 
	       img.Obj.style.top = '0px';
		img.Obj2.style.position = 'relative';
		img.Obj2.style.left = '105px';
		img.Obj2.style.top = '0px';	
            }
            
            function moveRight(){
              // imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
		imgObj.style.top = parseInt(imgObj.style.top) + 5 + 'px';
		down = down + 1;
               animate1 = setTimeout(moveRight,20); // call moveRight in 20msec
		if( down >100)
		{
			resetRow1();
		}
            }

	    function moveRow2(){
		imgObj2.style.top = parseInt(imgObj2.style.top) + 5 + 'px';
		up = up + 1;
		animate2 = setTimeout(moveRow2, 20);
		if (up > 100)
			resetRow2();
 	    }

	    function stop(){
		clearTimeout(animate1);
		clearTimeout(animate2);
		imgObj.style.top = '0px';
		imgObj2.style.top = '0px';
		down = 0;
		up = 0;
		}

            
	    function resetRow1(){
	     	clearTimeout(animate1);
		imgObj.style.top = '0px';
		down = 0;
		moveRight();
            }

	    function resetRow2() {
		clearTimeout(animate2);
		imgObj2.style.top = '0px';
		up = 0
		moveRow2();
	    }
	    function count(){
		clicks += 1;
	    };

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            if(down < 85 && down > 80)
	    {
		alert('You Score Down');
		score++;
	    }
	    else
	    resetRow1();
            break;
        case 38:
	    if(up < 85 && up > 80)
            {
	      alert('You Score Up');
	      score++;
	    }
	    else
	    resetRow2();
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

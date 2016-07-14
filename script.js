 <!--
	    var score = 0;
     	    var imgObj = null;
	    var imgObj2 = null;
	    var imgObj3 = null;
	    var imgObj4 = null;
            var animate1, animate2, animate3, animate4;
	    var clicks = 1;            
	    var down = 0;
	    var up = 0;
	    var left = 0;
	    var right = 0;
            function init(){	
               imgObj = document.getElementById('leftArrow');
	       imgObj2 = document.getElementById('upArrow');
	       imgObj3 = document.getElementById('downArrow');
	       imgObj4 = document.getElementById('rightArrow');
               imgObj.style.position= 'relative'; 
               imgObj.style.left = '0px'; 
	       imgObj.style.top = '0px';
		imgObj2.style.position = 'relative';
		imgObj2.style.left = '50px';
		imgObj2.style.top = '0px';	
		imgObj3.style.position = 'relative';
		imgObj3.style.left = '100px';
		imgObj3.style.top = '0px';
		imgObj4.style.position = 'relative';
                imgObj4.style.left = '100px';
                imgObj4.style.top = '0px';

            }
            
            function moveRow1(){
              // imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
		imgObj.style.top = parseInt(imgObj.style.top) + 5 + 'px';
		down = down + 1;
               animate1 = setTimeout(moveRow1,20); // call moveRight in 20msec
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

	    function moveRow3(){
                imgObj3.style.top = parseInt(imgObj3.style.top) + 5 + 'px';
                right = right + 1;
                animate3 = setTimeout(moveRow3, 20);
                if (right > 100)
                        resetRow3();
            }

   	    function moveRow4(){
                imgObj4.style.top = parseInt(imgObj4.style.top) + 5 + 'px';
                left = left + 1;
                animate4 = setTimeout(moveRow4, 20);
                if (left > 100)
                        resetRow4();
            }



	    function stop(){
		clearTimeout(animate1);
		clearTimeout(animate2);
		clearTimeout(animate3);
		clearTimeout(animate4);
		imgObj.style.top = '0px';
		imgObj2.style.top = '0px';
		imgObj3.style.top = '0px';
		imgObj4.style.top = '0px'
		down = 0;
		up = 0;
		right = 0;
		left = 0;
		}

            
	    function resetRow1(){
	     	clearTimeout(animate1);
		imgObj.style.top = '0px';
		down = 0;
		moveRow1();
            }

	    function resetRow2() {
		clearTimeout(animate2);
		imgObj2.style.top = '0px';
		up = 0;
		moveRow2();
	    }

            function resetRow3() {
                clearTimeout(animate3);
                imgObj3.style.top = '0px';
                right = 0;
                moveRow3();
            }

            function resetRow4() {
                clearTimeout(animate4);
                imgObj4.style.top = '0px';
                left = 0;
                moveRow4();
            }
	    function count(){
		clicks += 1;
	    };

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            if(down < 85 && down > 80)
	    {
		alert('You Score Left');
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
	    if(right < 85 && right > 80)
	    {
               alert('You score Right');
	       score++;
	    }
	    else
	    resetRow3();
            break;
        case 40:
	    if(left <85 && left > 80)
	    {
               alert('You Score Down');
	       score++;
            }
	    else
	    resetRow4();
	    break;
    }
};
            window.onload =init;
         //-->

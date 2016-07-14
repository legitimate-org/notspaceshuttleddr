<!--
	    var exact = 82; //change this to adjust offset
            var perfect = 1; //change these three to adjust judgement
            var great = 3;
            var good = 5;
	    var score = 0; //total score
	    var judgment = 'TESTING';
		
     	    var imgObj = null; 
	    var imgObj2 = null;
	    var imgObj3 = null;
	    var imgObj4 = null;
            var animate1, animate2, animate3, animate4;            
	    var down = 0; //current frame location of arrows
	    var up = 0;
	    var left = 0;
	    var right = 0;

            function init(){	
               imgObj = document.getElementById('leftArrow');
	       imgObj2 = document.getElementById('upArrow');
	       imgObj3 = document.getElementById('downArrow');
	       imgObj4 = document.getElementById('rightArrow');
               imgObj.style.position= 'absolute'; 
               imgObj.style.left = '0px'; 
	       imgObj.style.top = '0px';
		imgObj2.style.position = 'absolute';
		imgObj2.style.left = '100px';
		imgObj2.style.top = '0px';	
		imgObj3.style.position = 'absolute';
		imgObj3.style.left = '200px';
		imgObj3.style.top = '0px';
		imgObj4.style.position = 'absolute';
                imgObj4.style.left = '300px';
                imgObj4.style.top = '0px';

            }
           
	    function changeColor(){
		if( score > 100)
                {
                  document.getElementById('progressBar').style.backgroundColor = "blue";
                  document.getElementById('progressBar').value = "DECENT";
                }
	    }


 
            function moveRow1(){
              // imgObj.style.left = parseInt(imgObj.style.left) - 10 + 'px';
		imgObj.style.top = parseInt(imgObj.style.top) + 5 + 'px';
		left += 1;
               animate1 = setTimeout(moveRow1,20); // call moveRight in 20msec
		if( left >100)
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
                down += 1;
                animate3 = setTimeout(moveRow3, 20);
                if (down > 100)
                        resetRow3();
            }

   	    function moveRow4(){
                imgObj4.style.top = parseInt(imgObj4.style.top) + 5 + 'px';
                right += 1;
                animate4 = setTimeout(moveRow4, 20);
                if (right > 100)
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
		imgObj4.style.top = '0px';
		down = 0;
		up = 0;
		right = 0;
		left = 0;
		score = 0;
		document.getElementById('counter').innerHTML = "Score: " + score;
	        judgment=''
                document.getElementById('judgment').value=judgment;	
		}

            
	    function resetRow1(){
	     	clearTimeout(animate1);
		imgObj.style.top = '0px';
		left = 0;
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
                down = 0;
                moveRow3();
            }

            function resetRow4() {
                clearTimeout(animate4);
                imgObj4.style.top = '0px';
                right = 0;
                moveRow4();
            }
	    function count(){
		clicks += 1;
	    };


function getScore(direction, resetRow)
{    
       if(direction < exact+perfect && direction > exact-perfect)
       {
           score+=4; //perfect judgement
           document.getElementById('counter').innerHTML = "Score: " + score;
           judgment='PERFECT!!'
	   document.getElementById('judgment').value=judgment;
	   resetRow;
       }
       else if (direction < exact+great && direction > exact-great)
       {
           score+=2; //great judgmement 
	   document.getElementById('counter').innerHTML = "Score: " + score;
           judgment='GREAT!'
           document.getElementById('judgment').value=judgment;
	   resetRow;
       }
       else if (direction < exact+good && direction > exact-good)
       {
           score++; //good judgement
           document.getElementById('counter').innerHTML = "Score: " + score;
           judgment='GOOD'
           document.getElementById('judgment').value=judgment;
	   resetRow;
       }
       else
       {
           score--; //somebody's spamming. punish them!
           document.getElementById('counter').innerHTML = "Score: " + score;
           judgment='MISS'
           document.getElementById('judgment').value=judgment;
       }
      
       changeColor();
};

document.onkeydown = function(e) {    
     switch (e.keyCode) {
        case 37:
	    getScore(left, resetRow1());
            break;
        case 38:
            getScore(up, resetRow2());
	    break;
        case 40:
	    getScore(down, resetRow3());
            break;
        case 39:
	    getScore(right, resetRow4());
            break;
    }
};


window.onload =init;

         //-->

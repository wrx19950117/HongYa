		window.onload=function(){
			var oDiv=document.getElementById('div1');
			var oUl=oDiv.getElementsByTagName('ul')[0];
			var aLi=oUl.getElementsByTagName('li');
			var oRow5=document.getElementById('row5')
			var aA=oRow5.getElementsByTagName('a');
			var timer=null;
			var iSpeed=-6;

			oUl.innerHTML+=oUl.innerHTML;
			oUl.style.width=aLi.length*aLi[0].offsetWidth+"px";

			function move(){
				if(oUl.offsetLeft<-oUl.offsetWidth/2){
					oUl.style.left=0+"px";
				}
				else if(oUl.offsetLeft>0){
					oUl.style.left=-oUl.offsetWidth/2+"px";	
				}
				oUl.style.left=oUl.offsetLeft+iSpeed+"px";
			}

			timer=setInterval(move,90);

			aA[0].onclick=function(){
				iSpeed=-6;
			};
			aA[1].onclick=function(){
				iSpeed=6;
			};

			oDiv.onmouseover=function(){
				clearInterval(timer);
			};
			oDiv.onmouseout=function(){
				timer=setInterval(move,90);
			};
		};


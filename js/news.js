		window.onload = function () {
			var oRow3=document.getElementsByClassName('row3')[0];
			var oLis=oRow3.getElementsByTagName('li');
//			alert(oLis.length);
			var oRow4=document.getElementsByClassName('row4')[0];
			var oDivs=oRow4.getElementsByTagName('div');
//			alert(oDivs.length);
			for(var i=0;i<oLis.length;i++){
				oLis[i].number=i;
				oLis[i].onclick=function(){
					for(var j=0;j<oLis.length;j++){
						oLis[j].className="";
//						alert(123);
						// alert(aA.length);
						oDivs[j].className="col-md-12";
//						alert(typeof.oDivs);
					}
					
					this.className="cur";
					oDivs[this.number].className=" active";
				}
			}
		}

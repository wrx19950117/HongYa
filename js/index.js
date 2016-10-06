window.onload = function() {
	//选项卡
	var oTab = document.getElementById("tab");
	var oLis = oTab.getElementsByTagName("li");
	//			alert(oLis.length);
	var oRow2 = oTab.getElementsByClassName("row2")[0];
	var oDivs = oRow2.getElementsByTagName("div");
	//			alert(oDivs.length);
	for(var i = 0; i < oLis.length; i++) {
		oLis[i].number = i;
		oLis[i].onclick = function() {
			for(var j = 0; j < oLis.length; j++) {
				oLis[j].className = "";
				//						alert(123);
				// alert(aA.length);
				oDivs[j].className = "col-md-12";
				//						alert(typeof.oDivs);
			}

			this.className = "cur";
			oDivs[this.number].className = " active";
		}
	}

	//row5中右边的整体轮播效果
	var current = 0;

	function fun(flag) {
		var ul = document.getElementById("ul");
		if(flag)
			current = current + 1 > 2 ? 0 : current + 1;
		else
			current = current - 1 < 0 ? 2 : current - 1;
		ul.style.left = -1 * current * 800 + 'px';

	}

	var left = document.getElementById("left");
	var right = document.getElementById("right");
	left.onclick = function() {
		fun(false);
	}
	right.onclick = function() {
		fun(true);
	}

}
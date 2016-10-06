window.onload = function() {
	<!--按照默认属性创建地图和标记-->
	var map = new AMap.Map('container');
	map.setZoom(11); //设置缩放级别
	map.setCenter([113.4995662200, 22.3612580041]); //设置中心坐标
	var marker = new AMap.Marker({ //创建标记
		position: [113.4995662200, 22.3612580041], //设置标记位置
		map: map //设置map属性，使得标记能被立即添加到地图上
	});
	//marker.setMap();移除点标记
	<!--创建并且设置信息窗口-->
	AMap.plugin('AMap.AdvancedInfoWindow', function() {
			infowindow = new AMap.AdvancedInfoWindow({
				content: '<div class="info-title">高德地图</div><div class="info-content">' + '我的位置。<br/>' + '</div>', //设置信息窗口内容
				offset: new AMap.Pixel(0, -30) //设置窗口位置相对于标记的偏移量
			});
			infowindow.open(map, [113.4995662200, 22.3612580041]); //创建好信息窗口后，立即调用open方法，让它显示在需要的位置
		})
		<!--添加工具条和比例尺子-->
	AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function() { //加载工具条和比例尺两个插件放到数组中
			var toolBar = new AMap.ToolBar(); //在回调函数里进行控件的生成和添加
			var scale = new AMap.Scale();
			map.addControl(toolBar);
			map.addControl(scale);
		})
		//map.removeControl(toolBar);移除控件
}
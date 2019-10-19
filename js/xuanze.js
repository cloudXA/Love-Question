window.onload=function () {
	
	//用于设置样式
	(function () {
		
		// 获取最外面的div
		var cnt=document.querySelector("#cnt");
		// 获取单选框的div
		var choose=document.getElementById("choose");
		// 获取五角星的div
		var dou=document.querySelector("#dou");
		// 获取选项列表
		var options=document.querySelector(".options");
		// 获取ul里面所有的li
		var list=options.children;
		// 获取下一题的div
		var next=document.getElementById("next_js");
		
		// 设置单选框的行高和他的高度一致
		choose.style.lineHeight=choose.offsetHeight+"px";
		// 设置五角星的行高和父元素的高度一致
		dou.style.lineHeight=dou.offsetHeight+"px";
		
		//设置li标签的行高
		for (var i = 0; i < list.length; i++) {
			list[i].style.lineHeight=list[i].offsetHeight-6+"px";
		}
		
		//设置下一题的行高和圆角边框
		next.style.lineHeight=next.offsetHeight+"px";
		next.style.borderRadius=next.offsetHeight/2+"px";
		
	}());
};


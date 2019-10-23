window.onload=judge;

function judge() {
	
	
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
		
		
		
		
		// 设置单选标题的行高和他的高度一致
		choose.style.lineHeight=choose.offsetHeight+"px";
		// 设置五角星的行高和父元素的高度一致
		dou.style.lineHeight=dou.offsetHeight+"px";
		
		//设置li标签的行高
		for (var i = 0; i < list.length; i++) {
			list[i].style.lineHeight=list[i].offsetHeight-6+"px";
		}
		
		
		
		// 获取选择按钮
		var radio=options.querySelectorAll(".radio");
		// 循环遍历,为选择框注册点击事件
		for (var i = 0; i < radio.length; i++) {
			addEventListener(radio[i], "click", clickManage)
		}
		function clickManage() {
			for (var i = 0; i < list.length; i++) {
				list[i].removeAttribute("class");
				list[i].firstElementChild.innerHTML="";
			}
			this.parentNode.className="select";
			setInnerText(this,"●");
		}
		
		
		
		
		
		
	}());
	
	
	
};
	
	
	
	



	function scroll(element,left,right){
		this.element = element;
		this.currentleft = parseInt(element.css("left"));
		this.currentWidth = null;
		this.leftbtn = left;
		this.rightbtn =  right;
		this.currindex = 1;
		this.start();
		
	}
	scroll.prototype = {
		start:function(){
			var _this = this;
			this.element.html(this.element.html() + this.element.html());
			this.currentWidth = parseInt(this.element.css("width"));
			
			this.element.css({width:this.currentWidth * 2});
			this.btnclick(_this.leftbtn);
			this.btnclick(_this.rightbtn);
		},
		roll:function(){
			var _this = this;
			if(this.currindex != 1 ){
				_this.element.animate({"left":0},600);
				this.currindex ++;
			}else{
				_this.element.animate({"left":-  parseInt(this.element.css("width")) / 2},600);
				this.currindex --;
			}
		},
		btnclick:function(btn){
			var _this = this;
			_this.btn = btn;
			_this.btn.on('click',function(){
				_this.roll();
			})
		},
		
	}




var game=new Game({
	container : "container",
	width : 800,
	height : 480,
	uiPool : "ui-pool",
	initEvent : function(){
		recordKeyState(null,function(){
				if (event.keyCode==Key.R){
					game.restart();
				}
			});
	},
	onReady : function(){
		this.showUI("main-menu");
	},
	exit : function(){
		window.location.reload();
	},
	play : function(){
		this.start();		
	},
	getSceneInstance : function(index){
		var scene=createScene(index);
		return scene;
	},
	clear : function(){
		this.context.fillStyle="rgba(255,255,255,0.4)";
		this.context.fillRect(0,0,this.viewWidth,this.viewHeight);
	}

});


window.onload=function(){

	game.init();
	game.load();
}



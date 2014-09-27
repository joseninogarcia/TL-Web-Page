$(document).ready(function(){
	// Floating Window for Keno Page
	$(window).scroll(function () {
 	//after window scroll fire it will add define pixel added to that element.
	set = $(document).scrollTop()+"px";
 	//this is the jQuery animate function to fixed the div position after scrolling.
		$('#customerSupport').animate({top:set},{duration:1000,queue:false});
	});	
	/* Jquery Carousel Effect for Index Page */
	$(function() {
		var _center = {
			width: 1000,
			height: 292,
			marginLeft: 0,
			marginTop: 0,
			marginRight: 0
		};
		var _left = {
			width: 800,
			height: 234,
			marginLeft: 0,
			marginTop: 50,
			marginRight: -700
		};
		var _right = {
			width: 800,
			height: 234,
			marginLeft: -700,
			marginTop: 50,
			marginRight: 0
		};
		var _outLeft = {
			width: 150,
			height: 100,
			marginLeft: 150,
			marginTop: 200,
			marginRight: -200
		};
		var _outRight = {
			width: 150,
			height: 100,
			marginLeft: -200,
			marginTop: 200,
			marginRight: 50
		};
		$('#carousel').carouFredSel({
			width: 1200,
			height: 292,
			align: false,
			pagination: "#pagination",
			items: {
				visible: 3,
				width: 100
			},
			scroll: {
				items: 1,
				duration: 800,
				onBefore: function( data ) {
					data.items.old.eq( 0 ).animate(_outLeft).fadeTo("slow", 0.33);
					data.items.visible.eq( 0 ).animate(_left).fadeTo("slow", 0.33);
					data.items.visible.eq( 1 ).animate(_center).fadeTo( "fast", 1);
					data.items.visible.eq( 2 ).animate(_right).css({ zIndex: 1 }).fadeTo("slow", 0.33);
					data.items.visible.eq( 2 ).next().css(_outRight).css({ zIndex: 0 }).hide();
					
	
					setTimeout(function() {
						data.items.old.eq( 0 ).css({ zIndex: 1 });
						data.items.visible.eq( 0 ).css({ zIndex: 2 });
						data.items.visible.eq( 1 ).css({ zIndex: 3 });
						data.items.visible.eq( 2 ).css({ zIndex: 2 });
					}, 200);
				}
			}
		});
		$('#carousel').children().eq( 0 ).css(_left).css({ zIndex: 2 });
		$('#carousel').children().eq( 1 ).css(_center).css({ zIndex: 3 });
		$('#carousel').children().eq( 2 ).css(_right).css({ zIndex: 2 });
		$('#carousel').children().eq( 3 ).css(_outRight).css({ zIndex: 1 });
	});
	
});

/* onlinec Chat */
function getElementStartWith(start)
{
	var arrAll = document.all;
	if(!arrAll)
	{
		arrAll = document.getElementsByTagName("*");
	}
	for(i=0; i < arrAll.length; i++)
	{
		if(arrAll[i].id.substring(0,start.length).toLowerCase()==start.toLowerCase())
		{
			return arrAll[i];
		}
	 }
}

function startmarquee(lh,speed,delay)
{    
	var t;    
	var oHeight = 136; /** div的高度 **/  
	var p=false;   
	var o=document.getElementById("champ");    
	var preTop = 0;   
	o.scrollTop = 0;    
	function start()
	{    
	   t=setInterval(scrolling,speed);    
	   o.scrollTop += 1;    
	}    
	function scrolling()
	{    
		if(o.scrollTop%lh!=0 && o.scrollTop%(o.scrollHeight-oHeight-1)!=0){   
			preTop = o.scrollTop;   
			o.scrollTop+=1;   
			if(preTop >= o.scrollHeight || preTop==o.scrollTop){   
				o.scrollTop = 0;   
			}   
		}else{   
			clearInterval(t);    
			setTimeout(start,delay);    
		}   
	}    
	setTimeout(start,delay);    
}    
function link800()
{
	var chatBox=getElementStartWith('live800iconlink');
	chatBox.click();
}


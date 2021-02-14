var text1="<strong>Marina Name:</strong> Island Marine Fuel<br><strong>Marina Number:</strong> 286<br><strong>City:</strong> Newport Beach<br><strong>State:</strong> California<br><strong>Tel:</strong> 949-673-1103<br><strong>Marine Gas Available:</strong> Y<br><strong>Marine Diesel Available:</strong> Y";

var text2="<strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Click to send e-mail &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </strong>";           

if(document.images){
	pic1= new Image();
	pic1.src='art/htooltip/bubble_top.gif'; 
	pic2= new Image();
	pic2.src='art/htooltip/bubble_middle.gif'; 
	pic3= new Image(); 
	pic3.src='art/htooltip/bubble_bottom.gif'; 
}

function showToolTip(e,text){
	if(document.all)e = event;
	var obj = document.getElementById('bubble_tooltip');
	var obj2 = document.getElementById('bubble_tooltip_content');
	obj2.innerHTML = text;
	obj.style.display = 'block';
	var st = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(navigator.userAgent.toLowerCase().indexOf('safari')>=0)st=0; 
	var leftPos = e.clientX-2;
	if(leftPos<0)leftPos = 0;
	obj.style.left = leftPos + 'px';
	obj.style.top = e.clientY-obj.offsetHeight+2+st+ 'px';
}
        
function hideToolTip(){
    document.getElementById('bubble_tooltip').style.display = 'none';
}
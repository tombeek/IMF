function land(ref, target){
	lowtarget=target.toLowerCase();
	if (lowtarget=="_self") {window.location=loc;}
	else {if (lowtarget=="_top") {top.location=loc;}
	else {if (lowtarget=="_blank") {window.open(loc);}
	else {if (lowtarget=="_parent") {parent.location=loc;}
	else {parent.frames[target].location=loc;};
	}}}
}
function jump(menu){
	ref=menu.choice.options[menu.choice.selectedIndex].value;
	splitc=ref.lastIndexOf("*");
	target="_blank";
	menu.choice.options[0].selected=true; // resests menu
	if (splitc!=-1)
	{loc=ref.substring(0,splitc);
	target=ref.substring(splitc+1,1000);}
	else {loc=ref; target="_self";};
	if (ref != "") {land(loc,target);}
}

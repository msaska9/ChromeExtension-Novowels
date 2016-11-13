var vowels="aáeéiíoóöőuúüűAÁEÉIÍOÓÖŐUÚÜŰ";
var colors=["yellow", "orange", "green", "red", "blue"];
var	myNodelist = document.getElementsByTagName("p");
for (var i = 0; i <	myNodelist.length; i++) {
   	myNodelist[i].style.backgroundColor = colors[i%(colors.length)];
	var newtext="";
	var te=myNodelist[i].textContent;
	for(var j=0; j<te.length; j++) {
		if(!vowels.includes(te[j])) newtext+=te[j];
	}
	myNodelist[i].textContent=newtext;
}

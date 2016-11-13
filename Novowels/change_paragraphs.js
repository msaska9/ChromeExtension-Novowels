var vowels = "aáeéiíoóöőuúüűAÁEÉIÍOÓÖŐUÚÜŰ";
var colors = ["yellow", "orange", "green", "red", "blue"];
var	myNodeList = document.getElementsByTagName("p");
for (var paragraphIndex = 0; paragraphIndex < myNodeList.length; paragraphIndex++) {
    var myNode = myNodeList[paragraphIndex];
   	myNode.style.backgroundColor = colors[paragraphIndex % (colors.length)];
	var newText = "";
	var originalText = myNode.textContent;
	for(var letterIndex = 0; letterIndex < originalText.length; letterIndex++) {
        var originalLetter = originalText[letterIndex];
        var isVowel = vowels.includes(originalLetter);
		if(!isVowel) {
            newText += originalLetter;
        }
	}
	myNode.textContent = newText;
}

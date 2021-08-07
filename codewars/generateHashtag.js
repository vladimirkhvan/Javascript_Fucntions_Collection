function generateHashtag(str) {

	let newStr = str.trim();

	if(newStr == ""){
		return false;
	}

  newStr = "#" + newStr.split(" ").filter(item => item != " ").map(item => capitalize(item)).join("");

  if(newStr.length > 140){ return false; }

	return newStr;

}

function capitalize(word){
	return word.charAt(0).toUpperCase() + word.slice(1);
}
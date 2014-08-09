var q = 0;
var words = function(name, letter){
var w = letter;
var e = name;
var r = name.length;
	for(var z = 0; z<=r; z++){
		if(e.charAt(z) === w){
			q++;
		}else{

		}
	}
	console.log(q);
}
words("bananabomb", "b");
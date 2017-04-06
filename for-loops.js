console.log("for loops");

for (var i= 5; i< 120; i+=10)
	console.log(i);

for (var i= 4096; i> 1; i/=2){
	var newNumber = i /2; 
	console.log(newNumber);
}

var prez = ["George Washington", "John Adams", "Thomas Jefferson"];
	for (var i = 0; i < prez.length; i++) {
		console.log("President # was" + " " + prez[i]);
};



var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
 }

for (var prop in antSpecies){
	console.log(prop , antSpecies[prop])
}

    
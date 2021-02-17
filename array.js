var taulukko = [];

function lisaaLuku() {
	var arvo = document.getElementById("luku").value;
	taulukko.push(arvo);
}

function tulostaTiedot() {
	var pituus = taulukko.length;
	var summa = 0;
	for (var i = 0; i < pituus; i++) {
		var integer = parseInt(taulukko[i], 10);
		summa += integer;
	}
	var keskiarvo = summa / pituus;
	console.log("Taulukossa on " + pituus + " arvoa.");
	console.log("Lukujen keskiarvo on " + keskiarvo)
}

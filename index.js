const fellowship = [
	{ name: "Frodo", species: "Hobbit", hasSword: false },
	{ name: "Aragorn", species: "Homme", hasSword: true },
	{ name: "Gandalf", species: "Maiar", hasSword: true },
	{ name: "Legolas", species: "Elfe", hasSword: true },
	{ name: "Gimli", species: "Nain", hasSword: true },
	{ name: "Boromir", species: "Homme", hasSword: true },
	{ name: "Sam", species: "Hobbit", hasSword: false },
	{ name: "Merry", species: "Hobbit", hasSword: false },
	{ name: "Pippin", species: "Hobbit", hasSword: false },
	{ name: "Gollum", species: "Hobbit", hasSword: false },
	{ name: "Sauron", species: "Maiar", hasSword: true },
	{ name: "Saruman", species: "Maiar", hasSword: true },
	{ name: "Faramir", species: "Homme", hasSword: true },
	{ name: "Eowyn", species: "Homme", hasSword: true },
	{ name: "Arwen", species: "Elfe", hasSword: false },
	{ name: "Theoden", species: "Homme", hasSword: true },
	{ name: "Elrond", species: "Elfe", hasSword: true },
];

//defi 1
const phrasePresentation = (hero) => {
	return `Ce personnage s'appelle ${hero.name} de la race ${hero.species} et a une épée ? ${hero.hasSword}`;
};

console.log(fellowship.map(phrasePresentation));

//defi 2
const sousTableau = fellowship.slice(0, 4);
console.log("Sous tableau", sousTableau);

//defi 3
const ajoutGollum = fellowship.unshift({
	name: "Gollum",
	species: "Ptit goblin",
	hasSword: false,
});

console.log("Ajout Gollum", fellowship);

fellowship.splice(6, 1);
console.log("Retire Boromir", fellowship);

fellowship.push({ name: "Faramir", species: "Homme", hasSword: true });
console.log("Ajout Faramir", fellowship);

fellowship.shift();
console.log("Enlève premier membre", fellowship);

//defi 4
const removeLegoAndGimli = fellowship.splice(3, 2);
console.log("Retirer Legolas et Gimli", fellowship, removeLegoAndGimli);

//defi 5
const orderCroissant = fellowship.sort((a, b) => a.name.localeCompare(b.name));
console.log(orderCroissant);

//defi 6
const findGandalf = fellowship.map((hero) => hero.name).includes("Gandalf");
console.log(findGandalf);

//defi 7
const verifHomme = fellowship.some((hero) => hero.species === "Homme");
console.log("verifie si au moins un homme", verifHomme);

//defi 8
const isSword = fellowship.every((sword) => sword.hasSword === true);
console.log("verif si tout le monde a une épée", isSword);

//defi 9

const swordCount = fellowship.reduce(
	(total, element) => (total += element.hasSword ? 1 : 0),
	0
);

console.log("compte épées", swordCount);

//defi 10
console.log("DEFI 10", fellowship.length);

//defi 10
fellowship.forEach((hero) => console.log(hero.name));

//defi 11
const countNameLength = fellowship.map(
	(hero) => hero.name + " has " + hero.name.length + " letters"
);
console.log(countNameLength);

//defi 12
const getFirstFive = fellowship.slice(0, 4);
const triParNom = getFirstFive.sort((a, b) => (a.name.localeCompare += b.name));
console.log(triParNom);

//defi 13
const ajoutGollumFin =
	fellowship.push({
		name: "Gollum",
		species: "Goblin",
		hasSword: false,
	}) +
	fellowship.unshift({
		name: "Faramir",
		species: "Homme",
		hasSword: true,
	});
console.log(fellowship);

//defi 14
fellowship.unshift({ name: "Boromir", species: "Homme", hasSword: true });

const defi14 = fellowship.splice(0, 1);

const defi142 = fellowship.sort((a, b) => (a.name.localeCompare += b.name));
console.log(defi142);

//defi 15
const auMoinsUneEpee =
	fellowship.some((e) => e.hasSword === true) &&
	fellowship.map((e) => e.name).includes("Aragorn");
console.log("DEFI 15", auMoinsUneEpee);

//defi 16
const defi16 = fellowship.every((e) => e.hasSword === true);
console.log(defi16);

const defi162 = fellowship.reduce((total, e) => (total += e.name));
console.log(defi162);

//defi 17
const defi17 =
	fellowship.find((hero) => hero.hasSword === true) &&
	fellowship.map((hero) => hero.name);
console.log(defi17);

//defi 18
const defi18 = fellowship.filter((hero) => hero.hasSword === true).length;
console.log(defi18);

//defi 19
const defi19 = fellowship.forEach((hero) => console.log(hero.name));

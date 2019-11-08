
data = [{"id": 0, "name": "Agni", "class": "Mage", "dmgType": "Magical", "ranged": true, "icon": "https://web2.hirez.com/smite/god-skins/agni_standard-agni.jpg", "image": 0},
{"id": 1, "name": "Anubis", "class": "Mage", "dmgType": "Magical", "ranged": true, "icon": "https://web2.hirez.com/smite/god-skins/anubis_standard-anubis.jpg", "image": 0},
{"id": 2, "name": "Arachne", "class": "Assassin", "dmgType": "Physical", "ranged": false, "icon": "https://web2.hirez.com/smite/god-skins/arachne_standard-arachne.jpg", "image": 0},
{"id": 3, "name": "Artemis", "class": "Hunter", "dmgType": "Physical", "ranged": true, "icon": "https://web2.hirez.com/smite/god-skins/artemis_standard-artemis.jpg", "image": 0},
{"id": 4, "name": "Bastet", "class": "Assassin", "dmgType": "Physical", "ranged": false, "icon": "https://web2.hirez.com/smite/god-skins/bastet_standard-bastet.jpg", "image": 0},
{"id": 5, "name": "Hades", "class": "Mage", "dmgType": "Magical", "ranged": true, "icon": "https://web2.hirez.com/smite/god-skins/hades_standard-hades.jpg", "image": 0},
{"id": 6, "name": "He Bo", "class": "Mage", "dmgType": "Magical", "ranged": true, "icon": "https://web2.hirez.com/smite/god-skins/he_bo_standard-he-bo.jpg", "image": 0},
{"id": 7, "name": "Hel", "class": "Mage", "dmgType": "Magical", "ranged": true, "icon": "https://web2.hirez.com/smite/god-skins/hel_standard-hel.jpg", "image": 0},
{"id": 8, "name": "Hun Batz", "class": "Assassin", "dmgType": "Physical", "ranged": false, "icon": "https://web2.hirez.com/smite/god-skins/hun_batz_standard-hun-batz.jpg", "image": 0},
{"id": 9, "name": "Kali", "class": "Assassin", "dmgType": "Physical", "ranged": false, "icon": "https://web2.hirez.com/smite/god-skins/kali_standard-kali.jpg", "image": 0},
{"id": 10, "name": "Kukulkan", "class": "Mage", "dmgType": "Magical", "ranged": true, "icon": "https://web2.hirez.com/smite/god-skins/kukulkan_standard-kukulkan.jpg", "image": 0},
{"id": 11, "name": "Odin", "class": "Warrior", "dmgType": "Physical", "ranged": false, "icon": "https://web2.hirez.com/smite/god-skins/odin_standard-odin.jpg", "image": 0},
{"id": 12, "name": "Ra", "class": "Mage", "dmgType": "Magical", "ranged": true, "icon": "https://web2.hirez.com/smite/god-skins/ra_standard-ra.jpg", "image": 0},
{"id": 13, "name": "Sobek", "class": "Guardian", "dmgType": "Magical", "ranged": false, "icon": "https://web2.hirez.com/smite/god-skins/sobek_standard-sobek.jpg", "image": 0},
{"id": 14, "name": "Vamana", "class": "Warrior", "dmgType": "Physical", "ranged": false, "icon": "https://web2.hirez.com/smite/god-skins/vamana_standard-vamana.jpg", "image": 0},
{"id": 15, "name": "Ymir", "class": "Guardian", "dmgType": "Magical", "ranged": false, "icon": "https://web2.hirez.com/smite/god-skins/ymir_standard-ymir.jpg", "image": 0},
{"id": 16, "name": "Zeus", "class": "Mage", "dmgType": "Magical", "ranged": true, "icon": "https://web2.hirez.com/smite/god-skins/zeus_standard-zeus.jpg", "image": 0},
{"id": 17, "name": "Guan Yu", "class": "Warrior", "dmgType": "Physical", "ranged": false, "icon": "https://web2.hirez.com/smite/god-skins/guan_yu_standard-guan-yu.jpg", "image": 0},
{"id": 18, "name": "Bakasura", "class": "Assassin", "dmgType": "Physical", "ranged": false, "icon": "https://web2.hirez.com/smite/god-skins/bakasura_standard-bakasura.jpg", "image": 0},
{"id": 19, "name": "Anhur", "class": "Hunter", "dmgType": "Physical", "ranged": true, "icon": "https://web2.hirez.com/smite/god-skins/anhur_standard-anhur.jpg", "image": 0}
];

function createImages(){
	for (i = 0; i < data.length; i++){
		data[i]["image"] = createImg(data[i]["icon"], "ERROR");
		data[i]["image"].hide();
	}
}

instances = []
class GodIcon{
	constructor(id, x, y, w, h){
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.id = data[id]["id"];
		this.name = data[id]["name"];
		this.class = data[id]["class"];
		this.dmgType = data[id]["dmgType"];
		this.ranged = data[id]["ranged"];
		this.image = data[id]["image"];

		instances.push(this);
	}

	Update(){
		image(this.image, this.x, this.y, this.w, this.h);
	}

	Randomize(nGods){
		this.id = data[Math.round(Math.random()*(nGods-1))]["id"];
		this.name = data[Math.round(Math.random()*(nGods-1))]["name"];
		this.class = data[Math.round(Math.random()*(nGods-1))]["class"];
		this.dmgType = data[Math.round(Math.random()*(nGods-1))]["dmgType"];
		this.ranged = data[Math.round(Math.random()*(nGods-1))]["ranged"];
		this.image = data[Math.round(Math.random()*(nGods-1))]["image"];
	}

	static UpdateAll(){
		for (i = 0; i<instances.length; i++){
			instances[i].Update();
		}
	}
}


function Lerp(a, b, r){
	return a + (b - a)*r;
}

function mod(n, m) {
  return ((n % m) + m) % m;
}
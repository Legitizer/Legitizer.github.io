
data = [{"id": 0, "name": "Agni", "class": "Mage", "dmgType": "Magical", "ranged": true, "icon": "https://web2.hirez.com/smite/god-skins/agni_standard-agni.jpg", "image": 0},
{"id": 1, "name": "Anubis", "class": "Mage", "dmgType": "Magical", "ranged": true, "icon": "https://web2.hirez.com/smite/god-skins/anubis_standard-anubis.jpg", "image": 0},
{"id": 2, "name": "Arachne", "class": "Assassin", "dmgType": "Physical", "ranged": false, "icon": "https://web2.hirez.com/smite/god-skins/arachne_standard-arachne.jpg", "image": 0},
{"id": 3, "name": "Artemis", "class": "Hunter", "dmgType": "Physical", "ranged": true, "icon": "https://web2.hirez.com/smite/god-skins/artemis_standard-artemis.jpg", "image": 0},
{"id": 4, "name": "Bastet", "class": "Assassin", "dmgType": "Physical", "ranged": false, "icon": "https://web2.hirez.com/smite/god-skins/bastet_standard-bastet.jpg", "image": 0},
{"id": 5, "name": "Hades", "class": "Mage", "dmgType": "Magical", "ranged": true, "icon": "https://web2.hirez.com/smite/god-skins/hades_standard-hades.jpg", "image": 0},
{"id": 6, "name": "He Bo", "class": "Mage", "dmgType": "Magical", "ranged": true, "icon": "https://web2.hirez.com/smite/god-skins/he_bo_standard-he-bo.jpg", "image": 0},
{"id": 7, "name": "Hel", "class": "Mage", "dmgType": "Magical", "ranged": true, "icon": "https://web2.hirez.com/smite/god-skins/hel_standard-hel.jpg", "image": 0},
{"id": 8, "name": "Hun Batz", "class": "Assassin", "dmgType": "Physical", "ranged": false, "icon": "https://web2.hirez.com/smite/god-skins/hun_batz_standard-hun-batz.jpg", "image": 0},
{"id": 9, "name": "Kali", "class": "Assassin", "dmgType": "Physical", "ranged": false, "icon": "https://web2.hirez.com/smite/god-skins/kali_standard-kali.jpg", "image": 0}
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
		image(this.image, this.x - (width/6), this.y, this.w, this.h);
	}

	static UpdateAll(){
		for (i = 0; i<instances.length; i++){
			instances[i].Update();
		}
	}
}

class Person{
	constructor(personId, name, cart){
		this.personId = personId;
		this.name = name;
		this.cart = this.getRecommendedToBuy();
	}

	getPersoninfo(){
		console.log('Person -> ID');
		console.log(this.personId);
		console.log('Person -> Name');
		console.log(this.name);
		console.log('Person -> Cart');
		console.log(this.cart);
	}

	getRecommendedToBuy(personId){
		//get this value from the database with ajax
		let recbuy = [
					  {id: "asp", name: "Stor Pakke", price: "330", path: "img/a-storepakke.png", count: 1},
					  {id: "group", name: "Gruppebillede", price: "85", path: "img/gruppebillede.png", count: 1},
					  {id: "trade", name: "Byttebilledebog", price: "12", path: "img/byttebilledbog.png", count: 1}
					 ];
		return recbuy;
	}

	getPreviewImages(personId){
		//get this value from the database with ajax
		switch(personId){
		    case "img/a-prev.jpg":
		    return "img/a-prev.jpg";
		    break;
		    case "img/b-prev.jpg":
		    return "img/b-prev.jpg";
		    break;
		    case "img/c-prev.jpg":
		    return "img/c-prev.jpg";
		    break;
		    case "img/d-prev.jpg":
		    return "img/d-prev.jpg";
		    break;
		    case "img/aw-prev.jpg":
		    return "img/aw-prev.jpg";
		    break;
		    case "img/bw-prev.jpg":
		    return "img/bw-prev.jpg";
		    break;
		    case "img/cw-prev.jpg":
		    return "img/cw-prev.jpg";
		    break;
		    case "img/dw-prev.jpg":
		    return "img/dw-prev.jpg";
		    break;
		}
	}

	getArkImages(personId){
		//get this value from the database with ajax
		let arkBundle;
		switch(personId){
		    case "img/a-prev.jpg":
		        arkBundle = [
		           {path: "img/a-ark1.png", id: "a1"},
		           {path: "img/a-ark2.png", id: "a2"},
		           {path: "img/a-ark3.png", id: "a3"},
		           {path: "img/a-ark4.png", id: "a4"},
		           {path: "img/a-ark5.png", id: "a5"},
		           {path: "img/a-ark6.png", id: "a6"},
		           {path: "img/a-ark7.png", id: "a7"},
		           {path: "img/a-ark8.png", id: "a8"}
		        ];
		    break;
		    case "img/b-prev.jpg":  
		        arkBundle = [
		           {path: "img/b-ark1.png", id: "b1"},
		           {path: "img/b-ark2.png", id: "b2"},
		           {path: "img/b-ark3.png", id: "b3"},
		           {path: "img/b-ark4.png", id: "b4"},
		           {path: "img/b-ark5.png", id: "b5"},
		           {path: "img/b-ark6.png", id: "b6"},
		           {path: "img/b-ark7.png", id: "b7"},
		           {path: "img/b-ark8.png", id: "b8"}
		        ];
	        break;
	        case "img/c-prev.jpg":  
		        arkBundle = [
		           {path: "img/c-ark1.png", id: "c1"},
		           {path: "img/c-ark2.png", id: "c2"},
		           {path: "img/c-ark3.png", id: "c3"},
		           {path: "img/c-ark4.png", id: "c4"},
		           {path: "img/c-ark5.png", id: "c5"},
		           {path: "img/c-ark6.png", id: "c6"},
		           {path: "img/c-ark7.png", id: "c7"},
		           {path: "img/c-ark8.png", id: "c8"}
		        ];
	    	break;
	    	case "img/d-prev.jpg":  
		        arkBundle = [
		           {path: "img/d-ark1.png", id: "d1"},
		           {path: "img/d-ark2.png", id: "d2"},
		           {path: "img/d-ark3.png", id: "d3"},
		           {path: "img/d-ark4.png", id: "d4"},
		           {path: "img/d-ark5.png", id: "d5"},
		           {path: "img/d-ark6.png", id: "d6"},
		           {path: "img/d-ark7.png", id: "d7"},
		           {path: "img/d-ark8.png", id: "d8"}
		        ];
	    	break;
	    	case "img/aw-prev.jpg": 
		        arkBundle = [
		           {path: "img/aw-ark1.png", id: "aw1"},
		           {path: "img/aw-ark2.png", id: "aw2"},
		           {path: "img/aw-ark3.png", id: "aw3"},
		           {path: "img/aw-ark4.png", id: "aw4"},
		           {path: "img/aw-ark5.png", id: "aw5"},
		           {path: "img/aw-ark6.png", id: "aw6"},
		           {path: "img/aw-ark7.png", id: "aw7"},
		           {path: "img/aw-ark8.png", id: "aw8"}
		        ];
    		break;
    		case "img/bw-prev.jpg": 
		        arkBundle = [
		           {path: "img/bw-ark1.png", id: "bw1"},
		           {path: "img/bw-ark2.png", id: "bw2"},
		           {path: "img/bw-ark3.png", id: "bw3"},
		           {path: "img/bw-ark4.png", id: "bw4"},
		           {path: "img/bw-ark5.png", id: "bw5"},
		           {path: "img/bw-ark6.png", id: "bw6"},
		           {path: "img/bw-ark7.png", id: "bw7"},
		           {path: "img/bw-ark8.png", id: "bw8"}
		        ];
		    break;	
		    case "img/cw-prev.jpg": 
		        arkBundle = [
		           {path: "img/cw-ark1.png", id: "cw1"},
		           {path: "img/cw-ark2.png", id: "cw2"},
		           {path: "img/cw-ark3.png", id: "cw3"},
		           {path: "img/cw-ark4.png", id: "cw4"},
		           {path: "img/cw-ark5.png", id: "cw5"},
		           {path: "img/cw-ark6.png", id: "cw6"},
		           {path: "img/cw-ark7.png", id: "cw7"},
		           {path: "img/cw-ark8.png", id: "cw8"}
		        ];
		    break;
		    case "img/dw-prev.jpg":  
		        arkBundle = [
		           {path: "img/dw-ark1.png", id: "dw1"},
		           {path: "img/dw-ark2.png", id: "dw2"},
		           {path: "img/dw-ark3.png", id: "dw3"},
		           {path: "img/dw-ark4.png", id: "dw4"},
		           {path: "img/dw-ark5.png", id: "dw5"},
		           {path: "img/dw-ark6.png", id: "dw6"},
		           {path: "img/dw-ark7.png", id: "dw7"},
		           {path: "img/dw-ark8.png", id: "dw8"}
		        ];
	    	break;
		}

		let arkNames = [
		   "Ark 1:18x24",
		   "Ark 2:13x18",
		   "Ark 1:13x18",
		   "Ark 1:13x18 1:9x12 8:3x4",
		   "Ark 1:13x18 2:6x9 4:4x6",
		   "Ark 2:9x12 4:6x9",
		   "Ark 4:9x12",
		   "Ark 32:3x4",
		];

		let arksExtra = [
		  {path: "img/gruppebillede.png", arkName: "Gruppebillede", id: "group", price: 85},
		  {path: "img/byttebilledbog.png", arkName: "Byttebilledebog", id: "trade", price: 12},
		  {path: "img/digitalbillede.png", arkName: "Digitale filer (i farve)", id: "digital", price: 495}
		];

		// add the arkNames and price to the bundle
		for(let i = 0; i < arkBundle.length; i++){
		  arkBundle[i].arkName = arkNames[i];
		  arkBundle[i].price = 170;
		}

		// add groupimage, tradebook and digital to the bundle
		for(let i = 0; i < arksExtra.length; i++){
			arkBundle.push(arksExtra[i]);
		}

		return arkBundle;
	}

	getPackageImages(personId){
		//get this value from the database with ajax

		switch(personId){
    		case "img/a-prev.jpg":
    			return [
		        	{packageName: "Stor Pakke", path: "img/a-storepakke.png", id: "asp", price: 330, packinfo: ['Large 1:18x24', 'Large 1:13x18 2:9x12', 'Large 1:13x18 2:6x9 4:4x6', 'Large 32:3x4']},
		        	{packageName: "Mellem Pakke", path: "img/a-mellempakke.png", id: "amp", price: 270, packinfo: ['Medium 1:18x24', 'Medium 1:13x18 2:9x12', 'Medium 1:13x18 2:6x9 4:4x6', 'Medium 32:3x4']},
		        	{packageName: "Lille Pakke", path: "img/a-lillepakke.png", id: "alp", price: 248, packinfo: ['Small 1:18x24', 'Small 1:13x18 2:9x12', 'Small 1:13x18 2:6x9 4:4x6', 'Small 32:3x4']},
		        ];
    		break;
    		case "img/b-prev.jpg":
    			return [
		        	{packageName: "Stor Pakke", path: "img/b-storepakke.png", id: "asp", price: 330, packinfo: ['Large 1:18x24', 'Large 1:13x18 2:9x12', 'Large 1:13x18 2:6x9 4:4x6', 'Large 32:3x4']},
		        	{packageName: "Mellem Pakke", path: "img/b-mellempakke.png", id: "amp", price: 270, packinfo: ['Medium 1:18x24', 'Medium 1:13x18 2:9x12', 'Medium 1:13x18 2:6x9 4:4x6', 'Medium 32:3x4']},
		        	{packageName: "Lille Pakke", path: "img/b-lillepakke.png", id: "alp", price: 248, packinfo: ['Small 1:18x24', 'Small 1:13x18 2:9x12', 'Small 1:13x18 2:6x9 4:4x6', 'Small 32:3x4']},
		        ];
    		break;
    		case "img/c-prev.jpg":
    			return [
		        	{packageName: "Stor Pakke", path: "img/c-storepakke.png", id: "asp", price: 330, packinfo: ['Large 1:18x24', 'Large 1:13x18 2:9x12', 'Large 1:13x18 2:6x9 4:4x6', 'Large 32:3x4']},
		        	{packageName: "Mellem Pakke", path: "img/c-mellempakke.png", id: "amp", price: 270, packinfo: ['Medium 1:18x24', 'Medium 1:13x18 2:9x12', 'Medium 1:13x18 2:6x9 4:4x6', 'Medium 32:3x4']},
		        	{packageName: "Lille Pakke", path: "img/c-lillepakke.png", id: "alp", price: 248, packinfo: ['Small 1:18x24', 'Small 1:13x18 2:9x12', 'Small 1:13x18 2:6x9 4:4x6', 'Small 32:3x4']},
		        ];
    		break;
    		case "img/d-prev.jpg":
    			return [
		        	{packageName: "Stor Pakke", path: "img/d-storepakke.png", id: "asp", price: 330, packinfo: ['Large 1:18x24', 'Large 1:13x18 2:9x12', 'Large 1:13x18 2:6x9 4:4x6', 'Large 32:3x4']},
		        	{packageName: "Mellem Pakke", path: "img/d-mellempakke.png", id: "amp", price: 270, packinfo: ['Medium 1:18x24', 'Medium 1:13x18 2:9x12', 'Medium 1:13x18 2:6x9 4:4x6', 'Medium 32:3x4']},
		        	{packageName: "Lille Pakke", path: "img/d-lillepakke.png", id: "alp", price: 248, packinfo: ['Small 1:18x24', 'Small 1:13x18 2:9x12', 'Small 1:13x18 2:6x9 4:4x6', 'Small 32:3x4']},
		        ];
    		break;
    		case "img/aw-prev.jpg":
    			return [
		        	{packageName: "Stor Pakke", path: "img/aw-storepakke.png", id: "asp", price: 330, packinfo: ['Large 1:18x24', 'Large 1:13x18 2:9x12', 'Large 1:13x18 2:6x9 4:4x6', 'Large 32:3x4']},
		        	{packageName: "Mellem Pakke", path: "img/aw-mellempakke.png", id: "amp", price: 270, packinfo: ['Medium 1:18x24', 'Medium 1:13x18 2:9x12', 'Medium 1:13x18 2:6x9 4:4x6', 'Medium 32:3x4']},
		        	{packageName: "Lille Pakke", path: "img/aw-lillepakke.png", id: "alp", price: 248, packinfo: ['Small 1:18x24', 'Small 1:13x18 2:9x12', 'Small 1:13x18 2:6x9 4:4x6', 'Small 32:3x4']},
		        ];
    		break;
    		case "img/bw-prev.jpg":
    			return [
		        	{packageName: "Stor Pakke", path: "img/bw-storepakke.png", id: "asp", price: 330, packinfo: ['Large 1:18x24', 'Large 1:13x18 2:9x12', 'Large 1:13x18 2:6x9 4:4x6', 'Large 32:3x4']},
		        	{packageName: "Mellem Pakke", path: "img/bw-mellempakke.png", id: "amp", price: 270, packinfo: ['Medium 1:18x24', 'Medium 1:13x18 2:9x12', 'Medium 1:13x18 2:6x9 4:4x6', 'Medium 32:3x4']},
		        	{packageName: "Lille Pakke", path: "img/bw-lillepakke.png", id: "alp", price: 248, packinfo: ['Small 1:18x24', 'Small 1:13x18 2:9x12', 'Small 1:13x18 2:6x9 4:4x6', 'Small 32:3x4']},
		        ];
    		break;
    		case "img/cw-prev.jpg":
    			return [
		        	{packageName: "Stor Pakke", path: "img/cw-storepakke.png", id: "asp", price: 330, packinfo: ['Large 1:18x24', 'Large 1:13x18 2:9x12', 'Large 1:13x18 2:6x9 4:4x6', 'Large 32:3x4']},
		        	{packageName: "Mellem Pakke", path: "img/cw-mellempakke.png", id: "amp", price: 270, packinfo: ['Medium 1:18x24', 'Medium 1:13x18 2:9x12', 'Medium 1:13x18 2:6x9 4:4x6', 'Medium 32:3x4']},
		        	{packageName: "Lille Pakke", path: "img/cw-lillepakke.png", id: "alp", price: 248, packinfo: ['Small 1:18x24', 'Small 1:13x18 2:9x12', 'Small 1:13x18 2:6x9 4:4x6', 'Small 32:3x4']},
		        ];
    		break;
    		case "img/dw-prev.jpg":
    			return [
		        	{packageName: "Stor Pakke", path: "img/dw-storepakke.png", id: "asp", price: 330, packinfo: ['Large 1:18x24', 'Large 1:13x18 2:9x12', 'Large 1:13x18 2:6x9 4:4x6', 'Large 32:3x4']},
		        	{packageName: "Mellem Pakke", path: "img/dw-mellempakke.png", id: "amp", price: 270, packinfo: ['Medium 1:18x24', 'Medium 1:13x18 2:9x12', 'Medium 1:13x18 2:6x9 4:4x6', 'Medium 32:3x4']},
		        	{packageName: "Lille Pakke", path: "img/dw-lillepakke.png", id: "alp", price: 248, packinfo: ['Small 1:18x24', 'Small 1:13x18 2:9x12', 'Small 1:13x18 2:6x9 4:4x6', 'Small 32:3x4']},
		        ];
    		break;
    	}
	}
}


class UI{
	// Optagelser
	fetchPreview(){
		//choose image 
		const buttons = document.querySelectorAll(".polaroid .btn-success");
		const polar = document.querySelectorAll(".polaroid");
		const imagePreview = document.querySelector(".image-preview img");

		// style the first image default
		polar[0].style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
		polar[0].style.transform = 'scale(1.1)';
	}

	selectPreviewEvent(){

	}



	// Ark
	fetchArk(){
		// Ark output
		const ark = document.getElementById('ark');
	}

	arkTemplate(){
		

	}




	// Pakker
	fetchPackages(){
		// package output
		const packagesOutput = document.getElementById('packages');

	}

	packageTemplate(){

	}
}

class item{

}

// Global variables
let totalPrice = 0;
let itemAmount = 0;


let person = new Person(555, 'Lotte Hansen');


let optagelse = person.getPreviewImages("img/c-prev.jpg");
console.log(person.getArkImages(optagelse));
console.log(person.getPackageImages(optagelse));
console.log(person.getPersoninfo());


// for(let i = 0; i < person);
let cars=[{
	id:1,
	imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3gqSTsdJSp8c3kBNqvpWe2kcKtFIcEWXcYA&usqp=CAU",
	vihicle:"car",
	name:"Mercedez Benz c300 2022",
	mileage:"Mileage:4,000 miles",
	fuel:"Fuel:25mpg",
	safe:"safety",
	color:"Pick a color",
	amount:"$134,450",
	amt:"$140,500",
	cart:"Add to Cart"
}]

let container=document.querySelector(".container");

let card=document.createElement("div");
	card.classList.add("row");
	container.appendChild(card);

cars.forEach(function(e){
	let rows=document.createElement("div");
		card.appendChild(rows);
		
	let img=document.createElement("img");
		img.src=e.imgurl;
		rows.appendChild(img);
})
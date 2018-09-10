jsonInfoReviews = '[{"gameId":9,"gameTitle":"Overwatch","consoles":"PS4, XboxOne, PC","rating":"T","score":5,"imageName":"Overwatch.jpg"},{"gameId":10,"gameTitle":"Civilization VI","consoles":"PC","rating":"E10+","score":5,"imageName":"civ6.jpg"},{"gameId":11,"gameTitle":"NBA 2K17","consoles":"PS4, XboxOne, PC","rating":"E","score":5,"imageName":"NBA2k17.jpg"},{"gameId":12,"gameTitle":"TitanFall 2","consoles":"PS4, XboxOne, PC","rating":"M","score":5,"imageName":"Titanfall2.jpg"},{"gameId":13,"gameTitle":"Uncharted 4: a thief\'s end","consoles":"PS4","rating":"T","score":5,"imageName":"Uncharted4.jpg"},{"gameId":14,"gameTitle":"XCom 2","consoles":"PS4, XboxOne, PC","rating":"T","score":5,"imageName":"Xcom2.jpg"},{"gameId":15,"gameTitle":"Battlefield 1","consoles":"PS4, XboxOne, PC","rating":"M","score":5,"imageName":"Battlefield1.jpg"},{"gameId":16,"gameTitle":"Dark Souls 3","consoles":"PS4, XboxOne, PC","rating":"M","score":5,"imageName":"DarkSouls3.jpg"},{"gameId":17,"gameTitle":"Dishonored 2","consoles":"PS4, XboxOne, PC","rating":"M","score":5,"imageName":"DisHonored2.jpg"},{"gameId":18,"gameTitle":"Fire Emblem Fates: Conquest","consoles":"3DS","rating":"T","score":4,"imageName":"FireEmblemFates.jpg"},{"gameId":19,"gameTitle":"Forza Horizon 3","consoles":"XboxOne, PC","rating":"E","score":5,"imageName":"ForzaHorizon3.jpg"},{"gameId":20,"gameTitle":"Gears of War 4","consoles":"XboxOne, PC","rating":"M","score":5,"imageName":"GearsofWar4.jpg"},{"gameId":21,"gameTitle":"Call of Duty: Infinite Warfare","consoles":"XboxOne, PC","rating":"M","score":5,"imageName":"CoDIW.jpg"},{"gameId":22,"gameTitle":"Dead Rising 4","consoles":"XboxOne","rating":"M","score":5,"imageName":"DeadRising4.jpg"},{"gameId":23,"gameTitle":"Doom","consoles":"XboxOne, PC","rating":"T","score":5,"imageName":"Doom.jpg"},{"gameId":24,"gameTitle":"Fifa 17","consoles":"XboxOne, PC","rating":"E","score":5,"imageName":"FIFA17.jpg"},{"gameId":25,"gameTitle":"Madden NFL 17","consoles":"PS4, XboxOne, PC","rating":"E","score":4,"imageName":"Madden17.jpg"}]';
	
reviews = JSON.parse(jsonInfoReviews);
	
var body = document.querySelector('#reviewsBody');
var str='';	
	
	for(var i = 0; i < reviews.length; i++)
	{
		str += "<tr>";
		   for(value in reviews[i])
		   {
		      if (value != 'gameId' && value != 'imageName' && value != 'gameTitle')
		      {
		      	str += "<td>";
		      	str += reviews[i][value];
		      	str +="</td>"
		     }
		     else if (value == 'gameTitle')
		     {
		     	str += '<td>';
		     	str += '<a class="review" data-img="'
		     	str += reviews[i].imageName + '">';
		     	str += reviews[i][value];
		     	str += '</a>';
		     	str += '</td>';
		     	console.log('hi');
		     }
		   }

		 str += "</tr>";

	}
	body.innerHTML = str;

var img = document.querySelectorAll('.review');
var src = document.querySelector('#gameImage');
var h2 = document.querySelector('#gameTitle')
console.log(img);

function selectReview()
{
	src.src = "images/" + this.dataset.img;
	h2.innerText = this.text;
}
	for(i = 0; i < reviews.length; i++)
	{
		img[i].addEventListener("click", selectReview);
		console.log("meow");
	}
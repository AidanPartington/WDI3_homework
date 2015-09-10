
function random_card() {
	//Assign the Card Value
	var values = [1,2,3,4,5,6,7,8,9,10,10,10,10]
	var names = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King']
	
	var assigned_number = Math.ceil(Math.random() * 13)-1
	var assigned_value = values[assigned_number]
	var assigned_name = names[assigned_number]

	// Assign the Card suit
	var suits = ['Hearts','Spades','Clubs', 'Diamonds']
	var assigned_suit = suits[Math.ceil(Math.random() * 4)-1]
	
	var card = assigned_name + ' of ' + assigned_suit
	console.log(card)
	// $('#playing-table').append("<div class='table-card'> "+ card +" </div>")
	return card
}

$('#start-button').on('click', function() {

	card = random_card()
	$('#player').append("<div class='player-card'> "+ card +" </div>")
	card = random_card()
	$('#player').append("<div class='player-card'> "+ card +" </div>")

	card = random_card()
	$('#computer-player').append("<div class='computer-card'> "+ card +" </div>")
	card = random_card()
	$('#computer-player').append("<div class='computer-card'> "+ card +" </div>")
});

$('#deal-button').on('click', function() {

	card = random_card()
	$('#playing-table').append("<div class='table-card'> "+ card +" </div>")
	card = random_card()
	$('#playing-table').append("<div class='table-card'> "+ card +" </div>")
	card = random_card()
	$('#playing-table').append("<div class='table-card'> "+ card +" </div>")

});


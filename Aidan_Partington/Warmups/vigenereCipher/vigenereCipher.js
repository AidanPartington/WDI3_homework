

function Encript() {
	var message = document.getElementById('message').value
	var keyword = document.getElementById('keyword').value

	// Make array of message and key word
	msg = message.split('')
	key = keyword.split('')

	for (var i = key.length; i < msg.length; i++) {
		key.push(key[i-key.length])
	}

	// Turn arrays into number arrays
	var msg_number = []
	var key_number = []
	for (var i = 0; i < msg.length; i++) {
		msg_number.push(msg[i].charCodeAt(0) -97);
		key_number.push(key[i].charCodeAt(0) -97);
	}

	// Turn arrays into number arrays
	var ciphertext_number = []
	var ciphertext = []
	for (var i = 0; i < msg.length; i++) {
		ciphertext_number.push(msg_number[i] + key_number[i]);
		var num = msg_number[i] + key_number[i]
		if(num > 26) {
			num = num - 26
		}
		var chr = String.fromCharCode(97+num)
	    ciphertext.push(chr);
	}
	var ciphertext_string = ""
	ciphertext_string = ciphertext.join("")

	document.getElementById('ciphertext').innerHTML = ciphertext_string


}
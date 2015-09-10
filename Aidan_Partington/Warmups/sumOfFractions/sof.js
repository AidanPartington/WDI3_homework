

// console.log(f_F)

function do_maths() {

		var f_F = document.getElementById('First_F').value
		var s_F = document.getElementById('Second_F').value
		// 'Get values'
		// var f_F = prompt("Give me a fraction");
		// var s_F = prompt("Give me another fraction");
		console.log(f_F)
		console.log(s_F)
		console.log('=======================')

		// Split first fraction
		result = f_F.split('/')
		numeration_f_F = result[0]
		denominator_f_F = result[1]
		console.log(numeration_f_F)
		console.log(denominator_f_F)

		console.log('=======================')

		// Split second fraction
		result = s_F.split('/')
		numeration_s_F = result[0]
		denominator_s_F = result[1]
		console.log(numeration_s_F)
		console.log(denominator_s_F)
		console.log('=======================')

		// result
		result_n = (numeration_f_F * denominator_s_F) + (numeration_s_F * denominator_f_F)
		result_d = (denominator_f_F * denominator_s_F)
		console.log(result_n)
		console.log(result_d)
		console.log(result_n + '/' + result_d)
		console.log('=======================')

		if ((result_n % 2 == 0) && (result_d % 2 == 0)) {
			do	{
				console.log(result_n % 2 )
				result_n = result_n/2
				result_d = result_d/2
			} while ((result_n % 2 == 0) && (result_n > 0))
		}
place = document.getElementById('result');
place.innerHTML = 'The Answer is: ' + result_n + '/' + result_d
// fieldNameElement.innerHTML = "My new text!";

}




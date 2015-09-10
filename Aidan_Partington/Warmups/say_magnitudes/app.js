num = Math.floor(Math.random() *  999999999999)
num = num.toString()

if (num.length > 9) {
	for(i=0)
	console.log('Billion')
} 

if (num.length > 6) {
	console.log('Million')
} 

if (num.length > 3) {
	console.log('Thousand')
}
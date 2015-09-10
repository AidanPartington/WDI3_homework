// https://ga-students.slack.com/files/mattswann/F08BLGU1E/decodethis.md

var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var letters = alphabet.split('');
var number_letter_map = {};
var letter_number_map = {};

for (i=0; i < alphabet.length; i++) {
  number_letter_map[i+1] = letters[i]
  letter_number_map[letters[i]] = i+1
};

var phrase = "FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH";
var phrase_arr = phrase.split('');

var result_phrase = [];

for (i=0; i < phrase_arr.length; i++) {
  if ((phrase_arr[i] !== ' ') && (phrase_arr[i] !== ',')) {
      n = letter_number_map[phrase_arr[i]]-3
      if (n < 0) { n = n + 26 }
      l = number_letter_map[n]
     result_phrase.push(l)
  }  else if (phrase_arr[i] == ' ') {
    result_phrase.push(' ')
  } else {
    result_phrase.push(',')
  }
}
complate_result_phrase = result_phrase.join("")
console.log(complate_result_phrase)

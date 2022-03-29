const hebrewMap = {
	'ך': 'כ',
	'ם': 'מ',
	'ן': 'נ',
	'ף': 'פ',
	'ץ': 'צ',
}
const hebrewChars = Object.keys(hebrewMap).join();

const regexp = new RegExp(`[${hebrewChars}]`, 'g');

module.exports = {
	sanitize: function(str) {
		regexp.lastIndex = 0;
		return str.replace(regexp, function(char) {
			return hebrewMap[char];
		})
	},
}

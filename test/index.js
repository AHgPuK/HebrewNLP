const HebrewNLP = require('../index');

const strs = [
	'שלום',
	'כץ',
	'דף',
	'ערוך',
	'ליצן',
];

strs.map(function (str) {
	console.log(HebrewNLP.sanitize(str));
})

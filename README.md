#HebrewNLP

#### Converts ending chars to normal ones. Used as a text normalizing for indexing.

###Installation:
~~~
yarn add hebrew-nlp
~~~

Example:  
~~~
const HebrewNLP = require('hebrew-nlp');
const result = HebrewNLP.normalize('שלום');
console.log(result);
~~~
Result:
~~~
שלומ
~~~

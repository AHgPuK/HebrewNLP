#HebrewNLP

#### Converts ending chars to normal ones. Used as a text normalizing for indexing.

###Installation:
~~~
yarn add HebrewNLP
~~~

Example:  
~~~
const HebrewNLP = require('HebrewNLP');
const result = HebrewNLP.normalize('שלום');
console.log(result);
~~~
Result:
~~~
שלומ
~~~

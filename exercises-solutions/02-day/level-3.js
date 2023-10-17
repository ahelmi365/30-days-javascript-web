//1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// Count the number of word love in this sentence.

const str =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
const words1 = str.split(" ");
const count = words1.length;
console.log({ count });

// 2. Use match() to count the number of all because in the following sentence:
// 'You cannot end a sentence with because because because is a conjunction'

const sentence =
  "You cannot end a sentence with because because because is a conjunction";
const count2 = (sentence.match(/because/g) || []).length;
console.log(count2);

// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence2 =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

const cleaned = sentence2.replace(/[^\w\s]/gi, "");
console.log({ cleaned });

const words2 = cleaned.split(" ");

const wordsFreq = {};
let mostFreqQWord = "";
let maxFreq = 0;

words2.forEach((word) => {
  if (wordsFreq[word]) {
    wordsFreq[word] += 1;
  } else {
    wordsFreq[word] = 1;
  }
});

// console.log({ wordsFreq });

for (const word in wordsFreq) {
  //   console.log({ word });

  if (wordsFreq[word] > maxFreq) {
    maxFreq = wordsFreq[word];
    mostFreqQWord = word;
  }
}

console.log({ maxFreq });
console.log({ mostFreqQWord });

// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

const sentence3 =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

const words3 = sentence3.split(" ");
console.log({ words3 });
const numbers = [];
for (const word of words3) {
  if (word.match(/[\d]/gi)) {
    numbers.push(word);
  }
}

console.log({ numbers });

const total =
  Number(numbers[0]) * 12 + Number(numbers[1]) + Number(numbers[2]) * 12;
console.log({ total });

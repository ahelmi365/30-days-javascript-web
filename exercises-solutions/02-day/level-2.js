// 1
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

// 2
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

// 3

console.log(typeof "10");
console.log(typeof 10);
console.log(typeof +"10" === typeof 10);

// 4
console.log(Math.ceil(parseFloat("9.8")) === 10);

// 5
console.log("python".includes("on") && "jargon".includes("on"));

// 6

console.log("I hope this course is not full of jargon.".includes("jargon"));

// 7
const rand = Math.floor(Math.random() * 101);
console.log({ rand });

// 8
const rand2 = Math.floor(50 + Math.random() * 51);
console.log({ rand2 });

// 9 Generate a random number between 0 and 255 inclusively.
const rand3 = Math.floor(Math.random() * 256);
console.log({ rand3 });

// 10 Access the 'JavaScript' string characters using a random number.
console.log("JavaScript"[Math.floor(Math.random() * "JavaScript".length)]);

// 11
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

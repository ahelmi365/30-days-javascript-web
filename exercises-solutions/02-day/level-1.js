const challenge = "30 Days of JavaScript";
console.log(challenge);

console.log(challenge);
console.log(challenge.length);

const challengeUpper = challenge.toUpperCase();
console.log(challengeUpper);

const challengeLower = challenge.toLowerCase();
console.log(challengeLower);

const firstWord = challenge.substring(3, 7);
console.log({ firstWord });

const phrase = challenge.slice(3);
console.log({ phrase });

console.log(challenge.includes("Script"));

const words = challenge.split(" ");
console.log({ words });

const networks = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const networksList = networks.split(", ");
console.log({ networksList });

const python = challenge.replace("JavaScript", "Python");
console.log({ python });

const charIndex = challenge.charAt(15);
console.log(charIndex);

const charCode = challenge.charCodeAt(challenge.indexOf("J"));
console.log({ charCode });

console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
console.log(
  "You cannot end a sentence with because because because is a conjunction".indexOf(
    "because"
  )
);
console.log(
  "You cannot end a sentence with because because because is a conjunction".search(
    "because"
  )
);

console.log(" 30 Days Of JavaScript ".trim());

console.log("30 Days Of JavaScript".startsWith("30"));
console.log("30 Days Of JavaScript".endsWith("Script"));
console.log("30 Days Of JavaScript".match("a"));
// console.log("30 Days Of JavaScript".matchAll("a"));
console.log("30 Days of".concat(" JavaScript"));
console.log("30 Days Of JavaScript.\n".repeat(5))
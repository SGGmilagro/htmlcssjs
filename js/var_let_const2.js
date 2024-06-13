// once a const binding is made, you cant change it
try {
  const height = 100;
  height = 300;
} catch (error) {
  console.log(error);
}

console.log("NN------------------");

// const keeps a binding constant...the underlying object can mutate.
// think of it as you cant change me, but you can change my age :-)

const person = {
  name: "rahul",
  age: 52,
};

console.log(person.name);

try {
  person = {
    name: "Trump",
    age: 100,
  };
} catch (error) {
  console.log(error);
}

person.age = 53;

console.log(person);

console.log("------------------");

/* why? these restrictions? */

for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log(i);

console.log("------------------");

for (var j = 0; j < 10; j++) {
  console.log(j);
  setTimeout(function () {
    console.log("after timeout we have " + j);
  }, 1000);
}

console.log("------------------");

for (let k = 0; k < 10; k++) {
  console.log(k);
  setTimeout(function () {
    console.log(`after timeout we have a ${k}`);
  }, 1000);
}

// // you cannot let (or const) a variable twice

// try {
//     let bbb = 5;
//     let bbb = 6;
// } catch (error) {
//     console.log(error);
// }

console.log("------------------");

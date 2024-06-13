var x = 10;
let y = 20;
const z = 30;

function example() {
  var x = 1;
  if (true) {
    let y = 2;
    const z = 3;
    console.log(x, y, z); // 1, 2, 3
  }
  console.log(x, y, z); // 1, 20, 30
}
example();

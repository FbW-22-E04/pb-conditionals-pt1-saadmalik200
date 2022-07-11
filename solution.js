const int1 = 25;
const int2 = 35;
const int3 = 65;

if (
  (int1 >= 50 && int1 <= 99) ||
  (int2 >= 50 && int2 <= 99) ||
  (int3 >= 50 && int3 <= 99)
) {
  console.log(true);
} else {
  console.log(false);
}

const a = 5;
const b = 7;
const c = 8;

if (a > b && a > c) {
  console.log("A is largest", a);
} else if (b > a && b > c) {
  console.log("B is largest", b);
} else {
  console.log("C is largest", c);
}

if (int1 > int2 && int1 > int3) {
  console.log("Int1 is largest", int1);
} else if (int2 > int1 && int2 > int3) {
  console.log("Int2 is largest", int2);
} else {
  console.log("Int3 is largest", int3);
}

const str = "Python";

if (str.slice(0, 2) === "Py") {
  console.log(str);
} else {
  console.log("Py" + str);
}

console.log("------------------------------------");

if (int1 + int2 >= 50 && int1 + int2 <= 80) {
  console.log(65);
} else {
  console.log(80);
}

console.log("------------------------------------");

const int4 = 4;
const int5 = 2;

if (int4 + int5 == 8) {
  console.log(true);
} else if (int4 - int5 == 8 || int5 - int4 == 8) {
  console.log(true);
} else {
  console.log(false);
}

console.log("------------------------------------");

if (int4 == 15 || int5 == 15) {
  console.log(true);
} else if (int4 + int5 == 15) {
  console.log(true);
} else {
  console.log(false);
}
console.log("------------------------------------");

if (int4 % 7 == 0 || int5 % 7 == 0) {
  console.log("Multiple of 7", true);
} else if (int4 % 11 == 0 || int5 % 11 == 0) {
  console.log("Multiple of 11", true);
} else {
  console.log(false);
}

if (int4 == int5) {
  console.log((int4 + int5) * 3);
} else {
  console.log(int4 + int5);
}

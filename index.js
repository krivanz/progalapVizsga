// 1. Adattípusok
// szöveg

const string = 'Szeged';

// szám
const a = 10;

// object
const human = { age: 12, sex: 'male' };

// logikai érték
const bool = true;
const bool2 = false;

// Tömb
const array = [1, 2, 3];

// null Nan és az unindefied

// let a = 2;
// a/0 az NAN
// a%0 pedig unindefied

// 2. feladat a fererencia és az érték szerinti átadás

// Ez érték szerinti paraméter átadás
const c = 1;

console.log(c);
const kiir = (arg) => {
  arg += 1;
};
kiir(c);
/*
const fgv = (k) => {
    k = 10;
};
let a = 1;
fgv(a);
console.log(a);
*/

// Ez pedig referencia alapú paraméter átadás itt változik az eredeti arr függvény

const referenc = (arr) => {
  for (let i = 0; i < 5; i++) {
    arr.push(i);
  }
};
console.log(array);

// 3. feladat összegzés tétele
const sumArray = (arr) => {
  let sum = 0;
  for (const element of arr) {
    sum += element;
  }
  return sum;
};

// 4. megszámlálás tétele

const countElement = (arr, element) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }
  return count;
};

// 5. switch statement
const num = 1;
switch (num) {
  case 1: console.log('Egy');
    break;
  case 2: console.log('Kettő');
    break;
  default:
    console.log('Több, mint 2');
}
// 6. metszet tétele
const section = (src1, src2) => {
  const out = [];
  let count = 0;
  for (let i = 0; i < src1.length; i++) {
    for (let j = 0; j < src2.length; j++) {
      count++;
      if (src1[i] === src2[j] && !out.includes(src1[i])) {
        out.push(src1[i]);
        break;
      }
    }
  }
  console.log('Lépések', count);
  return out;
};
console.log('Section', section([1, 2, 3, 4, 5, 6, 1], [7, 8, 1, 2, 5]));

// 7. modul mely 4 fv-t exportál összeadás, kivonás, osztás, szorzás

const sum = (a, b) => {
  return a + b;
};

const div = (a, b) => {
  return a / b;
};

const mul = (a, b) => {
  return a * b;
};

const neg = (a, b) => {
  return a - b;
};

module.exports = {
  sum,
  div,
  mul,
  neg
};

// 8. tömb generálás és kiíratás hatványokkal

const generateMap = (MAPHEIGHT, MAPWIDTH) => {
  const arr = new Array(MAPHEIGHT);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(MAPWIDTH);
  }
  return arr;
};

const powArr2 = generateMap(3, 3);

console.log(powArr2);
const arrPow = (arr) => {
  let a = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = a;
      a *= 2;
    }
  }
};
console.log(powArr2);

// boolean-1

// let A = 6;;

// let res = A > 0;

// console.log(res);



// boolea-2

// let A = 8;
// let B = 5;

// let res = A >= 0 || B <-2;

// console.log(res);




// boolean-3

// let A = 5;
// let B = 10;
// let C = 15;

// let res = (B > A && B < C);

// console.log(res);



// boolean-4

// let A = 19;
// let B = 17;

// let res = (A % 2 === 1 && B % 2 === 1);

// console.log(res);




// boolean-5

// let A = 7;
// let B = 6;

// let res = ((A % 2 === 1 || B % 2 === 1) && !(A % 2 === 1 && B % 2 === 1));

// console.log(res);



// boolean-6

// let A = 14;
// let B = 17;

// let res = ((A % 2 === 1 && B % 2 === 0) || (A % 2 === 0 && B % 2 === 1));
// console.log(res);



// boolean-7

// let A = 3;
// let B = 5;
// let C = 8;

// let res = (A > 0 && B > 0 && C > 0) ;

// console.log(res);



// boolean-8

// let A = -3;
// let B = 5;
// let C = -8

// let res = ((A > 0 && B <= 0 && C <= 0) || (A <= 0 && B > 0 && C <= 0) || (A <= 0 && B <= 0 && C > 0));

// console.log(res);



// boolean-9

// let A = -3;
// let B = 5;
// let C = 8;

// let res = ((A > 0 && B > 0 && C <= 0) || (A > 0 && B <= 0 && C > 0) || (A <= 0 && B > 0 && C > 0));

// console.log(res);



// boolean-10

// let son = 42;

// let res = (son > 9 && son < 100 && son % 2 === 0);

// console.log(res);




// boolean-11

// let son = 357;

// let res = (son > 99 && son < 1000 && son % 2 === 1);

// console.log(res);



// boolean-12

// let A = 7;
// let B = 12;
// let C = 9;

// let res = ((A % 2 === 0 && B % 2 !== 0 && C % 2 !== 0) ||
// (A % 2 !== 0 && B % 2 === 0 && C % 2 !== 0) ||
// (A % 2 !== 0 && B % 2 !== 0 && C % 2 === 0)) ;

// console.log(res);




// boolean-13

// let son = 123;

// let birlik = son % 10;
// let unlik = Math.floor((son % 100) / 10);
// let yuzlik = Math.floor(son / 100);

// let res = ((birlik < unlik && unlik < yuzlik) || (birlik > unlik && unlik > yuzlik));

// console.log(res);


// boolean-15

let son = 121;

let birlik = son % 10;
let unlik = Math.floor((son % 100) / 10);
let yuzlik = Math.floor(son / 100);

let res = (birlik === yuzlik);

console.log(res);

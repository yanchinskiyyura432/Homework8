//task 1

// function upReg() {
//   let regExp = /^[A-Z]/.test("Hello");
//   if (regExp == true) {
//     console.log("String's starts with uppercase character ");
//   } else {
//     console.log("String's not starts with uppercase character ");
//   }
// }
// upReg();

//task 2

// function checkMail(email) {
//   let regExp1 = /^\S+@\S+\.\S+$/.test(email);
//   console.log(regExp1);
//   return regExp1;
// }
// checkMail();

//task 3

// let str = "cdbBdbsbz";
// let res = str.match(/db+d/gi);
// let res2 = /b+/gi.exec(str);
// let res3 = /d/gi.exec(str);
// console.log(res, res2, res3);

//task 4

// let regExp3 = /([a-z]+)\s([a-z]+)/gi;
// console.log("Java Script".replace(regExp3, "$2 $1"));

// task 5

// console.log(/^[0-9-]{19}$/.test("9999-9999-9999-9999"));

// task 6

// function checkMail1() {
//   let regExp4 = /^([^-_#*.,№!@$%&]{0,1})([-]?\w+)[0-9a-z]-{0,1}/gi;
//   let txt = "mymail@gmail.com";
//   console.log(regExp4.test(txt));
// }
// checkMail1();

// task 7

// function checkLog(txt) {
//   let regExp5 = /^(\D)[0-9a-z]{1,10}[^-_#*,!@$%&]/g;
//   console.log(txt.match(/[-]?[0-9]+[,.]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*/g));
//   console.log(txt);
//   console.log(regExp5.test(txt));
// }
// checkLog("a1.1ret3");

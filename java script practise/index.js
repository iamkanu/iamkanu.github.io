//console

console.log("hello world");

// alert me as a notification type aata hai upper me
//alert("me");

// iss me hame warning dena hota hai (console.warn )
console.warn("this is a warning");

// iss me hame error bata na hota hai (console.error)
console.error("this is an error");
//isme agr true and true hai tabie true aayega varna hamesha false hi aayega
console.log(true && true);
console.log(false && true);

let n1 = 34;
let n2 = 45;
var marks = {
  kanu: 99,
  priya: 20,
  nidhi: 100
};
console.log(marks);
console.log(n1, n2);

let a = "true";
let b = "false";
console.log(b + a);

//undefined ka matlab hai ki vaha ki line empty hai (und)
var und = "undefined";
console.log(und);

//null na matlab hai ki tumhe vaha par likahna hi nhi hai (n)
var n = "null";
console.log(n);

let name = [1, 2, "dv", 4, 5];
console.log(name);

let na = 40;
let nb = 21;
console.log("na is munus by nb so the ans is  ", na - nb);
console.log("na is multiply by nb so the ans is  ", na * nb);
console.log("na is add by nb so the ans is  ", na + nb);
console.log("na is divide by nb so the ans is  ", na / nb);

let abc1 = 35;
let abc2 = abc1;
abc2 -= 5;
console.log(abc2);

let f = 40;
let g = 20;
console.log(g == f);
console.log(g > f);
console.log(g < f);
var n = "null";
console.log(n);

//iss me hame answer me true or false ka ulta milta hai manlo ki hamne true
//likha toh hame ans me false milega (console.log(!true or false })
console.log(!true);
console.log(!false);

//-------------------------------------------------------------------------------------
//function

//function m app agr chahe toh ek baar hi function bana sakte ho aur col- (as your wish)
function avg(a, b) {
  return (a - b) / 2;
}
a1 = avg(50, 30);
a2 = avg(50, 40);
a3 = avg(70, 10);
console.log(a2, a1, a3);

b1 = avg(50, 30);
b2 = avg(50, 40);
b3 = avg(70, 10);
console.log(b3, b2, b1);

//-------------------------------------------------------------------------------------
//if and else

//if means agr else means mgr
let age = 7;
if (age > 8) {
  console.log("you are not a kid");
} else {
  console.log("you are a kid");
}

let number = 8;
if (number > 9) {
  console.log("8 is greater than 9");
} else {
  console.log("8 is not greater than 9");
}

//isme else if hoga naki if else
let ad = 12;
if (ad > 21) {
  console.log("kanu");
} else if (ad > 15) {
  console.log("priya");
} else if (ad > 10) {
  console.log("nidhi");
} else if (ad > 7) {
  console.log("child");
}

// this is loops

//isme for each same likhna hai jaise niche likha hua hai and isme und aaise hi bhich me (122 line no) likha hua hai
let arr = [1, 2, 3, 4, 5];
arr.forEach(function(element) {
  console.log(element);
});

var und = undefined;
console.log(und);

let count = [, 5, 4, 3, 2, 1];
count.forEach(function(element) {
  console.log(element);
});

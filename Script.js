// TAsk 1
var fi = 10;
fi = 20;
console.log(fi); // Output: 20

//task2
var nu = 10;
mu = 20;
console.log(nu); // Output: 20

//TAsk 3
let score = 100;
score = 200; // let allows reassignment
console.log(score); // Output: 200

//task 4
const age = 25;
console.log(age); // Output: 25

//task 6
var myName = "Rajeshwaran";
let myAge = 32;
const myCity = "Madurai";

console.log(myName);
console.log(myAge);
console.log(myCity);

//task 7
let userName = prompt("Enter your name:");
alert("Hello, " + userName + "!");


//task9
let knowsJS = confirm("Do you know JavaScript?");
console.log(knowsJS); // Outputs true if OK was clicked, false if Cancel

//task10
let str = "Hello";
let num = 42;
let isTrue = true;
let unassigned;

console.log(str, typeof str);       // Hello string
console.log(num, typeof num);       // 42 number
console.log(isTrue, typeof isTrue); // true boolean
console.log(unassigned, typeof unassigned); // undefined undefined

//task11
let fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

console.log(fruits);                 // Entire array
console.log(fruits[0]);              // First element ("Apple")
console.log(fruits[fruits.length - 1]); // Last element ("Orange")

//task12
let inventory = {
  fruits: ["Apple", "Banana"],
  electronicItems: ["Laptop", "Phone"],
  vegetableName: "Carrot"
};

console.log(inventory.fruits);
console.log(inventory.electronicItems);
console.log(inventory.vegetableName);

//task13
let aa = 15;
let bb = 4;

console.log(aa + bb); // 19
console.log(aa - bb); // 11
console.log(aa * bb); // 60
console.log(aa / bb); // 3.75

//task14
let remainder = 27 % 5;
console.log(remainder); // Output: 2

//task15
let result = 3 ** 4;
console.log(result); // Output: 81

//task16
let y = 10;
console.log(++y); // Output: 11

//task17
let z = 10;
console.log(--z); // Output: 9

//task18
let w = 10;
console.log(--w); // Output: 9

//task19
let u = 5;
let v = u++;

console.log(u);
console.log(v);

//task20
let t = 4;
console.log(t++); // Output: 4 (returns original value, then increments a to 5)
console.log(t);   // Output: 5

//task21
let s = 4;
console.log(++s); // Output: 5 (increments a to 5 first, then returns it)
console.log(s);   // Output: 5

//task22
let q = 8;
let r = q++;
console.log(q); // Output: 9
console.log(r); // Output: 8

//task23
let o = 8;
let p = ++o;
console.log(o); // Output: 9
console.log(p); // Output: 9

//task24
let m = 6;
let n = m--;
console.log(m); // Output: 5
console.log(n); // Output: 6

//task25
let k = 6;
let l = --k;
console.log(k); // Output: 5
console.log(l); // Output: 5

//task 26
let j = 2;
j++;  
j++; 
console.log(j); // Output: 4

//task27
let i = 10;
--i; 
--i; 
console.log(i); // Output: 8

//task28
let h = 3;
h = h++; 
console.log(h); // Output: 3

//task29
let f = 4;
let g = f++;
console.log("f:", f); // Output: f: 5
console.log("d:", g); // Output: g: 4

//task30
let d = 5;
let e = --d;
console.log("d:", d); // Output: d: 4
console.log("e:", e); // Output: e: 4

//task31
let a = 5;
let b = a++; // b gets 5, a becomes 6
let c = ++a; // a becomes 7, c gets 7

console.log(a); // Output: 7
console.log(b); // Output: 5
console.log(c); // Output: 7

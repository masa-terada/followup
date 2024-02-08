'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let acutal;
let expected;

function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}













// 問題１　evenOrOdd という名前の関数を宣言してください。
function evenOrOdd(array, boolean) {
  if (boolean === true) {
    return array.filter(num => num % 2 === 0);
  } else {
    return array.filter(num => num % 2 !== 0);
  }
}

test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]);
test(evenOrOdd([0, 4, 36], false), []);
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]);









// 問題２　findKeys という名前の関数を宣言してください。
function findKeys(object, target) {
  let result = [];
  for (let key in object) {
    if (object[key] === target) {
      result.push(key);
    }
  }
  return result;
}

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]);







// 問題３　buildObject という名前の関数を宣言してください。
function buildObject(keys, values) {
  let result = {};
  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i];
  }
  return result;
}

test(buildObject(["a", "b", "c"], [1, 2, 3]), { "a": 1, "b": 2, "c": 3 });
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), { "cat": "にゃー", "dog": "わんわん", "duck": "がーがー" });
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), { "cat": null, "dog": 0, "duck": NaN });
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), { "abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8] });







// 問題４　add という名前の関数を宣言してください。
function add(x) {
  return function (y) {
    return x + y;
  }
}

const addTwo = add(2);
test(addTwo(3), 5);
test(addTwo(70), 72);

const addOneHundred = add(100);
test(addOneHundred(3), 103);







// 下のコードを実行すると、どの順番で何が表示されるでしょうか？もちろん、コードを実行する前に答えてください。なぜそうなるのか、わからない場合はわかるまで調べましょう！
function sayHello() {
  console.log("Hello");
}

function sayHelloAndName(name) {
  return "Hello, " + name;
}

const foo = sayHello();
const bar = sayHelloAndName("JavaScript");

console.log(foo);
console.log(bar);

// あなたの回答と、なぜそうなるのかの説明をここに記載してください




// 問題７　関数 map を宣言してください。
function map(arrOrObj, cbFunction) {
  let result = [];

  if (Array.isArray(arrOrObj) === true) {

    for (let i = 0; i < arrOrObj.length; i++) {
      result.push(cbFunction(arrOrObj[i]));
    }
    return result;

  } else {

    for (let key in arrOrObj) {
      result.push(cbFunction(arrOrObj[key]));
    }
    return result;

  }
}

function addOne(num) {
  return num + 1;
}

test(map([1, 2, 3], addOne), [2, 3, 4]);
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]);



// 問題８　関数 changeMiddle を宣言してください。
function changeMiddle(string, word) {
  let words = string.split(" ");
  console.log(words);
  // let middle = Math.floor(words.length / 2);
  words[1] = word;
  return words.join(" ");
}



test(changeMiddle("I like cats", "love"), "I love cats");
test(changeMiddle("red green blue", "yellow"), "red yellow blue");







//問題９ 関数 countSomething を宣言してください。
function countSomething(array) {
  let boolCount = 0;
  let stringCount = 0;
  let numberCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "boolean") {
      boolCount++;
    } else if (typeof array[i] === "string") {
      stringCount++;
    } else if (typeof array[i] === "number") {
      numberCount++;
    }
  }

  if (boolCount > stringCount && boolCount > numberCount) {
    return "BOOL COUNT: " + boolCount;
  } else if (stringCount > boolCount && stringCount > numberCount) {
    return "STRING COUNT: " + stringCount;
  } else {
    return "NUMBER COUNT: " + numberCount;
  }
}


test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3");
test(countSomething([true, true, false, true]), "BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4");






//問題１０　関数 each を宣言してください。
function each(collection, cbFunction) {
  if (Array.isArray(collection) === true) {
    for (let i = 0; i < collection.length; i++) {
      cbFunction(collection[i]);
    }
  } else {
    for (let key in collection) {
      cbFunction(collection[key]);
    }
  }
}


each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);

// 上記を実行すると下記を表示するはずです
// 1
// 2
// 3
// 4
// 5
// 6



// 問題１１　関数 compose を宣言してください。
function compose(funcA, funcB) {
  return function (x) {
    return funcB(funcA(x));
  }
}

function multiplyTwo(x) {
  return x * 2;
}

function addTen(x) {
  return x + 10;
}

const baz = compose(multiplyTwo, addTen);
test(baz(5),20);
test(baz(100),210);

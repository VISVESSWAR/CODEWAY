const exp = "5*3/8-9+3";
const regexp = /\d/;
//console.log(regexp.test(exp[4]))
const arr = [];
var str = "";
for (let i = 0; i < exp.length; i++) {
  if (regexp.test(exp[i])) {
    str += exp[i];
    console.log(str);
  } else {
    arr.push(str);
    str = "";
    arr.push(exp[i]);
    console.log(arr);
  }
  if (i == exp.length - 1) {
    arr.push(str);
  }
}
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "/") {
    console.log(arr[i - 1], arr[i + 1]);
    var temp = Number(arr[i - 1]) / Number(arr[i + 1]);
    console.log(temp);
    //console.log(arr);
    arr[i - 1] = temp;
    console.log(arr);
    arr.splice(i, 2);
    console.log(arr);
    i--;
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "*") {
    console.log(arr[i - 1], arr[i + 1]);
    var temp = Number(arr[i - 1]) * Number(arr[i + 1]);
    console.log("temp=", temp);
    //console.log(arr);
    arr[i - 1] = temp;
    console.log("arr[i-1]=", arr);
    arr.splice(i, 2);
    console.log(arr);
    i--;
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "%") {
    console.log(arr[i - 1], arr[i + 1]);
    var temp = Number(arr[i - 1]) % Number(arr[i + 1]);
    console.log(temp);
    //console.log(arr);
    arr[i - 1] = temp;
    console.log(arr);
    arr.splice(i, 2);
    console.log(arr);
    i--;
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "+") {
    console.log(arr[i - 1], arr[i + 1]);
    var temp = Number(arr[i - 1]) + Number(arr[i + 1]);
    console.log(temp);
    //console.log(arr);
    arr[i - 1] = temp;
    //console.log(arr);
    arr.splice(i, 2);
    console.log(arr);
    i--;
  }
}
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "-") {
    console.log(arr[i - 1], arr[i + 1]);
    var temp = Number(arr[i - 1]) - Number(arr[i + 1]);
    console.log(temp);
    console.log(arr);
    arr[i - 1] = temp;
    console.log(arr);
    arr.splice(i, 2);
    console.log(arr);
    i--;
  }
}

var exp = "16/2-3";
const regexp = /\d/;
var ans = "";
var flag = 0;
//console.log(regexp.test(exp[4]))
const arr = [];
var str = "";
function evaluation(exp) {
  for (let i = 0; i < exp.length; i++) {
    if (regexp.test(exp[i])) {
      str += exp[i];
      console.log(str);
    } else {
      if (exp[i] == "-") {
        console.log("exp=", exp);
        if (str != "") {
          arr.push(str);
        }
        console.log(str);
        str = "-";
        // if(regexp.test(exp[i-1]))
        // {arr.push("+");}
        flag = 1;
      } else {
        arr.push(str);
        str = "";
        arr.push(exp[i]);
        console.log(arr);
    }
}
if (i == exp.length - 1) {
    arr.push(str);
    console.log(arr);
    }
    
  }
  if (flag == 1) {
    arr.push("+");
  arr.push("0");
  flag=0;
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
      ans = arr[0];
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
      ans = arr[0];
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
      ans = arr[0];
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
      ans = arr[0];
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
      ans = arr[0];
    }
  }
  console.log(ans);
  return ans;
}
evaluation(exp);

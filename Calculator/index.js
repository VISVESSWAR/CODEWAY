console.log("entered");
//var exp="5*3/8";

function evaluation(exp) {
  const regexp = /\d/;
  var ans = "";
  var flag = 0;
  //console.log(regexp.test(exp[4]))
  const arr = [];
  var str = "";
  for (let i = 0; i < exp.length; i++) {
    if (regexp.test(exp[i])||exp[i]==='.') {
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
        if(regexp.test(exp[i-1]))
        {arr.push("+");}
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
    }
  }
  if (flag == 1) {
    arr.push("0");
    arr.push("+");
    flag = 0;
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
  ans = arr[0];
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

var input = document.getElementById("string");
var string = document.getElementById("string").value;
var buttons = document.querySelectorAll("button");
var arr1 = Array.from(buttons);
arr1.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      try {
        string = evaluation(string);
      } catch (error) {
        string = "Error";
      }
      console.log("The answer is:", string);
    } else if (e.target.innerHTML === "AC") {
      string = "";
    } else if (e.target.innerHTML === "CE") {
      string = string.slice(0, string.length - 1);
      console.log(string);
    } else {
      string += e.target.innerHTML;
      console.log("got it", string, " ", e.target.innerHTML);
    }
    input.value = string;
  });
});
//  function append(x) {
// }

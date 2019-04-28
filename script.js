var input = document.getElementById("uinput");

//let inArr = [1,2,3,4,1,2,3,4,5,66,6,123,2,1,1]; //Later Userinput
var finArr = [];
function sortArr(arr) {

  var kopArr = [];
  kopArr = arr.concat(); //Zuweisung nicht bei Referenz!
  // kopArr not a reference rather a new Array
  var tempArr = [];      // picks up the same elements and pushes them in finArr
  var i = 1;
  for (i; i <= kopArr.length; i++) {
    //If tempArr is empty, set  kopArr [0], otherwise next step 
    //debugger;
    if (tempArr.length === 0) {
      tempArr[0] = kopArr[0];
      kopArr.splice(0, 1);
      i--;
    }

    //compare the tempArr [0] with the  kopArr [i]
    if (tempArr[0] === kopArr[i] && kopArr.length >= 2) {
      //if the  tempArr [0] is equal to the i++ index of kopArr 
      //push the index into tempArr ...
      tempArr.push(kopArr[i]);
      // debugger;
      //....delete the pushed index with splice
      kopArr.splice(i, 1);
      i--;

    } else if (tempArr[0] === kopArr[0] && kopArr.length < 2) {
      tempArr.push(kopArr[0]);
      //debugger;
      //....and delete the pushed index with splice
      kopArr.splice(0, 1);
    }
  }
  //debugger;
  //push tempArr into finArr
  finArr.push(tempArr);
  // if line 40 equals tempArr = 0; --> finArr gets empty --> "garbage collection" !?
  //"Recursion" termination
  if (kopArr.length === 0) {
    return finArr;
  } else {
    return sortArr(kopArr);//restart this time with the reduced array
  }
}
//sortArr(inArr);





function convertStringToNubmer(str) {
  //Convert String in to Integer
  var str = input.value;
  var array = JSON.parse("[" + str + "]");
  return document.write(sortArr(array));

}

function addEventListener() {
  var btn = document.getElementById("enter");
  btn.addEventListener("click", convertStringToNubmer);
}


addEventListener();









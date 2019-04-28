function sort2dArr(inArr) { }
let a = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20, 20, 30, 30, 30, 10000];
//[1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 20, 30, 30, 30, 391, 392, 591, 10000]
function sortA(a) {
  sortArr(a);
  let t = [];
  let a2 = [];

  for (var i = 0; i <= a.length - 1; i++) {
    for (var j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        
        t.push(a[j])
        i++
      }
    }
    if (t.length > 1) {
      t.push(a[i]);
      a2.push(t);
      t = [];
    }
    else if (t.length <= 1 && t.length >= 0) {
      a2.push(a[i]);
    }
    console.log(i);
  }
  return a2;
}

//bubble sort to sort a one dimensional array
const sortArr = ((arr) => {
  let tmp = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (a[j] < a[i]) {
        tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
      }
    }
  }
  return arr;
})


/* var arr = [23,1,1,0,-1];
function bubbleSort(arr){
  var temp = 0;
  for(var i = 0; i < arr.length-1; i++){
    for(var j = i + 1; j < arr.length; j++){
      if(arr[i] > arr[j]){
        temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp;
      }
    }
  }
} */
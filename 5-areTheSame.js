areTheSame = (arr1, arr2) => {
    let result = true;
   arr1 = arr1.sort((a,b) => {
        return b-a;
    })
   arr2 = arr2.sort((a,b) => {
        return b-a;
    })
  if (arr1.length !== arr2.length) result = false;

    for (var i = 0; i < arr1.length; ++i) {
        if (arr1[i] !== arr2[i]) result = false;
      }
    return console.log(result);
}

let arr1 = [3, 5, 4, 6, 1, 0, 2]
let arr2 = [3, 1, 5, 2, 4, 6, 0]

areTheSame(arr1, arr2);
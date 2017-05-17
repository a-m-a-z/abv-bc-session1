module.exports =  {
aritGeo: (arr) => {

    let arrayType = -1;
    if (arr.length <= 0)
    return 0;
    let a = arr[1], r = a/arr[0], i;
    for (i = 2; i < arr.length; ++i) {
        if ((a *= r) == arr[i]){
            arrayType = "Geometric";
        }
        else{
            arrayType = -1;
        }
    }
    if (arrayType == "Geometric")
    return arrayType;
    a = arr[1], d = a - arr[0], i;
    for (i = 2; i < arr.length; ++i) {
        if ((a += d) == arr[i]){
            arrayType = "Arithmetic";
        }
        else {
            arrayType = -1;
        }
    }
    return arrayType;

  }
}

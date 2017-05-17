module.exports =  {
    findMinMax: (arr) => {
        let minMaxArray = [];
        let min = arr[0]
        let max = arr[0]
        for(let i = 1; i <arr.length;++i){
            if (min<arr[i]){
                min =arr[i];
            }
            if (max>arr[i]){
                max = arr[i];
            }
        }
        if(max===min){
            minMaxArray.push(max);
        }
        else minMaxArray.push(max,min);
        return minMaxArray;
    }

  }

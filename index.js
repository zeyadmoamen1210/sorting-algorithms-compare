const users = require('./data');
const users2 = require('./data2');
const users3 = require('./data3');
const users4 = require('./data4');

// We Will Sort Users Based On Age Using Merge Sort 

function mergeSort(arr){
    let arrLength = arr.length;
    if(arrLength < 2) return;
    let mid = parseInt(arrLength / 2)
    let rightArray = [], leftArray = [];

    // filling left array
    for(let i = 0 ; i < mid ; i++){
        leftArray[i] = arr[i];
    }

    // filling right array
    for(let i = mid ; i < arr.length ; i++){
        rightArray[i-mid] = arr[i];
    }


    mergeSort(leftArray);
    mergeSort(rightArray);
    merge(leftArray, rightArray, arr);
}


function merge(left , right , arr){
    let rIndex = 0, lIndex = 0, arrIndex = 0;
    while(lIndex < left.length && rIndex < right.length){
        if(left[lIndex].age <= right[rIndex].age){
            arr[arrIndex] = left[lIndex];
            lIndex++;
        }else{
            arr[arrIndex] = right[rIndex];
            rIndex++;
        }
        arrIndex++;
    }

    while(lIndex < left.length){
        arr[arrIndex] = left[lIndex];
        lIndex++;arrIndex++;
    }
    while(rIndex < right.length){
        arr[arrIndex] = right[rIndex];
        rIndex++;arrIndex++;
    }
}

function insertionSort(arr){
    for(let i = 1 ; i < arr.length; i++){
        let j = i - 1;
        let current = arr[i];
        while(j >= 0 && current.age < arr[j].age){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
}



function selectionSort(arr){
    for(let i = 0 ; i < arr.length - 1 ; i++){
        let imin = i;
        for(let j = i + 1 ; j < arr.length ; j++){
            if(arr[j].age < arr[imin].age){
                imin = j;
            }
        }
        let temp = arr[imin];
        arr[imin] = arr[i];
        arr[i] = temp;
    }
}


function bubbleSort(arr){
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < arr.length ; j++){
            if(arr[j].age > arr[i].age){
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
        
    }
}
console.log("==================================")

console.log("Sort Users Based On Age (", users.length, "User )")

console.log("==================================")


console.time('Merge Sort')
mergeSort(users)
console.timeEnd('Merge Sort');

console.time('Insertion Sort');
insertionSort(users2);
console.timeEnd('Insertion Sort');

console.time('Selection Sort');
selectionSort(users3);
console.timeEnd('Selection Sort');

console.time('Bubble Sort');
bubbleSort(users4);
console.timeEnd('Bubble Sort');


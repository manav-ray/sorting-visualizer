// https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/ 
export const bubbleSort = (arr) => {

    const animations = []


    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < ( arr.length - i -1 ); j++){

            if(arr[j] > arr[j+1]){
                animations.push([j, j+1, arr[j], arr[j+1]])
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }

    return animations
}
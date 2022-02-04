export const selectionSort = (array) => {

    const animations = []

    for(var i = 0; i < array.length - 1; i++) {

        var minIdx = i

        for(var j = i+1; j < array.length; j++) {
            if (array[j] < minIdx) {
                minIdx = j
            }
        }
        animations.push([minIdx, i, array[minIdx], array[i]])
        const temp = array[minIdx]
        array[minIdx] = array[i];
        array[i] = temp;
    }

    return animations
}
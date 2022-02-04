// https://www.geeksforgeeks.org/selection-sort/
export const selectionSort = (arr, n) => {

    const animations = []

    var i, j, min_idx;
  
    // One by one move boundary of unsorted subarray
    for (i = 0; i < n-1; i++)
    {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;
  
        // Swap the found minimum element with the first element
        swap(arr,min_idx, i, animations);
    }

    return animations
}


function swap(arr,xp, yp, animations)
{
    animations.push([xp, yp, arr[xp], arr[yp]])
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
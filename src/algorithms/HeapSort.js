import { MaxHeap } from './../ds/MaxHeap';

export const heapSort = (arr) => {

    const animations = [];

    const heap = new MaxHeap();
    var n = arr.length - 1;

    arr.map((elem) => {
        heap.insert(elem);
    })

    while(!heap.isEmpty()) {
        animations.push([n, heap.extract()]);
        n--;
    }


    return animations;
}
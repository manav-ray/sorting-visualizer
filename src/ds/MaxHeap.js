// https://gist.github.com/dsasse07/e5fadc14f0af2216c49ec25f11020907

export class MaxHeap {
    constructor(){
      this.values = []
      this.size = 0
    }


    isEmpty() {
        return this.size === 0;
    }
    
    insert(value){
      // If no value, do nothing
      if (value === undefined) return
      // Insert the value, and increment the size of the heap
      this.values.push(value)
      this.size++
      // Check to see if there is not more than 1 item in the heap
      // If there is only 1 item, there is no need to bubble up
      if (this.size > 1) this._bubbleUp()
      return this.values
    }
    
    _bubbleUp(){
      // Grab the most recently added value and its parent
      let currentIndex = this.size - 1
      let parentIndex = Math.floor( (currentIndex - 1) / 2 )
      
      // Swap the new node with its parent until the new node either
      // becomes the root, or is no longer greater than its parent
      while (parentIndex >= 0 && this.values[currentIndex] > this.values[parentIndex]){
        this._swap(currentIndex, parentIndex)
        currentIndex = parentIndex
        parentIndex = Math.floor((currentIndex - 1) / 2 )
      }
    }
    
    // Helper function using object destructuring to swap the elements at two indices
    _swap(index1, index2){
      [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]]
    }
    
    extract(){
      if (this.size === 0) return
      // Swap the value to be extracted (root) with the last item in the heap
      const lastIndex = this.size - 1
      this._swap(0, lastIndex)
      // Remove the value to be extracted 
      const extractValue = this.values.pop()
      this.size--
      // If there is more than one remaining value, we must restore the heap rule
      if (this.size > 1) this._trickleDown()
      return extractValue
    }
    
    _trickleDown(){
      let currentIndex = 0
      /** 
      * These will be the indexes corresponding to the left and right 
      * child of the node at currentIndex
      * swapIdx will be which of the children the currentIndex will
      * actually switch with, if any
      */
      let leftIdx, rightIdx, swapIdx
      while (true) {
          leftIdx = 2 * currentIndex + 1
          rightIdx = 2 * currentIndex + 2
          swapIdx = null
          /**
          * If there is a valid left child and it is greater than the current value,
          * prepare to swap it
          */
          if (
            leftIdx < this.size &&
            this.values[currentIndex] < this.values[leftIdx]
          ) {
            swapIdx = leftIdx
          }
          /**
          * If there is a valid right child and it is greater than the current value,
          * prepare to swap it if we haven't already prepared to swap with left child.
          * If we have prepared to swap with left child, we should only choose to swapIdx
          * with the right child instead if it is greater than the left child, meaning
          * it better fits the heap rule
          */
          if (
            rightIdx < this.size &&
            ((swapIdx === null &&
              this.values[currentIndex] < this.values[rightIdx]) ||
              (swapIdx !== null && this.values[rightIdx] > this.values[leftIdx]))
          ) {
            swapIdx = rightIdx
          }
          if (swapIdx === null) break // If no possibel swap was ID'd, we're done
          // Swap the parent with the identified child, update the currentIndex, and repeat
          this._swap(currentIndex, swapIdx)
          currentIndex = swapIdx
      }
    }
  }
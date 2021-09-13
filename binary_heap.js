class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    bubbleUp() {
        let arr = this.values;
        let index = arr.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);

        const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

        while (arr[index] > arr[parentIndex]) {
            swap(arr, index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
        return this.values;
    }

    // extractMax() {
    //     let arr = this.values,
    //         max = arr.shift();
    //     const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    //     swap(arr, arr.length - 1, 0)

    //     let index = 0,
    //         leftChild = 2 * index + 1,
    //         rightChild = 2 * index + 2;

    //     while (leftChild || rightChild > arr[index]) {
    //         if (leftChild > rightChild) {

    //         }
    //     }
    // }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];
        let leftChildIdx, rightChildIdx,
            leftChild, rightChild, swap;
        while (true) {
            leftChildIdx = 2 * index + 1;
            rightChildIdx = 2 * index + 2;
            swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap);

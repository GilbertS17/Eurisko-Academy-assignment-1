function findMissingNumber(arr: number[]): number {
    let expectedSum: number = 0;
    let arrSum: number = 0;
    for (let i: number = arr[0]; i <= arr[arr.length - 1]; i++){
        expectedSum += i;
    }
    for (let j: number = 0; j < arr.length; j++){
        arrSum += arr[j];
    }
    return (expectedSum - arrSum);
}

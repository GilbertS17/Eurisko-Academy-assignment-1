function reverseArray(arr: string[]): void {
    let    i: number = 0;
    let temp: string; // Temperory variable to swap
    let size: number = arr.length;
	while (i < size)
	{
        // swapping the values of the first and last
        // then the 2nd and before the last and in
        // the same order till we reach the condition
		temp = arr[i];
		arr[i] = arr[size - 1];
		arr[size - 1] = temp;
		i++;
		size--;
    }
}

function reverseString(str: string): string {
    if (str === "") return ""; // Checking if string is empty
    let arr: string[] = str.split("");
    reverseArray(arr); // Calling the function that reverses the array
    let result: string = arr.join("");
    return result;
}

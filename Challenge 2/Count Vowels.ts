const VOWELS = ["a", "e", "i", "o", "u"];

function countVowels(str: string): number {
    let vowelsCount: number = 0;
    str = str.toLowerCase();
    for(let i: number = 0; i < str.length; i++)
    {
        for(let j: number = 0; j < VOWELS.length; j++)
        {
            if(str[i] === VOWELS[j]) vowelsCount++;
        }
    }
    return vowelsCount;
}
function swap(arr: number[], index1: number, index2: number): number[] 
{
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) 
    {
        throw new Error("Invalid indices");
    }

    const temp: number = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  
    return arr;
}

const nums: number[] = [1,2,3,4,5];
  
console.log("\n Original Array:", nums);
swap(nums, 0, 3); 
console.log(" Modified Array:", nums,"\n");
  
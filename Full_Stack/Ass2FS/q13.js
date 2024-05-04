function iterate(arr)
{
  for(i=0; i<arr.length; i++)
  {
    arr[i]();
  }
}

arr = [() => { console.log("first function"); }, () => { console.log("second function"); }];
iterate(arr);
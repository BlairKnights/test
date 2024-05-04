function f(...arg)
{
    if(arg.length > 2)
    {
        console.log(arg);
        return (arg.pop() + f(...arg));
    }
    else 
    {
        console.log(arg);
        return (arg[0]+arg[1]);
    }
}

console.log(f(1,2,3,4,5));
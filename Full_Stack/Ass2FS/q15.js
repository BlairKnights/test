let x = process.argv[2]
let y = process.argv[3]
let z = process.argv[4]

function mode(x,y,z)
{
    if(x<y && y<z)
    {
        return "Strict mode";
    }
    else if(y<z)
    {
        return "Soft mode";
    }
    else
    {
        return "Undefined mode";
    }
}

console.log("\n The numbers "+x+" "+y+" "+z+" are increasing in: "+mode(x,y,z)+"\n");
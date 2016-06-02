var numArgs = process.argv.length - 2;

var sum = 0;
var idx = 0;
while (idx < numArgs)
{
    sum += +process.argv[idx + 2];
    idx += 1;
}

console.log(sum);
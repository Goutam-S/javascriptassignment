var i,j,k;
var n = 10;
for(i=0;i<n;i++)
{
    for(j=0;j<n-i-1;j++)
    {
        process.stdout.write('  ');
    }
    for(k=0;k<=2*i;k++)
    {
        process.stdout.write('1'+' ');

    }
    console.log();
}

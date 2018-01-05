var i,j,k,num;
var n = 5;
for(i=0;i<n;i++)
{
	for(j=0;j<n-i-1;j++)
    {
        process.stdout.write(' ');
    }
            num = 1;
			for(j=0;j<=i;j++)
			{
				 process.stdout.write(num+' ');
                 num = num * (i - j) / (j + 1);
			}
			console.log();
}
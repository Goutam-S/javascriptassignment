var i,j,res;
var n = 10;
for(i=0;i<n;i++)
{
    bspcount=0,aspcount1=0;
    for(j=0;j<n-i-1;j++)
    {
        process.stdout.write('  ');
        bspcount+=1;
    }
    for(j=1;j<=2*i+1;j++)
    {
        
        if(bspcount<=n-1)
            {
                res=(j+i)%10;
                process.stdout.write(' '+res);
                bspcount+=1;
            }
        else
            {
                aspcount1+=1;
                res=(i+j-2*aspcount1)%10;
                process.stdout.write(' '+res);
                
            }
            
    }
    console.log();
       
    
}
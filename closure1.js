function add(a)
{
    function add1(b)
    {
        return a+b;
    }
    return add1;
}
function mul(a)
{
    function mul1(b)
    {
        return a*b;
    }
    return mul1;  
}
function operation(func,a)
{
        return func(a);
}
console.log(operation(add,10)(20));
console.log(operation(mul,10)(20));
console.log("output of identity function");
function identity(id)
{
    return id;
}
console.log(identity(3));//output 3

//----------------------------------------------------------------------------//
console.log("output of add function");
function add(a,b)
{

   return a+b;
}
console.log(add(3,4));//output 7

//----------------------------------------------------------------------------//
console.log("output of mul function");
function mul(a,b)
{
    return a*b;
}
console.log(mul(3,4));//output 12

//----------------------------------------------------------------------------//
console.log("output of identityf function");
function identityf(id)
{
    function retval()
    {
        console.log(id);
    }
    return retval;
}
idf=identityf(3);
idf();//output 3

//----------------------------------------------------------------------------//
console.log("output of addf function");
function addf(a)
{
    
    function adds(b)
    {
        console.log(a+b);
    }
    return adds;
}
addf(3)(4);//output 7

//----------------------------------------------------------------------------//
console.log("output of applyf function");
function applyf(func)
{
    function arga(a)
    {
        function argb(b)
        {
            return func(a,b);
        }
        return argb; 
    }

    return arga;
}
addf=applyf(add);
console.log(addf(3)(4));//output 7
console.log(applyf(mul)(5)(6));//output 30

//----------------------------------------------------------------------------//
console.log("output of curry function");
function curry(func,a)
{ 
    function op(b)
    {
        return func(a,b);
    }
    return op;   
}
add3=curry(add,3);
console.log(add3(4));//output 7
console.log(curry(mul,3)(4));//output 12

//----------------------------------------------------------------------------//
console.log("-------1.incrementing using curry function---------");
inc = curry(add,1);
console.log(inc(5));
console.log(inc(inc(5)));


console.log("--------2.incrementing using addf function---------");
inc=addf(1);//output 7
console.log(inc(5));
console.log(inc(inc(5)));

console.log("--------3.incrementing using apply function--------");
inc=applyf(add)(1)
console.log(inc(5));
console.log(inc(inc(5)));
//----------------------------------------------------------------------------//
console.log("output of methodize function");
function methodize(f)
{
    return function(y)
    {
        return f(this,y)
    }
}
Number.prototype.add = methodize(add);
console.log((3).add(4));//output 7

//----------------------------------------------------------------------------//
console.log("output of twice function");
function twice(funcs)
{
    function dob(a)
    {
        return funcs(a,a);
    }
    return dob;
}
var double=twice(add);
console.log(double(11));//22
var square= twice(mul);
console.log(square(11));//121



//----------------------------------------------------------------------------//
console.log("output of composeu function");
function composeu(func1,func2)
{
    
    
    function fun1(a)
    {
        var e1=func1(a);
        console.log(func2(e1));
    }
    return fun1;
}
composeu(double, square) (3)//output 36

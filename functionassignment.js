console.log("output of identity function");
function identity(id)
{
    return id;
}
console.log(identity(3));//output 3


console.log("output of add function");
function add(a,b)
{

   return a+b;
}
console.log(add(3,4));//output 7


console.log("output of mul function");
function mul(a,b)
{
    return a*b;
}
console.log(mul(3,4));//output 12


console.log("output of identityf function");
function identityf(id)
{
    return function()
    {
       return id;
    }
    
}
idf=identityf(3);
console.log(idf());//output 3


console.log("output of addf function");
function addf(a)
{
    
    return function(b)
    {
        return a+b;
    }
    
}
console.log(addf(3)(4));//output 7


console.log("output of applyf function");
function applyf(func)
{
    return function(a)
    {
        return function(b)
        {
            return func(a,b);
        } 
    }

}
addf=applyf(add);
console.log(addf(3)(4));//output 7
console.log(applyf(mul)(5)(6));//output 30


console.log("output of curry function");
function curry(func,a)
{ 
    return function(b)
    {
        return func(a,b);
    } 
}
add3=curry(add,3);
console.log(add3(4));//output 7
console.log(curry(mul,3)(4));//output 12


console.log("-------1.incrementing using curry function---------");
inc = curry(add,1);
console.log(inc(5));//output 6
console.log(inc(inc(5)));//output 7


console.log("--------2.incrementing using addf function---------");
inc=addf(1);
console.log(inc(5));//output 6
console.log(inc(inc(5)));//output 7

console.log("--------3.incrementing using apply function--------");
inc=applyf(add)(1);
console.log(inc(5));//output 6
console.log(inc(inc(5)));//output 7


console.log("output of methodize function");
function methodize(f)
{
    return function(y)
    {
        return f(this,y);
    }
}
Number.prototype.add = methodize(add);
console.log((3).add(4));//output 7


console.log("output of twice function");
function twice(funcs)
{
    return function(a)
    {
        return funcs(a,a);
    }
}
var double=twice(add);
console.log(double(11));//22
var square= twice(mul);
console.log(square(11));//121


console.log("output of composeu function");
function composeu(func1,func2)
{
    return function(a)
    {
        var e1=func1(a);
        return func2(e1);
    }
    
}
console.log(composeu(double, square) (3));//output 36

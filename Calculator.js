function menu(a,b){
    let add,sub,multiply,divide;
    add = a+b;
    sub = a-b;
    multiply= a*b;
    divide= a/b;
    console.log(`Addition: ${add} Subtraction: ${sub} Multiplication: ${multiply} and Division= ${divide}`)
}

function calculator(callback)
{
   callback(50,9);
}

calculator(menu);
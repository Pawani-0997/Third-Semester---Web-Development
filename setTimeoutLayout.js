//setTimeout(function, delay);
//function -> code you want to execute
//delay -> time in milliseconds
//1000 milliseconds = 1 second
//1.USING SIMPLE FUNCTION

console.log("one");
console.log("two");
console.log("three");

setTimeout(function()
{
    console.log("Hello after 5 seconds");
},5000);

console.log("four");
console.log("five");

//2.USING ARROW FUNCTION

setTimeout(()=>{
    console.log("Hello after 3 seconds");
},3000);

function welcome()
{
    console.log("Hello Everyone");
}

setTimeout(welcome , 2000);

function greet(f_name , l_name)
{
    console.log("Hello "+ f_name + l_name);
}

setTimeout(greet , 2000 , "Pawani" , "Dubey");
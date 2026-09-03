const GetPromise=()=>{
    return new Promise((resolve,reject)=>{
    console.log("I am a new Promise");
    resolve("successful")
   // reject("network error");
    });
};

let promise=GetPromise();
promise.then(()=>{
    console.log("Promise is fullfilled");
});
promise.catch(()=>{
    console.log("Network is not working properly");
});
/*let promise = new Promise((resolve,reject)=>{
    console.log("I am a new promise");
});
resolve("Successfully executed");
resolve("123");
reject("Reject your request");
*/
function GetData(dataId) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log("data", dataId);
            resolve("successful");
        }, 8000);

    });
}

let r = GetData(123);
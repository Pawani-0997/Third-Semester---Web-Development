//npm - node package manager
const f=require("fs");
console.log("data1");
console.log("data2");

//f.writeFileSync("Pawani_dub.txt","hello to all , i am pawani dubey")
//f.writeFileSync("pawani.txt","hello to all, i am pawani dubey");
//f.appendFileSync("pawaniNew.txt","\nupdated data");
//f.unlinkSync("pawani.txt");
const result = f.readFileSync("pawani.txt")
console.log(result);//It will return buffer data.
const data = f.readFileSync("pawani.txt","utf-8")
console.log(data);//It will print data in human readable form.
console.log("data3");
console.log("data4");

f.promises.writeFile("File_out.txt","new data","utf-8")
.then(console.log("file successfully created"))
.catch((err)=>console.log(err))
//read a file
//f.promise.readFile("File_out.txt","utf-8")
//.then((data)=>console.log(data))
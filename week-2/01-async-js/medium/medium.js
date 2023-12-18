const fs = require("fs");

fs.readFile("a.txt",'utf-8', (err,data)=>{
    const x = data;

    console.log("this is written in file: "+ x)

    const updatedString = x.replace(/\s+/g, ' ');

    console.log("updated string : " + updatedString)

    fs.writeFile('a.txt', updatedString, () => {
        console.log("Updated successfully");
    })
})


// Nikunj method
// function showclock() {
//     let h = new Date().getHours();
//     let m = new Date().getMinutes();
//     let s = new Date().getSeconds();

//     console.log(h+":"+m+":"+s);
// }
  
//   setInterval(showclock, 1000); 


//chatgpt method
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12;
    hours = hours ? hours : 12; 
  
    const time24Format = `${hours}:${minutes}:${seconds}`;
    const time12Format = `${hours}:${minutes}:${seconds} ${ampm}`;
    console.clear();
  
    console.log(time12Format + " || " + time24Format)
}
setInterval(updateTime, 1000);
updateTime();
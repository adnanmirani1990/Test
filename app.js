let arr = [3, 5, 7];
let obj = {
    name: "John",
    age: 26
};

    
for (let i in arr) {
  console.log(i); // 0, 1, 2
}
    
for (let i of arr) {
  console.log(i); // logs "3", "5", "7"
}

for (let key in obj) {
    console.log(key , obj[key]);
}







splice(start, deleteCount, item1, item2, ...)





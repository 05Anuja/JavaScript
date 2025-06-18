let myobj = {
    name: "Anuja",
    age: 21,
    qualification: "B.Sc.IT",
}

for (const key in myobj) {
    // console.log(key); //it returns key of the object
    console.log(`${key} = ${myobj[key]}`);
}
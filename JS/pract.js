let pen = {
    name: "Lexi",
    price: 10,
    color: "Blue",
    write: function() {
        console.log(`This ${this.name} pen writes in ${this.color} color`);
    }
};

console.log(pen);
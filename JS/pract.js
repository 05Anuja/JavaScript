let pen = {
    name: "Lexi",
    price: 10,
    color: "Blue",
    write: function writes() {
        console.log(`This ${this.name} pen writes in ${this.color} color`);
    }
};

// console.log(pen.write);
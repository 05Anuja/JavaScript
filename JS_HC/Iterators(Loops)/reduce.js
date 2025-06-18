const nums = [1, 2, 3];

// const total = nums.reduce((acc, currVal) => {
//   console.log(`acc: ${acc} and currVal: ${currVal}`);
//   return acc + currVal;
// }, 10);

const total = nums.reduce((acc, currVal) => acc + currVal, 0);

// console.log(total);

const shoppingCart = [
    {
        course: "JS",
        price: "2999",
    },
    {
        course: "ReactJS",
        price: "999",
    },
    {
        course: "CPP",
        price: "399",
    },
    {
        course: "Python",
        price: "899",
    },
    {
        course: "DSA",
        price: "4999",
    },
];

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(totalPrice);
// function parentFunc() {
//     console.log("Parent Function")
// }

// function childFunc() {
//     console.log("Child Function")
//     parentFunc();
// }

// childFunc();

function parentFunc() {
    console.log("Parent Function")
}

function childFunc() {
    console.log("Child Function")
    return parentFunc;
}

let func = childFunc();
func();
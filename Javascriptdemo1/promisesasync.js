const asyncFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello World");
        }, 4000);
    });
};

const main = async () => {
    const wait = await asyncFunction();
    console.log(wait);
    console.log("This is a JavaScript file");
};

main();
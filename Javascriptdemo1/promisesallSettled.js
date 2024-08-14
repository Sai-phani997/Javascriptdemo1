const pall1 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve("P1 Success"), 3000);
});


const pall2 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve("P2 Success"), 1000);
});

const pall3 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve("P3 Success"), 2000);
});



Promise.allSettled([p1,p2,p3])
   .then((res) => {
    console.log(res);
   })
   .catch((err) => {
    console.log(err);
});
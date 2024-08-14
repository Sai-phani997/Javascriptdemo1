const prac1 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve("P1 Success"), 3000);
});


const prac2 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve("P2 Success"), 1000);
});

const prac3 = new Promise((resolve,reject) =>{
    setTimeout(() => resolve("P3 Success"), 2000);
});



Promise.race([p1,p2,p3])
   .then((res) => {
    console.log(res);
   })
   .catch((err) => {
    console.log(err);
   });
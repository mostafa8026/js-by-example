// They are just like the promises
// a good youtube: https://www.youtube.com/watch?v=DHvZLI7Db8E&ab_channel=WebDevSimplified

let p = new Promise((resolve, reject) =>{
    let a = 1 + 1
    if (a == 2){
        setTimeout(() => {
            resolve('Success')
        }, 2000);
    }else{
        reject('failed')
    }
})

console.log('before promise')
p.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
})
console.log('after promise')
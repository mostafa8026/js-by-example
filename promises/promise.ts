// They are just like the promises
// a good youtube: https://www.youtube.com/watch?v=DHvZLI7Db8E&ab_channel=WebDevSimplified

const world = 'world';

export function hello(word: string = world): Promise<string> {
    return new Promise((resolve, reject) => {
        if(word == 'reject'){
            reject('you have send reject keyword :)')
        }
        setTimeout(() => {
            resolve(`Hello ${world}! after timeout`)
        }, 2000);
    });
}

export function start() {
// (function () {
//     console.log('start');
//     console.log(hello().then(value => {
//         console.log(value);
//     }));
//     console.log('end');
// }())


    (async function () {
        console.log('start');
        console.log(await hello());
        console.log('end');
    }())

    console.log('end of program');
}


export function asyncMethod(cb){
    return setTimeout(()=>{
        cb("peanut butter")
    })
}

export function promise (name) {
    return new Promise((resolve) => {
        setTimeout(() => resolve('peanut butter'), 100)
    })
}

export function rejectPromise(){
    return new Promise((resolve,reject) =>{
        reject("error")
    })
}
new Promise((resolve, reject) => {
    resolve();
})


const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('YOURE FAKE DATA HERE')
            }
            reject('Request Error!')
         }, 1000)
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log('DONE WITH REQUEST!')
        console.log('Data is: ', data)
    })
    .catch((error) => {
        console.log("OH NO: ", err)
    })
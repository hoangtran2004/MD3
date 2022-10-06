const myBirthDay = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isKayoSick) {
                resolve(2);
            } else reject(new Error('I am sad '))
        }, 2000)
    })
}
myBirthDay(false)
    .then((result) => {
        console.log(`I have ${result} cakes !`)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log('Party still continue ')
    })
myBirthDay(true)
    .then((result) => {
        console.log(`I have ${result} cakes !`)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log('Party still continue ')
    })

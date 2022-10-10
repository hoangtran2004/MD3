async function myBirthday(isKayoSick) {
    if (!isKayoSick) return 2;

    throw new Error('I am sad ')

}

async function check() {
    try {
        let result = await myBirthday(false);
        console.log(`I have ${result} cakes`)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('Party')
    }
}

check();
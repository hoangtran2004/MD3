const checkLicensePlate = (licensePlate) => {
    const arr = ['29', '30', '31', '32', '33', '40'];
    for (const value of arr) {
        if (licensePlate.startsWith(value)) {
            return true;
        }
    }
    return false;
}

const listLicensePlate = ["29P1-124123", "30L9-63568", "17B3-29013", "33H2-21231"];
let listLicensePlateInHN = [];
for (const value of listLicensePlate) {
    if (checkLicensePlate(value)) {
        listLicensePlateInHN.push(value);
    }
}

console.log(`License plate of Ha Noi : ${listLicensePlateInHN}`)
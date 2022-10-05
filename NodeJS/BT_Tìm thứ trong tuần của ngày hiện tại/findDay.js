let day=["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"];
let date=new Date().toLocaleDateString();
let today=new Date().getDay();
console.log(date)
console.log(`Hôm nay là ${day[today]}`);

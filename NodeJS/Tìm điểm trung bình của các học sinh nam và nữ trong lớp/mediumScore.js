let students = [
    {
        name: "Ha",
        gender: 'female',
        point: 8
    },
    {
        name: "Huy",
        gender: 'male',
        point: 9
    },
    {
        name: "Hung",
        gender: 'male',
        point: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        point: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        point: 10
    },
    {
        name: "Long",
        gender: 'male',
        point: 5
    },
    {
        name: "Luan",
        gender: 'male',
        point: 10
    },
    {
        name: "Linh",
        gender: 'female',
        point: 8
    }
];
let maleStudent=students.filter((item)=>item.gender==='male');
let malePoint= students.filter((item)=>item.gender==='male').reduce((arc,cur)=>arc +cur.point,0);
let mediumPointMale=malePoint/maleStudent.length;
let femaleStudent=students.filter((item)=>item.gender==='female');
let femalePoint= students.filter((item)=>item.gender==='female').reduce((arc,cur)=>arc +cur.point,0);
let mediumPointFemale=femalePoint/maleStudent.length;

console.log(`Tổng số học sinh nam là : ${maleStudent.length}, Tổng số học sinh nữ là :${femaleStudent.length} ;
Điểm trung bình HS nam :${mediumPointMale}, Điểm trung bình HS nữ :${mediumPointFemale}`)
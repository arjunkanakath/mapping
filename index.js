const students = [
    {
        name: "Akku",
        marks: 70,
    },
    {
        name: "Aden",
        marks: 50,
    },
    {
        name: "Manu",
        marks: 40,
    },
    {
        name: "Charlie",
        marks: 80,
    },
    {
        name: "Jasmine",
        marks: 75,
    },
    {
        name: "shanti",
        marks: 45
    }

]
const passedstudentslist = []

students.map((student)=> {
    if(student.marks >= 50) {
        const data = {
            name: student.name,
            marks: student.marks,
            passedthetest: true
        }
        passedstudentslist.push(data)
    }
else{
    const data = {
        name: student.name,
        marks: student.marks,
        passedthetest: false
    }
    passedstudentslist.push(data)
}
})
console.log(passedstudentslist)
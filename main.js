const getInitials = (name) => {
    strArray = name.split(" ");
    return strArray[0][0] + strArray[1][0];
}

const idGenerator = (suffix) => {
    const str = Date.now() + Math.random();
    const Id = str.toString()+suffix;
    return Id.replace(".", "");
}

console.log("Hello from JavaScript");
//  creating school object
let school = {
    name: " King's College",
    address: " Lagos ",
    studentsArray: [],
    staffsArray: [],
    getStudent: () => {
        
    },
   registerStudent: (name, age, gender, sClass, phone, address, schoolfee) => {
        suffix = getInitials(name);
        const uniqueId = idGenerator(suffix);    
        const studentData = {
            id: uniqueId,
            name: name,
            age: age,
            gender: gender, 
            sClass: sClass,
            phone: phone,
            address: address,
            schoolfee: schoolfee
        };
        school.studentsArray.push(studentData);
        return uniqueId;
    },
    getAllStudents: function() {
        return this.studentsArray;
    },
    modifyStudent: function(id){},
    deleteStudent: function(id){},

    employStaff: function(name, gender, subject, yearsofexperience, qualification, contact) {
        suffix = getInitials(name);
        const uniqueId = idGenerator(suffix);
        const staffData = {
            id: uniqueId,
            name: name,
            gender: gender,
            subject: subject,
            yearsofexperience: yearsofexperience,
            qualification: qualification,
            contact: contact
        };
        school.staffsArray.push(staffData);
        return uniqueId;
    },
    getAllStaffs: function() {
        return school.staffsArray;
    },
    getStaffId: function(id){},
    modifyStaff: function(id){},
    deleteStaff: function(id){},
    getSchoolAccount: function(){},
    getSchoolInfo: function(){},
}

//School.registerStudent("samuel Damilola", 70, "f", "none", 67757375378, "10b, Araba str", "none"),
console.log(school.registerStudent("Samuel Damilola", 50, "m", "none", 987456321, "10b, araba onikosi", "none"));
console.log(school.getAllStudents());
console.log(school.getAllStaffs());
console.log(school.employStaff("Anthony Stoopid", "f", "Biology", 5, "B.sc", "none"));





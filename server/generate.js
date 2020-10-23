var faker = require("faker");
const { features } = require("process");

var database = { students: [], courses: [] };
let genders = ["female", "male"];

for (var i = 1; i <= 5; i++) {
  database.students.push({
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    middleName: faker.name.lastName(),
    birthDate: faker.date.past(),
    sex: faker.random.arrayElement(genders),
  });

  database.courses.push({
    id: faker.random.uuid(),
    courseName: faker.company.bsNoun(),
    startDate: faker.date.soon(),
    endDate: faker.date.soon(),
    enrolledStudents: [],
  });
}

console.log(JSON.stringify(database));

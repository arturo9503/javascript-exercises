const findTheOldest = function(people) {
    let max = 0;
    let age;
    let i = 0;
    let idx = 0;
    people.forEach(person =>{
        let deathYear;
        if (person['yearOfDeath']){
            deathYear = person['yearOfDeath'];
        }
        else{
            deathYear = new Date().getFullYear();
        }
        age = deathYear - person['yearOfBirth'];
        if (age > max){
            max = age;
            idx = i;
        }
        i++;
    });
    return people[idx];
};

// Do not edit below this line
module.exports = findTheOldest;

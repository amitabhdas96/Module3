let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

// let moreSports = teamSports;
// let moreSports = [teamSports[0],teamSports[1],teamSports[2]];
let moreSports = [];
teamSports.forEach(myFunction);
function myFunction(item, index) {
    moreSports.push(item);
  
  }

moreSports.push("Kabaddi");
moreSports.unshift("ChorPolis","KhoKho");
console.log(moreSports)
console.log(teamSports)

var dog2 = dog1;
dog2 = 'Bingo2';
console.log(dog2)
console.log(dog1)

// let cat2 = cat1
let cat2 = {...cat1}
cat2["name"] = "Venusia"
console.log(cat2)
console.log(cat1)
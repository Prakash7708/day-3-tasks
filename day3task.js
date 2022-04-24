
let salaries = {
  jhon : 400,
  pete :200,
  mary : 300,
};
//forEach
console.log(salaries.pete);
console.log(salaries["mary"]);

let abc = "jhon";
console.log(salaries[abc]);

console.log(Object.keys(salaries));
console.log(Object.values(salaries));
//for in
for (var key in salaries){
   console.log(key,"salary is",salaries[key]);
};
//for of only arrays are subborted..
for (var key of Object.keys(salaries)){
   console.log(key,"salary is",salaries[key]);
}


//creating resume in json format


let resume1 ={
    "Name"           :"PRAKASH",
   "Gender"         :"male",
    "10th,12th marks": [452,952],
   "hobbies"        :null,
   "address" :{
          "street" :"pillaiyar kovi Street",
           "city"   :"nagaipattinam",
         "pincode":611108
   }
}; 
  console.log (JSON.stringify(resume1));
  console.log (typeof JSON.stringify(resume1));
// this format is used to read other languges using string
 //console.log(JSON.parse(resume1)); use to reverse string into objects
 
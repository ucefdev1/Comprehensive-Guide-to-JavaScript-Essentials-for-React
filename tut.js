let number = 11;

const isOkay = 11 === number ? console.log('Okay') : console.log('not Okay');


const checkNumber = (number) => {
    return number === 11 ? console.log('okay') : console.log('not Okay');
  };
  


  const person = {
    name: "Pedro",
    age: 20,
    isMarried: false
  }


//   normal way
// const name = person.name;
// const age = person.age;
// const isMarried = person.isMarried;

// fast way
const {name, age, isMarried} = person;


// const name = "Pedro"


// const person = {
//     name: name,
//     age: 20,
//     isMarried: false;
//   }


// const name = "Pedro"
// const person = {
//     name,   (you don't need to write 'name: name' just write 'name,')
//     age: 20,
//     isMarried: false;
//   }


// if I want to create object called person2 and he is exactlly as the person 1 but the name is different


const person2 = {...person, name: "Jack"} // now the person2 is exactlly the same with the person 1 but with a different name "Jack" 

const names = ["youssef","said","hamid"];
const names2 = [...names,"othamne","hamid2"];

names.map((name)=>{
    return name+"1";
})


// filter fuction
const names3 = ["youssef","said","hamid","yassine"];

// the same of .map() but with condition

names.filter((names) => {
    return names !== "yassine";
})
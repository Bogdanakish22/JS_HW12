const user = {
  name: "John",
  age: 30,
  hobby: "reading",
  premium: true
};


user.mood = "happy";


user.hobby = "skydiving";


user.premium = false;


for (const key of Object.keys(user)) {
  console.log(`${key}: ${user[key]}`);
}



function countProps(obj) {
  return Object.keys(obj).length;
}


console.log(countProps({ name: "Alice", age: 25, city: "Kyiv" })); 
console.log(countProps({})); 



function findBestEmployee(employees) {
  let bestEmployee = "";
  let maxTasks = 0;

  for (const employee in employees) {
    if (employees[employee] > maxTasks) {
      maxTasks = employees[employee];
      bestEmployee = employee;
    }
  }
  
  return bestEmployee;
}


console.log(findBestEmployee({ Alice: 10, Bob: 20, Charlie: 15 })); 
console.log(findBestEmployee({ Ann: 2, Max: 5, John: 3 })); 



function countTotalSalary(employees) {
  let totalSalary = 0;

  for (const salary of Object.values(employees)) {
    totalSalary += salary;
  }
  
  return totalSalary;
}


console.log(countTotalSalary({ Alice: 1000, Bob: 1500, Charlie: 1200 })); 
console.log(countTotalSalary({})); 



function getAllPropValues(arr, prop) {
  return arr.map(obj => obj[prop]).filter(value => value !== undefined);
}


const products = [
  { name: "Laptop", price: 1000, quantity: 3 },
  { name: "Phone", price: 500, quantity: 5 },
  { name: "Tablet", price: 800 }
];

console.log(getAllPropValues(products, "name")); 
console.log(getAllPropValues(products, "price")); 
console.log(getAllPropValues(products, "quantity")); 



function calculateTotalPrice(allProducts, productName) {
  let totalPrice = 0;

  for (const product of allProducts) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
      break;
    }
  }
  
  return totalPrice;
}


const inventory = [
  { name: "Laptop", price: 1000, quantity: 3 },
  { name: "Phone", price: 500, quantity: 5 },
  { name: "Tablet", price: 800, quantity: 2 }
];

console.log(calculateTotalPrice(inventory, "Phone")); 
console.log(calculateTotalPrice(inventory, "Laptop")); 
console.log(calculateTotalPrice(inventory, "Tablet")); 

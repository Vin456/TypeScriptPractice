const person: {
  name: string;
  age: number;
} = {
  name: "Ashok",
  age: 40,
};

console.log(person);

// Nested Objects
const product: {
  id: string;
  price: number;
  tags: string[];
  details: { title: string; description: string };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great Carpet",
  },
};

console.log(product);

// Initializing arrays
let favouriteActivities: string[];
favouriteActivities = ["Sports"];

// Uses of typescript inference
const person2 = {
  name: "Ashoka",
  age: 40,
  hobbies: ["Sports", "Cooking"],
};

for (const hobby of person2.hobbies) {
  console.log(hobby.toUpperCase()); // Doesn't show error as typescript compiler knows hobby is string type
  // console.log(hobby.map()); // shows error as map doesn't work on strings same is not shown on JS
}

// Tuples
const person3 = {
  name: "Shivaji",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person3.role.push("Hello"); // This works
person3.role[1] = 10; // Even this works if we dont specify the type annotations

console.log(person3);

// Now if we specify types annotations
const person4: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Shivaji",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

// This is a exception that we should be careful with
// person4.role.push("hello");

// person4.role[1] = 10; // This doesn't work as we have explicitly specified types
person4.role = [0, "Hello"]; // We can reassign the tuple like this

console.log(person4);

// Enums
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
enum Role2 {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}
enum Role3 {
  ADMIN = "ADMIN",
  READ_ONLY = "READ_ONLY",
  AUTHOR = "AUTHOR",
}
enum Role4 {
  ADMIN = "ADMIN",
  READ_ONLY = 0,
  AUTHOR,
}

const person5 = {
  name: "Krishna",
  age: 40,
  hobbies: ["Sports"],
  role: Role.ADMIN,
};

if (person5.role === Role.ADMIN) {
  console.log("The user is admin");
}

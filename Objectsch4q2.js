No Colon
The key: value syntax is the normal way to create key-value pairs in an object, but if you want a key to have the same name as an existing variable, you can omit the colon and the value. These are the same:

const radius = 2;
const color = "red";
const apple = {
  radius: radius,
  color: color,
};

const radius = 2;
const color = "red";
const apple = {
  radius, // same as radius: radius
  color: color, // set explicitly for demonstration
};

Which is not the same?



{ car: car }


{ car: "car" }


{ car }
the answer = { car: "car" } ;
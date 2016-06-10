/**
 * Represents a book.
 * @constructor
 * @param {String} name - The name of the dog.
 * @param {Number} age - The age of the dog.
 */
function Dog(name, age) {
  this.name = name;
  this.age = age;
}

/**
 * Allows a dog to speak.
 * @returns {String}
 */
Dog.prototype.speak = () => {
  const x = 3;
  return `${this.name + x} woof!`;
};

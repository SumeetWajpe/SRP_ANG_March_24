function Add(x, y) {
  return x + y;
}

function Product(x, y) {
  return x * y;
}

// module.exports.Add = Add;
// module.exports.Multiplication = Product;
module.exports = { Add, Multiplication: Product };

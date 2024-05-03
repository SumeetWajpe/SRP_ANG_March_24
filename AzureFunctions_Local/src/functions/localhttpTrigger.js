const { app } = require("@azure/functions");
const fs = require("fs/promises");
const path = require("path");
const products = require("./products");
// app.http("httptrigger", {
//   methods: ["GET", "POST"],
//   authLevel: "anonymous",
//   route: "products/{id:int?}",
//   handler: async (request, context) => {
//     context.log(`Http function processed request for url "${request.url}"`);

//     var theProduct;
//     var products = [
//       { id: 1, title: "MacBookPro" },
//       { id: 2, title: "QLED TV" },
//     ];

//     const id = request.params.id; // fetching the id from url (route parameter)
//     if (id) {
//       theProduct = products.find(p => p.id == id);
//       return {
//         jsonBody: theProduct,
//       };
//     }
//     return {
//       jsonBody: products,
//     };
//     // return { jsonBody: products };
//   },
// });

app.http("products", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    context.log(`Http function processed request for url "${request.url}"`);
    return {
      jsonBody: products,
    };
    // return { jsonBody: products };
  },
});
app.http("newproduct", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    context.log(`Http function processed request for url "${request.url}"`);

    const newProduct = await request.json(); // read JSON from the body/request & convert to jasvscript object
    products.push(newProduct);
    context.log(products);
    return {
      jsonBody: { msg: "Product inserted successfully !" },
    };
    // return { jsonBody: products };
  },
});

app.http("books", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  route: "books",
  handler: async (request, context) => {
    context.log(`Http function processed request for url "${request.url}"`);

    var books = [
      { id: 1, title: "Wings Of Fire" },
      { id: 2, title: "Ikigai" },
    ];

    return {
      status: 200,
      body: JSON.stringify(books),
      headers: {
        "Content-Type": "application/json",
      },
    };
    // return { jsonBody: products };
  },
});

app.http("index", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    try {
      //   context.log(__dirname);
      const dataFromFile = await fs.readFile(
        path.resolve("./src/functions/Index.html"),
      );
      return {
        body: dataFromFile,
        headers: {
          "Content-Type": "text/html",
        },
      };
    } catch (error) {
      context.error(error);
    }
    // return { jsonBody: products };
  },
});

const db = require('./backend/content/makeupDB');
const data = db[0];
console.log("Products:", data.tutorial.products);

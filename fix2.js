const fs = require("fs");
const files = ["frontend/hair.html", "frontend/face.html", "frontend/outfit.html", "frontend/skincare.html"];
files.forEach(f => {
    let c = fs.readFileSync(f, "utf8");
    c = c.replace(/Analyze my hair.*/g, "Analyze my hair ✨</button>");
    c = c.replace(/Analyze my face.*/g, "Analyze my face ✨</button>");
    c = c.replace(/Analyze my outfit.*/g, "Analyze my outfit ✨</button>");
    c = c.replace(/Build my routine.*/g, "Build my routine ✨</button>");
    c = c.replace(/Mix & Match My Clothes.*/g, "Mix & Match My Clothes ✨</button>");
    fs.writeFileSync(f, c, "utf8");
});
console.log("Done");

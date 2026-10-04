const fs = require("fs");
const files = ["frontend/hair.html", "frontend/face.html", "frontend/outfit.html", "frontend/skincare.html"];
files.forEach(f => {
    let c = fs.readFileSync(f, "utf8");
    c = c.replace(/<div style="font-size:35px">.*?<\/div>/g, '<div style="font-size:35px">📸</div>');
    c = c.replace(/Analyze my hair o/g, "Analyze my hair ✨");
    c = c.replace(/Analyze my face o/g, "Analyze my face ✨");
    c = c.replace(/Analyze my body o/g, "Analyze my body ✨");
    c = c.replace(/Build my routine o/g, "Build my routine ✨");
    fs.writeFileSync(f, c, "utf8");
});
console.log("Done");

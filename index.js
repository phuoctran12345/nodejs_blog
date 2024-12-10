const express = require("express"); //
const app = express();
const port = 3000;

// Tuyến đường
app.get("/tintuc", (req, res) => {
    var a = 1;
    var b = 2;

    var c = a + b;
  return send("Hello World!"); // trả về trình duyệt
});

// 127.0.0.1 - localhost

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

const express = require("express");
//const PORT = 4000;
const app = express();

const port = process.env.PORT || 4000; /// in yani ya az 4000 migire ya az computeri ke rooosh run misheh mitooneh masalan rooye ye servere digeh basheh .
app.listen(port, () => console.log("Running in port 4000"));

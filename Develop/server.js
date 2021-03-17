const express = require('express'); 
const app = express();
const PORT = process.env.PORT || 6500;


app.listen(PORT, () => console.log(`app listening on PORT ${PORT}`));
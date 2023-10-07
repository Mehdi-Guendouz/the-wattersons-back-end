const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoute');
require('dotenv').config();
const vehicleRoutes = require('./routes/vehicleRoute');
const connectDB = require('./configs/DBconfig');

const app = express();
const PORT = process.env.PORT || 3000;



app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/api', vehicleRoutes);

connectDB()
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

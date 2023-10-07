// const mongoose = require('mongoose');
// const User = require('./models/userModel');
// const Vehicle = require('./models/vehicleModel');
// const userData = require('./data/userData');
// const vehiclesData = require('./data/vehicleData');
// const bcrypt = require('bcrypt');


// require('dotenv').config();

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// const saltRounds = 10;

// const hashedUserData = usersData.map(user => {
//   const hashedPassword = bcrypt.hashSync(user.password, saltRounds);
//   return { ...user, password: hashedPassword };
// });

// console.log(hashedUserData);

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', async () => {
//     console.log('Connected to MongoDB');
//     try {
//         const insertedUsers = await User.insertMany(userData);
//         console.log('Inserted users:', insertedUsers);
    
//         const insertedVehicles = await Vehicle.insertMany(vehiclesData);
//         console.log('Inserted vehicles:', insertedVehicles);
//     } catch (err) {
//         console.error('Error inserting data:', err);
//     } finally {
//         mongoose.connection.close();
//     }

  
// });

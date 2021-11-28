const db = require('./connection');
const { User, Camera } = require('../models');

db.once('open', async () => {

  await Camera.deleteMany();

  const cameras = await Camera.insertMany([
    {
      model: 'x',
      brand: 'Cannon',
      resolution: '5k',
      description:'blah blah blah',
      lensCombatibility: 'Cannon',
      image: 'canon-c300-markiii.jpeg',
      price: 299,
      quantity: 1
    },
    {
      model: 'y',
      brand: 'Sony',
      resolution: '5k',
      description:'blah blah blah',
      lensCombatibility: 'Sony',
      image: 'sony-pxw-fx9-xdcam.jpeg',
      price: 299,
      quantity: 1
    }
    
  ]);

  console.log('cameras seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    phoneNumber: '111-111-1011',
    mailList: true,
    orders: [
      {
        cameras: [cameras[0]._id, cameras[0]._id, cameras[1]._id],
        projectType: 'wedding',
        reservationDates: 'firtsDate-lastDate',

      }
    ]
  });

  console.log('users seeded');

  process.exit();
});

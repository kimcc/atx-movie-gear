const db = require('./connection');
const { User, Product } = require('../models');

db.once('open', async () => {

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      item_type: 'Camera',
      model: 'C300 MK III',
      brand: 'Canon',
      resolution: '4K 120fps',
      description:'16-stops of dynamic range, Super 35mm sensor, dual-pixel autofocus',
      Compatibility: 'EF-Mount',
      image: 'canon_c300_markiii.jpeg',
      price: 190,
      quantity: 1
    },
    {
      item_type: 'Camera',
      model: 'C200',
      brand: 'Canon',
      resolution: '4K 60fps',
      description:'13-stops of dynamic range, Super 35mm sensor, dual-pixel autofocus',
      Compatibility: 'EF-Mount',
      image: 'canon_c200.jpeg',
      price: 125,
      quantity: 1
    },
    {
      item_type: 'Camera',
      model: 'C300 MK II',
      brand: 'Canon',
      resolution: '4K 60fps',
      description:'15-stops of dynamic range, Super 35mm sensor, dual-pixel autofocus',
      Compatibility: 'EF-Mount',
      image: 'canon_c300_markii.jpeg',
      price: 125,
      quantity: 1
    },
    {
      item_type: 'Camera',
      model: 'C70',
      brand: 'Canon',
      resolution: '4K 120fps',
      description:'16-stops of dynamic range, Super 35mm sensor, built-in ND filters',
      Compatibility: 'EF-Mount',
      image: 'canon_eos_c70.jpeg',
      price: 150,
      quantity: 3
    },
    {
      item_type: 'Camera',
      model: 'C300 MK I',
      brand: 'Canon',
      resolution: '2K 60fps',
      description:'12-stops of dynamic range, Super 35mm Sensor, built-in ND filters',
      Compatibility: 'EF-Mount',
      image: 'canon_c300_marki.png',
      price: 75,
      quantity: 1
    },
    {
      item_type: 'Camera',
      model: 'C100 MK I',
      brand: 'Canon',
      resolution: '2K 60fps',
      description:'12-stops of dynamic range, Super 35mm Sensor, built-in ND filters',
      Compatibility: 'EF-Mount',
      image: 'canon_c100.jpeg',
      price: 50,
      quantity: 1
    },
    {
      item_type: 'Camera',
      model: 'FX9',
      brand: 'Sony',
      resolution: '4k 60fps',
      description:'15-stops of dynamic range, Full-frame sensor, 10-bit 4:2:2',
      Compatibility: 'E-Mount',
      image: 'SONY_PXW-Fx9_XDCAM.jpeg',
      price: 200,
      quantity: 1,
    },
    {
      item_type: 'Camera',
      model: 'FX6',
      brand: 'Sony',
      resolution: '4K 60fps',
      description:'15-stops of dynamic range, Full-frame sensor, S-Cinetone color science',
      Compatibility: 'E-Mount',
      image: 'SONY_PXW-Fx6_XDCAM.jpeg',
      price: 150,
      quantity: 2,
    },
    {
      item_type: 'Camera',
      model: 'FX3',
      brand: 'Sony',
      resolution: '4K 60fps',
      description:'15-stops of dynamic range, Full-frame sensor, S-Cinetone color science',
      Compatibility: 'E-Mount',
      image: 'SONY_PXW-Fx3_XDCAM.jpeg',
      price: 125,
      quantity: 1,
    },
    {
      item_type: 'Camera',
      model: 'Raven',
      brand: 'Red',
      resolution: '4k 120fps',
      description:'16-stops of dynamic range, Super 35mm Sensor, Red Raw Output',
      Compatibility: 'EF-Mount',
      image: 'RAVEN-4b107.png',
      price: 160,
      quantity: 1
    },
    {
      item_type: 'Camera',
      model: 'Komodo',
      brand: 'Red',
      resolution: '6K 40fps',
      description:'16-stops of dynamic range, Super 35mm Sensor, Weighs 2.1 lbs',
      Compatibility: 'EF-Mount',
      image: 'IMG_0502-r73d1.png',
      price: 175,
      quantity: 1
    },
    {
      item_type: 'Camera',
      model: 'E2-S6',
      brand: 'Z-Cam',
      resolution: '6k 60fps',
      description:'14-stops of dynamic range, Super 35mm Sensor, Interchangeable lens mount',
      Compatibility: 'EF-Mount',
      image: 'z-cam-e2-s6.jpg',
      price: 50,
      quantity: 1
    },
    {
      item_type: 'Camera',
      model: 'E2-M4',
      brand: 'Z-Cam',
      resolution: '4k 60fps',
      description:'13-stops of dynamic range, Micro 4/3 Sensor, Interchangeable lens mount',
      Compatibility: 'MFT-Mount',
      image: 'z-cam-e2-m4.jpg',
      price: 45,
      quantity: 1
    },
    {
      item_type: 'Camera',
      model: '6K Pro',
      brand: 'Black Magic',
      resolution: '6k 30fps',
      description:'13-stops of dynamic range, Super 35mm Sensor, Built-in ND filters',
      Compatibility: 'EF-Mount',
      image: 'blackmagic-6k-pro.jpg',
      price: 85,
      quantity: 1
    },
    {
      item_type: 'Lens',
      model: 'CN-E 20mm',
      brand: 'Canon',
      resolution: 'T1.3 Aperture',
      description:'Smooth de-clicked focus and aperture rings, full-frame imaging circle, 105mm filter diameter',
      Compatibility: 'EF-Mount',
      image: 'Canon_CN-E_20mm.jpg',
      price: 50,
      quantity: 2
    }

  ]);

  console.log('Products seeded');

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
        Products: [products[0]._id, products[0]._id, products[1]._id],
        projectType: 'wedding',
        reservationDate: 'firtsDate-lastDate',
      }
    ]
  });

  console.log('users seeded');

  process.exit();
});

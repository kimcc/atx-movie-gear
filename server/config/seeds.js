const db = require('./connection');
const { User, Camera } = require('../models');

db.once('open', async () => {

  await Camera.deleteMany();

  const cameras = await Camera.insertMany([
    {
      model: 'C300 MK III',
      brand: 'Canon',
      resolution: '4K 120fps',
      description:'16-stops of dynamic range, Super 35mm sensor, dual-pixel autofocus',
      lensCompatibility: 'EF-Mount',
      image: 'canon_c300_markiii.jpeg',
      price: 190,
      quantity: 1
    },
    {
      model: 'C200',
      brand: 'Canon',
      resolution: '4K 60fps',
      description:'13-stops of dynamic range, Super 35mm sensor, dual-pixel autofocus',
      lensCompatibility: 'EF-Mount',
      image: 'canon_c200.jpeg',
      price: 125,
      quantity: 1
    },
    {
      model: 'C300 MK II',
      brand: 'Canon',
      resolution: '4K 60fps',
      description:'15-stops of dynamic range, Super 35mm sensor, dual-pixel autofocus',
      lensCompatibility: 'EF-Mount',
      image: 'canon_c300_markii.jpeg',
      price: 125,
      quantity: 1
    },
    {
      model: 'C70',
      brand: 'Canon',
      resolution: '4K 120fps',
      description:'16-stops of dynamic range, Super 35mm sensor, built-in ND filters',
      lensCompatibility: 'EF-Mount',
      image: 'canon_eos_c70.jpeg',
      price: 150,
      quantity: 3
    },
    {
      model: 'C300 MK I',
      brand: 'Canon',
      resolution: '2K 60fps',
      description:'12-stops of dynamic range, Super 35mm Sensor, built-in ND filters',
      lensCompatibility: 'EF-Mount',
      image: 'canon_c300_marki.png',
      price: 75,
      quantity: 1
    },
    {
      model: 'C100 MK I',
      brand: 'Canon',
      resolution: '2K 60fps',
      description:'12-stops of dynamic range, Super 35mm Sensor, built-in ND filters',
      lensCompatibility: 'EF-Mount',
      image: 'canon_c100.jpeg',
      price: 50,
      quantity: 1
    },
    {
      model: 'FX9',
      brand: 'Sony',
      resolution: '4k 60fps',
      description:'15-stops of dynamic range, Full-frame sensor, 10-bit 4:2:2',
      lensCompatibility: 'E-Mount',
      image: 'SONY_PXW-Fx9_XDCAM.jpeg',
      price: 200,
      quantity: 1,
      about: "Whether you're shooting documentaries, events, reality TV, education, or corporate productions, the PXW-FX9 XDCAM 6K Full-Frame Camera System from Sony has you covered with its powerful and flexible 4K interchangeable lens camera system. The PXW-FX9 features a full-frame, oversampled 6K Exmor R CMOS sensor that allows you to capture 4K images with cinematic depth of field."
    },
    {
      model: 'FX6',
      brand: 'Sony',
      resolution: '4K 60fps',
      description:'15-stops of dynamic range, Full-frame sensor, S-Cinetone color science',
      lensCompatibility: 'E-Mount',
      image: 'SONY_PXW-Fx6_XDCAM.jpeg',
      price: 150,
      quantity: 2,
      about: "The FX6 Full-Frame Camera from Sony was developed to offer versatile, cine-style imaging in a truly compact form. With the ability to capture up to 15+ stops of dynamic range, Sony's S-Cinetone gamma for filmlike skin tones, and up to 10-bit, 4:2:2 XAVC-I recording, the FX6 is poised to both supplement your FX9 capture and to nimbly take on documentary, gimbal, and drone shoots on its own. The FX6 camera combines a 4K full-frame Exmor R sensor with a BIONX XR engine for extremely sensitive capture in a range of settings using a base ISO of 800 as well as an ISO 12800 high-sensitivity mode for nuanced low-light scenes."
    },
    {
      model: 'FX3',
      brand: 'Sony',
      resolution: '4K 60fps',
      description:'15-stops of dynamic range, Full-frame sensor, S-Cinetone color science',
      lensCompatibility: 'E-Mount',
      image: 'SONY_PXW-Fx3_XDCAM.jpeg',
      price: 125,
      quantity: 1,
      about: "The Sony FX3 borrows from both the Cinema Line and Alpha series of cameras to create an optimized portable cinema camera. The FX3 features all of the imaging attributes you'd expect from this class but sports a newly designed body that's hand-holdable, with a streamlined and minimal profile, and has a \"cage-free\" design, indicating the ability to secure various accessories directly to the camera body."
    },
    {
      model: 'Raven',
      brand: 'Red',
      resolution: '4k 120fps',
      description:'16-stops of dynamic range, Super 35mm Sensor, Red Raw Output',
      lensCompatibility: 'EF-Mount',
      image: 'RAVEN-4b107.png',
      price: 160,
      quantity: 1
    },
    {
      model: 'Komodo',
      brand: 'Red',
      resolution: '6K 40fps',
      description:'16-stops of dynamic range, Super 35mm Sensor, Weighs 2.1 lbs',
      lensCompatibility: 'EF-Mount',
      image: 'IMG_0502-r73d1.png',
      price: 175,
      quantity: 1
    },
    {
      model: 'E2-S6',
      brand: 'Z-Cam',
      resolution: '6k 60fps',
      description:'14-stops of dynamic range, Super 35mm Sensor, Interchangeable lens mount',
      lensCompatibility: 'EF-Mount',
      image: 'z-cam-e2-s6.jpg',
      price: 50,
      quantity: 1
    },
    {
      model: 'E2-M4',
      brand: 'Z-Cam',
      resolution: '4k 60fps',
      description:'13-stops of dynamic range, Micro 4/3 Sensor, Interchangeable lens mount',
      lensCompatibility: 'MFT-Mount',
      image: 'z-cam-e2-m4.jpg',
      price: 45,
      quantity: 1
    },
    {
      model: '6K Pro',
      brand: 'Black Magic',
      resolution: '6k 30fps',
      description:'13-stops of dynamic range, Super 35mm Sensor, Built-in ND filters',
      lensCompatibility: 'EF-Mount',
      image: 'blackmagic-6k-pro.jpg',
      price: 85,
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

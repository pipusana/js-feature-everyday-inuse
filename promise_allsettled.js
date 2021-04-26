
// JavaScript Promise allsettled Features

const uploadImage = imageUrl => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (imageUrl != "image3") {
          resolve("success");
        }
        else {
          reject("fail");
        }
      }, imageUrl.length * 500);
    });
  }
  
let promiseList = [
    uploadImage("image1"),
    uploadImage("image2"),
    uploadImage("image3"),
    uploadImage("image4")
];
  

(async () => {
    promiseResult = await Promise.allSettled(promiseList)
    console.log('resutl', resutl)
})();

// OutPut:    
//    [
//        { status: 'fulfilled', value: 'success' },
//        { status: 'fulfilled', value: 'success' },
//        { status: 'rejected', reason: 'fail' },
//        { status: 'fulfilled', value: 'success' }
//    ]

// Promise.allSettled() จะรอจนทุก Promise ในนั้นทำงานเสร็จ ไม่ว่าจะเรียก resolve หรือ reject ก็ได้ แล้วก็จะเรียก .then() เสมอไม่มีการเรียกใช้ .catch()
// Promise.all() จะเข้า .catch() ทันทีเมื่อตัวใดตัวหนึ่ง reject



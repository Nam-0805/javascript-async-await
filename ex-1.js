//Exercise #1

let getJohnProfile = () => { 
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
getJohnProfile().then((data) => console.log(data)); //สร้าง Promise และตั้งเวลา 1 วินาที
//.then() เพื่อบอกว่า “รอให้ได้ข้อมูลก่อน แล้วค่อย console.log” ระหว่างรอresolve({...}) ส่งข้อมูล John ออกมา Promise จึงเป็น fulfilled
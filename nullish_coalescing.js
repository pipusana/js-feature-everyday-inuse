
// JavaScript Nullish coalescing Features

const text1 = "" 
const message1 = text1 || "Hello world"
console.log("message ->", message1) // "Hello world"

const text2 = "" 
const message2 = text2 && "Hello world"
console.log("message ->", message2) // ""

// เป็นแบบนี้ เนื่องจาก || หรือ OR operator และ && หรือ AND operator เอาไว้เช็คค่าที่เป็น falsy
// ค่าของ falsy มีดังนี้ [ null, NaN, 0, empty string ("" or '' or ``), undefined ]
// Nullish_coalescing เกิดมาเพื่อต้องการ check ค่า null กับ undefined เท่านั้น

const text3 = "" 
const message3 = text3 ?? "Hello world"
console.log("message ->", message3) // ""




// JavaScript Nullish assignment Features

const profile = { 
    age: 26,
};

profile.age ??= 25
console.log(profile.age)
// Output: 26

profile.fullname ??= "";
console.log(profile.fullname)
// Output: ""

console.log('profile', profile)
// Output: { age: 26, fullname: '' }




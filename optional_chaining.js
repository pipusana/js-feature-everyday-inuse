
// JavaScript Optional chaining Features

let coolValue = undefined;
let followerValue = undefined;

const facebookPost = {
    text: "Hello world",
    post_time: "2021-04-20",
    type: "post",
    engagement: {
        like: 1,
        sad: 2,
        angey: 3,
        wow: 4,
        love: 5
    },
    account: {
        id: 191,
        name: "pipusana petgumpoom",
        age: 26,
        image_url_list: ['image1', 'image2', 'image3']
    }
}

//  ** case 1 **
coolValue = facebookPost.engagement.cool
console.log("coolValue -->", coolValue) // undefined
// ถ้่าในกรณีที่เราไม่อยากให้เป็น  undefined เราจะต้อง handle แบบนี้
coolValue = (facebookPost && facebookPost.engagement && facebookPost.engagement.cool) || 0
console.log("coolValue -->", coolValue) // 0
// ถ้าเราใช้ Optional chaining จะเป็นยังไง
coolValue = facebookPost?.engagement?.cool || 0
console.log("coolValue -->", coolValue) // 0

// ** case 2 **
followerValue = facebookPost.account.engagement.follower // ** [Error] Cannot read property 'follower' of undefined
// ถ้าเราใช้ Optional chaining จะเป็นยังไง
followerValue = facebookPost?.account?.engagement?.follower || 0
console.log("followerValue -->", followerValue) // 0


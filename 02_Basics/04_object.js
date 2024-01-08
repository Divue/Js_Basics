// non singleton Object or object litereals
const tinderUsr = {}

// singleton Object
const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name= "samy"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser= {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstname: "hitesh",
            lastname: "chodhary"
        }
    }
}
console.log(regularUser.fullName.userfullname.firstname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3={...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    },
]
// user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // returns true
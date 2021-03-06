//---------------------------------------//
//object literals

let user = {
    name: 'Jald',
    age: 20,
    email: 'example@gmail.com',
    location: 'México',
    blogs: ['why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);

console.log(user.name);

//user.age = 117;
console.log(user.age);

console.log(user['location']);
user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user); 

//---------------------------------------//

let user2 = {
    name: 'Jald',
    age: 20,
    email: 'example@gmail.com',
    location: 'México',
    blogs: ['why mac & cheese rules', '10 things to make with marmite'],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){

    }
};



const name = 'Jald';
name.toUpperCase();

//---------------------------------------//

//const blogs = [
//    { title: 'why mac & cheese rules', likes: 30},
//    { title: '10 things to make with marmite', likes: 50}
//];

//console.log(blogs);

let user3 = {
    name: 'Jald',
    age: 20,
    email: 'example@gmail.com',
    location: 'México',
    blogs: [{ title: 'why mac & cheese rules', likes: 30},
            { title: '10 things to make with marmite', likes: 50}
        ],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        //console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

user3.logBlogs();
console.log(this); 

//---------------------------------------//
//Math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 6.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// random numbers

const random = Math.random();
console.log(random);
console.log(Math.round(random * 100));


//---------------------------------------//

//primitive values

//let scoreOne = 50;
//let scoreTwo = scoreOne;

//console.log(`ScoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);


//scoreOne = 100;

//console.log(`ScoreOne: ${scoreOne}, scoreTwo: ${scoreTwo}`);

//reference values


const userOne = {name: 'Lizeth', age: 30};
const userTwo = userOne;
console.log(userOne, userTwo);

//userOne.age = 20;
//userTwo.age = 80;
userOne.name = 'Chun-li';
console.log(userOne, userTwo);
user3.login();
user3.logout();
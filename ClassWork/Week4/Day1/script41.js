// // // // function startLet()
// // // // {
// // // //     for (let index = 0; index < 5; index++) {
// // // //         console.log(index)
// // // //     }
// // // //     console.log(index)
// // // // }

// // // function startVar() 
// // // {
// // //     for (var index = 0; index < 5; index++) {
// // //         console.log(index)
// // //     }
// // //     console.log(index)
// // // }

// // // // console.log("Running with let:")
// // // // startLet()
// // // console.log("Running with var")
// // // console.log(`${index}`)
// // // startVar()



// // //ACITIVTY1 ----------

// // const greeting = "Hello Codenation"
// // const runs = 5

// // function doGreeting()
// // {
// //     for (let index = 0; index < 5; index++) {
// //         console.log(greeting)
// //     }
// // }

// // doGreeting()


// // //ACTIVITY2 --------------
// // const array = [1,5,6,7,3]



// // function useMap()
// // {

// // }


// // console.log(1);
// // setTimeout(() => 
// // {
// //     console.log(2);
// // }, 2000);
// // setTimeout(() =>
// // {
// //     console.log(3);
// // }, 0);
// // console.log(4)


// let myPosts = ['post1', 'post2', 'post3'];

// const allPosts = () => 
// {
//     myPosts.map((post) => console.log(post));
// };

// const createPost = (post, callback) => 
// {
//     myPosts.push(post);
//     callback()
// };

// createPost('post4', allPosts);


fetch('https://meowfacts.herokuapp.com/')
    .then(response => response.text())
    .then(data => console.log(data));


async function catFacts(){
    const response = await fetch('https://meowfacts.herokuapp.com/');
    let data = await response.text();
    data = data.toUpperCase()
    console.log(data)
    }
    
catFacts()
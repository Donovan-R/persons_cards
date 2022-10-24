// données locales
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const prevbtn = document.querySelector(".btn-left");
const nextbtn = document.querySelector(".btn-right");
const rdmbtn = document.querySelector(".random-btn");
const img = document.querySelector("img");
const text = document.querySelector("p");
const identity = document.querySelector(".fullName");
const job = document.querySelector(".occupation");

let counter = 0;

nextbtn.addEventListener("click", function () {
  if (counter < 3) {
    counter++;
  } else {
    counter = 0;
  }
  identity.textContent = reviews[counter].name;
  img.src = reviews[counter].img;
  text.textContent = reviews[counter].text;
  job.textContent = reviews[counter].job;
});

prevbtn.addEventListener("click", function () {
  if (counter > 0) {
    counter--;
  } else {
    counter = 3;
  }
  identity.textContent = reviews[counter].name;
  img.src = reviews[counter].img;
  text.textContent = reviews[counter].text;
  job.textContent = reviews[counter].job;
});

let checkRandom = 0;
rdmbtn.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * reviews.length);
  while (randomNumber === checkRandom) {
    randomNumber = Math.floor(Math.random() * reviews.length);
  }
  identity.textContent = reviews[randomNumber].name;
  img.src = reviews[randomNumber].img;
  text.textContent = reviews[randomNumber].text;
  job.textContent = reviews[randomNumber].job;
  checkRandom = randomNumber;
});

// correction avec un appel de tous les boutons querySelectorAll('button') donne const btns
// const btn = document.querySelectorAll("button")
// window.addEventListener{'DOMContentLoaded', () =>(counter)}

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const target = e.currentTarget.classList;
//     if (target = contains("btn-right")){
//     counter++;
//       if(counter>=reviews.length){
//         index=0
//       }
//   };
// if(target.contains('btn-left')){
//   counter--
//   if(counter<0){
//     counter=reviews.length-1.
//   }
// }
// else{
//   while(oldcounter===counter){
// counter=Math...
//   }
// }
// showPerson(counter);
// })});

// function showPerson(item) {
//   identity.textContent = reviews[item].name;
//   img.src = reviews[item].img;
//   text.textContent = reviews[item].text;
//   job.textContent = reviews[item].job;
// }

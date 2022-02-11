const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },{
    id: 10,
    title: "Steak Dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  }
];

let container = document.body.querySelector(".container")

menu.forEach(function(item,i){
  let newItem = document.createElement("div")
  newItem.innerHTML=
  `<article class=${item.category}>
<img src=${item.img} alt=${item.title} class="photo" />
<div class="item-info">
  <header>
    <h4>${item.title}</h4>
    <h4 class="price">$${item.price}</h4>
  </header>
  <p class="item-text">
    ${item.desc}
  </p>
</div>
</article>
`
container.appendChild(newItem)
}
)

let articles = document.body.querySelectorAll("article")

//filter button variables
let breakfastBtn = document.body.querySelector(".breakfast")
let lunchBtn = document.body.querySelector(".lunch")
let shakesBtn = document.body.querySelector(".shakes")
let dinnerBtn = document.body.querySelector(".dinner")
let allBtn = document.body.querySelector(".all")

console.log(shakesBtn)



breakfastBtn.addEventListener("click", function(){
  for (article of articles){
    article.style.display='flex'
  }



  for (article of articles){
  
  if(article.classList.contains('breakfast')){
    continue
  } else {
    article.style.display = 'none';
  }
}
})

lunchBtn.addEventListener("click", function(){
  
for (article of articles){
  article.style.display='flex'
}
  
  for (article of articles){
    if(article.classList.contains('lunch')){
      continue
    } else {
      article.style.display = 'none';
    }
  }
  })

  
shakesBtn.addEventListener("click", function(){
  for (article of articles){
    article.style.display='flex'
  }
    for (article of articles){
      if(article.classList.contains('shakes')){
        continue
      } else {
        article.style.display = 'none';
      }
    }
    })

    
    dinnerBtn.addEventListener("click", function(){
      for (article of articles){
        article.style.display='flex'
      }
      for (article of articles){
        if(article.classList.contains('dinner')){
          continue
        } else {
          article.style.display = 'none';
        }
      }
      })

      allBtn.addEventListener("click", function(){
        for (article of articles){
          article.style.display='flex'
        }
    
        })
        
      

document.addEventListener("DOMContentLoaded", () => {
  const data = [
  { id: 1, icon: "fa-solid fa-hand-holding-heart", text: "No Poverty", color: "#f94144" },
  { id: 2, icon: "fa-solid fa-book", text: "Quality Education", color: "#f3722c" },
  { id: 3, icon: "fa-solid fa-droplet", text: "Clean Water and Save Life", color: "#43aa8b" },
  { id: 4, icon: "fa-solid fa-heart-pulse", text: "Good Health and Care", color: "#577590" },
  { id: 5, icon: "fa-solid fa-handshake", text: "Partnerships For The Goals", color: "#f9c74f" },
  { id: 6, icon: "fa-solid fa-bowl-food", text: "Zero Hunger", color: "#90be6d" }
];

const icone = [
  {id: 1, icon: "./libs/ico_3.svg", number: 5960, text: "Completed Projects"},
  {id: 2, icon: "./libs/ico_2.svg", number: 3719, text: "People We Helped"},
  {id: 3, icon: "./libs/ico_1.svg", number: 569, text: "Awards Achieved"}
];

const articles = [
  {
    id: 1,
    img: "./libs/article_1.jpg",
    title: "Your Small Donation Can Change a Life",
    date: "February 14, 2025",
    price: "$120,000",
    like: false
  },
  {
    id: 2,
    img: "./libs/article_2.jpg",
    title: "A New Album by Rebecca : Help poor people",
    date: "February 14, 2025",
    price: "$50,000",
    like: true
  },
  {
    id: 3,
    img: "./libs/article_3.webp",
    title: "South Africa Pre Primary School Build",
    date: "February 14, 2025",
    price: "$32,000",
    like: false
  }
];

const produits = [
  {
    id: 1,
    img: "./libs/produit_1.jpg",
    sale: true,
    title: "Reusable collection",
    oldPrice: "€15.00",
    price: "€20.00",
    category: "Handmade"
  },
  {
    id: 2,
    img: "./libs/produit_2.jpg",
    sale: true,
    title: "Fair-Trade Coffee Beans",
    oldPrice: "€20.00",
    price: "€18.00",
    category: "Eco-Friendly"
  },
  {
    id: 3,
    img: "./libs/produit_3.jpg",
    sale: false,
    title: "Aloe Vera Eco Hand Soap",
    oldPrice: "",
    price: "€5.00",
    category: "Natural"
  },
  {
    id: 4,
    img: "./libs/produit_4.png",
    sale: false,
    title: "Natural Lip Balm",
    oldPrice: "",
    price: "€7.00",
    category: "Natural"
  }
];

const news = [
        {
            img: "./libs/new_1.jpg",
            date: "MAY 14, 2025",
            comments: 0,
            title: "Sees boom in younger volunteers following pandemic",
            authorImg: "./libs/new.png",
            author: "By Bearsthems"
        },
        {
            img: "./libs/new_2.jpg",
            date: "MAY 11, 2025",
            comments: 3,
            title: "Breaking Barriers : Empowering Women In Sports",
            authorImg: "./libs/new.png",
            author: "By Bearsthems"
        },
        {
            img: "./libs/new_3.jpg",
            date: "MAY 03, 2025",
            comments: 7,
            title: "Summit to focus on responsible use of AI in fundraising",
            authorImg: "./libs/new.png",
            author: "By Bearsthems"
        }
    ];

  const container = document.querySelector(".cards");

  data.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <i class="${item.icon}" style="color: ${item.color};"></i>
      <p>${item.text}</p>
    `;

    container.appendChild(card);
  });

  const div = document.querySelector(".items");

  icone.forEach(item => {
    div.innerHTML += `
      <div class="item">
        <span><img src="${item.icon}" alt=""></span>
        <p><span>${item.number}</span><br>${item.text}</p>
      </div>
    `;
  });

  const element = document.querySelector(".articles");

articles.forEach(article => {
  element.innerHTML += `
    <div class="article">
      <div class="img">
        <img src="${article.img}" alt="">
      </div>
      <div class="details">
        <h6>${article.title}</h6>
        <span><i class="fa-solid fa-calendar-days"></i> ${article.date}</span>
        <div class="price">
          <p><span>${article.price}</span> Donation Needed</p>
          <span class="like">
            <i class="${article.like ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}"></i>
          </span>
        </div>
      </div>
    </div>
  `;
});

const p = document.querySelector(".produits");

produits.forEach(produit => {
  p.innerHTML += `
    <div class="produit">
      <div class="img">
        <img src="${produit.img}" alt="${produit.title}">
        ${produit.sale ? "<span>Sale!</span>" : ""}
      </div>
      <div class="desc">
        <h6>${produit.title}</h6>
       <span>
          ${
            produit.oldPrice
              ? (
                  parseFloat(produit.oldPrice.replace("€","")) > parseFloat(produit.price.replace("€",""))
                    ? `<del style="color:black;">${produit.oldPrice}</del>`
                    : produit.oldPrice 
                )
              : ""
          }
          ${produit.price}
        </span>
      </div>
      <p>${produit.category}</p>
    </div>
  `;
});

const n = document.querySelector(".news");

    news.forEach(item => {

        n.innerHTML += `
        <div class="new">
            <div class="img"><img src="${item.img}" alt=""></div>
            <div class="div">  
                <p class="sms">
                    <span><i class="fa-solid fa-calendar-days"></i> ${item.date}</span>
                    <i class="fa-solid fa-message"></i><span>${item.comments}</span>
                </p>
                <h6>${item.title}</h6>
            </div>
            <div class="bottom">
                <div class="cercle"><img src="${item.authorImg}" alt=""></div>
                <span>${item.author}</span>
            </div>
        </div>
        `;
    });
});

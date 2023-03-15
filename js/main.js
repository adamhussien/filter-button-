const menu = 
[
    {
  id: 1,
  title: "cum",
  catergory :"breakfast",
  price: "15",
  img: "img/item-1.jpeg",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    }, {
        id: 2,
        title: "puss",
        catergory :"lauch",
        price: "15",
        img: "img/item-5.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
          },
    
          {
            id: 3,
            title: "puss",
            catergory :"dinner",
            price: "15",
            img: "img/item-10.jpeg",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
              }
]
 const btncontainet = document.querySelector(".btncontainer")
 const sectioncontainer = document.querySelector(".centersection")
 window.addEventListener("DOMContentLoaded", function () {
displaymenuitems(menu)
diplaybuttons()
 })
 function displaymenuitems(menuitems ) {
  let displaymenu  = menuitems.map(function (item){
  
    return `
     <article>
        
            <img src="${item.img}" class="photo" alt="">
            <div class="info">
                <h3>${item.title}</h3>
                <h4>${item.price}</h4>
                <p >${item.desc}</p>
            </div>
        
        </article>
    `;
  })
  displaymenu = displaymenu.join("")
 sectioncontainer.innerHTML = displaymenu;

 }

 function diplaybuttons () {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.catergory)) {
        values.push(item.catergory)
      }
      return values;
    },
    ["all"]
    );
    
    const catergorybtns = categories
    .map(function(catergory) {
     return ` <button class="btnilter" data-id="${catergory}" type="button">${catergory}</button>`
   })
   .join("")
    
   btncontainet.innerHTML = catergorybtns
   const filterbtns = btncontainet.querySelectorAll(".btnilter")
   filterbtns.forEach(function (btn) {
   btn.addEventListener("click", (e) => {
   const category = e.currentTarget.dataset.id;
   const menucategory = menu.filter(function(menuitem) {
     if (menuitem.catergory === category) {
       return menuitem
     }
   }) 
   if (category === "all") {
   displaymenuitems(menu)
   } else {
     displaymenuitems(menucategory)
   }
   
   })
   })
 }
 


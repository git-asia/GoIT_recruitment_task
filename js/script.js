document.addEventListener("DOMContentLoaded", function () {
  const menuList = document.querySelector(".header__menuList");
  const menuListMobile = document.querySelector(".header__menuListMobile");
  const menuToggle = document.querySelector(".header__menuToggle");
  const footerYear = document.querySelector('.footer__year')

  // define menu elements
  const menuItems = [
    { text: "About", href: "#" },
    { text: "Service", href: "#" },
    { text: "Work", href: "#" },
    { text: "Blog", href: "#" },
    { text: "Contact", href: "#" },
    { html: '<a href="#"><img src="icons/cart.svg" alt="cart" /></a>' },
    { html: '<a href="#"><img src="icons/search.svg" alt="search" /></a>' },
  ];

  // creates menu elements
  function createMenuItem(item) {
    const li = document.createElement("li");
    li.classList.add("header__menuListItem");
    if (item.text) {
      const a = document.createElement("a");
      a.textContent = item.text;
      a.href = item.href || "#";
      li.appendChild(a);
    } else if (item.html) {
      li.innerHTML = item.html;
    }
    return li;
  }

  // add elements to desktop menu 
  menuItems.forEach((item) => {
    const menuItem = createMenuItem(item);
    menuList.appendChild(menuItem);
  });

  // add elements to mobile menu 
  menuItems.forEach((item) => {
    const menuItem = createMenuItem(item);
    menuListMobile.appendChild(menuItem.cloneNode(true));
  });

  // mobile menu of & off
  menuToggle.addEventListener("click", function () {
    menuListMobile.classList.toggle("active");
  });

  
  // current year
 // const handleCurrentYear = () => {
  const year = (new Date).getFullYear();
  footerYear.innerText = year;
 // }
});


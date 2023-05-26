//fonctionalité

const logFooterClick = () => {
  document.querySelector("footer").addEventListener("click", () => {
    console.log("clique");
  });
};

document.addEventListener("DOMContentLoaded", logFooterClick);

//-------------------------------------------------------------------
//fonctionalité 1-bis

const countFooterClicks = () => {
  let clickCount = 0;
  document.querySelector("footer").addEventListener("click", () => {
    clickCount++;
    console.log("clic numero : " + clickCount);
  });
};

document.addEventListener("DOMContentLoaded", countFooterClicks);

//-------------------------------------------------------------------
//fonctionalité 2

const toggleNavbarCollapse = () => {
  document.querySelector(".navbar-toggler").addEventListener("click", () => {
    document.getElementById("navbarHeader").classList.toggle("collapse");
  });
};

document.addEventListener("DOMContentLoaded", toggleNavbarCollapse);

//-------------------------------------------------------------------
//fonctionalité 3

const changeColorOnButtonClick = () => {
  const firstCard = document.querySelector(".card");
  const editButton = firstCard.querySelector(".btn-outline-secondary");

  editButton.addEventListener("click", () => {
    editButton.style.color = "red";
  });
};

document.addEventListener("DOMContentLoaded", changeColorOnButtonClick);

//-------------------------------------------------------------------
//fonctionalité 4

const toggleColorOnButtonClick = () => {
  const secondCard = document.querySelectorAll(".card")[1];
  const editButton2 = secondCard.querySelector(".btn-outline-secondary");

  editButton2.addEventListener("click", () => {
    if (editButton2.style.color === "green") {
      editButton2.style.color = "";
    } else {
      editButton2.style.color = "green";
    }
  });
};

document.addEventListener("DOMContentLoaded", toggleColorOnButtonClick);

//-------------------------------------------------------------------
//fonctionalité 5
const toggleBoostrap = () => {
  const navbar = document.querySelector(".navbar");
  const linkTag = document.querySelector("link");
  let isBoostrapEnabled = true;

  navbar.addEventListener("dblclick", () => {
    if (isBoostrapEnabled) {
      linkTag.disabled = true;
      isBoostrapEnabled = false;
    } else {
      linkTag.disabled = false;
      isBoostrapEnabled = true;
    }
  });
};
document.addEventListener("DOMContentLoaded", toggleBoostrap);

//-------------------------------------------------------------------
//fonctionalité 6
const modifyCardOnHover = () => {
  const viewButtons = document.querySelectorAll(".btn-group .btn-success");

  for (const viewButton of viewButtons) {
    viewButton.addEventListener("mouseover", () => {
      const card = viewButton.closest(".card");
      const cardText = card.querySelector(".card-text");
      const cardImg = card.querySelector(".card-img-top");

      cardText.style.display = "none";
      cardImg.style.width = "20%";
    });

    viewButton.addEventListener("mouseout", () => {
      const card = viewButton.closest(".card");
      const cardText = card.querySelector(".card-text");
      const cardImg = card.querySelector(".card-img-top");

      cardText.style.display = "";
      cardImg.style.width = "";
    });
  }
};

document.addEventListener("DOMContentLoaded", modifyCardOnHover);

//-------------------------------------------------------------------
//  fonctionalité 7const rotateCards = () => {const rotateCards = () => {
const rotateCards = () => {
  const greyButton = document.querySelector(".btn-secondary");
  const cardsContainer = document.querySelector(".row");
  const cards = Array.from(document.querySelectorAll(".col-md-4"));
};

//-------------------------------------------------------------------
//fonctionalité 8

//-------------------------------------------------------------------
//fonctionalité 9
const logoTexte = () => {
  const logo = document.querySelector(".navbar-brand");

  logo.addEventListener("keypress", (event) => {
    const body = document.querySelector("body");

    body.classList.remove("col-4", "offset-md-4", "offset-md-8");

    const keyPressed = event.key;

    switch (keyPressed) {
      case "a":
        body.classList.add("col-4");
        break;
      case "y":
        body.classList.add("offset-md-4", "col-4");
        break;
      case "p":
        body.classList.add("offset-md-8", "col-4");
        break;
    }
  });

  document.addEventListener("keypress", (event) => {
    const keyPressed = event.key;

    if (keyPressed === "b") {
      const body = document.querySelector("body");
      body.classList.remove("col-4", "offset-md-4", "offset-md-8");
    }
  });
};

document.addEventListener("DOMContentLoaded", logoTexte);

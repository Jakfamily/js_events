// Fonctionnalité 1 : Affichage d'un message dans la console lors du clic sur le footer
const logFooterClick = () => {
  document.querySelector("footer").addEventListener("click", () => {
    console.log("clique");
  });
};

document.addEventListener("DOMContentLoaded", logFooterClick);

//-------------------------------------------------------------------
// Fonctionnalité 1-bis : Comptage du nombre de clics sur le footer
const countFooterClicks = () => {
  let clickCount = 0;
  document.querySelector("footer").addEventListener("click", () => {
    clickCount++;
    console.log("clic numero : " + clickCount);
  });
};

document.addEventListener("DOMContentLoaded", countFooterClicks);

//-------------------------------------------------------------------
// Fonctionnalité 2 : Toggle de la classe "collapse" du navbar
const toggleNavbarCollapse = () => {
  document.querySelector(".navbar-toggler").addEventListener("click", () => {
    document.getElementById("navbarHeader").classList.toggle("collapse");
  });
};

document.addEventListener("DOMContentLoaded", toggleNavbarCollapse);

//-------------------------------------------------------------------
// Fonctionnalité 3 : Changement de couleur du texte au clic sur le premier bouton "Edit"
const changeColorOnButtonClick = () => {
  const firstCard = document.querySelector(".card");
  const editButton = firstCard.querySelector(".btn-outline-secondary");

  editButton.addEventListener("click", () => {
    editButton.style.color = "red";
  });
};

document.addEventListener("DOMContentLoaded", changeColorOnButtonClick);

//-------------------------------------------------------------------
// Fonctionnalité 4 : Toggle de la couleur du texte au clic sur le deuxième bouton "Edit"
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
// Fonctionnalité 5 : Désactivation/activation du lien Bootstrap en double-cliquant sur la navbar
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
// Fonctionnalité 6 : Réduction d'une card au survol du bouton "View"
const applyHoverEffect = () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    let isHovered = false;
    const btnView = card.querySelector(".btn-success");
    const img = card.querySelector(".card-img-top");
    const cardText = card.querySelector("p.card-text");

    btnView.addEventListener("mouseenter", () => {
      if (!isHovered) {
        cardText.classList.add("collapse");
        img.style.width = "20%";
        isHovered = true;
      } else {
        cardText.classList.remove("collapse");
        img.style.width = "100%";
        isHovered = false;
      }
    });
  });
};

applyHoverEffect();

//-------------------------------------------------------------------
// Fonctionnalité 7 : Rotation des cards dans le sens d'une montre
const rotateCardsLeft = () => {
  const arrowRight = document.querySelector("a.btn-secondary");

  arrowRight.addEventListener("click", () => {
    const parent = document.querySelectorAll("div.row")[1];
    const firstChild = parent.firstElementChild;
    const lastChild = parent.lastElementChild;

    parent.insertBefore(lastChild, firstChild);
  });
};

rotateCardsLeft();

//-------------------------------------------------------------------
// Fonctionnalité 8 : rotation des cards dans les sens inverse d'une montre

const rotateCardsRight = () => {
  const arrowLeft = document.querySelector("a.btn-primary");

  arrowLeft.addEventListener("click", (e) => {
    e.preventDefault();

    const parent = document.querySelectorAll("div.row")[1];
    const firstChild = parent.firstElementChild;
    const lastChild = parent.lastElementChild;

    parent.insertBefore(firstChild, lastChild);
  });
};

rotateCardsRight();

//-------------------------------------------------------------------
// Fonctionnalité 9 : Modification de la mise en page en tapant des touches spécifiques
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

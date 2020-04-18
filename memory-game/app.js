document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "spongebob",
      img: "images/spongebob.gif"
    },
    {
      name: "spongebob",
      img: "images/spongebob.gif"
    },
    {
      name: "lizard",
      img: "images/lizard.gif"
    },
    {
      name: "lizard",
      img: "images/lizard.gif"
    },
    {
      name: "cat",
      img: "images/cat.gif"
    },
    {
      name: "cat",
      img: "images/cat.gif"
    },
    {
      name: "dog",
      img: "images/dog.gif"
    },
    {
      name: "dog",
      img: "images/dog.gif"
    },
    {
      name: "cat1",
      img: "images/cat1.gif"
    },
    {
      name: "cat1",
      img: "images/cat1.gif"
    },
    {
      name: "pikachu",
      img: "images/pikachu.gif"
    },
    {
      name: "pikachu",
      img: "images/pikachu.gif"
    }
  ];

  cardArray.sort(() => 0.5 - Math.random());
  const grid = document.querySelector(".grid");
  const resultDisplay = document.getElementById("result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  function checkForMatch() {
    let cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] == cardsChosen[1]) {
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cardsWon.push(cardsChosen);
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congrats! you won!!";
    }
  }

  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length == 2) {
      setTimeout(checkForMatch, 500);
    }
  }
  createBoard();
});

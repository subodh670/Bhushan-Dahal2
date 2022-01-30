"use strict";
const receipes = [];

const btnpop = document.querySelector(".cover");
const btnback = document.querySelector(".back");
const signin = document.querySelector(".sign");
const crossBtn = document.querySelector("#cross");
const loginBtn = document.querySelector(".login");
const passwordBtn = document.querySelector(".usrpass");
const userNameBtn = document.querySelector(".usrname");
const extraInfo = document.querySelector(".info");
const popupWindow = function () {
  signin.addEventListener("click", function () {
    btnpop.classList.remove("pop-up");
    btnback.classList.remove("unpop");
  });
  crossBtn.addEventListener("click", function () {
    btnpop.classList.add("pop-up");
    btnback.classList.add("unpop");
  });
  btnback.addEventListener("click", function () {
    btnpop.classList.add("pop-up");
    btnback.classList.add("unpop");
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !btnback.classList.contains("unpop")) {
      btnpop.classList.add("pop-up");
      btnback.classList.add("unpop");
    }
  });
};
popupWindow();

// regarding the login account1
const account1 = {
  fullName: "Bhushan Dahal",
  password: 1234,
};
const account2 = {
  fullName: "Subodh Acharya",
  password: 4567,
};
const account3 = {
  fullName: "Jasmine Khatri",
  password: 1278,
};
const accounts = [account1, account2, account3];
accounts.forEach(function (accs) {
  const usrName = accs.fullName
    .split(" ")
    .map(function (cre) {
      return cre[0];
    })
    .join("")
    .toLowerCase();
  accs.userName = usrName;
});

console.log(account1);

console.log(account2);

let userProfile;
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  userProfile = accounts.find((acc) => acc.userName === userNameBtn.value);
  if (userProfile.password === Number(passwordBtn.value)) {
    extraInfo.textContent = `${userProfile.fullName} entered form correctly`;
  } else {
    extraInfo.textContent = `Wrong password or username`;
  }
});

//side navbar

const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const closeBtn = document.querySelector(".close-btn");

hamburger.addEventListener("click", function () {
  navigation.classList.toggle("toggle-nav");
  if (navigation.classList.contains("toggle-nav")) {
    navigation.classList.remove("toggle-nav");
  }
  hamburger.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  if (!navigation.classList.contains("toggle-nav")) {
    navigation.classList.add("toggle-nav");
  }
  hamburger.style.display = "block";
  closeBtn.style.display = "none";
});

//functionlity for questions
// const questionBtn = document.querySelectorAll(".ques-btn");
// const minusBtn = document.querySelectorAll(".minus");

// questionBtn.forEach(function (btn, i) {
//   btn.addEventListener("click", function (e) {
//     const target = e.currentTarget.parentElement;
//     console.log(i);
//     if (target.classList.contains("specific-question")) {
//       target.classList.remove("specific-question");
//       minusBtn[i].style.display = "none";
//     } else {
//       target.classList.add("specific-question");
//       minusBtn[i].style.display = "inline";
//     }
//   });
// });

const questions = document.querySelectorAll(".center-question");

questions.forEach(function (quest) {
  const button = quest.querySelector(".ques-btn");
  button.addEventListener("click", function (e) {
    const b = e.currentTarget;
    const minus = b.querySelector(".minus");
    const plus = b.querySelector(".plus");
    questions.forEach(function (item) {
      if (quest !== item) {
        item.classList.remove("specific-question");
      }
    });
    if (quest.classList.contains("specific-question")) {
      quest.classList.remove("specific-question");
      minus.style.display = "none";
    } else {
      quest.classList.add("specific-question");
      minus.style.display = "inline";
    }
  });
});

//Recipes showing automatically

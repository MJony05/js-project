'use strict';

///////////////////////////////////////
// Modal window
/*
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// console.log(btnsOpenModal);
btnsOpenModal.forEach(el => {
  el.addEventListener('click', openModal);
});
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal); // va manabuyer

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal(); // buyer
  }
});

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
// Page navigation
const s1 = document.querySelector('#section--1');
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);

  if (e.target.classList.contains('nav__link')) {
    e.target.scrollIntoView({ behavior: 'smooth' });
  }
});
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////
let message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `Assalomu aleykumm <button class = "btn btn--close-cookie">Got it! </button>`;
// header.before(message);
header.after(message);

document
  .querySelector('.cookie-message')
  .addEventListener('click', function () {
    message.remove();
  });
message.style.backgroundColor = '#37383d';
message.style.color = 'red';
// message.style.height = '100px';
// console.log(getComputedStyle(message).color);
// console.log(message.style.color);
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.getAttribute('autor'));

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('scroll', window.scrollX, scrollY);
  // console.log(
  //   'height/width',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );
  // window.scrollTo(s1coords.left, s1coords.top + window.scrollY); //--------------------------
  // window.scrollTo({
  //   left: s1coords.left,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');
const h1Log = function (e) {
  console.log('helllooooo');
};

h1.addEventListener('mouseenter', h1Log);
setTimeout(() => {
  h1.removeEventListener('mouseenter', h1Log);
}, 3000);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
// console.log(randomInt(0, 255));

const randomRgb = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomRgb());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomRgb();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomRgb();
  e.stopPropagation();
});
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomRgb();
});  
// h1.onclick = function (e) {
//   alert('nima gap');
// };

// console.log(getComputedStyle(message).height); // yana 50px chiqyaptii

// console.log(getComputedStyle(message).height);
/*
// Selectings
const headerTitle = document.querySelector('.header__title');
const html = document.documentElement;
*/
// const body = document.body;
// const bodySelect = document.querySelector('body');
// const head = document.head;
// console.log(bodySelect);

// All Selectings

// const allSection = document.querySelectorAll('.section');
// console.log(allSection);

// Get element by ID
// const section1 = document.getElementById('section--1');
// console.log(section1);

// get element by tagName //HTML Collections
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// console.log(document.querySelector('div').classList);

// console.log(typeof allButtons);
// for (let [el, val] of Object.entries(allButtons)) {
//   console.log(`${el} : ${val}`);
// }

// const btn1 = document.getElementsByClassName('header');
// console.log(btn1[0]);

// Creating and inserting elemets

// const box = document.createElement('div');
// const header1 = document.querySelector('header');
// box.classList.add('cookie-message');
// box.classList.remove('cookie-message');
// box.classList.toggle('cookie-message');
// box.classList.contains('cookie-message');

// box.textContent = 'Bu bizning xafsizligimizni taminlash uchun kerak.';

// box.innerHTML = `<p> Bu bizning xafsizligimizni taminlash uchun kerak. </p>
// <button class="btn btn--close-cookie"> Yopish</button>`;

// header1.prepend(box.cloneNode(false));
//  header1.prepend(box.cloneNode(true));

// header1.before(box);
// header1.before(box);

// Delete Elemets

// document.querySelector('.btn--close-cookie').addEventListener('click', () => {
//   document.querySelector('.cookie-message').remove();
// });

// Styles
// document.querySelector('.btn--close-cookie').style.backgroundColor = 'white';
// document.querySelector('.btn--close-cookie').style.width = '50%';

// CSS o'zgaruvchilarni qiymatlarinin uzgartirish
// document.documentElement.style.setProperty('--color-primary', 'orange');

// Atributelarni qiymatlarini olish (Standart)
// const logo = document.querySelector('.nav__logo');

// console.log(logo.alt);
// console.log(logo.src);
// logo.classList.add('Salom');
// console.log(logo.className);
// console.log(logo.umid);

// console.log(logo.src);

/*
const nav = document.querySelector('.nav__links');

console.log(nav.style.color); // HTML dan faqat oladi

let balandlik = getComputedStyle(nav).height;

nav.style.height = Number.parseFloat(balandlik) + 20 + 'px'; // Inline

console.log(nav.style.height); // CSS file dan oladi

console.log(logo.style.color);

logo.alt = 'Umid';
console.log(logo.alt);

// Standart bulmagan atributelarni olib keladi
console.log(logo.getAttribute('src'));

// Bunday qilmaysiz
logo.className = 'Umid';
console.log(logo.className);

// O'rniga bunday qilamiz
logo.classList.add('umid');
*/

// class FootballPlayer {
//   constructor(name, number) {
//     this.name = name;
//     this.number = number;
//   }
// }
// let ap = new Array(2, 3, 4, 5);
// let niyozbek = new FootballPlayer('Niyozbek', 18);
// let jonibek = new FootballPlayer('Jonibek', 19);
// console.log(jonibek, niyozbek);
// console.log(ap);

// const Person = function (ism, yosh) {
//   this.ism = ism;
//   Person.apply;
// };
/*
const Person = function (ism, yosh) {
  this.ismi = ism;
  this.yosh = yosh;
};

Person.prototype.hisobla = function () {
  return 2022 - this.yosh;
};

const Teacher = function (ism, yosh, oylik, fan) {
  Person.call(this, ism, yosh);
  this.oylik = oylik;
  this.fan = fan;
};
Teacher.prototype = Object.create(Person);
Teacher.prototype.oylikHisobla = function () {
  return this.oylik / 11000;
};
const birinchi = new Teacher('Zafar', 40, 3000000, 'IT');
console.log(birinchi.__proto__.__proto__);
*/

// class Person {
//   constructor(ism, yosh) {
//     this.ism = ism;
//     this.yosh = yosh;
//   }

//   hisobla() {
//     return 2022 - this.yosh;
//   }
// }

// class Teacher extends Person {
//   constructor(ism, yosh, oylik, fan) {
//     super(ism, yosh);
//     this.oylik = oylik;
//     this.fan = fan;
//   }
// }
// const birinchi = new Teacher('Zafar', 40, 3000000, 'IT');
// console.log(birinchi);
/*
const Person = {
  hisobla() {
    return 2022 - this.yosh;
  },
  qush(ism, yosh) {
    this.ism = ism;
    this.yosh = yosh;
  },
};

const Student = Object.create(Person);
Student.qush = function (ism, yosh, facultet) {
  Person.qush.call(this, ism, yosh);
  this.facultet = facultet;
};
const jony = Object.create(Student);

Student.qush('A', 'B', 'cc');
jony.qush('A', 'B', 'cc');
console.log(jony);
console.log(Student);
*/

/*

class Bank {
  #pin;
  constructor(name, age, pin) {
    this.name = name;
    this.age = age;
    this.#pin = pin;
  }

  #pinUzgartir(val) {
    this.#pin = val;
  }
  uzgartir(val) {
    this.#pinUzgartir(val);
  }
}

class Bank2 extends Bank {
  constructor(name, age, pin) {
    super(name, age, pin);
  }
}

let me = new Bank2('jonibek', 20, 1111);
me.uzgartir(2222);
console.log(me);

*/

/*
function anagrams(word, words) {
  let arr1 = word.split('').sort();
  let str = arr1.join('');
  let arr = [];
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    count = words[i].split('').sort();
    if (str == count.join('')) {
      arr.push(words[i]);
    }
  }
  return arr;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
*/
// let a = 499942 ** (898102 ** 846073);
// console.log(a);
/*
function domainName(url) {
  let arr = url.split('//');
  let arr1 = [];
  if (arr.length > 1) {
    arr1 = arr[1].split('.');
    if (arr1[0] == 'www') {
      return arr1[1];
    }
    return arr1[0];
  } else {
    arr1 = arr[0].split('.');
    if (arr1[0] == 'www') {
      return arr1[1];
    }
    return arr1[0];
  }
}
console.log(
  domainName(
    'https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript'
  )
);
*/

function zeros(n) {
  let sum = 0;
  let check = 0;
  for (let i = 0; i <= n; i += 5) {
    if (i % 5 == 0) {
      sum++;
      check = i;
      while (check > 24) {
        check = check / 5;
        if (check % 5 == 0) {
          sum++;
        }
      }
    }
  }
  return sum - 1;
}

console.log(zeros(1000));

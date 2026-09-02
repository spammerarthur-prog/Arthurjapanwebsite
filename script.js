// CHECK VISITOR LOGIN

if (
  !localStorage.getItem('visitorName') ||
  !localStorage.getItem('visitorClass')
) {
  if (!window.location.pathname.endsWith('login.html')) {
    window.location.href = 'login.html';
  }
} // BACK TO TOP
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// VISITOR NAME
const visitorName = document.getElementById('visitorName');

const visitorClass = document.getElementById('visitorClass');

const savedName = localStorage.getItem('visitorName');

const savedClass = localStorage.getItem('visitorClass');

if (savedName && visitorName) {
  visitorName.textContent = savedName;
}

if (savedClass && visitorClass) {
  visitorClass.textContent = 'CLASS ' + savedClass;
}

// FOOD PAGE DATA
const foods = {
  sushi: {
    name: 'Sushi',
    icon: '🍣',
    japanese: 'すし',
    description:
      'A traditional Japanese dish made with seasoned rice and ingredients such as seafood, vegetables and egg.',
    type: 'Traditional Food',
    country: 'Japan',
  },

  'choco-banana': {
    name: 'Choco Banana',
    icon: '🍫🍌',
    japanese: 'チョコバナナ',
    description:
      'A popular Japanese festival treat made by coating a banana with chocolate and colourful toppings.',
    type: 'Festival Food',
    country: 'Japan',
  },

  matcha: {
    name: 'Matcha',
    icon: '🍵',
    japanese: '抹茶',
    description:
      'Finely ground Japanese green tea known for its rich flavour, vibrant colour and traditional tea ceremony.',
    type: 'Japanese Tea',
    country: 'Japan',
  },

  mochi: {
    name: 'Mochi',
    icon: '🍡',
    japanese: 'もち',
    description:
      'A soft and chewy Japanese rice cake traditionally made from glutinous rice.',
    type: 'Traditional Sweet',
    country: 'Japan',
  },

  onigiri: {
    name: 'Onigiri',
    icon: '🍙',
    japanese: 'おにぎり',
    description:
      'A simple Japanese rice ball often shaped into triangles and filled or wrapped with ingredients such as seaweed.',
    type: 'Japanese Food',
    country: 'Japan',
  },
};
// FOOD DETAIL PAGE
const params = new URLSearchParams(window.location.search);
const foodID = params.get('food');

if (foodID && foods[foodID]) {
  const food = foods[foodID];

  const foodTitle = document.getElementById('foodTitle');
  const foodJapanese = document.getElementById('foodJapanese');
  const foodDescription = document.getElementById('foodDescription');
  const foodType = document.getElementById('foodType');
  const foodCountry = document.getElementById('foodCountry');
  const foodIcon = document.querySelector('.food-detail-icon');

  if (foodTitle) foodTitle.textContent = food.name;
  if (foodJapanese) foodJapanese.textContent = food.japanese;
  if (foodDescription) foodDescription.textContent = food.description;
  if (foodType) foodType.textContent = food.type;
  if (foodCountry) foodCountry.textContent = food.country;

  if (foodIcon) foodIcon.textContent = food.icon;
}

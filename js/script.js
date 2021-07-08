//burger menu
const header__burger = document.querySelector('.header__burger-click')
const header__burger1 = document.querySelectorAll('.header__burger-click1')
const header__burgerPolosa1 = document.querySelector('.header__burger-polosa1');
const header__burgerPolosa = document.querySelector('.header__burger-polosa');
const header__burgerPolosa3 = document.querySelector('.header__burger-polosa3');

const nheader__burgerPolosa1 = document.querySelector('.header__burger-polosa1n');
const nheader__burgerPolosa = document.querySelector('.header__burger-polosan');
const nheader__burgerPolosa3 = document.querySelector('.header__burger-polosa3n');




const header__menu = document.querySelector('.header__menu-opend');
const header__menu1 = document.querySelector('.header__menu-opendmedia');
const body = document.querySelector('body');





for (let i = 0; i < header__burger1.length; i++) {
  header__burger1[i].addEventListener('click', burger1);



  function burger1() {
    header__menu1.classList.toggle('opend');
    header__burgerPolosa1.classList.toggle('opend');
    header__burgerPolosa.classList.toggle('opend');
    header__burgerPolosa3.classList.toggle('opend');
    body.classList.toggle('opend');
  }
}

header__burger.addEventListener('click', burger);

function burger() {
  header__menu.classList.toggle('opend');
  nheader__burgerPolosa1.classList.toggle('opend');
  nheader__burgerPolosa.classList.toggle('opend');
  nheader__burgerPolosa3.classList.toggle('opend');
}


//slider
$('.section__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  nextArrow: '.section__right-slider',
  prevArrow: '.section__left-slider',
  responsive: [
    {
      breakpoint: 485,
      settings: {
        autoplay: true,
      }
    },
  ],
});


//games__slider
$('.games__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  nextArrow: '.games__right-slider',
  prevArrow: '.games__left-slider',
  responsive: [
    {
        breakpoint: 651,
       settings: {
         autoplay: true,
       } 
    },
  ],
});


//berlingo__slider
$('.berlingo__slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.berlingo__slider-nav',
});


//berlingo__slider
$('.berlingo__slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.berlingo__slider',
  arrows: false,
  vertical: true,
  responsive: [
    {
      breakpoint: 931,
      settings: {
        vertical: false
      }
    },
  ],
});



$(document).ready(function () {
  var $slider = $('.workshops__slider');
  var $progressBar = $('.progress');
  var $progressBarLabel = $('.slider__label');

  $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc);

    /* $progressBarLabel.text(calc + 'ПРивет'); */
  });


  //workshops__slider
  $slider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '.workshops__right-slider',
    prevArrow: '.workshops__left-slider',
    responsive: [
      {
        breakpoint: 1261,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 939,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 627,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  });
});






const header__clickButton = document.querySelector('.header__click-button');
const header__openChearch = document.querySelector('.header__open-chearch');


header__clickButton.addEventListener('click', () => {
  header__openChearch.classList.toggle('open');
})


//табы1
const berlingo__tabBtn = document.querySelectorAll('.berlingo__tab-btn');
const berlingo__tabsContent = document.querySelector('.berlingo__tabs-content');
const berlingo__tabsBtn = document.querySelector('.berlingo__tabs-btn');



for (let i = 0; i < berlingo__tabBtn.length; i++) {
  berlingo__tabBtn[i].addEventListener('click', function () {
    berlingo__tabsBtn.querySelector('.active').classList.remove('active');
    berlingo__tabsBtn.querySelectorAll('.berlingo__tab-btn')[i].classList.add('active');


    berlingo__tabsContent.querySelector('.active').classList.remove('active');
    berlingo__tabsContent.querySelectorAll('.berlingo__tabs-contentitems')[i].classList.add('active');

  })
}




//увелечение значения input 
const basket__minus = document.querySelectorAll('.basket__minus');
const basket__plus = document.querySelectorAll('.basket__plus');
const basket__input = document.querySelectorAll('.basket__input');


for (let i = 0; i < basket__plus.length; i++) {
  basket__plus[i].addEventListener('click', () => {
    basket__input[i].value++;
  })

  basket__minus[i].addEventListener('click', () => {
    if (basket__input[i].value > 1) {
      basket__input[i].value--;
    }
  })
}


const basket__checkboxTitleway = document.querySelectorAll('.basket__checkbox-titleway');
const basket__wayOpen = document.querySelectorAll('.basket__way-open');

for (let i = 0; i < basket__checkboxTitleway.length; i++) {
  basket__checkboxTitleway[i].addEventListener('click', () => {
    basket__wayOpen[i].classList.toggle('open');
  })
}




//Ползунки
const games__priceSlider = document.querySelector('.games__price-slider');

const min = document.querySelector('.min');
const max = document.querySelector('.max');
const inputs = [min, max]



if (games__priceSlider) {
  noUiSlider.create(games__priceSlider, {
    start: [0, 100000],
    connect: true,
    range: {
      'min': 0,
      'max': 100000
    }
  });


  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value


    games__priceSlider.noUiSlider.set(arr);

  }

  inputs.forEach((el, index) => {
    el.addEventListener('change', (event) => {
      setRangeSlider(index, event.target.value);
    });
  });

  games__priceSlider.noUiSlider.on('update', function (values, handle) {
    console.log(inputs[handle].value = Math.round(values[handle]))
  });


} else {
  console.log('false');
}

//2
const games__priceSlider1 = document.querySelector('.games__price-slider1');

const min1 = document.querySelector('.min1');
const max1 = document.querySelector('.max1');
const inputs1 = [min1, max1]



if (games__priceSlider1) {
  noUiSlider.create(games__priceSlider1, {
    start: [0, 100000],
    connect: true,
    range: {
      'min': 0,
      'max': 100000
    }
  });


  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value


    games__priceSlider1.noUiSlider.set(arr);

  }

  inputs1.forEach((el, index) => {
    el.addEventListener('change', (event) => {
      setRangeSlider(index, event.target.value);
    });
  });

  games__priceSlider1.noUiSlider.on('update', function (values, handle) {
    console.log(inputs1[handle].value = Math.round(values[handle]))
  });


} else {
  console.log('false');
}



//кастомный select
const js__ClickOptionse = document.querySelector('.js__click-optionse');
const optionse__open = document.querySelector('.games__open-js');
const games__option = document.querySelectorAll('.games__option');
const js__clickOption = document.querySelector('.js__click-option');


if (js__ClickOptionse) {
  js__ClickOptionse.addEventListener('click', selected);

  function selected() {
    optionse__open.classList.toggle('open');
  }


  for (let i = 0; i < games__option.length; i++) {
    games__option[i].addEventListener('click', selects);

    function selects() {
      js__clickOption.innerHTML = games__option[i].querySelector('label').innerHTML;
    }
  }
}


const games__filtrDots = document.querySelectorAll('.games__filtr-dots');
const games__items = document.querySelector('.games__items:nth-child(1)');
const games__filtrOpen = document.querySelector('.games__filtr-open');



for (let i = 0; i < games__filtrDots.length; i++) {
  const element = games__filtrDots[i];
  element.addEventListener('click', (event) => {
    games__items.classList.toggle('open');
    games__filtrOpen.classList.toggle('open');
     body.classList.toggle('opend')
  })
    
}





function remove() {
  games__filtrOpen.classList.remove('open');
  games__items.classList.remove('open');
  body.classList.remove('opend')
}
  
  
  if(games__filtrOpen) {
    games__filtrOpen.addEventListener('click', () => {
      remove();
    })
  }




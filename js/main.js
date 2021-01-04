// select necessary DOM elements
const horoscope = document.querySelector('#horoscope');
const yourSign = document.querySelector('#birthday');
const logo = document.querySelector('.brand-logo');
// Create function for submit and get input values
horoscope.addEventListener('click', function birthday (){
  const month = document.querySelector('#birthMonth').value;
  const day = document.querySelector('#day').value;
  // sign for Capricorn
  if (month === 'Dec' && day >= 22 || month === 'Jan' && day <=19) {
    yourSign.innerText = `Capricorn`;
    logo.style.background = 'url("https://img.icons8.com/officel/1000/000000/capricorn.png") no-repeat';
    logo.style.backgroundSize = 'contain';
  } else if (month === 'Jan' && day >= 20 || month === 'Feb' && day <= 18) {
    yourSign.innerText = `Aquarius`;
    logo.style.background = 'url("https://img.icons8.com/officel/1000/000000/aquarius.png") no-repeat';
    logo.style.backgroundSize = 'contain';
  } else if (month === 'Feb' && day >= 19 || month === 'Mar' && day <= 20) {
    yourSign.innerText = `Pisces`;
    logo.style.background = 'url("https://img.icons8.com/officel/1000/000000/pisces.png") no-repeat';
    logo.style.backgroundSize = 'contain';
  } else if (month === 'Mar' && day >= 21 || month === 'Apr' && day <= 19) {
    yourSign.innerText = `Aries`;
    logo.style.background = 'url("https://img.icons8.com/officel/1000/000000/aries.png") no-repeat';
    logo.style.backgroundSize = 'contain';
  } else if (month === 'Apr' && day >= 20 || month === 'May' && day <= 20) {
    yourSign.innerText = `Taurus`;
    logo.style.background = 'url("https://img.icons8.com/officel/1000/000000/taurus.png") no-repeat';
    logo.style.backgroundSize = 'contain';
  } else if (month === 'May' && day >= 21 || month === 'Jun' && day <= 20) {
    yourSign.innerText = `Gemini`;
    logo.style.background = 'url("https://img.icons8.com/officel/1000/000000/gemini.png") no-repeat';
    logo.style.backgroundSize = 'contain';
  } else if (month === 'Jun' && day >= 21 || month === 'Jul' && day <= 22) {
    yourSign.innerText = `Cancer`;
    logo.style.background = 'url("https://img.icons8.com/officel/1000/000000/cancer.png") no-repeat';
    logo.style.backgroundSize = 'contain';
  } else if (month === 'Jul' && day >= 23 || month === 'Aug' && day <= 22) {
    yourSign.innerText = `Leo`;
    logo.style.background = 'url("https://img.icons8.com/officel/1000/000000/leo.png") no-repeat';
    logo.style.backgroundSize = 'contain';
  } else if (month === 'Aug' && day >= 23 || month === 'Sep' && day <= 22) {
    yourSign.innerText = `Virgo`;
    logo.style.background = 'url("https://img.icons8.com/officel/1000/000000/virgo.png") no-repeat';
    logo.style.backgroundSize = 'contain';
  } else if (month === 'Sep' && day >= 23 || month === 'Oct' && day <= 22) {
    yourSign.innerText = `Libra`;
    logo.style.background = 'url("https://img.icons8.com/officel/1000/000000/libra.png") no-repeat';
    logo.style.backgroundSize = 'contain';
  } else if (month === 'Oct' && day >= 23 || month === 'Nov' && day <= 21) {
    yourSign.innerText = `Scorpio`;
    logo.style.background = 'url("https://img.icons8.com/officel/1000/000000/scorpio.png") no-repeat';
    logo.style.backgroundSize = 'contain';
  } else if (month === 'Nov' && day >= 22 || month === 'Dec' && day <= 21) {
    yourSign.innerText = `Sagittarius`;
    logo.style.background = 'url("https://img.icons8.com/officel/1000/000000/sagittarius.png") no-repeat';
    logo.style.backgroundSize = 'contain';
  } else {
    yourSign.innerText = 'Please enter a valid day! :)';
  }
})


// Create function to change innerText of h3 element

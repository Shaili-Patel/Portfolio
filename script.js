const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', ()=>{

cards.forEach(card=>{

const cardTop = card.getBoundingClientRect().top;

if(cardTop < window.innerHeight - 100){
    card.classList.add('show');
}

});

});

/* BUTTON INTERACTION */

const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn=>{

btn.addEventListener('mouseenter', ()=>{

btn.style.boxShadow = '0 0 20px rgba(29,185,84,.6)';

});

btn.addEventListener('mouseleave', ()=>{

btn.style.boxShadow = 'none';

});

});

/* SEARCH BAR */

const search = document.querySelector('.search');

search.addEventListener('keypress', function(e){

if(e.key === 'Enter'){
    alert('You can make this search functional later with JavaScript or JSON!');
}

});

// Good Morning/Afternoon/Evening Greeting

const greeting = document.getElementById("greeting");

const hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good Morning";
} 
else if (hour < 18) {
    greeting.textContent = "Good Afternoon";
} 
else {
    greeting.textContent = "Good Evening";
}
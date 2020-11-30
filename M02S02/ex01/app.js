// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);

let $p = $('<p>', {
  id: 'myParagraph',
  text: '<b>Textul</b> care trebuie sa apara in paragraf',
  class: 'clase de css',
});

$p.appendTo($('body'));

// Salveaza obiectul jQuery $('body') intr-o variabila numita $body si foloseste-o in metoda appendTo().
// https://api.jquery.com/appendTo/
// Creaza inca un paragraf cu idul message care sa contina textul: “Parola nu trebuie sa fie mai mica de 5 caractere.”.
// Folosind metoda append a obiectului $body, adauga noul obiect in DOM.
// https://api.jquery.com/append/
// Dupa ce l-ai adaugat, foloseste dupa 5 secunde metoda addClass a noului obiect pentru a ii adauga clasa error.
// https://api.jquery.com/addClass/

let $body = $('body');
$body.append($p);

$p1 = $('<p>', {
  id: 'message',
  text: 'Parola nu trebuie sa fie mai mica de 5 caractere',
});
$body.append($p1);

setTimeout(() => {
  $p1.addClass('error');
}, 5000);

// Selecteaza paragraful anterior (#myParagraph) si schimba textul sau in textul: “Am schimbat dinamic acest paragraf.” Folosind metoda .text()
// https://api.jquery.com/text/
// Creeaza un element de tip span cu idul example si cu textul “ParolaMea” si adauga-l la cel de-al doilea paragraf folosind metoda .appendTo()
// Creeaza un element de tip h2 cu textul “Mesaje” si adauga-l la inceputul div-ului cu clasa container folosind metoda .prependTo()
// https://api.jquery.com/prependTo/

document.getElementById('myParagraph').innerText =
  'Am schimbat dinamic acest paragraf';
//jquery

$('myParagraf').text('am schimbat dinamic acest paragraf');

let $span = $('<span>', {
  id: 'example',
  text: 'ParolaMea',
}).appendTo($p1);

let span = document.createElement('span');
span.id = 'example2';
span.innerText = 'Parola ta';
$p1[0].append(span);

$('<h2>', {
  text: 'Message',
}).prependTo('.container');

let h2 = document.createElement('h2');
h2.innerText = 'Message 2';
document.querySelector('.container').prepend(h2);


//Tema
//Creaza un div cu clasa navigation si adauga-l dupa divul anterior, folosind metoda .after() https://api.jquery.com/after/
// Creeaza un element de tip ancora cu textul Primul Link si clasa nav-link si adauga-l la divul cu clasa navigation.
// Creeaza un element h2 cu textul “Navigatie” si folosind metoda .before() adauga-l la divul cu clasa navigation. Selectorul lui before va trebui sa fie selectorul ancorei pentru a functiona corect. Exemplu: .navigation .nav-link
// https://api.jquery.com/before/
// Creeaza un element de tip sup cu textul 1 si folosind metoda .prepend() adauga-l in ancora .nav-link
// https://api.jquery.com/prepend

let $nav = $('<div>', {
  class: 'navigation',
}).insertAfter('.container')

let $first = $('<a>', {
  class:'nav-link',
  text:'Primul link',
}).appendTo($nav)

let $navigatie = $('<h2>', {
  text:'Navigatie',
})

$($first).before($navigatie)

$($first).prepend($('<sup>', {
  text:'1',
}))

let $tMare = $('<h1>', {
  text:'Invat jQuery',
})

$('.container').before($tMare)


//Aici am incercat initial sa fac $link si $documentation iar text in $documentation sa folosesc 'special ticks' sa introduc ${$link}, dar obtin object-object

let $link = $('<a>', {
  text:' aici',
  target:'_blank',
  href: 'https://api.jquery.com/',
})


let $documentation = $('<p>', {
  text:`Documentia jQuery poate fi gasita`,
})

$('body').prepend($documentation)

$($documentation).append($link)

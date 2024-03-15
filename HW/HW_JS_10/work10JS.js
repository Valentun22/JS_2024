// Task 1
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

    function tuskOne () {
        let name = document.getElementById("name").value;
        let surname = document.getElementById("surname").value;
        let age = document.getElementById("age").value;

        let  person = {
            name: name,
            surname: surname,
            age: age
        };

        let  outputDiv = document.getElementById("output");
        outputDiv.innerHTML = "<p>Ім'я: " + person.name + "</p>" +
            "<p>Прізвище: " + person.surname + "</p>" +
            "<p>Вік: " + person.age + "</p>";
    }


// Task 4
// Зробити масив на 100 об'єктів та дві кнопки prev next
// При завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

    let data = [];
    for (let i = 0; i < 100; i++) {
        data.push({ id: i, name: 'Елемент'});
    }
    function renderObjects(startIndex) {
        let elem1 = document.getElementById('container');
        elem1.innerHTML = '';

        for (let i = startIndex; i < startIndex + 10; i++) {
            if (i >= data.length) {
                break;
            }
            let object = data[i];
            let div = document.createElement('div');
            div.textContent = object.id + ': ' + object.name;
            elem1.appendChild(div);
        }
    }
    let elem2 = 0;
    renderObjects(elem2);

    function showNext() {
        if (elem2 + 10 < data.length) {
            elem2 += 10;
            renderObjects(elem2);
        }
    }
    function showPrev() {
        if (elem2 - 10 >= 0) {
            elem2 -= 10;
            renderObjects(elem2);
        }
    }
    let nextButton = document.getElementById('nextButton');
    let prevButton = document.getElementById('prevButton');

    nextButton.addEventListener('click', showNext);
    prevButton.addEventListener('click', showPrev);

// Task 4
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let textElement = document.getElementById('text');
let hideButton = document.getElementById('hideButton');
hideButton.addEventListener('click', function() {
    // Зникаємо елемент
    textElement.style.display = 'none';
});

// Task 5
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

    let ageInput = document.getElementById('ageInput');
    let confirmButton = document.getElementById('confirmButton');

    confirmButton.addEventListener('click', function() {

        let  age = parseInt(ageInput.value);
            if (age < 18) {
                alert('Менше 18');
            } else {
                alert('Більше 18');
            }
    });

// Task 6
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком,
// в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

    let price = JSON.parse(localStorage.getItem('price')) || 100;
    window.addEventListener('load', function () {
        let currentTime = new Date().getTime() / 1000;
        let lastReloadTime = JSON.parse(localStorage.getItem('lastReloadTime')) || currentTime;
            if (currentTime - lastReloadTime >= 10) {
                price += 10;
            }

        localStorage.setItem('lastReloadTime', JSON.stringify(currentTime));
        localStorage.setItem('price', JSON.stringify(price));
        console.log(currentTime - lastReloadTime);
        let elem1 = document.getElementById('task7');
        elem1.innerText = price + ' UAH';

        localStorage.setItem('price', JSON.stringify(price));
    });
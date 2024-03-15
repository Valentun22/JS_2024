    // Task 1
    // - створити блок,
    // - додати йому класи wrap, collapse, alpha, beta
    // - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
    // - додати цей блок в body.
    // - клонувати його повністю, та додати клон в body.

    const taskOne = document.createElement('div');

    taskOne.classList.add('wrap', 'collapse', 'alpha', 'beta');

    taskOne.innerText = 'Привіт';
    taskOne.style.height = '50px';
    taskOne.style.width = '110px';
    taskOne.style.backgroundColor = 'aquamarine';
    taskOne.style.color = 'red';
    taskOne.style.fontSize = '35px';
    taskOne.style.marginBottom = '20px';

    document.body.appendChild(taskOne);

    const taskOneClone = taskOne.cloneNode(true);
    document.body.appendChild(taskOneClone);

    // Task 2
    // - Є масив:
    //     ['Main','Products','About us','Contacts']
    // Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

    let taskTwo = ['Main','Products','About us','Contacts'];
    const ulT2 = document.createElement('ul');
    for (const twoMas of taskTwo) {
        const liT2 = document.createElement('li');
        liT2.innerText = twoMas;
        ulT2.appendChild(liT2)
    }
    document.body.appendChild(ulT2);

    // Task 3
    // - Є масив
    // Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
    // Завдання робити через цикли.

    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    for (const task3 of coursesAndDurationArray) {
        const all = document.createElement('div');
        all.innerText = `${task3.title} - ${task3.monthDuration}`;
        document.body.appendChild(all);
        all.style.margin = '10px';
    }

    // Task 4
    // - Є масив
    // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
    // Завдання робити через цикли.

    let coursesAndDurationArray4 = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    const divT4 = document.createElement('div');
    for (const arr of coursesAndDurationArray4) {
        const elem1 = document.createElement('div');
        const elem2 = document.createElement('h1');
        const elem3 = document.createElement('p');
        elem1.classList.add('item');
        elem2.classList.add('heading');
        elem3.classList.add('description');

        elem2.innerText = arr.title;
        elem3.innerText = arr.monthDuration;

        elem1.append(elem2, elem3);
        divT4.appendChild(elem1);
    }
    document.body.appendChild(divT4);

    // Task 5
    // - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
    // Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
    // Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

    const simpsons = [
        {
            name: 'Bart',
            surname: 'Simpson',
            age: 10,
            info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
            photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
        },
        {
            name: 'Homer',
            surname: 'Simpson',
            age: 40,
            info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
            photo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
        },
        {
            name: 'Marge',
            surname: 'Simpson',
            age: 38,
            info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
        },
        {
            name: 'Lisa',
            surname: 'Simpson',
            age: 9,
            info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
        },
        {
            name: 'Maggie',
            surname: 'Simpson',
            age: 1,
            info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
        },
    ];

    for (const simps of simpsons) {
        const elem1 = document.createElement('div');
        const elem2 = document.createElement('h1');
        const elem3 = document.createElement('img');
        const elem4 = document.createElement('p');
        const elem5 = document.createElement('i');

        elem1.classList.add('member');
        elem2.innerText = simps.name;
        elem5.innerText = simps.age;
        elem4.innerText = simps.info;

        elem3.setAttribute('src', simps.photo);
        elem3.setAttribute('alt', simps.name);

        elem1.append(elem2, elem3, elem5, elem4);
        document.body.appendChild(elem1);
        elem1.style.width = '600px'
        elem1.style.marginLeft = '50px'
        elem3.style.marginLeft = '150px'
    }

    // Task 6
    //     Цикл в циклі
    // - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
    // Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
    // Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

    let coursesArray = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];

    for (const courses of coursesArray) {
        const elem1 = document.createElement('div');
        const elem2 = document.createElement('h1');
        const elem3 = document.createElement('div');
        const elem4 = document.createElement('div');
        const elem5 = document.createElement('div');
        const elem6 = document.createElement('ul');

        elem2.innerText = courses.title;
        elem4.innerText = courses.monthDuration;
        elem5.innerText = courses.hourDuration;

        for (const module of courses.modules) {
            const elem7 = document.createElement('li');
            elem7.innerText = module;
            elem6.appendChild(elem7);
        }

        elem1.classList.add('header');
        elem2.classList.add('borderName')
        elem3.classList.add('flex');
        elem4.classList.add('table');
        elem5.classList.add('tableNamb');
        elem6.classList.add('borderAll')

        elem3.append(elem4, elem5);
        elem1.append(elem2, elem3, elem6);

        document.body.appendChild(elem1);
    }

// ---------------------------Home Work-----------------------------

// 1. Написати конвертер валют - пишете скільки у вас є гривень і які очікуємо можливі конвертації - у долар, євро, нафту(brent), золото. 
//  Додатково зробити перевірку чи не обманює вас юзер і перевіряти чи не прийшов вам null or undefined. 
    const HRYVNIAS = +prompt("Задайте наявну кількість гривень!");

    let inDolars = HRYVNIAS * 0.036;
    let inEuro = HRYVNIAS * 0.03;
    let inBrent = HRYVNIAS / 1776.8;
    let inGold = HRYVNIAS / 1715;

    if(typeof HRYVNIAS === "undefined" || typeof HRYVNIAS === "null"){
        alert("Вкажіть значення!");
    }
    else{
        alert(`У доларах: ${inDolars.toFixed(2)}; у євро: ${inEuro.toFixed(2)}; купівля нафти: ${inBrent.toFixed(2)} за барель; купівля золота: ${inGold.toFixed(2)} за грам.`);
    }
    
// 2. Спитатись у юзера суму замовлення і вивести результат з урахуванням знижки : 
//  до 500 гривень знижка -1 %, від 500 до 1000 - 5%, більше 1000 - 10% та подарунковий сертифікат на 200 гривень у подарунок! 
    let orderPrice = +prompt("Сума замовлення?");

    const onePercentDiscount = 0.01;
    const fivePercentDiscount = 0.05;
    const tenPercentDiscount = 0.1;

    if(orderPrice < 500){
        alert(`Ви отримали знижку -1%, сума замовлення із врахуванням знижки: ${orderPrice*onePercentDiscount}`);
    }
    else if(orderPrice >= 500 && orderPrice < 1000){
        alert(`Ви отримали знижку -5%, сума замовлення із врахуванням знижки: ${orderPrice*fivePercentDiscount}`);
    }
    else if(orderPrice >= 1000){
        alert(`Ви отримали знижку -10%, сума замовлення із врахуванням знижки: ${orderPrice*tenPercentDiscount}.
        Сертифікат на 200 гривень у подарунок!`);
    }

// 3. Створити тест на знання будь-чого, юзер має відповісти на 5 питань, вірна відповідь - 1 бал, 
//  якщо юзер відповість правильно на всі 5 запитань - додатково додати 1 бонусний бал. 
    let answer1 = prompt("Керуючого у готелі 'Continental' із фільму 'Джон Уік' звуть...");
    let answer2 = prompt("Статус Excommudicado перекладається як статус...");
    let answer3 = +prompt("Скільки фільмів із серії 'Джок Вік' наразі вийшло? Вкажіть число.");
    let answer4 = prompt("Джок Вік повернувся до справ через те, що злочинці вбили його...");
    let answer5 = prompt("Найсмертоносніша зброя із арсеналу Джона?");
    
    let score = 0;
    if (answer1 === "Вінстон"){
        score += 1;
    } 
    if (answer2 === "вигнанця"){
        score += 1;
    } 
    if (answer3 === "3"){
        score += 1;
    } 
    if (answer4 === "собаку"){
        score += 1;
    } 
    if (answer5 === "олівець"){
        score += 1;
    } 
    if(score === 5){
        score += 1;
    }

    alert(`Результат тестування: ${score} бал(и/ів)`);

// 4. Запитатись у користувача 3 значне число та сказати чи є у ньому однакові цифри 
    let number = +prompt("Задайте тризначне число!");

    let numb1 = Math.floor(number / 100);
    let numb2 = Math.floor((number / 10) % 10);
    let numb3 = number % 10;
    
    if(numb1 === numb2 || numb2 === numb3 || numb1 === numb3){
        alert("Число містить однакові цифри!");
    }
    else{
        alert("Співпадінь не знайдено!");
    }
    
// 5. Запитатись у юзера одну кнопоку від 1 до = на клавіатурі та вивести що буде при нажиманні цифри разом з шифтом.
    let pressedButton = prompt("Натисніть клавішу у межах від 1 до '='!");
    
    if(+pressedButton === 1){
        alert("!");
    } 
    else if(+pressedButton === 2){
        alert("@");
    }
    else if(+pressedButton === 3){
        alert("#");
    }
    else if(+pressedButton === 4){
        alert("$");
    }
    else if(+pressedButton === 5){
        alert("%");
    }
    else if(+pressedButton === 6){
        alert("^");
    }
    else if(+pressedButton === 7){
        alert("&");
    }
    else if(+pressedButton === 8){
        alert("*");
    }
    else if(+pressedButton === 9){
        alert("(");
    }
    else if(+pressedButton === 0){
        alert(")");
    }
    else if(pressedButton === "-"){
        alert("_");
    }
    else if(pressedButton === "="){
        alert("+");
    }
    else{
        alert("Помилка, введіть значення у межах віж 1 до '='!");
    }

// ---------------------Class Work---------------------------------------
//   Емуляція гри в кубики, юзер клацає на конфірм та отримує 2 результати (кубики стандартні 1-6 значення на них.)
//    Якщо випадає 2 шестірки, вивести додаткове повідомлення що це - джекпот!
    const MIN = 1;
    const MAX = 6;

    let firstTry = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
    let secondTry = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

    alert(`Вам випали значення ${firstTry} та ${secondTry}.`);

    if(firstTry === 6 && secontTry === 6){
        alert(`Джекпот! Congratulations!`);
    }

//  Cтворіть програму яка запитує у юзера 2 значення та виводить рандомно число між цими 2 значеннями.
    let limit1 = +prompt("Задайте початкову межу.");
    let limit2 = +prompt("Задайте кінцева межу.");

    alert(`Рандомне значення у заданих межах: ${Math.floor(Math.random() * (limit2 - limit1 + 1)) + limit1}.`);

//  Cтворити масив у якому буде 3 юзера описані як обєкти з такими полями - age, name, hobby (теж повинно бути масивом ).
    let usersArray = [
        {age:37, name: "Jonathan", hobby:["hiking", "walk the dogs"]},
        {age:24, name: "Mike", hobby:["painting", "snorkerling", "watch movies"]},
        {age:41, name: "Nick", hobby:["fishing", "play tennis"]}
    ];
    console.log(usersArray);
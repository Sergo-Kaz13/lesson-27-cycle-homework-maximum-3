'use strict'

// ? Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

let start = true;

while (start) {
  let userDate = prompt('Введи дату в форматі, День.Місяць.Рік', '');
  if (userDate.length !== 10 || userDate.split('.').length !== 3) {
    alert('Формат дати не вірний');
  } else if (userDate.split('.')[0].length !== 2 
            || userDate.split('.')[1].length !== 2 
            || userDate.split('.')[2].length !== 4) {
    alert('Формат дати не вірний');
  } else if (+userDate.split('.')[0] !== +userDate.split('.')[0] 
            || +userDate.split('.')[1] !== +userDate.split('.')[1] 
            || +userDate.split('.')[2] !== +userDate.split('.')[2]) {
    alert('Формат дати не вірний');
  } else {
    let arrDate = userDate.split('.');
    arrDate[0]++
    arrDate[0] = arrDate[0] + '';
    [arrDate[0], arrDate[1]] = [arrDate[1], arrDate[0]];
  
    let arrDateStr = arrDate.join();
    let d = new Date(arrDateStr);
    let date = d.getDate();
    if (date < 10) {
      date = '0' + date;
    }
    let month = d.getMonth();
    month++;
    month = month + '';
    if (month < 10) {
      month = '0' + month;
    }
    let year = d.getFullYear();
    alert(`${date}.${month}.${year}`);
    start = false;
  }  
}

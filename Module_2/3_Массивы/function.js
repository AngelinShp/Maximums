function showMessage() {
  name = prompt('Как тебя зовут?');
  alert('Привет, ' + name + '!');
}
showMessage();








function showMessage(message) {
  name = prompt('Как тебя зовут?');
  alert('Привет, ' + name + '!' + message);
}
showMessage(' Как настроение?');
showMessage(' Как жизнь?');









function calc(a, b) {
  return a * b;
}
var test = calc(3, 6);
alert(test);






















function zad1(a, b, c) {
  return (a + b + c) / 3;
}
var test = zad1(3, 6, 9);
alert(test);





function showMessage() {
    var message = 'Привет, я - Вася!';
    alert(message); // доступ есть
}
showMessage();
alert(message); // ошибка обращения - доступа нет













function showMessage() {
  userName = 'Петя'; // использование внешней переменной
  var message = 'Привет, я '+ userName;
  alert(message ); // вывод переменной, доступной только функции, так как в ней была объявлена
}
var userName = 'Вася';
alert(userName); // здесь Вася, так как значение внешней переменной ещё НЕ ИЗМЕНЕНО функцией, функция пока не вызвана
showMessage();
alert(userName); // Петя, так как значение внешней переменной ИЗМЕНЕНО функцией, функция вызвана









// var UserName = 'Катя' и var userName = "Маша" - разные переменные!!!!!
var userName = 'Катя';
function showMessage() {
  var userName = "Маша"; //НЕ замена, а создание новой переменной
  var message = 'Привет, ' + userName; //привет+маша
  alert(message);
}
showMessage(); //привет+маша
alert(userName); //Катя









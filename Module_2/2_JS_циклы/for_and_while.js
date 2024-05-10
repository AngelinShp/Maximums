for (i = 1, text = 'Повторение – мать учения!'; i <= 5; i++) {
  alert(i + '. ' + text) ;
}
for (i=10; i>0; i--)
    {
        console.log('Вам осталось пройти ' + i + ' метров');
    }
console.log('Вы дошли!');

let num = prompt('Введите число для обратного отсчёта: ', 15);
while (num > 0) {
  if (num % 5 != 0){
    alert(num);
  } else if (num % 5 === 0){
    alert('Пиип!');
}
num--;
}

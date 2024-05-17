//let tasks = [];
function delete_b_e() {
    tasks.pop();
    tasks.shift();
}
let tasks = ['сделать уроки', 'купить хлеб', 'вытереть пыль'];
//alert(tasks[0]); // сделать уроки
//alert(tasks[1]); // купить хлеб
//alert(tasks[2]); // вытереть пыль
//tasks[1] = 'купить молоко';
//tasks[3] = 'выучить JS';
//tasks.push('купить шоколад');
//tasks.unshift('Сходить на тренировку!');
alert(tasks);
delete_b_e();
alert(tasks);


// работа с классом active
$('#but1').click(function (event) {
    $('.active').removeClass('active');
    $(event.target).addClass('active')

});

$('#but2').click(function (event) {
    $('.active').removeClass('active');
    $(event.target).addClass('active');
    alert($('h3').html());
});

$('#but3').click(function (event) {
    $('.active').removeClass('active');
    $(event.target).addClass('active');
    $('a').html(Date());
    $('a').attr('href', 'https://education.maximumtest.ru/lesson/2448470/subjects/32205/theory/6925');
});


$('#but4').click(function (event) {
    $('.active').removeClass('active');
    $(event.target).addClass('active');
    alert($('a').attr('href'));
    $('.article-list').attr('type', 'square');
    $('a').removeAttr('title');
});

$('.article-list').click(function (event) {
    $(event.target).wrap('<del></del>');
}
);

$('h3').click(function () {
  $('h3').append('<div style="font-weight: 200; font-size: 16px;">Выполнение различных сценариев возможно только после окончания загрузки структуры документа document, когда браузер преобразует html-код страницы в дерево DOM. Управление процессом загрузки обеспечивает конструкция ready().</div>');
});

document.querySelector('.toggle-sidebar').onclick = function () {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
}



document.querySelector('.toggle-sidebar').onclick = function () {
    document.querySelector('.menu__list').classList.toggle('active-mob');
}






// const menulist = document.querySelector('.menu__list');

// menulist.addEventListener('click', function () {
//     menulist.classList.toggle('active');
// });





document.addEventListener('DOMContentLoaded', () => {
  const togglers = document.querySelectorAll('[data-toggle]');
  
    togglers.forEach((btn) => {
      btn.addEventListener('click', (e) => {
         const selector = e.currentTarget.dataset.toggle
         const block = document.querySelector(`${selector}`);
        if (e.currentTarget.classList.contains('active')) {
          block.style.maxHeight = '';
        } else {
          block.style.maxHeight = block.scrollHeight + 'px';
        }
          
         e.currentTarget.classList.toggle('active')
      })
    })
  })









// // Фильтр на мобильных устройствах
// const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
// const menuIcon = document.querySelector('.menu-icon');
// const sidebar = document.querySelector('.toggle-sidebar');
// const sidebar = document.querySelector('.menu__list');


// // Клик по кнопке для скрытия / показа фильтра и изменения иконки
// sidebarToggleBtn.onclick = function () {
//     menuIcon.classList.toggle('menu-icon-active');
//     togglesidebar.classList.toggle('sidebar--mobile-active');
//     menu__list.classList.toggle('active');
// };









// // Показать еще 3 карточки
// const btnShowMoreCards = document.querySelector('.btn-more');
// const hiddenCards = document.querySelectorAll('.card-link-hidden');


// // Клик по кнопке  и показ трех скрытых карточек
// btnShowMoreCards.addEventListener('click', function () {
//     hiddenCards.forEach(function (card) {
//         card.classList.remove('card-link-hidden');
//     });
// });


// // Показать/скрыть контент внутри виджетов
// const widgets = document.querySelectorAll('.widget');

// // Находим все виджеты на странице
// widgets.forEach(function (widget) {

//     // Слушаем клик внутри виджета  
//     widget.addEventListener('click', function (e) {

//         // Если клик по заголовку - тогда скрываем/показываем тело виджета
//         if (e.target.classList.contains('widget_title')) {
//             e.target.classList.toggle('widget_title-active');
//             e.target.nextElementSibling.classList.toggle('widget_body-hidden');
//         }
//     });
// });

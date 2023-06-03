/////////////////////плавный скрол///////////////////////////////
const linksHead = document.querySelectorAll('.nav__link');

linksHead.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const ID = event.target.getAttribute('href').substr(1);

    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

/////////////////////раскрытие таблиц///////////////////////////////

const btnShowMore = document.querySelector('.tables__button');
btnShowMore.addEventListener('click', () => {
  const tablesList = document.querySelectorAll('.tables__item');
  tablesList.forEach((table) => {
    table.classList.remove('hidden');
  });
  btnShowMore.hidden = true;
});

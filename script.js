const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const body = document.querySelector('body');

open.addEventListener('click', () => container.classList.add('show-nav'));
open.addEventListener('click', () => body.style.backgroundColor = ('#34384D'));
close.addEventListener('click', () => container.classList.remove('show-nav'));


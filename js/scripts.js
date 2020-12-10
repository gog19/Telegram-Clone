
let toggleBtn = document.querySelectorAll('.toggle-btn');
let siteMain = document.querySelector('.site-main');

toggleBtn.forEach((b) => {
    b.onclick = () => {
        siteMain.classList.toggle("main--off");
    }
})

let lists = document.querySelectorAll('.list-group-item');
let main = document.querySelector('.site-main');

lists.forEach(function (item) {
    item.addEventListener('click', function () {
        main.classList.add('actives');
    });
});

let toggler = document.querySelector('.btn-togglers');
let row = document.querySelector('.row');
let channel = document.querySelector('.channel-part');

toggler.addEventListener('click', function () {
    row.classList.toggle('right--open');

    channel.classList.toggle('col-9');
})

let mainFooter = document.querySelector('.main-footer');
document.getElementsByName('text')[0].addEventListener('input', updateValue);

function updateValue() {
    if (this.value.length > 0) {
        mainFooter.classList.add('footer--valid');
    } else {
        mainFooter.classList.remove('footer--valid');
    }
}

let btnCollapse = document.querySelector('.btn-collapsed');
let content = document.querySelector('.modal-content');
let image = document.querySelector('.shadows');

btnCollapse.addEventListener('click', function () {
    content.classList.toggle('collapse--open')
})

image.addEventListener('click', function () {
    content.classList.toggle('collapse--open')
})
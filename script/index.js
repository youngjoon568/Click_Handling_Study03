const $list = document.querySelector(".tabs");
const $items = document.querySelectorAll(".tabs li");
const $divs = document.querySelectorAll(".section > div");

const handleClick = (listTarget, listArr, listClass) => {
    [...listArr].map(t => {
        t.classList.remove(listClass);
    });
    listTarget.classList.add(listClass);
};

for(let i = 0; i < $items.length; i++) {
    $items[i].addEventListener("click", e => {
        e.preventDefault();
        handleClick($items[i], $items, "active");
        handleClick($divs[i], $divs, "active");
    });
}

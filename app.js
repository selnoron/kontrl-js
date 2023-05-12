const url = "db/food-band.json";
const fb = document.querySelector(".f-b");
const card = document.createElement("div");
const main = document.querySelector(".main");
const req = new XMLHttpRequest();
req.open("GET", url);
req.responseType="json";
req.onload = () => {
    let menu = req.response;

    for(let i of menu){
        card.innerHTML +=  
        `<div class="products">
        <div class="img" style="background-image: url(${i.image});"></div>
        <div class="middle">
            <div class="name">${i.name}</div>
            <div class="price">Цена: ${i.price}₽</div>
        </div>
        <div class="desc">
            <div class="desc-i">
                <b>Состав:</b> ${i.description}
            </div>
        </div>
    </div>`
    }
    main.append(card);
}


req.send();
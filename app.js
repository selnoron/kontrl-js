const url = "db/partners.json";
const req = new XMLHttpRequest();
req.open("GET", url);
req.responseType="json";
req.onload = () => {
    let rests = req.response;
    const main = document.querySelector(".main");
    for(let i of rests){
        const card = document.createElement("div");
        const but = document.createElement("button");
        but.classList = 'price1'
        but.type = 'submit'
        but.innerHTML = `CHOOSE`
        but.addEventListener('click', () => {
            main.innerHTML = ''
            const urll = `db/${i.products}`;
            req.open("GET", urll);
            req.responseType="json";
            console.log(req)
            req.onload = () => {
                menu = req.response;
                console.log(menu)
                for(let y of menu) {
                    const card2 = document.createElement("div");
                    card2.innerHTML += `
                        <div class="products">
                        <div class="img" style="background-image: url(${y.image});"></div>
                        <div class="middle">
                            <div class="name">${y.name}</div>
                            <div class="price">Цена: ${y.price}₸</div>
                        </div>
                        <div class="desc">
                            <div class="desc-i">
                                <b>Состав:</b> ${y.description}
                            </div>
                        </div>
                        </div>`
                    main.append(card2)
                }
            }
            req.send();
        }
        )
        card.innerHTML = `
        <div class="rests">
        <div class="img1" style="background-image: url(${i.image});"></div>
        <form class="middle1">
            <div class="name">${i.name}</div>
        </form>
        <div class="desc1">
            <div class="desc-i">
                ${i.kitchen}
            </div>
        </div>
        </div>`
        const fo = card.querySelector('.middle1')
        fo.append(but)
        main.append(card);
        
    }
    
}


req.send();



       
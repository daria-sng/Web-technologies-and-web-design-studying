// Перше завдання
function information(number){
    let data = [
        {
            brand: "HP",
            image: "https://cdn-res.keymedia.com/cdn-cgi/image/w=1000,h=600,f=auto/https://cdn-res.keymedia.com/cms/images/us/035/0391_638997212552679068.png",
            text: "HP найсильніший у корпоративному сегменті: ProBook - робоча конячка для офісу з хорошою клавіатурою і портами, EliteBook - преміальний бізнес-клас із металевим корпусом і довгою автономністю. Домашній ноутбук HP Laptop 15 - простий і доступний, Envy - тонкий преміум для творчих задач. В іграх HP має Victus - один із найдоступніших ігрових ноутбуків з RTX 3050–4050, і OMEN для максимальних налаштувань. Слабке місце: у базових HP Laptop 15 часто TN-екрани з вузькими кутами огляду - для роботи з текстом вони втомлюють."
        },
        {
            brand: "Dell",
            image: "https://cdn.mos.cms.futurecdn.net/mnVPvwW3UVyg7YKcimDXVR-1024-80.jpg.webp",
            text: "DELL - це один з найвідоміших та найуспішніших брендів ноутбуків у світі. Компанія відома своєю високою якістю продукції, інноваційними технологіями та великим спектром моделей, що задовольняють потреби найрізноманітніших користувачів. Компанія вкладає велику увагу у розробку та виготовлення своїх пристроїв, використовуючи найсучасніші матеріали та компоненти. Це дозволяє ноутбукам DELL працювати без збоїв протягом тривалого часу і забезпечує їх стабільну роботу навіть при високих навантаженнях."
        },
        {
            brand: "Lenovo",
            image: "https://cdn.mos.cms.futurecdn.net/GmYFA4MepN6rzR6LG3gsmg-1000-80.jpg.webp",
            text: "Lenovo тримає два полюси одночасно. ThinkPad і ThinkBook - еталон бізнес-ноутбука: найкращі в класі клавіатури, міцні корпуси, довгий сервіс і передбачуваність, за яку їх закуповують компанії. IdeaPad Slim - масовий ноутбук леново для дому, що конкурує з VivoBook напряму й часто виграє за комплектацією пам'яті. Legion Pro - одна з найкращих ігрових серій 2026 року з потужним охолодженням, а LOQ - її доступний молодший брат. Слабке місце: у найдешевших IdeaPad 1 і V15 часто стоять повільні eMMC-накопичувачі або 4 ГБ пам'яті - перевіряйте конфігурацію."
        },
        {
            brand: "Acer",
            image: "https://img.mezha.ua/mezha/images/doc/A/c/10214/Acer-EMEA-01.jpg?w=900&q=90&f=webp",
            text: "Ноутбук Acer традиційно пропонує найнижчу ціну входу: Aspire Go, Aspire Lite та Extensa - типовий вибір «перший ноутбук для школяра» або «для бухгалтерії». Нагорі лінійки - Swift з тонкими корпусами та хорошими екранами, а в іграх Acer виглядає сильно: Nitro V - народний ігровий ноутбук, у якому за розумні гроші стоять RTX 4050–5050, Predator Helios - флагман із серйозним охолодженням. Слабке місце: у найдешевших Aspire економлять на матеріалах корпусу та яскравості екрана."
        },
        {
            brand: "Asus",
            image: "https://f.mixsport.pro/photo/13583/WTORe.jpg",
            text: "ASUS - бренд із найширшою лінійкою в каталозі: від бюджетних VivoBook Go до творчих ProArt і ігрових ROG. Головна сила - VivoBook: за свої гроші вони дають найкращий баланс екрана, процесора й збірки, тому ноутбук асус цієї серії найчастіше радять студентам і для домашнього офісу. Zenbook - тонкі металеві ультрабуки з OLED-екранами та хорошою автономністю, TUF Gaming - міцні ігрові моделі початкового рівня, ROG Strix - флагмани з найкращим охолодженням на ринку. Слабке місце: бюджетні VivoBook Go мають скромні екрани, тому на них краще дивитись «наживо»."
        }
    ];

    document.getElementById("content").innerHTML = `<h2>${data[number].brand}</h2><p>${data[number].text}</p><img src="${data[number].image}" alt="Logo"/>`;
};

// Друге завдання
let index = 1;
showSlides(index);

function plusSlide(){
    showSlides(index += 1);
}

function minusSlide(){
    showSlides(index -= 1);
}

function currSlide(n){
    showSlides(index = n);
}

function showSlides(n){
    let slides = document.getElementsByClassName("slide");
    let slider_dots = document.getElementsByClassName("dot");

    if(n < 1){
        index = slides.length;
    }

    if(n > slides.length){
        index = 1;
    }

    for(let i = 0; i < slides.length; i+=1){
        slides[i].style.display = "none";
    }

    for(let j = 0; j < slider_dots.length; j+=1){
        slider_dots[j].className = slider_dots[j].className.replace(" act", "");
    }

    slides[index-1].style.display = "block";
    slider_dots[index-1].className += " act";
}
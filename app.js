const btns = document.querySelectorAll(".tab__btn");
const headerMain = document.querySelector('.header')
const header = document.querySelectorAll('.header-item');
const headers = document.querySelectorAll('.header .header-item:nth-last-child(-n+2)');
const rows = document.querySelectorAll('.row .row__col:nth-last-child(-n+3)');
const rowMain = document.querySelectorAll('.row')
const Import = document.querySelectorAll(".import"); 
const ImportTextWrapper = document.querySelectorAll('.import div:nth-last-child(-n+2)') 
const icons = document.querySelectorAll('.import__text')
const row = document.querySelectorAll('.row__col-price');
btns.forEach((item, i, array) => {
    item.addEventListener('click', (e) => {
        btns.forEach(item => {
            item.classList.toggle('tab__active')
        })
        Import.forEach(item => {
            item.style.width = "80%";
            item.style.margin = "0 auto";
            item.style.marginTop = "25px";
            item.style.marginBottom = "20px";

        })
        header.forEach((a) => {
            a.classList.add('hide')
        })
        headers.forEach((a, j) => {
            a.classList.add('show')
            if (j == 0) {
                a.style.marginLeft = "100px";
            }
            if (j == 2) {
                a.style.marginLeft = "25px";
                a.style.marginRight = "25px";
            }
            if (window.outerWidth <= 1240 && window.outerWidth >= 1201) {
                headerMain.style.width = "67%"
                headerMain.style.margin = "0 115px 0 auto"
            }
            else if (window.outerWidth <= 1200 && window.outerWidth >= 1150) {
                headerMain.style.width = "66%"
                headerMain.style.margin = "0 120px 0 auto"
            }
            if (window.outerWidth <= 1100 && window.outerWidth >= 1000) {
                headerMain.style.width = "64%"
                headerMain.style.margin = "0 93px 0 auto"
            }
            if (window.outerWidth <= 1000) {
                headerMain.style.width = "63%"
                headerMain.style.margin = "0 90px 0 auto"
            }
            
            headerMain.style.display = "flex";
            headerMain.style.flexDirection = "row-reverse";
            headerMain.style.justifyContent = "end";
            
        })
        row.forEach((a) => {
            a.classList.add('hide')
            a.style.width = "100px";
        })
        rows.forEach(a => {
            a.classList.remove('hide')
            a.classList.add('show')
            a.style.padding = "0 15px"

        })
        rowMain.forEach(i => {
            i.style.justifyContent = "start"
            i.style.width = "80%"
            i.style.margin = "10px auto"
        })
    })
})
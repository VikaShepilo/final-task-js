function initMap() {
    var pos = {lat: 53.909129, lng: 27.470102}
    var pos1 = {lat: 53.908344, lng: 27.484478}
    var pos2 = {lat: 53.907308, lng: 27.492482}

    var opt = {
        center: pos1,
        zoom: 14,
    };

    var map = new google.maps.Map(document.getElementById("map"), opt);

    var marker = new google.maps.Marker({ 
        map: map,
        position: pos,
        title: "OJJO"
    });

    var info = new google.maps.InfoWindow({ 
        content: '<p>ТЦ Скала</p>'
    });

    marker.addListener("click", function() {
        info.open(map, marker)
    });

    var marker1 = new google.maps.Marker({
        map: map,
        position: pos1,
        title: "OJJO"
    });

    var info1 = new google.maps.InfoWindow({
        content: '<p>ТЦ Тивали</p>'
    });

    marker1.addListener("click", function() {
        info1.open(map, marker1)
    });

    var marker2 = new google.maps.Marker({
        map: map,
        position: pos2,
        title: "OJJO"
    });

    var info2 = new google.maps.InfoWindow({
        content: '<p>Раковский</p>'
    });

    marker2.addListener("click", function() {
        info2.open(map, marker2)
    });    
}

let allforms = document.querySelector('.allforms');
let form = document.querySelector('.prompt-form');
let formRegistration = document.querySelector('.prompt-form2');
let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
let re2 = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
let tabledisplay = document.querySelector('.tabledisplay');
let table = document.querySelector('.table');
let main = document.querySelector('.main');
let maininfo = document.querySelector('.maininfo');
let err = document.querySelector('.err');
let errRegistration = document.querySelector('.errRegistration');
let tab1 = document.querySelector('.tab-1');
let tab2 = document.querySelector('.tab-2');
let diventer = document.querySelector('.diventer');
let divreg = document.querySelector('.divreg');
let inputem = document.querySelector('.prompt-email');
let inputpas = document.querySelector('.prompt-password');
let inputemreg = document.querySelector('.prompt-email-registration');
let inputpasreg = document.querySelector('.prompt-password-registration');
let inputpas2reg = document.querySelector('.prompt-password2-registration');
let exit = document.querySelector('.exit')

exit.addEventListener('click', function() {
    document.close()
})

tab1.addEventListener("click", function() {
    divreg.style.display = 'none';
    diventer.style.display = 'block';
})
tab2.addEventListener("click", function() {
    diventer.style.display = 'none';
    divreg.style.display = 'block';
})

form.addEventListener("submit", function(e){
    e.preventDefault();
    if (inputpas.value == ''){
        inputpas.focus()
    }
    if (inputem.value == ''){
        inputem.focus()
        return re.test(String(inputem.value));
    }
    if ((localStorage.getItem("email") == inputem.value) && (localStorage.getItem("password") == inputpas.value)) {
        allforms.style.display = "none"
    } else {
        err.style.display = 'block'
        err.innerHTML = 'АККАУНТ НЕ НАЙДЕН'
    }
})

formRegistration.addEventListener("submit", function(e){
    e.preventDefault();
    if (inputpas2reg.value == '') {
        inputpas2reg.focus()
    }
    if (inputpasreg.value == '') {
        inputpasreg.focus() 
        inputpasreg.value == re2.test(String(inputpasreg.value))
    }
    if (inputemreg.value == ''){
        inputemreg.focus() 
        inputemreg.value == re.test(String(inputemreg.value)) 
    }
    
    if (inputpasreg.value != inputpas2reg.value) {
        errRegistration.innerHTML = 'Пароли не совпадают!'
    }else {
        inputpasreg.value = localStorage.setItem("password", inputpasreg.value)
        inputemreg.value = localStorage.setItem("email", inputemreg.value)
        errRegistration.innerHTML = 'Регистрация завершена';
        inputpas2reg.value = '';
        inputpasreg.value = '';
        inputemreg.value = '';
    }
});

let sBrowser, sUsrAg = navigator.userAgent;
if (sUsrAg.indexOf("Firefox") > -1) {
    sBrowser = "Mozilla Firefox";
     //"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
    } else if (sUsrAg.indexOf("Opera") > -1) {
        sBrowser = "Opera";
    } else if (sUsrAg.indexOf("Trident") > -1) {
        sBrowser = "Microsoft Internet Explorer";
        //"Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
    } else if (sUsrAg.indexOf("Edge") > -1) {
        sBrowser = "Microsoft Edge";
        //"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
    } else if (sUsrAg.indexOf("Chrome") > -1) {
        sBrowser = "Google Chrome";
        //"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
    } else if (sUsrAg.indexOf("Safari") > -1) {
        sBrowser = "Apple Safari";
        //"Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
    } else {
        sBrowser = "unknown";
    }
document.getElementById('maininfo').innerHTML = sBrowser;

main.addEventListener('click', function() {
    table.style.display = 'none';
    maininfo.style.display = 'block';
});

tabledisplay.addEventListener('click', function() {
    maininfo.style.display = 'none';
    table.style.display = 'block';
});

let url = 'https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json';

let arr = []
let arrAge = []
let arrBalance = []
let clTable = document.querySelector('.client__table')
let clMan = document.querySelector('.client__man')
let clWoman = document.querySelector('.client__woman')
let clAge = document.querySelector('.client__age')
let clCheck = document.querySelector('.client__check')

function convertDate(inputDate) {
    let date = inputDate.substring(0,10)
    let d = new Date(date)
    return d.toLocaleDateString()
}

function gender() {
	let male = 0
	let female = 0
	arr.forEach(el => el.gender == 'male' ? male++ : female++)
	clMan.innerHTML = 'Количество мужчин: ' + male;
	clWoman.innerHTML = 'Количество женщин: ' + female;
}

function returnMaxAge() {
    let age = 0
	arr.forEach(el =>  +el.age > +age ? age = +el.age : age)
	clAge.innerHTML = 'Наибольший возраст: ' + age;
}

function returnMaxBalance() {
    let age = Object.keys(arr).reduce((acc, curr) =>
	acc.balance ? (arr[curr].balance > acc.balance ? arr[curr] : acc) : arr[curr], 0);
	clCheck.innerHTML = 'Наибольший баланс: ' + age.balance;
}



fetch(url)
    .then(result => result.json())
    .then(result => {
        arr = result
        createTable()
        function createTable() {
            arr.forEach((e) => {
                let tableCreate = document.createElement('tr')
                tableCreate.innerHTML = `<td>${e.name} 
                                        <td>${e.company} 
                                        <td>${e.email} 
                                        <td>${e.phone}
                                        <td>${e.balance} 
                                        <td>${convertDate(e.registered)} 
                                        <td>
                                            <button class="button-del"> 
                                                Delete
                                            </button>`           
                clTable.appendChild(tableCreate)
                if (e.isActive == false) tableCreate.style.backgroundColor = "#ffe4c4"  
            })
            returnMaxAge()
            returnMaxBalance()
            gender()
            clDelet()
        }

        function clDelet() {
			document.querySelectorAll(".button-del").forEach((elem, ind) => { 
				elem.addEventListener('click', function () { 
					if (confirm("Вы хотите удалить элемент со страницы?")) { 
						let del = this.closest('tr');
                        del.parentElement.removeChild(del);
						arr.forEach((e, i) => { 
							if (ind == i) arr.splice(i, 1)
						})
						clTable.innerHTML = `<td> Имя
											<td> Компания
											<td> Email
											<td> Телефон
											<td> Баланс
											<td> Дата регистрации
											<td> Удалить`
                        // clTable.style.backgroundColor = "#ffe4c4";
						createTable() 
					}
				})
			})
		}
    })


let buttonTop = document.querySelector('.button-top')
buttonTop.addEventListener("click", () => { 
    window.scrollTo({ top: 0, behavior: 'smooth'});
})
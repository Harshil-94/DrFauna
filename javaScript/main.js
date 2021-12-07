let rightDash = document.querySelector('.right-dash');

let city = document.getElementById('city');
let btn = document.getElementById('selectBtn');

//getting the value
btn.addEventListener('click', () => {
    let val = city.value;
    get(val);
})

//fetching the file
function get(input) {
    fetch(`./json/${input}.json`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }).then(response => response.json()).then(
        (data) => {
            addItems(data);
            console.log(data);
            let arr = []
            for (let i = 0; i < data.length; i++) {
                let ele = data[i]['coords']
                arr.push([ele, data[i]['name']]);
            }
            console.log(arr);
            initMap(arr);
        });
}
var obj;
function findCenter(arr) {
    var x = 0;
    var y = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        x += element[0]['lat']
        y += element[0]['lng']
    }
    let lat = x / arr.length;
    let lng = y / arr.length;
    obj = { lat, lng }
    console.log(obj);
    return obj

}
let map;
//making the map
function initMap(array) {
    let a = findCenter(array);
    console.log(array);
    map = new google.maps.Map(document.querySelector(".left-dash"), {
        center: a,
        zoom: 11,
    });
    addMarkers(array);
}
//adding markers to the map
function addMarkers(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        marker = new google.maps.Marker({
            position: element[0],
            map: map,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 8,
                labelOrigin: { x: 0, y: 3 }
            },
            title: element[1],
            label: {
                text: `${element[1]}`,
                background: '#ffffff',
                color: '#ef233c',
                fontSize: '15px',
                fontWeight: "bold"
            }
        });
    }
}

function addItems(data) {
    let s = ''
    for (let i = 0; i < data.length; i++) {
        const ele = data[i];
        let name = ele['name']
        let add = ele['add']
        let phone = ele['phone']
        let html = `<div class="card">
                        <h3>${name}</h3>
                        <div class="hover">
                            <h4>${add}</h4>
                            <div class="phone">
                            <p id="number">${phone}</p>
                            <img src="./images/copy.png" width="25px" class="copyBtn">
                            </div>
                        </div>
                    </div>`;
        s += html;
    }
    rightDash.innerHTML = s;
    applyHover();
    getCopyBtns();
}

function applyHover() {
    let items = document.querySelectorAll('.card');
    items.forEach((e) => {
        e.addEventListener('mouseover', () => {
            let a = e.childNodes;
            let ele = a[3];
            ele.style.display = "flex";
            ele.classList.add('anim');
            e.addEventListener('mouseout', () => {
                ele.style.display = "none";
            });
        });
    });
}

function getCopyBtns() {
    let copyButtons = document.querySelectorAll('.copyBtn');
    console.log(copyButtons);
    copyButtons.forEach((e) => {
        e.addEventListener('click', () => {
            showPop();
            let ele = e.parentElement.querySelector('#number');
            navigator.clipboard.writeText(ele.innerHTML);
        });
    })
}

function showPop() {
    let pop = document.querySelector('.copyfirm')
    pop.style.display = "block";
    setTimeout(() => {
        pop.style.display = "none";
    }, 2000);
}

let closeBtn = document.querySelector('#closeBtn');
let logPage = document.querySelector('.logPage');

setTimeout(() => {
    logPage.style.display = "flex";
}, 5000);

closeBtn.addEventListener('click', () => {
    logPage.style.display = "none";
})

let login = document.querySelector('.login');
login.addEventListener('click', () => {
    logPage.style.display = "flex";
})


let signUpBtn = document.querySelector('#signUpBtn');
signUpBtn.addEventListener('click', formVal);

function formVal() {
    let formval = document.querySelector('.formVal')
    formval.style.display = "block";
    setTimeout(() => {
        formval.style.display = "none";
    }, 3000);
}

let contSubmitBtn = document.getElementById('contSubmitBtn');
contSubmitBtn.addEventListener('click', formVal)
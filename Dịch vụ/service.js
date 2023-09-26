const menuBar = document.querySelector(".menu-bar")
menuBar.addEventListener("click", function() {
    menuBar.classList.toggle("active")
    document.querySelector(".menu-items").classList.toggle("active")
})

const inputSearch = document.querySelector(".input-search")
const autoBox = document.querySelector(".autobox")
// console.log (inputSearch)
inputSearch.onkeyup = (e)=> {
    // console.log (e.target.value)
    let checkData = e.target.value
    let dataArray = []
    if(checkData) {
        dataArray=recomentList.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(checkData.toLocaleLowerCase())
        })

        dataArray=dataArray.map((data)=>{
            return data = '<li>'+data+'</li>'
        })
        
        showAdress (dataArray)
    }
    else {
        autoBox.classList.remove('active')
    }
}

function showAdress (list){
    let listData
    if (!list.length) {
        

    }

    else {
        listData = list.join('')
    }

    autoBox.innerHTML = listData
}

let recomentList =[
    "Hà Nội",
    "Hà Nam",
    "Hải Phòng",
    "Đà Nẵng",
    "Đà Lạt",
    "Quảng Bình",
    "Quảng Trị",
]



let items = document.querySelectorAll('.slider .item');
let active = 3;
function loadShow(){
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    // show after
    let stt = 0;
    for(var i = active + 1; i < items.length; i ++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
        stt = 0;
    for(var i = (active - 1); i >= 0; i --){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
let next = document.getElementById('next');
let prev = document.getElementById('prev');
next.onclick = function(){
    active = active + 1 < items.length ?  active + 1 : active;
    loadShow();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active -1 : active;
    loadShow();
}

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



//-----------------------------------number--box------

const nguoilonPlus = document.querySelector(".nguoilonPlus")
const nguoilonMinus = document.querySelector(".nguoilonMinus")
let nguoilonvalue = document.querySelector(".nguoilon span")
let i = 0

nguoilonPlus.addEventListener("click", function(){
    i = i+1
    nguoilonvalue.innerHTML = i
})
nguoilonMinus.addEventListener("click", function(){
    if(i<=0){i=0}
    else {
        i = i-1
        nguoilonvalue.innerHTML = i


    }

    nguoilonvalue.innerHTML = i
})

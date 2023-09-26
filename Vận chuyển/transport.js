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





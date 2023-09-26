const menuBar = document.querySelector(".menu-bar")
menuBar.addEventListener("click", function() {
    menuBar.classList.toggle("active")
    document.querySelector(".menu-items").classList.toggle("active")
})


const btn = document.querySelectorAll("button")
// console.log(btn)

btn.forEach(function(button){
button.addEventListener("click",function(event){
    var btnItem = event.target
    var product = btnItem.parentElement
    var productImg = product.querySelector("img").src
    // console.log(productImg)
    var productName = product.querySelector("H1").innerText
    // console.log(productName)
    var productPrice = product.querySelector("span").innerText
    // console.log(productImg,productPrice,productName)
    addcart(productPrice,productImg,productName)
})
    
})

function addcart(productPrice,productImg,productName) {
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".title")
        if (productT[i].innerHTML==productName) {
        alert("Phòng này đã được đặt rồi!")
        return
        }

    }

    var trcontent = '<tr><td style="display: flex;align-items: center;"><img style="width: 70px;" src="'+productImg+'" alt=""><span class="title">'+productName+'</span></td><td><p><span class="prices">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="0"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)

    carttotal()
    deleteCart()
}


//---------------------Tổng tiền-------------------
function carttotal (){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalH = 0
    // console.log(cartItem)
    for (var i=0;i<cartItem.length;i++){
        // console.log(i)
        var inputValue = cartItem[i].querySelector("input").value
        // console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        // console.log(productPrice)
        totalM = inputValue*productPrice*1000
        totalH = totalH + totalM
    }
    var cartTotalM = document.querySelector(".price-total span")
    var cartPrice = document.querySelector(".cart-icon span")
    cartTotalM.innerHTML = totalH.toLocaleString('de-DE')
    cartPrice.innerHTML = totalH.toLocaleString('de-DE')
    inputchange()
}


//----------------------Xóa sản phẩm------------------
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartitemX = cartDelete.parentElement.parentElement
            cartitemX.remove()
            carttotal ()
        })

    }
}


function inputchange() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change", function(){
            carttotal()
        })
    

    }
}











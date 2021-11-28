const btn = document.querySelectorAll("button")
// console.log(btn)
btn.forEach(function(button,index) {
 button.addEventListener("click", function(event){{
    var btnItem = event.target
    var product = btnItem.parentElement
    var productImg = product.querySelector("img").src
    var productName =product.querySelector("H1").innerText
    var productPrice = product.querySelector("span").innerText
    // console.log(productName)

    addCart(productPrice,productImg,productName)
 }})

})
function addCart(productPrice,productImg,productName) {
     var addtr = document.createElement("tr")
     var cartItem = document.querySelectorAll("tbody tr")
     for(var i =0; i<cartItem.length; i ++) {
        var productT = document.querySelectorAll(".title")
        if (productT[i].innerHTML == productName) {
           alert("San pham da co trong gio hang")
           return

        }
      }

     var trcontent ='<tr><td style="display: flex; align-items: center;"><img style="width: 70px" src="'+productImg+'" alt=""><span class ="title">'+productName+'</span></td> <td><p><span class = "prices">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px; outline: none; ;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class = "delete">Xoa</td></tr>'
     addtr.innerHTML =trcontent
     var carTable = document.querySelector("tbody")
     carTable.append(addtr)
     carttotal()
}
//------------------------Delete------------
// function deleteCart() {
//    for(var i =0; i<cartItem.length; i ++) {
//       var productT = document.querySelectorAll(".dele")
//       if(productT[i].innerHTML == productName) {
//          alert
//       }
// }
//------------------------total price------------
function carttotal() {
 
   var cartItem = document.querySelectorAll("tbody tr")
   var totalC = 0
   
   for(var i =0; i<cartItem.length; i ++) {
       var inputValue = cartItem[i].querySelector("input").value
      //  console.log(inputValue)
       var productPrice = cartItem[i].querySelector(".prices").innerHTML
      //  console.log(productPrice)
       totalA = inputValue * productPrice*1000
       //totalB = totalA.toLocaleString('de-DE')
      //  console.log(totalB)
       totalC = totalC + totalA
      //  totalD = totalC.toLocaleString('de-DE')

   }
   var cartTotalA = document.querySelector('.price-total span')
   var caryPrice = document.querySelector('.cart-icon span')
   cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
   caryPrice.innerHTML = totalC.toLocaleString('de-DE')
   // console.log(cartTotalA)
}
// ------------------chuyen--------------
const cartbtn = document.querySelector(".fa-times-circle")
const cartshow =  document.querySelector(".fa-shopping-cart")
cartshow.addEventListener("click",function(){

   document.querySelector(".cart").style.right="0"
})

cartbtn.addEventListener("click",function(){

   document.querySelector(".cart").style.right="-100%"
})
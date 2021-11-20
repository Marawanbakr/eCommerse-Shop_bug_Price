/* worring ... if you wanna to acsess on elemnts but the elemnt have more class means multiple calss 
  here probirty e.target.className will not working becuse you must the elemnt have a just one class
  instedof the elemnt have a more calss use **e.target.closest('.your class') or e.target.matches('.your class') **
*/
document.addEventListener('click', (e) => {
  // to open serch box
  if (e.target.closest('.mainSerch')) {
    document.querySelector('.box-serch').style = [`visibility:visible`]
    addEventListener('scroll', () => {
      console.log('yse')
      document.querySelector('.box-serch').style = [`visibility:hidden`]
    })
  }
  // to open shop list in bars link
  if (e.target.className === 'shop') {
    document.querySelector('li.shop ul').classList.toggle('active')
    // change color to main color
    document.querySelector('a.shop').classList.toggle('active-color')
    // rotate icon angle down
    document
      .querySelector('li.shop a.shop .fa-angle-down')
      .classList.toggle('rotate')
    // to open blog list in bars link
  } else if (e.target.className === 'blog') {
    document.querySelector('li.blog ul').classList.toggle('active')
    // change color to main color
    document.querySelector('a.blog').classList.toggle('active-color')
    // rotate icon blog down
    document
      .querySelector('li.blog a.blog .fa-angle-down')
      .classList.toggle('rotate')
    // to open bars list at mopile media
  } else if (e.target.closest('.fa-bars')) {
    document.querySelector('.state-bars ul').classList.toggle('active')
    // to open buutn left at fixed in padge
  } else if (
    e.target.className === 'left-fixed' ||
    e.target.className === 'click-left'
  ) {
    document.querySelector('.left-fixed').classList.toggle('left-fixed-active')
    // to open categories at nav bar
  } else if (e.target.closest('.categories-links')) {
    document.querySelector('.II-ul').classList.toggle('active')
    // to open megamenu at menu
    // To open mega mune and make rotate to icons
  } else if (e.target.closest('.menu')) {
    document.querySelector('.megamenu').classList.toggle('active')
    document.querySelector('.menu i').classList.toggle('rotate')
  } else if (e.target.closest('.up-to')) {
    window.scroll(0, 100)
    // show hover at shopping-bag icons
  } else if (e.target.closest('.fa-shopping-bag')) {
    document.querySelector('.fa-shopping-bag .card').classList.toggle('active')
  }
})
// function changePosition to make the nav bar absolute
changePosition = () => {
  if (window.scrollY >= 190) {
    document.querySelector('nav').style = [
      `
        position: fixed;
        width: 100%;
        z-index: 9;
        top: 0;
        background-color: #fff;
        box-shadow: 0px 0px 10px rgb(0 0 0 / 30%);
        transform :translateY(100px);
        top:-100px;
        `,
    ]
    // to change color
    document
      .querySelectorAll('nav ul.links li a')
      .forEach((el) => (el.style.color = 'black'))
    document.querySelector('nav .container .categories  ul.I-ul ').style = [
      `
      display:none;
      opacity:0;
    `,
    ]
  } else {
    // to change reset all data i make it above
    document.querySelector('nav').style = [`position: relative;`]
    document
      .querySelectorAll('nav ul.links li a')
      .forEach((el) => (el.style.color = '#fff'))
    document.querySelector('nav .container .categories  ul.I-ul ').style = [
      `
      display:block;
      opacity:9;
    `,
    ]
  }
  hoverTocategories('nav .container .categories  ul.I-ul ')
}

// function to show categories when i make hover
/* you can pass the classname as Parameters */
hoverTocategories = (className) => {
  document.addEventListener('mouseover', (e) => {
    if (e.target.className === 'hover') {
      document.querySelector(className).style = [
        `
        display:block;
        opacity:9;    `,
      ]
      console.log('yse')
    } else false
  })
}
addEventListener('scroll', changePosition)

// function hover to remove box item from card
addEventListener('mouseover', (e) => {
  if (e.target.closest('.box .info button ')) {
    // get all button
    let all_Btn_Click_To_Delet_Box = document.querySelectorAll(
      '.card .box .info button '
    )
    // for loop to all box to remove it
    all_Btn_Click_To_Delet_Box.forEach((item) => {
      item.onclick = () => {
        // function to calculation box lenght
        itemsLenght('.card .box')
        // remove box when i make clock event
        document.querySelector('.fa-shopping-bag .card .box').remove()
        spliceAllPrice()
      }
    })
  }
})
// ////////////////////////////// this is my bug ////////////////////////////
function spliceAllPrice() {
  addEventListener('click', (e) => {
    if (e.target.closest('.box .info button ')) {
      document.querySelectorAll('.box .price').forEach((item) => {
        // store price item one and item tow
        let priceOneAndTow = item.innerHTML
        // revers price item one and tow from string to  number
        priceOneAndTowSplice = parseInt(
          priceOneAndTow.split('').splice(1).join('')
        )
        let totalPrice = document.querySelector('.total-price').textContent
        totalPriceSplite = parseInt(totalPrice.split('').splice(1).join(''))
        document.querySelector('.total-price').innerHTML =
          totalPriceSplite - priceOneAndTowSplice
      })
    }
  })
}
/////////////////////////////////////////////////////////////////////////
// functiton button scroll to top
scrollToUp = () => {
  if (window.scrollY >= 800) {
    document.querySelector('.scroll-to-up').style.display = 'block'
  } else document.querySelector('.scroll-to-up').style.display = 'none'
}
addEventListener('scroll', scrollToUp)
// to calculation leangth items card
itemsLenght = (className) => {
  let counter = document.querySelectorAll(className)
  for (i = 0; i < counter.length; i++) {
    console.log(counter[i])
    document.querySelector('.leangth-items').innerHTML = [i]
  }
}

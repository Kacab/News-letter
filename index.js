const but =  document.querySelector("#But")
const gmail = document.querySelector('#email')
const main = document.querySelector('.main')
const span = document.querySelector('#span')
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const but2 =  document.querySelector('#But2')
const thanks = document.querySelector('.thanks')
let workable
let notWorakble
function getEmail(){
    const email =  document.createElement('span')
    email.innerText = gmail.value
    email.style.color = 'red'
    span.appendChild(email)
}

 but.disabled  = true
function validateGmail(){
  const checkEmail = gmail.value
 
  if(emailRegex.test(checkEmail)){
    console.log('valid')
    // workable = true
    but.disabled = false
  }else{
    // notWorakble = false
    but.disabled = true
  }

}

//  function validate2(){
//      if(workable){
//         but.disabled = false
//      }
//  }
//   validate2()

gmail.addEventListener('input',validateGmail)

but2.addEventListener('click',function(){
    thanks.remove()
    window.location.href = 'index.html'
})

but.addEventListener('click',function(){
    thanks.style.display = 'block' 
    thanks.style.display = 'flex'
    main.remove()

 getEmail()
//  validateGmail()
//    validate2()

})
const but =  document.querySelector("#But")
const main = document.querySelector('.main')

const but2 =  document.querySelector('#But2')
const thanks = document.querySelector('.thanks')


but2.addEventListener('click',function(){
    thanks.remove()
    window.location.href = 'index.html'
})
but.addEventListener('click',function(){
    thanks.style.display = 'block' 
    thanks.style.display = 'flex'
    main.remove()
   

})
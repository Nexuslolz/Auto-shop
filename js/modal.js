const modalBtn = document.querySelector('.more');
const modal = document.querySelector('.modal');

modalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden')
})

modal.addEventListener('click', (event) => {
    const target = event.target

    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        modal.classList.add('hidden')
    } else if (target.classList.contains('modal__button')){
        modal.classList.add('hidden')
        alert('Данные сохранены')
        setTimeout(function(){
            form.reset()
        },10) 
        
        
    }
})


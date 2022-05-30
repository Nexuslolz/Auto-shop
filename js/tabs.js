const tabsHandlerElems = document.querySelectorAll('[data-tabs-handler]');
const tabsContentElems = document.querySelectorAll('[data-tabs-field]');

const headText = document.querySelectorAll('.section__title.design__title');
// const tabHandlerElem = document.querySelector('[data-tabs-handler]');


for (let btn of tabsHandlerElems) {
    btn.addEventListener('click', (event) => {
        tabsHandlerElems.forEach(item => item.classList.remove('design-list__item_active'))
        btn.classList.add('design-list__item_active')

        tabsContentElems.forEach(content => {
            if (content.dataset.tabsField === btn.dataset.tabsHandler) {
                content.classList.remove('hidden')


            } else {
                content.classList.add('hidden')

            }
        })
    })
}



        // headText.forEach(head => head.classList.remove('hidden'))
        // headText.classList.add('hidden')


        // headText.forEach((bet, index) => {
        //     bet.addEventListener('click', () => {
        //         headText.forEach((head, idx) => {
        //             if (head === tabHandlerElem) {
        //                 head[idx].classList.toggle('hidden')
        //             } else {
        //                 head[idx].classList.add('hidden')
        //             }
        //         })
        //     })

        // })




// if (tabsContentElems.classList === 'hidden') {
//     headText.classList.toggle('hidden')
// } else {
//     headText.classList.remove('hidden')
// }




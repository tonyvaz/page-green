leftNavigation = document.querySelector('.section__menu__left')
leftNavigationButtons = document.querySelectorAll('.section__menu__left__item')
allSections = document.querySelectorAll('.section__menu')


leftNavigation.addEventListener('click',function(e){
    // console.log(e.target)
    if(e.target.classList.contains('section__menu__left__item')){
        // console.log(e.target.innerText)
        section = e.target
        textSection = e.target.innerText
        leftNavigationButtons.forEach(button => {
            button.classList.remove('section__menu__left__item--active')
        });
        if (textSection == 'SEASONAL') {
            allSections[0].scrollIntoView({behavior:'smooth',block:'end'})
            if(section.classList.contains('section__menu__left__item--active') == false){
                section.classList.add('section__menu__left__item--active')
            }
        }
        else if(textSection == 'WARM BOWLS'){
            allSections[1].scrollIntoView({behavior:'smooth',block:'end'})
            if(section.classList.contains('section__menu__left__item--active') == false){
                section.classList.add('section__menu__left__item--active')
            }
        }
        else if(textSection == 'SALADS'){
            allSections[2].scrollIntoView({behavior:'smooth',block:'end'})
            if(section.classList.contains('section__menu__left__item--active') == false){
                section.classList.add('section__menu__left__item--active')
            }
        }
        else if(textSection == 'PLATES'){
            allSections[3].scrollIntoView({behavior:'smooth',block:'end'})
            if(section.classList.contains('section__menu__left__item--active') == false){
                section.classList.add('section__menu__left__item--active')
            }
        }
        else if(textSection == 'SIDES'){
            allSections[4].scrollIntoView({behavior:'smooth',block:'end'})
            if(section.classList.contains('section__menu__left__item--active') == false){
                section.classList.add('section__menu__left__item--active')
            }
        }
    }

})


//Create example of an Intersection Observer

const changeItemActive = (entries, observer) => {
    const leftMenuItems = document.querySelectorAll('.section__menu__left__item')

    leftMenuItems.forEach((item)=> {
        item.classList.remove('section__menu__left__item--active')
    })

    entries.forEach((entry) => {
        if(entry.isIntersecting){
            currentSection = entry.target.classList[entry.target.classList.length-1]
            if(currentSection == 'seasonal'){
                leftMenuItems[0].classList.add('section__menu__left__item--active')
            }
            else if(currentSection == 'bowls'){
                leftMenuItems[1].classList.add('section__menu__left__item--active')
            }
            else if(currentSection == 'salads'){
                leftMenuItems[2].classList.add('section__menu__left__item--active')
            }
            else if(currentSection == 'plates'){
                leftMenuItems[3].classList.add('section__menu__left__item--active')
            }
            else if(currentSection == 'sides'){
                leftMenuItems[4].classList.add('section__menu__left__item--active')
            }

            //console.log(entry.target.classList[entry.target.classList.length-1]) sides
        }
    })
    
}

const options = {threshold:0.7}

let seasonalObserver = new IntersectionObserver(changeItemActive , options)
let sidesObserver = new IntersectionObserver(changeItemActive , options)
let bowlsObserver = new IntersectionObserver(changeItemActive , options)
let platesObserver = new IntersectionObserver(changeItemActive , options)
let saladsObserver = new IntersectionObserver(changeItemActive , options)

seasonalObserver.observe(document.querySelector('.section__menu.seasonal'))
seasonalObserver.observe(document.querySelector('.section__menu.sides'))
seasonalObserver.observe(document.querySelector('.section__menu.bowls'))
seasonalObserver.observe(document.querySelector('.section__menu.plates'))
seasonalObserver.observe(document.querySelector('.section__menu.salads'))
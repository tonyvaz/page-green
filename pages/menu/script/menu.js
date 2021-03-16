leftNavigation = document.querySelector('.section__menu__left')
leftNavigationButtons = document.querySelectorAll('.section__menu__left__item')
allSections = document.querySelectorAll('.section__menu')

leftNavigation.addEventListener('click',function(e){
    // console.log(e.target)
    if(e.target.classList.contains('section__menu__left__item')){
        // console.log(e.target.innerText)
        section = e.target
        textSection = e.target.innerText
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
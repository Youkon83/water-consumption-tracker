const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, i) => {
    cup.addEventListener('click', () => highlightCups(i))
})

function highlightCups(i){
    if(smallCups[i].classList.contains('fill') && !smallCups[i].nextElementSibling.classList.contains('fill')){
        i--
    }
    smallCups.forEach((cup, index) => {
        if(index <= i){
            cup.classList.add('fill')
        }
        else{
            cup.classList.remove('fill')
        }
    })

    updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.cup-small.fill').length
    const totalCups = smallCups.length

    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }
    else{
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    }
    else{
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}
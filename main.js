const exercise = document.createElement('h2')
const footer = document.querySelector('footer')
const number = []
const exercises1 = ["Max Push-Ups", "rest", "Max pull-ups", "rest", "10 x push-ups", "5 x hanging abs", "rest", "5 x wide pull-ups", "5 x jump squats", "rest", "8 x dips", "20 x side abs", "5 x close grip pull-ups", "15 x leg raises","rest", "5 x diamond push-ups", "5 x chin-ups", "second round", "10 x push-ups", "5 x hanging abs", "rest", "5 x wide pull-ups", "5 x jump squats", "rest", "8 x dips", "20 x side abs", "5 x close grip pull-ups", "15 x leg raises","rest", "5 x diamond push-ups", "5 x chin-ups", "third round", "10 x push-ups", "5 x hanging abs", "rest", "5 x wide pull-ups", "5 x jump squats", "rest", "8 x dips", "20 x side abs", "5 x close grip pull-ups", "15 x leg raises","rest", "5 x diamond push-ups", "5 x chin-ups", "fourth round", "10 x push-ups", "20 x abs", "rest", "5 x pull-ups", "20 x abs sides", "8 x dips", "16 x toe to hand", "5 x chin-ups", "5 x diamond push-ups(Or any extra)","back"]

const exercises2 = ["5 x Explosive push-ups", "rest", "5 x chin-ups", "rest", "5 x hanging abs", "5 x side tiger push-ups", "5 x pull-ups", "rest", "20 x leg raises", "8 x dips", "rest", "5 x close grip chin-ups", "3 x diamond push-ups","3 x wide push ups", "second round", "5 x Explosive push-ups", "rest", "5 x chin-ups", "rest", "5 x hanging abs", "5 x side tiger push-ups", "5 x pull-ups", "rest", "20 x leg raises", "8 x dips", "rest", "5 x close grip chin-ups", "3 x diamond push-ups","3 x wide push ups", "third round", "5 x Explosive push-ups", "rest", "5 x chin-ups", "rest", "5 x hanging abs", "5 x side tiger push-ups", "5 x pull-ups", "rest", "20 x leg raises", "8 x dips", "rest", "5 x close grip chin-ups", "3 x diamond push-ups","3 x wide push ups", "fourth round", "10 x push-ups", "20 x abs", "rest", "5 x pull-ups", "20 x abs sides", "8 x dips", "16 x toe to hand", "5 x chin-ups", "5 x diamond push-ups(Or any extra)", "back" ]

const exercises3 = ["Max Push-Ups", "rest", "Max chin-ups", "rest", "12 x pull-ups", "5 x hanging abs", "rest", "5 x pull-ups", "5 x jump squats", "rest", "8 x dips", "20 x side abs", "5 x close grip pull-ups", "15 x leg raises","rest", "5 x diamond push-ups", "5 x chin-ups", "second round", "12 x pull-ups", "5 x hanging abs", "rest", "5 x pull-ups", "5 x jump squats", "rest", "8 x dips", "20 x side abs", "5 x close grip pull-ups", "15 x leg raises","rest", "6 x wide push-ups", "5 x chin-ups", "third round", "12 x pull-ups", "5 x hanging abs", "rest", "5 x pull-ups", "5 x jump squats", "rest", "8 x dips", "20 x side abs", "5 x close grip pull-ups", "15 x leg raises","rest", "6 x wide push-ups", "5 x chin-ups", "fourth round", "10 x push-ups", "20 x abs", "rest", "5 x pull-ups", "20 x abs sides", "8 x dips", "16 x toe to hand", "5 x chin-ups", "5 x diamond push-ups(Or any extra)", "back" ]

const start = document.querySelector('#start1')
start.addEventListener('click', ()=>{
    clearPage()
    createExercise1()
})

const start2 = document.querySelector('#start2')
start2.addEventListener('click', ()=>{
    clearPage()
    createExercise2()
})

const start3 = document.querySelector('#start3')
start3.addEventListener('click', ()=>{
    clearPage()
    createExercise3()
})

function clearPage(){
    footer.innerHTML = ""
}

function createExercise1(){
    const currentExercise = document.createElement('h2')
    
    
    footer.appendChild(currentExercise)
    const finish = document.createElement('button')
    currentExercise.innerHTML = exercises1[number.length]
    finish.innerHTML = "NEXT"
    
    finish.addEventListener('click', ()=>{
        number.push('1')
        currentExercise.innerHTML = exercises1[number.length]
        if(exercises1[number.length]=="rest"){
            console.log('GOGOGO')
        } else if(exercises1[number.length]=="back"){
        clearPage()
        const done = document.createElement('h2')
        done.innerHTML = "Muthaphrikin' Done!"
        footer.appendChild(done)
        }
    })
    footer.appendChild(finish)
}

function createExercise2(){
    const currentExercise = document.createElement('h2')
    
    
    footer.appendChild(currentExercise)
    const finish = document.createElement('button')
    currentExercise.innerHTML = exercises2[number.length]
    finish.innerHTML = "NEXT"
    
    finish.addEventListener('click', ()=>{
        number.push('1')
        currentExercise.innerHTML = exercises2[number.length]
        if(exercises2[number.length]=="rest"){
            console.log('GOGOGO')
        } else if(exercises2[number.length]=="back"){
        clearPage()
        const done = document.createElement('h2')
        done.innerHTML = "Muthaphrikin' Done!"
        footer.appendChild(done)
        }
    })
    footer.appendChild(finish)
}

function createExercise3(){
    const currentExercise = document.createElement('h2')
    
    
    footer.appendChild(currentExercise)
    const finish = document.createElement('button')
    currentExercise.innerHTML = exercises3[number.length]
    finish.innerHTML = "NEXT"
    
    finish.addEventListener('click', ()=>{
        number.push('1')
        currentExercise.innerHTML = exercises3[number.length]
        if(exercises3[number.length]=="rest"){
            console.log('GOGOGO')
        } else if(exercises3[number.length]=="back"){
        clearPage()
        const done = document.createElement('h2')
        done.innerHTML = "Muthaphrikin' Done!"
        footer.appendChild(done)
        }
    })
    footer.appendChild(finish)
}
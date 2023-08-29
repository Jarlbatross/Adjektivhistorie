// Model

let app = document.getElementById('app');
let adjective = '___'
let noun = '___'
let verb = '___'
let secondNoun = '___'


//View

updateView()
function updateView() {
    app.innerHTML = /*html*/`
        <div id='story'>Once there was a ${adjective} ${noun} that ${verb} in the ${secondNoun} and great things happened. The end.</div>
        <div class='words'>
            <div class='innerWord' onclick= chooseAdjective(this)>red</div>
            <div class='innerWord' onclick= chooseAdjective(this)>green</div>
            <div class='innerWord' onclick= chooseNoun(this)>cat</div>
            <div class='innerWord' onclick= chooseNoun(this)>man</div>
            <div class='innerWord' onclick= chooseVerb(this)>stared</div>
            <div class='innerWord' onclick= chooseVerb(this)>jumped</div>
            <div class='innerWord' onclick= chooseSecondNoun(this)>pool</div>
            <div class='innerWord' onclick= chooseSecondNoun(this)>wall</div>
        </div>
    `
}

//Controller

function chooseAdjective(choice) { 
    adjective = choice.innerHTML
    updateView()
}


function chooseNoun(choice) {
    noun = choice.innerHTML
    updateView()
 }

function chooseVerb(choice) { 
    verb = choice.innerHTML
    updateView()
}

function chooseSecondNoun(choice) {
    secondNoun = choice.innerHTML
    updateView()
}
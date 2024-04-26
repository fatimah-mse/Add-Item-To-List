window.alert('This Page Display Basic Skills that Front End Developers must Have')
const name = window.prompt('Write Your Name Please!')
window.alert('Hello ' + name + '!')

let new_skill = document.getElementById('new-skill');
let list = document.getElementById('skills-list')
let btn = document.getElementById('hide-btn')

function Alert (type , msg) {
    let bs_class = (type == 'SUCCESS') ? 'alert-success' : 'alert-danger'
    let element = document.createElement('div')
    
    element.innerHTML=`<div class="alert ${bs_class} alert-dismissible fade show custom-alert" role="alert" 
    style="top:10px; position: fixed; right: 18px; left: 18px; cursive; padding-bottom: 10px;">
    <strong class="me-3 fs-5"> ${msg} </strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`

    document.body.append(element);
}

function hide() {
    if (btn.innerHTML == 'Show Skills') {
        list.style.display = 'block'
        btn.innerHTML ='Hide Skills'
    }
    else {
        list.style.display = 'none'
        btn.innerHTML ='Show Skills'
    }
}
function add() {
    if (new_skill.value =='') {
        Alert('ERROR', 'To Save Changes You Have to  Write New Skill in the Filed')
    }
    else {
        list.innerHTML += 
        `<li class="text-uppercase fs-4 fw-bold">
            <i class="fa-solid fa-face-grin-hearts text-success me-2"></i>${new_skill.value}
        </li>`
        new_skill.value = ''
        Alert('SUCCESS', 'Save Changes')
    }
}

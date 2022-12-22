document.getElementById('popup1').style.display = "none"
document.getElementById('popup2').style.display = "none"

function popupopen() {
    document.getElementById('popup1').style.display = "block"
    document.getElementById('container').style.filter = "blur(5px)"
}
function popupclose() {
    document.getElementById('popup1').style.display = "none"
    document.getElementById('container').style.filter = "blur(0px)"
}

const array = [];
let itemcount=0;
function addcard() {
    console.log("error");
    // const obj={
    //     id:Date.now(),
    //     taskname:inputvalue
    // }
    // console.log(obj);
    // array.push(obj);
    a = array.length;
    array.push(a);
    document.getElementById('popup1').style.display = "none"
    document.getElementById('container').style.filter = "blur(0px)"
    document.getElementById('subhead').style.visibility ="hidden"
    display = document.getElementById('cards-list')

    let inputvalue = document.getElementById('text-input').value

    let createitem = document.createElement('div')
    createitem.setAttribute('class', 'item-1')
    createitem.style.width = "200px";
    // createitem.style.boxShadow=""

    let createddiv = document.createElement('div')
    createddiv.setAttribute('id', 'item-list')

    createheading = document.createElement('h3')
    createheading.setAttribute('id', 'heading')
    createheading.style.height = "25px";

    createhr = document.createElement('hr')
    
    createbodydiv=document.createElement("div")
    createbodydiv.setAttribute("id","tasks")
    createbodydiv.style.height="100px"

    createicondiv = document.createElement('div')
    createicondiv.setAttribute('class', 'delete-add')

    createbuttondelete = document.createElement('i')
    createbuttondelete.setAttribute('id', 'delete-icon')
    createbuttondelete.setAttribute('class', 'fa-solid fa-trash-can')

    let createbuttonplus = document.createElement('i')
    createbuttonplus.setAttribute('id', 'below-plus-icon')
    createbuttonplus.setAttribute('class', 'fa-solid fa-circle-plus')

    display.appendChild(createitem)

    createitem.appendChild(createddiv)
    createitem.appendChild(createicondiv)

    createitem.appendChild(createheading)
    createitem.appendChild(createhr)

    createitem.appendChild(createbodydiv)
    createitem.appendChild(createicondiv)
    
    createicondiv.appendChild(createbuttondelete)
    createicondiv.appendChild(createbuttonplus)

    createheading.textContent = inputvalue
    createheading.style.color="brown"
    createheading.style.texttransform="captalize"

    createbuttondelete.addEventListener('click', function removeCard() {
        console.log('error');
        createitem.style.display = "none"
    })

    createbuttonplus.addEventListener('click', function addpopup() {
        document.getElementById('popup1').style.display = "none"
        document.getElementById('popup2').style.display = "block"
        document.getElementById('container').style.filter = "blur(5px)"
        // document.getElementById('cards-container').style.filter="blur(5px)"
    })
    createbuttondelete.addEventListener('click',function closepopup(){
        document.getElementById('popup2').style.display = "none"
    })


    console.log(array[array.length-1]);
}
//code for tasks in a card...

document.getElementById('add-btn2').addEventListener('click', function addpara() {
    document.getElementById('popup2').style.display = "none"
    document.getElementById('container').style.filter = "blur(0px)"
    let paragraph = document.createElement('p')
    paragraph.classList.add('para-styling')
    paragraph.innerText = document.getElementById('text-input2').value
    createbodydiv.appendChild(paragraph);
    document.getElementById('text-input2').value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through"
        paragraph.style.color = "red"
    })
    paragraph.addEventListener('dblclick',function(){
        createbodydiv.removeChild(paragraph);
    })
});


































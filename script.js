const presidents = document.querySelectorAll('.president');
const equipSlot = document.querySelector('.equip-slot');
const equip_president = document.querySelector('.equip-president');

function drag_president(event){
    event.dataTransfer.setData('text/plain',event.target.id);
    console.log(event.target.id);
}
presidents.forEach((president)=>{
    president.addEventListener('dragstart',drag_president);
});

function dragOverPresident (event) {
    event.preventDefault();
}

function drop_president(event){
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    const image = document.querySelector('#' + id);
    equip_president.src = image.src;
}

equipSlot.addEventListener('dragover',dragOverPresident);
equipSlot.addEventListener('drop',drop_president);

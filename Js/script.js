const selectButton = document.getElementsByClassName('btn');

for (const button of selectButton) {
    button.addEventListener('click', function (event) {
        const playerName = event.target.parentNode.firstElementChild.innerText;
        const playerDisable = event.target;
        this.disabled = true;
        // create condition
        if(document.getElementsByTagName('li').length == '5'){
            alert(`sorry you can't select more than 5 players`);
            return;
        }
        if(this.disabled = true && document.getElementsByTagName('li').length == document.getElementsByTagName('li').length){
            playerDisable.style.backgroundColor = 'gray';
        }else{
            playerDisable.style.backgroundColor = '#015196';
        }
        // create li tag
        const unorderList = document.getElementById('unorder-list');
        const unorderListInner = document.createElement('li');
        // create class name
        unorderListInner.classList.add('font-bold', 'text-liColor', 'py-2');
        unorderList.appendChild(unorderListInner)
        // create span tag inner li tag
        const spanLi = document.createElement('span');
        spanLi.classList.add('pl-3', 'font-normal', 'text-white'); // add class name in span tag
        spanLi.innerText = playerName;
        unorderListInner.appendChild(spanLi);
    })
}
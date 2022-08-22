const selectButton = document.getElementsByClassName('btn');

for (const button of selectButton) {
    button.addEventListener('click', function (event) {
        const playerName = event.target.parentNode.firstElementChild.innerText;
        const playerDisable = event.target;
        // create condition
        if (document.getElementsByTagName('li').length == '5') {
            alert(`sorry you can't select more than 5 players`);
            return;
        }
        if (document.getElementsByTagName('li').length <= 5) {
            this.disabled = true;
            playerDisable.style.backgroundColor = 'gray';
        } else {
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
// common function to get input value
function getInputValueById(elementId) {
    const input = document.getElementById(elementId);
    const inputString = input.value;
    const inputNumber = parseInt(inputString);
    return inputNumber;
}

document.getElementById('Calculate').addEventListener('click', function () {
    const input = getInputValueById('input1');
    const liLength = document.getElementsByTagName('li').length;
    const playerCost = liLength * input;
    const playerCostTag = document.getElementById('playerCost');
    if(isNaN(input)){
        alert('Please enter a valid number!');
        return playerCostTag.innerText = '0';
    }else{
        playerCostTag.innerText = playerCost;
    }
})

document.getElementById('total').addEventListener('click', function () {
    const playerCostTag = document.getElementById('playerCost');
    const playerCostTagString = playerCostTag.innerText;
    const playerCostTagNumber = parseInt(playerCostTagString);
    const manager = getInputValueById('input2');
    const cotch = getInputValueById('input3');
    const input = document.getElementById('input1');
    const inputValue = input.value;
    if(inputValue == ''){
        return alert('hahfa')
    }
    const totalCost = cotch + manager + playerCostTagNumber;
    const totalCostTag = document.getElementById('totalCost');
    if(isNaN(manager && cotch)){
        alert('please enter a valid number')
        return totalCostTag.innerText = '0';
    }else{
        totalCostTag.innerText = totalCost;
    }
})
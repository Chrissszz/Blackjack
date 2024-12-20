// Select draggable chips and the drop zone
const chips = document.querySelectorAll('.chip');
const dropZone = document.getElementById('dropZone');
const textZone = document.querySelector('.dropZoneText');
const chipsArea = document.querySelector('.chips')
let chipValueBetNumber = document.querySelector(".chipValueBetNumber")
let betNumberReset = document.querySelector('.bet')
let wentAllIn = 0
// Add drag events to chips
chips.forEach(chip => {
    chip.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
        chip.style.transform = 'scale(1.2)';
    });

    chip.addEventListener('dragend', () => {
        chip.style.transform = 'scale(1)';
    });
});

// Add drag events to drop zone
dropZone.addEventListener('dragover', (event) => {
    event.preventDefault(); // Required to allow dropping
    dropZone.classList.add('dragover');
});

dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
});
dropZone.addEventListener('drop', (event) => {
    event.preventDefault();
    dropZone.classList.remove('dragover');
    textZone.innerHTML = "";
    // Get the dragged element ID and append it to the drop zone
    const chipId = event.dataTransfer.getData('text/plain');
    const chip = document.getElementById(chipId);
    
    
    if (chip) {
        dropZone.appendChild(chip);
        checkChipValue(chipId)
    }
    
});

chipsArea.addEventListener('dragover', (event) => {
    event.preventDefault(); // Required to allow dropping
    chipsArea.classList.add('dragover');
});

chipsArea.addEventListener('dragleave', () => {
    chipsArea.classList.remove('dragover');
});


chipsArea.addEventListener('drop', (event) => {
    event.preventDefault();
    chipsArea.classList.remove('dragover');
    textZone.innerHTML = "";
    // Get the dragged element ID and append it to the drop zone
    const chipId = event.dataTransfer.getData('text/plain');
    const chip = document.getElementById(chipId);
    
    
    if (chip) {
        chipsArea.appendChild(chip);
        checkChipValueReturn(chipId)
    }
});

function checkChipValue(chipId) {
    let chipValue = 0;

    if (chipId === 'chip2') {
        chipValue = 5;
    } else if (chipId === 'chip3') {
        chipValue = 10;
    } else if (chipId === 'chip4') {
        chipValue = 50;
    } else if (chipId === 'chip5') {
        chipValue = 100;
    }else if (chipId === 'chip6') {
        chipValue = 500;
    }

    // Update the chipValueBetTotal div
    if (chipValueBetNumber) {
        const currentTotal = parseInt(chipValueBetNumber.innerHTML) || 0; // Parse current value or default to 0
        const newTotal = currentTotal + chipValue; // Add new chip value
        chipValueBetNumber.innerHTML = newTotal; // Update the div content
    } else {   

    }
}
//If chip is taken out
function checkChipValueReturn(chipId) {
    let chipValue = 0;

    if (chipId === 'chip2') {
        chipValue = 5;
    } else if (chipId === 'chip3') {
        chipValue = 10;
    } else if (chipId === 'chip4') {
        chipValue = 50;
    } else if (chipId === 'chip5') {
        chipValue = 100;
    }else if (chipId === 'chip6') {
        chipValue = 500;
    }

    // Update the chipValueBetTotal div
    if (chipValueBetNumber) {
        const currentTotal = parseInt(chipValueBetNumber.innerHTML) || 0; // Parse current value or default to 0
        const newTotal = Math.max(0, currentTotal - chipValue) // Add new chip value
        chipValueBetNumber.innerHTML = newTotal; // Update the div content
    } else {   
        console.error('Element not found.');
    }
}
function allIn() {
    if(wentAllIn === 0){
        chipValueBetNumber.innerHTML = bankrollSelector.innerHTML;
        bankrollSelector.innerHTML = "0"
        wentAllIn += 1
    }else{
        bankrollSelector.innerHTML = chipValueBetNumber.innerHTML;
        chipValueBetNumber.innerHTML = "0"
        wentAllIn = 0
    }
    console.log(chipValueBetNumber)
    console.log(bankrollSelector)
    console.log(wentAllIn)
}


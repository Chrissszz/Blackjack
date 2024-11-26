
// Select draggable chips and the drop zone
const chips = document.querySelectorAll('.chip');
const dropZone = document.getElementById('dropZone');
const textZone = document.querySelector('.dropZoneText');
const chipsArea = document.querySelector('.chips')
let chipValueBetTotal = document.querySelector(".chipValueBet")
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
        console.log(chipId)
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
    console.log(chipId)
    
    if (chip) {
        chipsArea.appendChild(chip);
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
    if (chipValueBetTotal) {
        const currentTotal = parseInt(chipValueBetTotal.innerHTML) || 0; // Parse current value or default to 0
        const newTotal = currentTotal + chipValue; // Add new chip value
        chipValueBetTotal.innerHTML = newTotal; // Update the div content
    } else {
        console.error('chipValueBetTotal element not found.');
    }
}


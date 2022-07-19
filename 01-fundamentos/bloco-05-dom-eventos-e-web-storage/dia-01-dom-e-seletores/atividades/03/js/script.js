document.body.style.height = '100vh';
document.body.style.backgroundColor = '#263238';

let title = document.querySelector('#header-container');
title.style.cssText += 'background-color: #37474F; width: 100%; padding: 10px 0; margin: 0;';

let emergency = document.querySelectorAll('.emergency-tasks, .no-emergency-tasks');
for (let element of emergency) {
    element.style.backgroundColor = '#455A64';
}

let emergencyTitle = document.querySelectorAll('.emergency-tasks h3');
for (let element of emergencyTitle) {
    element.style.backgroundColor = '#B71C1C';
}

let noEmergencyTitle = document.querySelectorAll('.no-emergency-tasks h3');
for (let element of noEmergencyTitle) {
    element.style.backgroundColor = '#1B5E20';
}

let footer = document.getElementById('footer-container');
footer.style.cssText += 'background-color: #37474F;position: fixed; bottom: 0; left: 0; right:0';

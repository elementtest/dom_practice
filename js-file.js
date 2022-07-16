const FuBody = document.body;

const firstPara = document.createElement('p');
FuBody.append(firstPara);
firstPara.style.color = 'red';
firstPara.textContent = 'Hey I\'m red';

const aechuthree = document.createElement('h3');
FuBody.append(aechuthree);
aechuthree.style.color = 'blue';
aechuthree.textContent = 'I\'m a blue h3';

const dumAssDiv = document.createElement('div');
FuBody.appendChild(dumAssDiv);
dumAssDiv.style.background = 'pink';
dumAssDiv.style.border = 'thick solid black';

const numbaaOneAechuu = document.createElement('h3');
dumAssDiv.append(numbaaOneAechuu);
numbaaOneAechuu.textContent = 'I\'m in a div';


const secondPara = document.createElement('p');
dumAssDiv.appendChild(secondPara);
secondPara.textContent = 'ME TOO';

//MISTAKE did NOT check to make sure the references were right
//MISTAKE create a variable referencing document body see line 1!



/* START EVENT LISTENER SECTION */
// WAY 1
// function alertFunction() {
//     alert('YAY YOU DID IT');
// };

// btn.addEventListener('click', alertFunction);

//WAY 2
// const btn = document.querySelector('#butAsson');
// btn.onclick = () => alert('Hello World');

//WAY 3
//only in html file 

// WAY 4 actually it is way 3 in odin

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert('hello worldssdfsd');
});
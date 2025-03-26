import './style.scss'

const app = document.getElementById('app');

const p = document.createElement('h2');
p.textContent = "Привіт VIT!";
p.classList.add('vite')

app.appendChild(p);
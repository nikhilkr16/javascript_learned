
let projectDikhao= document.getElementById('projectFrame');

let  loadProject=(projectName)=> {
    const projectFrame = projectDikhao;
    projectFrame.src = `./${projectName}/index.html`;
}
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

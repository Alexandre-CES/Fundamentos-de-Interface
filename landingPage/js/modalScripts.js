//modal
const modal = document.getElementById('myModal');
const openModalBtns = document.querySelectorAll('.open-modal');
const closeModal = document.querySelector('.close');

// abrir modal ao clicar no botão
openModalBtns.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        modal.style.display = 'block';
    });
});

//fechar o modal ao clicar no "x"
closeModal.addEventListener('click', (e)=>{
    modal.style.display = 'none';
});

//fechar ao clicar fora do conteúdo
window.addEventListener('click', (e)=>{
    if(e.target === modal){
        modal.style.display = 'none';
    }
});
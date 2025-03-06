
//adicionando eventos
const btnExperimente = document.querySelectorAll('.open-modal');
console.log(btnExperimente[0]);
const btnExperimenteA = btnExperimente[0];
btnExperimenteA.addEventListener('click', function(){
    console.log('clicou');
});

const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', ()=>{
    if(window.scrollY > 300){
        backToTopButton.style.display = 'block';
    }else{
        backToTopButton.style.display = 'none';
    }
})

backToTopButton.addEventListener('click', ()=>{
    window.scrollTo({top:0, behavior: 'smooth'});
})
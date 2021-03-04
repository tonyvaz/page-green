const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__area');


 if (sessionStorage.getItem("modalOpen") === null) {
    modalContent.style.transform = `translateY(0%)`;
    sessionStorage.setItem("modalOpen", true);
 }
 else if(sessionStorage.getItem("modalOpen") === "false"){
    modal.style.filter = `blur(0px)`;
 }


const closeModal = () => {
    modal.style.filter = `blur(0px)`;
    modalContent.classList.add('disapear');
    modalContent.style.transform = `translateY(-200%)`;
    setTimeout(function(){modalContent.classList.add('hidden');},1000)
    sessionStorage.setItem("modalOpen", false);
}



modal.addEventListener('click',  closeModal);

document.querySelector('.button--modal').addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
});

document.querySelector('.button').addEventListener('click', (e) => {e.preventDefault()} );
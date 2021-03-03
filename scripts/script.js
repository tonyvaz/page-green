const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__area');
sessionStorage.setItem("modalOpen", true);

 if (sessionStorage.getItem("modalOpen") === "true") {
     modalContent.style.transform = `translateY(0%)`;
//   sessionStorage.setItem("modalOpen", false);
 }


const closeModal = () => {
    modal.style.filter = `blur(0px)`;
    modalContent.classList.add('disapear');
    setTimeout(function(){modalContent.classList.add('hidden');},1000)
    sessionStorage.setItem("modalOpen", false);
}



modal.addEventListener('click',  closeModal);

document.querySelector('.button--modal').addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
});

document.querySelector('.button').addEventListener('click', (e) => {e.preventDefault()} );
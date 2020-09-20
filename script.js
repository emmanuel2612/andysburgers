window.onload = () => {


    const modal = document.querySelector(".modal-container");
    const close = document.querySelector(".close");

    const showModal = () => {

        setTimeout(() => {
            modal.style.display = "flex";
        }, 5000);

        setTimeout(() => {
            modal.style.opacity = "1";
        }, 6000);
    }



    close.onclick = () => {

        modal.style.opacity = "0";

        setTimeout(() => {
            modal.style.display = "none"
        }, 300);
    }

    showModal();


}



let botoesModal = document.querySelectorAll("[data-control-modal]")

for (let i = 0; i < botoesModal.length; i++) {
    botoesModal[i].addEventListener('click', function(){
        let modalId = botoesModal[i].getAttribute("data-control-modal")
        document.getElementById(modalId).classList.toggle('hideModal')
        console.log("peguei o clique")
    })
}
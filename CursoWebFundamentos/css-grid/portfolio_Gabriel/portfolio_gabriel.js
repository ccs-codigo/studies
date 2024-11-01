    // Alternar o estado "ativo" do botão hambúrguer
    document.querySelector('.hamburger_content').addEventListener('click', function () {
    this.classList.toggle('is-active');



    const elements = document.querySelectorAll('.nav_content, .logo_content');

    elements.forEach(element => {
        element.classList.toggle('open');
    });
    

});

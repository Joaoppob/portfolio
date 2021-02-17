class Frase {
  constructor() {
    this.posicao = document.querySelector('.frase__background');
    this.fraseTitulo = document.querySelectorAll('.frase__titulo');
    this.fraseSubTitulo = document.querySelector('.frase__subtitulo');
  }
  scroll() {
    window.onscroll = (event) => {
      console.log(window.pageYOffset);
    };
  }

  calculoScroll(event) {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 750) {
      this.fraseTitulo.forEach((element) => {
        element.style.transform = `translate(${window.pageYOffset}px)`;
      });
      this.fraseSubTitulo.style.opacity = 1;
    }
    if (window.pageYOffset > 1000) {
      this.fraseTitulo.forEach((element) => {
        element.style.transform = `translate(${1000}px)`;
      });
      this.fraseSubTitulo.style.opacity = 1;
    }
  }
}
export { Frase };

<h1 align="center"> Projeto Número Secreto </h1>

<p align="center">  </p>

<div align="center">

  <a href="https://github.com/coelhoalexandre/projeto-alura-numero-secreto/blob/main/LICENSE" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a> <img src="https://img.shields.io/badge/Completo-lightgreen.svg" alt="Completo">

</div>

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Objetivos do Projeto](#objetivos-do-projeto)
- [Funcionalidades do Projeto](#funcionalidades-do-projeto)
- [Tecnologias Utilizadas](#tecnolgias-utilizadas)
- [Layouts](#layouts)
  - [Desktop Layout](#desktop-layout)
  - [Tablet Layout](#tablet-layout)
  - [Mobile Layout](#mobile-layout)
- [Adaptações](#adaptações)
- [Autor](#autor)

## Sobre o Projeto

Um projeto feito do zero que permite o reconhecimento de voz para a produção de um pequeno jogo.

Esse projeto foi feito com a instrução de [**Guilherme Lima**](https://github.com/guilhermeonrails) no curso [JavaScript: validações e reconhecimento de voz](https://cursos.alura.com.br/course/javascript-validacoes-reconhecimento-voz). Em que, como deixado claro no titulo, seu principal objetivo é usar o JavaScript para reconhecer a voz do usuario.

## Objetivos do Projeto

- Criar um projeto HTML, CSS e JavaScript do zero;
- Aplicar reconhecimento de voz com JavaScript;
- Manipular dados, eventos e elementos com JavaScript.

## Funcionalidades do Projeto

Toda vez que a pagina for iniciada, haverá um **número secreto de 1 a 1000 aleatorio**. O objetivo do jogo é encontra-lo.

Para que esse projeto funcione é **necessario ter um microfone e que permita que o site o acesse**. 

- **Falar:** Tudo que for captado pelo microfone será reproduzido na tela em parte, que será impressa em tempo de exucação, "Você disse:".

Observações sobre a funcionalidade:

- Dizer algo que **não seja um número** irá retornar como "Valor inválido"
  
<div align="center">
  <img src="https://github.com/coelhoalexandre/projetos-alura/blob/main/imagens/numero-secreto-valor-invalido.jpg" alt="">
</div>

- Dizer algo que seja um **número inferior a 1 ou superior a 1000** irá retonrar como "Valor inválido: Fale um número entre 1 e 1000.
  
<div align="center">
  <img src="https://github.com/coelhoalexandre/projetos-alura/blob/main/imagens/numero-secreto-numero-invalido.jpg" alt="">
</div>


- Dizer um **número válido** irá retornar uma das duas opções:
  - "O número secreto é maior", caso o número secreto seja **superior ao número válido**;
  - "O número secreto é menor", caso o número secreto seja **inferior ao número válido**;
  
<div align="center">
  <img src="https://github.com/coelhoalexandre/projetos-alura/blob/main/imagens/numero-secreto-numero-maior.jpg" alt="">
</div>


- Dizer um número válido que corresponde ao número secreto irá alterar o conteudo da pagina para a do **"Você acertou!"**
  
<div align="center">
  <img src="https://github.com/coelhoalexandre/projetos-alura/blob/main/imagens/numero-secreto-voce-acertou.jpg" alt="">
</div>


- Ao pressionar o botão **"Jogar Novamente"** da página "Você acertou!" irá recarregar a página.
 
## Tecnolgias Utilizadas
  
<div align="center">
  <img src="https://github.com/coelhoalexandre/projetos-alura/blob/main/imagens/numero-secreto-1920px.jpg" alt="">
</div>

## Autor

- Nome(s), redes e forma de contato. 
- Talvez um breve resumo sobre cada um.

Meu nome é **Alexandre Coelho**, sou autor deste ReadMe e estudante de Desenvolvimento Web. [Falar sobre meu papel no projeto, seu eu fiz tudo ou só modifiquei.

Logo abaixo estão os meus principais links, fique a vontade de acessar o que mais lhe interessar:

<br>

<br>

<div align="center">

<a href = "https://github.com/coelhoalexandre"><img src="https://img.shields.io/badge/GitHub-%23333?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge"></a>
<a href="https://www.linkedin.com/in/-coelhoalexandre/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"></a>
<a href = "mailto:alexandrecoelhocontato@gmail.com" target="_blank"><img src="https://img.shields.io/badge/-Gmail-critical?style=for-the-badge&logo=gmail&logoColor=white" target="_blank" alt="Gmail Badge"></a>
<a href = "https://cursos.alura.com.br/user/coelhoalexandre" target="_blank"><img src="https://img.shields.io/badge/Alura-0747a6?style=for-the-badge&logo=alura&logoColor=white" target="_blank" alt="Alura Badge"></a>
<a href = "https://www.frontendmentor.io/profile/coelhoalexandre" target="_blank"><img src="https://img.shields.io/badge/Frontend_Mentor-white?style=for-the-badge&logo=frontendmentor&logoColor=blue" alt="FrontEnd Mentor Badge">

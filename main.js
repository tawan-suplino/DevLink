function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // if(html.classList.contains('light')){
  //   html.classList.remove('light')
  // }else{
  //   html.classList.add('light')
  // } essa parte faz a mesma coisa porem simplificado

  // pega a tag img
  const img = document.querySelector('#profile img')

  // Substituir a imagem
  if (html.classList.contains('light')) {
    // se tive light mode, adcionar a imagem light
    img.setAttribute(
      'src',
      'https://media.licdn.com/dms/image/D4D03AQHUYDBYZLXddA/profile-displayphoto-shrink_200_200/0/1679694838753?e=1725494400&v=beta&t=48f1ZmjLeksQm00y4ivhfvLZkihtuf8NUvpfC6vxG70'
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', 'https://github.com/tawan-suplino.png')
  }
}

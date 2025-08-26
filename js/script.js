// Função para criar post dinamicamente
function criarPost(usuario, texto, imgSrc) {
    const feed = document.getElementById('feed');
  
    const card = document.createElement('div');
    card.className = 'card mb-4';
  
    card.innerHTML = `
      <div class="card-header d-flex align-items-center">
        <img src="assets/images/avatar.png" alt="Usuário" class="rounded-circle me-2" width="40">
        <strong>${usuario}</strong>
      </div>
      <img src="${imgSrc}" class="card-img-top" alt="Post">
      <div class="card-body">
        <div class="mb-2">
          <button class="btn btn-link p-0 me-2 text-danger"><i class="bi bi-heart-fill"></i></button>
          <button class="btn btn-link p-0 me-2"><i class="bi bi-chat"></i></button>
        </div>
        <p class="card-text"><strong>${usuario}:</strong> ${texto}</p>
        <small class="text-muted">0 curtidas</small>
      </div>
    `;
  
    feed.prepend(card);
  
    // Adiciona funcionalidade de curtir
    const likeBtn = card.querySelector('.btn-link.text-danger');
    const likesText = card.querySelector('small');
    likeBtn.addEventListener('click', function() {
      let likes = parseInt(likesText.textContent) || 0;
      if (this.classList.contains('liked')) {
        likes--;
        this.classList.remove('liked');
      } else {
        likes++;
        this.classList.add('liked');
      }
      likesText.textContent = `${likes} curtidas`;
    });
  }
  
  // Função de curtir posts iniciais
  document.querySelectorAll('.card-body .btn-link.text-danger').forEach(button => {
    button.addEventListener('click', function() {
      const likesText = this.parentElement.nextElementSibling;
      let likes = parseInt(likesText.textContent) || 0;
      if (this.classList.contains('liked')) {
        likes--;
        this.classList.remove('liked');
      } else {
        likes++;
        this.classList.add('liked');
      }
      likesText.textContent = `${likes} curtidas`;
    });
  });
  
  // Formulário de novo post
  const postBtn = document.getElementById('postBtn');
  const usuarioInput = document.getElementById('usuarioInput');
  const textoInput = document.getElementById('textoInput');
  const imgInput = document.getElementById('imgInput');
  
  postBtn.addEventListener('click', function() {
    const usuario = usuarioInput.value.trim();
    const texto = textoInput.value.trim();
    const imgSrc = imgInput.value.trim() || 'assets/images/default.jpg';
  
    if(usuario === '' || texto === '') {
      alert('Por favor, preencha seu nome e o texto do post.');
      return;
    }
  
    criarPost(usuario, texto, imgSrc);
  
    usuarioInput.value = '';
    textoInput.value = '';
    imgInput.value = '';
  });
  
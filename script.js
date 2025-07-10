// Funcionalidade de alternância de tema
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Função para definir o tema
  function setTheme(dark) {
    document.body.classList.toggle('dark-mode', dark);
    toggleButton.textContent = dark ? '☀️' : '🌙';
    toggleButton.setAttribute('aria-label', dark ? 'Alternar para tema claro' : 'Alternar para tema escuro');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }

  // Inicialização do tema
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme === 'dark');
  } else {
    setTheme(prefersDark);
  }

  // Event listener para o botão de alternância
  toggleButton.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    setTheme(isDark);
  });

  // Smooth scroll para links de navegação
  document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Detectar mudanças na preferência do sistema
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches);
    }
  });
});


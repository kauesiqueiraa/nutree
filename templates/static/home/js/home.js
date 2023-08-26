<script>
  let inactivityTimeout;

  function startInactivityTimer() {
      inactivityTimeout = setTimeout(() => {
          window.location.href = "{% url 'logout' %}";
      }, 2 * 60 * 1000); // 2 minutos em milissegundos
  }

  function resetInactivityTimer() {
      clearTimeout(inactivityTimeout);
      startInactivityTimer();
  }

  // Iniciar o temporizador quando a página é carregada
  startInactivityTimer();

  // Redefinir o temporizador em resposta a eventos de atividade do usuário
  window.addEventListener("mousemove", resetInactivityTimer);
  window.addEventListener("keydown", resetInactivityTimer);
  // Adicione mais eventos conforme necessário (por exemplo, "click", "scroll", etc.)
</script>
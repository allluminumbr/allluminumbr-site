document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("Falha ao carregar header.html");
      }
      return response.text();
    })
    .then(data => {
      const headerContainer = document.getElementById("header");
      if (headerContainer) {
        headerContainer.innerHTML = data;
      }
    })
    .catch(error => {
      console.error("Erro:", error);
    });
});

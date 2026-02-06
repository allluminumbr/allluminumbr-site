fetch("header.html")
  .then(response => {
    if (!response.ok) {
      throw new Error("Erro ao carregar header");
    }
    return response.text();
  })
  .then(data => {
    document.getElementById("header").innerHTML = data;
  })
  .catch(error => {
    console.error("Erro:", error);
  });

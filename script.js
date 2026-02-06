document.addEventListener("DOMContentLoaded", function () {
  const header = `
  <header style="
    position:fixed;
    top:0;
    width:100%;
    height:80px;
    background:rgba(0,0,0,0.9);
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 40px;
    z-index:1000;
  ">
    <div style="font-weight:bold;font-size:18px;">
      ALL LUMINUM BR
    </div>
    <nav>
      <a href="index.html" style="color:#fff;margin-left:24px;text-decoration:none;">Início</a>
      <a href="empresa.html" style="color:#fff;margin-left:24px;text-decoration:none;">Empresa</a>
      <a href="atuacao.html" style="color:#fff;margin-left:24px;text-decoration:none;">Atuação</a>
      <a href="#contato" style="color:#fff;margin-left:24px;text-decoration:none;">Contato</a>
    </nav>
  </header>
  `;
  document.getElementById("header").innerHTML = header;
});

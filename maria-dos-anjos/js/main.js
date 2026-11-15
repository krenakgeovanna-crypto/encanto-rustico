(function () {
  "use strict";

  /* ---------- Links de contato ---------- */
  function linkWhatsapp(mensagem) {
    var numero = (CONFIG.whatsapp || "").replace(/\D/g, "");
    return "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);
  }

  document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
    el.href = linkWhatsapp(CONFIG.mensagemGeral);
  });

  document.querySelectorAll("[data-instagram]").forEach(function (el) {
    var perfil = (CONFIG.instagram || "").replace(/^@/, "").trim();
    if (perfil) {
      el.href = "https://instagram.com/" + encodeURIComponent(perfil);
      el.textContent = "Instagram @" + perfil;
    } else {
      el.removeAttribute("href");
      el.setAttribute("aria-disabled", "true");
      el.classList.add("botao-inativo");
      el.textContent = "Instagram em breve";
    }
  });

  /* ---------- Cards do catálogo ---------- */
  function el(tag, classe, texto) {
    var e = document.createElement(tag);
    if (classe) e.className = classe;
    if (texto) e.textContent = texto;
    return e;
  }

  var grade = document.getElementById("grade-produtos");

  PRODUTOS.forEach(function (p, i) {
    var card = el("article", "card reveal");
    card.style.setProperty("--i", i % 4);

    var foto = el("div", "card-foto foto-espaco");
    foto.appendChild(el("span", "foto-aviso", "Adicionar foto"));
    var img = new Image();
    img.src = p.imagem;
    img.alt = p.nome;
    img.loading = "lazy";
    img.onerror = function () { img.remove(); };
    foto.appendChild(img);
    if (p.exemplo) foto.appendChild(el("span", "etiqueta", "Exemplo"));

    var corpo = el("div", "card-corpo");
    corpo.appendChild(el("h3", "", p.nome));
    corpo.appendChild(el("p", "", p.descricao));

    var botao = el("a", "botao botao-contorno botao-card", "Consultar preço");
    botao.href = linkWhatsapp("Olá! Gostaria de consultar o preço de: " + p.nome);
    botao.target = "_blank";
    botao.rel = "noopener";
    corpo.appendChild(botao);

    card.appendChild(foto);
    card.appendChild(corpo);
    grade.appendChild(card);
  });

  /* ---------- Aparição suave dos cards ---------- */
  var itens = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("visivel"); obs.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    itens.forEach(function (i) { obs.observe(i); });
  } else {
    itens.forEach(function (i) { i.classList.add("visivel"); });
  }

  /* ---------- Menu no celular ---------- */
  var btn = document.querySelector(".menu-btn");
  var menu = document.getElementById("menu");
  btn.addEventListener("click", function () {
    var aberto = menu.classList.toggle("aberto");
    btn.setAttribute("aria-expanded", aberto);
  });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      menu.classList.remove("aberto");
      btn.setAttribute("aria-expanded", "false");
    });
  });
})();

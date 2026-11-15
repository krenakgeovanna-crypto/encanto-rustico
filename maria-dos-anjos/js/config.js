/* =====================================================
   ARQUIVO DE CONFIGURAÇÃO — edite apenas este arquivo
   para trocar contatos e produtos.
   ===================================================== */

const CONFIG = {
  // WhatsApp: código do país + DDD + número, só números.
  // Exemplo: "5511999999999". Deixe "" enquanto não tiver o número.
  whatsapp: "5533999957018",

  // Instagram: apenas o nome do perfil, sem @.
  // Exemplo: "mariadosanjos". Deixe "" enquanto não tiver o perfil.
  instagram: "encantorusticomg",

  // Mensagem do botão geral de WhatsApp
  mensagemGeral: "Olá! Gostei desta peça e gostaria de saber o valor e mais detalhes."
};

/* =====================================================
   PRODUTOS DO CATÁLOGO
   Cada produto é um bloco { ... }, separado por vírgula.
   - nome:      título do card
   - descricao: texto curto
   - imagem:    caminho da foto dentro da pasta images
                parte (ou use false) quando for um produto real.
   ===================================================== */

const PRODUTOS = [
  { nome: "Vaso artesanal", descricao: "Produzido à mão, com detalhes únicos que trazem charme e personalidade à decoração.", imagem: "images/produto-01.jpg", },
  { nome: "Vaso artesanal", descricao: "Produzido à mão, com detalhes únicos que trazem charme e personalidade à decoração.", imagem: "images/produto-02.jpg", },
  { nome: "Vaso artesanal", descricao: "Produzido à mão, com detalhes únicos que trazem charme e personalidade à decoração.", imagem: "images/produto-03.jpg", },
  { nome: "Vaso artesanal", descricao: "Produzido à mão, com detalhes únicos que trazem charme e personalidade à decoração.", imagem: "images/produto-04.jpg", },
  { nome: "Vaso artesanal", descricao: "Produzido à mão, com detalhes únicos que trazem charme e personalidade à decoração.", imagem: "images/produto-05.jpg", },
  { nome: "Vaso artesanal", descricao: "Produzido à mão, com detalhes únicos que trazem charme e personalidade à decoração.", imagem: "images/produto-06.jpg", },
  { nome: "Vaso artesanal", descricao: "Produzido à mão, com detalhes únicos que trazem charme e personalidade à decoração.", imagem: "images/produto-07.jpg", },
  { nome: "Vaso artesanal", descricao: "Produzido à mão, com detalhes únicos que trazem charme e personalidade à decoração.", imagem: "images/produto-08.jpg", }
  // Para adicionar um produto: copie uma linha acima, cole abaixo
  // (lembre da vírgula no fim da linha anterior) e altere os dados.
];

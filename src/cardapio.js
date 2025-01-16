const cardapios = `[ 
    {
         "name":"Quartier de Paris",
         "salgados": [{
              "name" :"Frango",
              "ingredients" : "Queijo muçarela e frango desfiado"
         }, {
              "name" :"Calabresa",
              "ingredients" : "Queijo muçarela e calabresa em cubinhos"
         }, {
              "name" :"Queijo e Presunto",
              "ingredients" : "Queijo muçarela e presunto"
         }, {
               "name" :"Rúcula com Tomate",
               "ingredients" : "Queijo muçarela, tomates frescos e rúcula"
          }, {
              "name" :"Pizza",
              "ingredients" : "Queijo muçarela, tomates frescos, orégano e presunto"
         }],
         "doces": [{
              "name": "Morango e Chocolate",
              "ingredients": "Chocolate com morangos picados"
         }, {
              "name": "Queijo e Goiabada",
              "ingredients": "Queijo e goiabada"
         }, {
              "name": "Banana e Doce de leite",
              "ingredients": "Banana em rodelas e doce de leite cremoso"
		}],
         "link":"https://api.whatsapp.com/send?phone=554188596006&text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20o%20card%C3%A1pio%20Quartier%20de%20Paris.",
         "obs" : "Crepes servidos no cone de papelão"
    }, {
         "name":"Santo",
         "salgados": [{
              "name" :"Frango Cremoso",
              "ingredients" : "Queijo muçarela, frango cremoso com milho e batata palha"
         }, {
              "name" :"Queijo e Presunto",
              "ingredients" : "Queijo muçarela e cubos de presunto"
         }, {
              "name" :"Curitibano",
              "ingredients" : "Queijo muçarela, milho, ervilha e presunto"
         },{
              "name" :"Marguerita",
              "ingredients" : "Queijo muçarela, tomates frescos e manjericão"
         },{
              "name" :"Light",
              "ingredients" : "Queijo muçarela, tomates frescos e rúcula"
         }],
         "doces": [{
              "name": "Sensação",
              "ingredients": "Morango e chocolate ao leite"
         }, {
              "name": "Doce de leite",
              "ingredients": "Banana em rodelas e doce de leite cremoso"
         }, {
              "name": "Banana",
              "ingredients": "Banana, canela e leite condensado"
         }],
         "link":"https://api.whatsapp.com/send?phone=554188596006&text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20o%20card%C3%A1pio%20Santo."
    }, {
         "name":"Santidade",
         "salgados": [{
              "name" :"Frango Cremoso",
              "ingredients" : "Queijo muçarela, frango cremoso com milho e batata palha"
         }, {
              "name" :"Bolonhesa",
              "ingredients" : "Queijo muçarela e molho bolonhesa"
         }, {
              "name" :"Calabresa",
              "ingredients" : "Queijo muçarela e calabresa em cubinhos"
         }, {
              "name" :"Pizza",
              "ingredients" : "Queijo muçarela, tomates frescos, orégano e presunto"
         }, {
              "name" :"Light",
              "ingredients" : "Queijo muçarela, tomates frescos e rúcula"
         }],
         "doces": [{
              "name": "Sensação",
              "ingredients": "Morango e chocolate ao leite"
         }, {
              "name": "Banana",
              "ingredients": "Banana, canela e leite condensado"
         }, {
              "name": "Prestígio",
              "ingredients": "Coco e chocolate ao leite"
         }],
         "link": "https://api.whatsapp.com/send?phone=554188596006&text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20o%20card%C3%A1pio%20Santidade."
    }, {
         "name":"Santíssimo",
         "salgados": [{
              "name" :"Carne Desfiada",
              "ingredients" : "Queijo muçarela, carne desfiada, cheddar cremoso e cebolas caramelizadas"
         }, {
              "name" :"Poulet",
              "ingredients" : "Queijo muçarela, frango desfiado e requeijão cremoso"
         }, {
              "name" :"Marguerita",
              "ingredients" : "Queijo muçarela, tomates frescos e manjericão"
         }, {
              "name" :"Milho e Bacon",
              "ingredients" : "Queijo muçarela, bacon em cubos e milho"
         },{
              "name" :"Champignon",
              "ingredients" : "Queijo muçarela, champignon e cebola caramelizada"
         }],
         "doces": [{
              "name": "Sensação",
              "ingredients": "Morango e chocolate ao leite"
         }, {
              "name": "Strogonofe de Nozes",
              "ingredients": "Blend de nozes misturadas ao doce de leite"
         }, {
              "name": "Doce de Leite",
              "ingredients": "Rodelas de banana e doce de leite"
         }],
         "link":"https://api.whatsapp.com/send?phone=554188596006&text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20o%20card%C3%A1pio%20Sant%C3%ADssimo."
    }, {
         "name":"Divindade",
         "salgados": [{
              "name" :"Croupe",
              "ingredients" : "Queijo muçarela, alcatra em tiras, cheddar cremoso e cebolas caramelizadas"
         }, {
              "name" :"Poulet",
              "ingredients" : "Queijo muçarela, frango desfiado e requeijão cremoso"
         }, {
              "name" :"Camarão",
              "ingredients" : "Queijo muçarela, camarão e requeijão cremoso"
         }, {
              "name" :"Light",
              "ingredients" : "Queijo muçarela, rúcula e tomate seco"
         },{
              "name" :"3 Queijos",
              "ingredients" : "Queijo muçarela, parmesão e gorgonzola"
         }],
         "doces": [{
              "name": "Nutella e Morango",
              "ingredients": "Nutella coberta com morangos picados"
         }, {
              "name": "Strogonofe de Nozes",
              "ingredients": "Blend de nozes misturadas ao doce de leite"
         }, {
              "name": "Crepe Suzette",
              "ingredients": "Calda de laranja flambada e zester de laranja"
         }],
         "link":"https://api.whatsapp.com/send?phone=554188596006&text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20o%20card%C3%A1pio%20Divindade.",
         "obs" : "Salada básica inclusa"
    }, {
         "name":"Canonique",
         "salgados": [{
              "name" :"Louvre",
              "ingredients" : "Queijo Mussarela, rosbife, cogumelos salteados e molho pesto"
         }, {
              "name" :"Champs de Mars",
              "ingredients" : "Queijo muçarela, queijo brie e parmesão com geleia de damascos"
         }, {
              "name" :"Marseille",
              "ingredients" : "Queijo muçarela, camarão e cream cheese"
         }, {
              "name" :"Pont Nèuf",
              "ingredients" : "Queijo muçarela, frango e cream cheese"
         }, {
              "name" :"Lyon",
              "ingredients" : "Queijo muçarela, tomates, manjericão fresco e parmesão"
         }],
         "doces": [{
              "name": "Nutella",
              "ingredients": "Nutella com calda de frutas vermelhas"
         }, {
              "name": "Banoffee",
              "ingredients": "Rodelas de banana, doce de leite, caramelo artesanal e farofa de biscoitos"
         }, {
              "name": "Crepe Suzette",
              "ingredients": "Calda de laranja flambada"
         }],
         "link":"https://api.whatsapp.com/send?phone=554188596006&text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20o%20card%C3%A1pio%20Canonique.",
         "obs": "Salada incluída"
    }
]`;

class Cardapio {
  constructor(name) {
    const cardapio = JSON.parse(cardapios).find(
      (cardapio) => cardapio.name == name
    );

    //checa se o cardápio existe
    if (cardapio) {
      this.name = cardapio.name;
      this.salgados = [];
      this.doces = [];
      this.link = cardapio.link;
      this.obs = cardapio.obs;

      //acessa os sabores do cardápio
      for (let i = 0; i < cardapio.salgados.length; i++) {
        this.salgados[i] = cardapio.salgados[i];
      }

      for (let i = 0; i < cardapio.doces.length; i++) {
        this.doces[i] = cardapio.doces[i];
      }

      this.render();
    } else {
      console.log("sem cardápio");
      return false;
    }
  }

  render() {
    document.documentElement.style.overflowY = "hidden";

    let cardapio = document.createElement("div");
    cardapio.setAttribute("id", "cardapio-overlay");

    cardapio.insertAdjacentHTML(
      "beforeend",
      `\
               <button id="close" onclick='closeMenu()'> \
                    <img src="./img/Icones_close_icon.svg" alt="Ícone - fechar">\
               </button>`
    );

    cardapio.insertAdjacentHTML(
      "beforeend",
      ` \
               <div class="container"> \
                    <h2>${this.name}</h2> \
                    <p>${
                      this.obs != "" &&
                      this.obs != null &&
                      this.obs != undefined
                        ? this.obs
                        : ""
                    }</p>
               </div>`
    );

    for (let i = 0; i < this.salgados.length; i++) {
      cardapio.insertAdjacentHTML(
        "beforeend",
        ` \
                    <div class="sabor"> \
                    <h4>${this.salgados[i].name}</h4> \
                    <hr> \
                    <p>${this.salgados[i].ingredients}</p> \
                    </div>
               `
      );
    }

    cardapio.insertAdjacentHTML(
      "beforeend",
      `\
          <div class="container"> \
               <h2>Doces</h2>
               <p>${
                 this.name != "Quartier de Paris"
                   ? "Todos acompanham calda e sorvete"
                   : ""
               }</p> \
          </div>`
    );

    for (let i = 0; i < this.doces.length; i++) {
      cardapio.insertAdjacentHTML(
        "beforeend",
        ` \
                    <div class="sabor"> \
                    <h4>${this.doces[i].name}</h4> \
                    <hr> \
                    <p>${this.doces[i].ingredients}</p> \
                    </div>
               `
      );
    }

    cardapio.insertAdjacentHTML(
      "beforeend",
      `\
          <div id="buttons-container"> \
               <button class="voltar" onclick="closeMenu()">Voltar</button> \
               <a href="${this.link}" target="_blank" rel="noopener noreferrer"> \
                    <button> \
                         <span>Peça um orçamento </span> \
                         <span><img src="img/whatsapp.svg" alt="Logotipo Whatsapp" style="max-width: 25px;"></span> \
                    </button> \
               </a> \
          </div>`
    );

    let overlay = document.getElementById("overlay");

    overlay.innerHTML = "<div class='border'></div>";
    overlay
      .querySelector(".border")
      .insertAdjacentElement("beforeend", cardapio);
    overlay.style.display = "block";

    overlay.addEventListener("click", (ev) => {
      if (ev.target != overlay) return;
      closeMenu();
    });

    whatsappWeb();

    new SmoothScroll(overlay, 150, 12);
  }
}

function closeMenu() {
  document.getElementById("overlay").style.display = "none";
  document.documentElement.style.overflowY = "auto";
}

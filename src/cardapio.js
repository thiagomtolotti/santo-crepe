const cardapios = `[ 
    {
         "name":"Quartier de Paris",
         "salgados": [{
              "name" :"Queijo",
              "ingredients" : "Queijo Mussarela"
         }, {
              "name" :"Marguerita",
              "ingredients" : "Queijo Mussarela, tomates frescos e manjericão fresco"
         }, {
              "name" :"Presunto e Queijo",
              "ingredients" : "Queijo Mussarela e presunto"
         }, {
              "name" :"Calabresa",
              "ingredients" : "Queijo Mussarela e calabresa fatiada em cubos"
         }],
         "doces": [{
              "name": "Chocolate",
              "ingredients": "Chocolate ao leite"
         }, {
              "name": "Chocolate com banana",
              "ingredients": "Chocolate ao leite com banana em rodelas"
         }, {
              "name": "Queijo e Goiabada",
              "ingredients": "Queijo Mussarela e goiabada"
         }],
         "link":"https://api.whatsapp.com/send?phone=554188596006&text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20o%20card%C3%A1pio%20Quartier%20de%20Paris.",
         "obs" : "Crepes servidos no cone de papelão"
    }, {
         "name":"Santo",
         "salgados": [{
              "name" :"Frango Cremoso",
              "ingredients" : "Queijo Mussarela, frango cremoso com milho e batata palha"
         }, {
              "name" :"Calabresa",
              "ingredients" : "Queijo Mussarela e calabresa fatiada em cubos"
         }, {
              "name" :"Curitibano",
              "ingredients" : "Queijo Mussarela, milho, ervilha e presunto"
         },{
              "name" :"Marguerita",
              "ingredients" : "Queijo Mussarela, tomates frescos e manjericão fresco"
         },{
              "name" :"Light",
              "ingredients" : "Queijo Mussarela, tomates frescos e rúcula"
         }],
         "doces": [{
              "name": "Sensação",
              "ingredients": "Morango e chocolate ao leite"
         }, {
              "name": "Doce de leite",
              "ingredients": "Banana em rodelas e doce de leite"
         }, {
              "name": "Banana",
              "ingredients": "Banana, canela e leite condensado"
         }],
         "link":"https://api.whatsapp.com/send?phone=554188596006&text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20o%20card%C3%A1pio%20Santo."
    }, {
         "name":"Santidade",
         "salgados": [{
              "name" :"Frango Cremoso",
              "ingredients" : "Queijo Mussarela, frango cremoso com milho e batata palha"
         }, {
              "name" :"Bolonhesa",
              "ingredients" : "Queijo Mussarela, molho bolonhesa e cheddar cremoso"
         }, {
              "name" :"Pizza",
              "ingredients" : "Queijo Mussarela, tomates frescos, orégano e presunto"
         }, {
              "name" :"Champignon",
              "ingredients" : "Queijo Mussarela e champignon em rodelas"
         },{
              "name" :"Curitiboca",
              "ingredients" : "Queijo Mussarela, milho, ovo cozido, cebola crispy e presunto"
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
              "name" :"Curitibano",
              "ingredients" : "Queijo Mussarela, carne desfiada, cheddar cremoso e cebolas caramelizadas"
         }, {
              "name" :"Poulet",
              "ingredients" : "Queijo Mussarela, frango desfiado e requeijão cremoso"
         }, {
              "name" :"Marguerita",
              "ingredients" : "Queijo Mussarela, tomates frescos e manjericão fresco"
         }, {
              "name" :"Milho e Bacon",
              "ingredients" : "Queijo Mussarela, bacon em cubos e milho"
         },{
              "name" :"3 Queijos",
              "ingredients" : "Queijo Mussarela, parmesão e gorgonzola"
         }],
         "doces": [{
              "name": "Sensação",
              "ingredients": "Morango e chocolate ao leite"
         }, {
              "name": "Strogonofe de Nozes",
              "ingredients": "Blend de nozes misturadas ao doce de leite"
         }, {
              "name": "Blanche",
              "ingredients": "Morango e chocolate branco"
         }],
         "link":"https://api.whatsapp.com/send?phone=554188596006&text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20o%20card%C3%A1pio%20Sant%C3%ADssimo."
    }, {
         "name":"Divindade",
         "salgados": [{
              "name" :"Croupe",
              "ingredients" : "Queijo Mussarela, alcatra em tiras, cheddar cremoso e cebolas caramelizadas"
         }, {
              "name" :"Poulet",
              "ingredients" : "Queijo Mussarela, frango desfiado e requeijão cremoso"
         }, {
              "name" :"Camarão",
              "ingredients" : "Queijo Mussarela, camarão com ervas e requeijão cremoso"
         }, {
              "name" :"Light",
              "ingredients" : "Queijo Mussarela, rúcula e tomate seco"
         },{
              "name" :"4 Queijos",
              "ingredients" : "Queijo Mussarela, parmesão, gorgonzola e provolone"
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
              "ingredients" : "Queijo Mussarela, queijo brie e parmesão com geleia de damascos"
         }, {
              "name" :"Marseille",
              "ingredients" : "Queijo Mussarela, camarão com ervas, cream cheese e molho pesto"
         }, {
              "name" :"Pont Nèuf",
              "ingredients" : "Queijo Mussarela, frango ao curry e cream cheese"
         }, {
              "name" :"Provence",
              "ingredients" : "Queijo Mussarela, tomates frescos, manjericão fresco e queijo parmesão"
         }],
         "doces": [{
              "name": "Sacre Coeur",
              "ingredients": "Nutella com calda de frutas vermelhas"
         }, {
              "name": "Montpellier",
              "ingredients": "Doce de leite, banana, farofa de biscoitos e caramelo artesanal"
         }, {
              "name": "Crepe Suzette",
              "ingredients": "Calda de laranja flambada e zester de laranja"
         }],
         "link":"https://api.whatsapp.com/send?phone=554188596006&text=Ol%C3%A1%2C%20gostaria%20de%20pedir%20um%20or%C3%A7amento%20para%20o%20card%C3%A1pio%20Canonique.",
         "obs": "Salada incluída"
    }
]`;

class Cardapio {
    constructor(name){
         let cardapio = JSON.parse(cardapios).find(cardapio => cardapio.name == name)

         //checa se o cardápio existe
         if(cardapio){
              this.name = cardapio.name;
              this.salgados = [];
              this.doces = [];
              this.link = cardapio.link
              this.obs = cardapio.obs

              //acessa os sabores do cardápio
              for(let i = 0; i < cardapio.salgados.length; i++){
                   this.salgados[i] = cardapio.salgados[i];
              }

              for(let i = 0; i < cardapio.doces.length; i++){
                   this.doces[i] = cardapio.doces[i];
              }

              this.render();
         }else{
              console.log('sem cardápio')
              return false
         }
    }

    render(){
          document.documentElement.style.overflowY = "hidden";

          let cardapio = document.createElement('div');
          cardapio.setAttribute('id', 'cardapio-overlay');

          cardapio.insertAdjacentHTML('beforeend', `\
               <button id="close" onclick='closeMenu()'> \
                    <img src="./img/Icones_close_icon.svg" alt="Ícone - fechar">\
               </button>`); 

          cardapio.insertAdjacentHTML('beforeend', ` \
               <div class="container"> \
                    <h2>${this.name}</h2> \
                    <p>${(this.obs != "" && this.obs != null && this.obs != undefined) ? this.obs : ""}</p>
               </div>`);

          for(let i = 0; i < this.salgados.length; i++){
               cardapio.insertAdjacentHTML('beforeend', ` \
                    <div class="sabor"> \
                    <h4>${this.salgados[i].name}</h4> \
                    <hr> \
                    <p>${this.salgados[i].ingredients}</p> \
                    </div>
               `)
          }

          cardapio.insertAdjacentHTML('beforeend', `\
          <div class="container"> \
               <h2>Doces</h2>
               <p>${(this.name != "Quartier de Paris") ? "Todos acompanham calda e sorvete" : ""}</p> \
          </div>`);

          for(let i = 0; i < this.doces.length; i++){
               cardapio.insertAdjacentHTML('beforeend', ` \
                    <div class="sabor"> \
                    <h4>${this.doces[i].name}</h4> \
                    <hr> \
                    <p>${this.doces[i].ingredients}</p> \
                    </div>
               `)
          }

          cardapio.insertAdjacentHTML('beforeend', `\
          <div id="buttons-container"> \
               <button class="voltar" onclick="closeMenu()">Voltar</button> \
               <a href="${this.link}" target="_blank" rel="noopener noreferrer"> \
                    <button> \
                         <span>Peça um orçamento </span> \
                         <span><img src="img/whatsapp.svg" alt="Logotipo Whatsapp" style="max-width: 25px;"></span> \
                    </button> \
               </a> \
          </div>`);

          let overlay = document.getElementById('overlay')

          overlay.innerHTML = "<div class='border'></div>"
          overlay.querySelector('.border').insertAdjacentElement('beforeend', cardapio)
          overlay.style.display = "block"

          overlay.addEventListener("click", (ev)=>{
               if(ev.target != overlay) return
               closeMenu();
          })

          whatsappWeb()

          new SmoothScroll(overlay,150,12)

    }
}

function closeMenu(){
    document.getElementById('overlay').style.display = "none";
    document.documentElement.style.overflowY = "auto";
}
const btnCarrinho = document.querySelector('.carrinho');
const escondeMain = document.querySelector('.escodeMain')
function abreCarrinho() {
    escondeMain.style.display = 'none'
    btnCarrinho.style.display = 'block';
    atualizarLocalStorage();
    mostrarCarrinho();
    totalCompra()
}
function fechaCarrinho() {
    btnCarrinho.style.display = 'none';
    escondeMain.style.display = 'block'
    atualizarLocalStorage();
    mostrarCarrinho();
    totalCompra()
}



let carrinho = [];
const carrinhoDiv = document.getElementById('carrinho');

function adicionarItem(imagem, nome, preco, itemDivD, btMais, qtt, btnMenos) {
    let itemExistente = carrinho.find(item => item.nome === nome);

    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({
            imagem: imagem,
            quantidade: 1,
            nome: nome,
            preco: preco,
            itemDivD:itemDivD,
            btMais: btMais,
            qtt: qtt,
            btnMenos: btnMenos
        });
    }

    atualizarLocalStorage();
    mostrarCarrinho();
}


function removerItem(nome) {
    let itemExistente = carrinho.find(item => item.nome === nome);
    if (itemExistente) {
        itemExistente.quantidade--;

        if (itemExistente.quantidade <= 0) {
            itemExistente.quantidade = 0;
        }
        atualizarLocalStorage();
        mostrarCarrinho();
    }
}

function mostrarCarrinho() {
    carrinhoDiv.innerHTML = '';


    for (const item of carrinho) {
        if (item.quantidade > 0) {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('carrinhoItem');

            const imgCarrinho = document.createElement('img');
            imgCarrinho.classList.add('imgCombo');
            imgCarrinho.src = item.imagem;

            const textoCarrinho = document.createElement('p');
            textoCarrinho.classList.add('textoCarrinho');
            textoCarrinho.textContent = `${item.nome} x ${item.quantidade} = R$${(item.preco * item.quantidade).toFixed(2)}`;

            const itemDivD = document.createElement('div')
            itemDivD.classList.add('btnsAddRemove')


            const btMais = document.createElement('p');
            btMais.classList.add('btnMaisCarrinho')
            btMais.textContent = '+'
            btMais.addEventListener('click', () => {
                item.quantidade++;
                atualizarLocalStorage();
                mostrarCarrinho();
                totalCompra()

            });

            
            const btnMenos = document.createElement('p');
            btnMenos.classList.add('btnMenosCarrinho')
            btnMenos.textContent = '-'
            btnMenos.addEventListener('click', () => {
                if (item.quantidade >= 1) {
                    item.quantidade--;
                    atualizarLocalStorage();
                    mostrarCarrinho();
                    totalCompra()
                } else {
                    limparCarrinho()
                }
            });

            itemDiv.appendChild(imgCarrinho);
            itemDiv.appendChild(textoCarrinho);
            itemDiv.appendChild(itemDivD)
            itemDivD.appendChild(btnMenos)
            itemDivD.appendChild(btMais)
            

            carrinhoDiv.appendChild(itemDiv);
        }

    }

}

function totalCompra() {
    let total = 0;
    const totalCompra = document.querySelector('.totalCompra');
    const totalFimPedido = document.querySelector('.totalFimPedido');
    

    for (const item of carrinho) {
        if (item.preco && item.quantidade) {
            total += item.preco * item.quantidade
        }
    }

    totalCompra.textContent = `Subtotal: R$${total.toFixed(2)}`
    totalFimPedido.textContent = `Valor da compra: R$${total.toFixed(2)}`

}


function limparCarrinho() {

    localStorage.clear();
    carrinho = [];

    const qttDiv = document.querySelectorAll('.qtdAdd');
    qttDiv.forEach((qttDiv) => {
        qttDiv.textContent = '0'
    });

    atualizarLocalStorage();
    mostrarCarrinho();
    totalCompra()
}

// atualiza localStorage com os itens do carrinho
function atualizarLocalStorage() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// carrega os itens do carrinho do localStorage
function carregarCarrinhoDoLocalStorage() {
    const carrinhoSalvo = localStorage.getItem('carrinho');
    if (carrinhoSalvo) {
        carrinho = JSON.parse(carrinhoSalvo);
    }
}

carregarCarrinhoDoLocalStorage();

// adicionar e remover



function botaoadd(itemElement) {
    const itemDiv = itemElement.parentElement;
    const imagem = itemDiv.querySelector('.imgCombo').getAttribute('src');
    const nome = itemDiv.querySelector('.nomeLanche').textContent;
    const preco = parseFloat(itemDiv.querySelector('.lanchePreco').textContent.replace('R$', ''));
    const itemDivD = itemElement.parentElement;
    const btMais = itemDiv.querySelector('.btnMais').textContent;
    const btnMenos = itemDiv.querySelector('.btnMenos').textContent;
    adicionarItem(imagem, nome, preco, imagem, itemDivD, btMais, btnMenos);
    const quantidadeDiv = itemDiv.querySelector('.qtdAdd');
    const itemCarrinho = carrinho.find(item => item.nome === nome);
    quantidadeDiv.textContent = itemCarrinho ? itemCarrinho.quantidade : 0;
}



function botaoremove(itemElement) {
    const itemDiv = itemElement.parentElement;
    const nome = itemDiv.querySelector('.nomeLanche').textContent;
    const preco = parseFloat(itemDiv.querySelector('.lanchePreco').textContent.replace('R$', ''));
    removerItem(nome, preco);
    const quantidadeDiv = itemDiv.querySelector('.qtdAdd');
    const itemCarrinho = carrinho.find(item => item.nome === nome);
    quantidadeDiv.innerHTML = itemCarrinho ? itemCarrinho.quantidade : 0
}

document.addEventListener('DOMContentLoaded', () => {
    const botoesAdd = document.querySelectorAll('.btnMais');
    const botoesRemove = document.querySelectorAll('.btnMenos');


    botoesAdd.forEach((botao) => {
        botao.addEventListener('click', () => {
            const itemElement = botao.closest('.addLanche');
            botaoadd(itemElement);
        });
    });


    botoesRemove.forEach((botao) => {
        botao.addEventListener('click', () => {
            const itemElement = botao.closest('.addLanche');
            botaoremove(itemElement);
        });
    });


});

/*cep*/
const cepConteiner = document.querySelector('.cep')
function gotoCep(){
    cepResponsivo()
    cepConteiner.style.display = 'flex'
    btnCarrinho.style.display = 'none'
    
}
function gotoCaarrinho(){
    cepConteiner.style.display = 'none'
    btnCarrinho.style.display = 'block'
    
}

function cepResponsivo(){
const formularioPesqCEP = document.querySelector('.formularioPesqCEP')

const formularioPesqManual = document.querySelector('.formularioPesqManual')

var largura = window.innerWidth
if(largura < 950){

    formularioPesqCEP.style.display = 'none'
    formularioPesqManual.style.display = 'none'

}
    
}

const cepInput = document.getElementById('cepInput')
const buscarCep = document.getElementById('buscarCep')
const txtLogradouro = document.getElementById('logradouro')
const txtBairo = document.getElementById('bairro')
const txtCidade = document.getElementById('cidade')
const txtUF = document.getElementById('estado')
const txtNum = document.getElementById('numeroEnd')

function btnBuscarCep(){
    const numCep = cepInput.value;

    if (numCep){
        fetch(`https://viacep.com.br/ws/${numCep}/json/`)
            .then(response => response.json())
            .then(data =>{
                txtLogradouro.textContent = data.logradouro;
                txtBairo.textContent = data.bairro;
                txtCidade.textContent = data.localidade;
                txtUF.textContent = data.uf;
                
            })
            .catch(error => {
                console.error('Erro ao buscar o CEP:', error);
            });

    }
}

/*check pesquisa end */

const formularioPesqCEP = document.querySelector('.formularioPesqCEP')
const formularioPesqManual = document.querySelector('.formularioPesqManual')
var CepOuManual;

function pesquisaPorCEP(){
    formularioPesqCEP.style.display = 'block'
    formularioPesqManual.style.display = 'none'
    CepOuManual = false
}

function pesquisaManual(){
    formularioPesqManual.style.display = 'block'
    formularioPesqCEP.style.display = 'none'
    CepOuManual = true
}

/*tela FIm*/

const telaFimPedido = document.querySelector('.finalizarPedidos')
function abrirTelaFim(){
    finalizarItens()
    mostrarCarrinho();
    totalCompra() 
    finalizarItens()
    
    telaFimPedido.style.display = 'block'
    cepConteiner.style.display = 'none'
}
function fechaTelaFim(){
    telaFimPedido.style.display = 'none'
    cepConteiner.style.display = 'flex'
}


const txtLogradouro2 = document.getElementById('logradouro2')
const txtBairo2 = document.getElementById('bairro2')
const txtCidade2 = document.getElementById('cidade2')
const txtUF2 = document.getElementById('estado2')
const txtNum2 = document.getElementById('numeroEnd2')

const fimPedido = document.querySelector('.fimPedidoRua')
const fimPedidoCdd = document.querySelector('.fimPedidoCdd')

const fimPedidoItens = document.querySelector('.fimPedidoItens')
const txtFimPEdido = carrinho.map(item => `${item.nome} x ${item.quantidade}`).join(' + ')

function finalizarItens(){
    const txtEndCompletoRua = `${txtLogradouro.textContent}, ${txtNum.value}`
    const txtEndCompletoCdd = `${txtBairo.textContent},  ${txtCidade.textContent} - ${txtUF.textContent}`

    const txtEndCompletoRua2 = `${txtLogradouro2.value}, ${txtNum2.value}`
    const txtEndCompletoCdd2 = `${txtBairo2.value},  ${txtCidade2.value} - ${txtUF2.value}`

    if(CepOuManual){
        fimPedido.textContent = txtEndCompletoRua2
        fimPedidoCdd.textContent = txtEndCompletoCdd2
    }else if(!CepOuManual){
        fimPedido.textContent = txtEndCompletoRua
        fimPedidoCdd.textContent = txtEndCompletoCdd
    }

    

    fimPedidoItens.textContent = txtFimPEdido
}



function msgWApp(){
    const fimPedidoRua = document.querySelector('.fimPedidoRua').textContent
    const fimPedidoCdd = document.querySelector('.fimPedidoCdd').textContent

    const valorTotalCompra = document.querySelector('.totalFimPedido').textContent
    const listaPgmto = document.querySelector('.listaPgmto').value

    const mensagemWapp = encodeURIComponent(`Itens Selecionados:\n${txtFimPEdido}\nEndereço:\n${fimPedidoRua}\n${fimPedidoCdd}\n${valorTotalCompra}\nForma de Pagamento: ${listaPgmto}`)
    const meuNumero = '+5516981166466'
    const linkWapp =    `https://api.whatsapp.com/send?phone=${meuNumero}&text=${mensagemWapp}`;

    window.open(linkWapp, '_blank')

}

function fechaFInal(){
    telaFimPedido.style.display = 'none'
    escondeMain.style.display = 'block'
    atualizarLocalStorage();
    mostrarCarrinho();
    totalCompra()
}
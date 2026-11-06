// Animação de máquina de escrever do código no topo
const codigoHTML = 
'<span class="kw">def</span> <span class="func">meu_portfolio</span>():\n' +
'    <span class="com"># Minha idade</span>\n' +
'    <span class="kw">print</span>(<span class="str">"18 Anos"</span>)\n\n' +
'    <span class="com"># Formação atual</span>\n' +
'    <span class="kw">print</span>(<span class="str">"ADS - analise e desenvolvimento de sistemas"</span>)\n\n' +
'    <span class="kw">if</span> (verMais == <span class="func">true</span>){\n' +
'        <span class="kw">return</span> <span class="func">navegarPortfolio</span>()\n' +
'    }\n' +
'    <span class="kw">else</span> <span class="kw">if</span> (verMais == <span class="func">false</span>){\n' +
'        <span class="kw">return</span> <span class="func">sairSite</span>()\n' +
'        <span class="kw">print</span>(<span class="str">"Que pena, volte sempre!"</span>)\n' +
'    }';

const container = document.getElementById("bloco-codigo");

let i = 0;
let apagando = false;

function maquinaEscrever() {
    if (!apagando) {
        if (i < codigoHTML.length) {
            if (codigoHTML.charAt(i) === '<') {
                let fimTag = codigoHTML.indexOf('>', i);
                if (fimTag !== -1) {
                    i = fimTag;
                }
            }
            container.innerHTML = codigoHTML.substring(0, i + 1);
            i++;
            setTimeout(maquinaEscrever, 25);
        } else {
            apagando = true;
            setTimeout(maquinaEscrever, 2500);
        }
    } else {
        if (i > 0) {
            if (codigoHTML.charAt(i) === '>') {
                let inicioTag = codigoHTML.lastIndexOf('<', i);
                if (inicioTag !== -1) {
                    i = inicioTag;
                }
            }
            container.innerHTML = codigoHTML.substring(0, i - 1);
            i--;
            setTimeout(maquinaEscrever, 12);
        } else {
            apagando = false;
            setTimeout(maquinaEscrever, 500);
        }
    }
}

if (container) {
    maquinaEscrever();
}

// Alerta do botão de contato
let meuBotao = document.getElementById("botao-alerta");
if (meuBotao) {
    meuBotao.addEventListener("click", function() {
        alert("Obrigado por visitar meu portfólio! Entre em contato pelo GitHub: DaviReis4554");
    });
}
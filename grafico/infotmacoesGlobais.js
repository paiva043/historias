const url = ''

async function vizualizar InformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas parseInt = (dados.tempo medio)
    const minutos Math.round = ((dados.tempo_medio horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoas NoMundo) 180).toFixe

    const paragrafo document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = Você sabia que o mundo tem <span>${pessoasNoMundo) bilhões

        const container document.getElementById('graficos-container')
        container.appendChild(paragrafo)

    }
    vizualizar InformacoesGlobais()
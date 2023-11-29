
let reload = false

//Fetch serve para requisicoes http

fetch("http://192.168.1.51:3000/produtos")



.then((resposta)=>{
    if(resposta.status == 200){
        resposta.json().then((dados)=>{
            //dados é a lista de objetos que vem da api


            //criando a estrutura do get
            const div = document.querySelector("#lista");
            dados.map((contato)=>{
                const card = document.createElement("tr")
                card.id = contato.id
                const nome = document.createElement("th")
                nome.innerText = contato.nome
                const email = document.createElement("th")
                email.innerText = contato.email
                const tel = document.createElement("th")
                tel.innerText = contato.tel
                const cpf = document.createElement("th")
                cpf.innerText = contato.cpf
                const endereco = document.createElement("th")
                endereco.innerText = contato.endereco
                const edit = document.createElement("a")
                edit.className = "bi bi-pencil-fill"
               edit.href = `./formulario.html?id=${contato.id}&nome=${contato.nome}&email=${contato.email}&tel=${contato.tel}&cpf=${contato.cpf}&endereco=${contato.endereco}`

                const del = document.createElement("a")
                del.className = "delete bi bi-trash3-fill"
                del.addEventListener("click",()=>{
                        fetch(`http://192.168.1.51:3000/produtos/excluir/${contato.id}`,{
                            method: 'DELETE',
                            headers: {
                                'Content-Type' : 'application/json'
                            },
                            }).then((resposta)=>{
                                if(resposta.status != 200){
                                    console.log(resposta.json())
                            }

                            location.reload();

                        })
                    })

                //colocando a estrutura no html  
                card.append(nome,email,tel,cpf,endereco,edit,del)
                div.append(card)
            })
        })
    }
})

btnsend.addEventListener("click", ()=>{

    alert("Contato Adicionado!");
    
})


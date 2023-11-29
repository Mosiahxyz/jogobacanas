import express  from 'express'
import cors from 'cors'
import { Contato } from './Contato.js';


//lista de cadastros de pessoas ,ja premontada para ter algo para exibir 
export let listaContato = [
    
    new Contato(1, 'Carlos Alberto', "rikinhobacana@gmail.com", "(11) 98765-4321", "743.405.790-41", "Rua Patati Pataqua"),
    new Contato(2, 'Luiza Fellipa', "luizinhabb@gmail.com", "(21) 87654-3210", "909.824.790-34", "Avenida Broderagem"),
    new Contato(3, 'Francisco Kissab', "sabomuito@gmail.com", "(31) 76543-2109", "147.265.150-20", "Rua de Papai"),
    new Contato(4, 'Amaral Gabriel', "voltavd@gmail.com", "(41) 65432-1098", "250.400.370-66", "Avenida Lisboa"),
    new Contato(5, 'Jussara Farid', "leitejussara@gmail.com", "(17) 99230-4374", "291.892.790-26", "Rua Guarana"),
    new Contato(6, 'German Filho', "opaidagalera@gmail.com", "(51) 54321-0987", "421.708.020-45", "Rua dos Bobos"),
    new Contato(7, 'Marcos Leonardo', "selesantos@gmail.com", "(51) 8765-4321", "041.691.380-66", "Jarbas Guimaraes"),

]

//"ativando" os frameworks cors e express
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended : true}));

//metodo get para mostrar a lista de pessoas
app.get("/produtos",(req, res)=>{
    return res.status(200).json(listaContato)
})

//metodo post para adicionar cadastros
app.post("/produtos/novo", (req, res)=>{
    const { nome, email, tel, cpf, endereco } = req.body;
    listaContato.push(new Contato(listaContato.length + 1, nome, email, tel, cpf, endereco));
    return res.status(200).json("Cadastrado com sucesso!");

})


//metodo put para editar cadastros
app.put("/produtos/alterar/:id", (req,res)=>{
    const { id } = req.params;
    const { nome, email, tel, cpf, endereco } = req.body;
    let contato = listaContato.find(p => p.id == id)
    contato.nome = nome;
    contato.email = email;
    contato.tel = tel;
    contato.cpf = cpf;
    contato.endereco = endereco;
    return res.status(200).json("Alterado!")
})

//metodo delete para deledar cadastros
app.delete("/produtos/excluir/:id", (req,res)=>{
    let { id } = req.params;
    listaContato = listaContato.filter(p => p.id != id)
    return res.status(200).json("Deletado!")
})


//ligar a a
app.listen(3000,()=>{
    console.log("running!")
})
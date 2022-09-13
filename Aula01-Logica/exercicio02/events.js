function cadastrar(){
    event.preventDefault();
    tabela.innerHTML += 
    `<tr>
        <td>${nome.value}</td>
        <td>${email.value}</td>
        <td>${tel.value}</td>
        <td>${cidade.value}</td>
    </tr>`;
}
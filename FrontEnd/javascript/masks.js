
const input = document.querySelector('#cpf')

input.addEventListener('keypress', () => {
    let inputLength = input.value.length

    // MAX LENGHT 14  CPF
    if (inputLength == 3 || inputLength == 7) {
        input.value += '.'
    }else if (inputLength == 11) {
        input.value += '-'
    }

})


const inputtel = document.querySelector('#tel')

inputtel.addEventListener('keypress', () => {
    let inputtelLength = inputtel.value.length

    // MAX LENGHT 14  CPF
    if (inputtelLength == 0) {
        inputtel.value += '('
    }
    
    else if ( inputtelLength == 3) {
        inputtel.value += ') '
    }

    else if ( inputtelLength == 8) {
        inputtel.value += '-'
    }


})


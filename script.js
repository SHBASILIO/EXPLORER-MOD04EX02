let media

let students = [
    {
        nome: "Pedro Luca",
        nota_01: 7.50,
        nota_02: 10.0
    },

    {
        nome: "Esther Gabrielly",
        nota_01: 6.25,
        nota_02: 4.50
    },

    {
        nome: "Israel Sabino",
        nota_01: 5.55,
        nota_02: 7.75
    }
]

function calcMedia(student){
    media = ((student.nota_01 + student.nota_02) / 2).toFixed(2)
    return media
}

    for(let student of students){
        calcMedia(student)

        if(media >= 7){
            console.log(`
            Aluno(a): ${student.nome} 
            Média ..: ${calcMedia(student)} 
            Status..: Aprovado(a). Parabéns!`)
            
        }else{
            console.log(`
            Aluno(a): ${student.nome}
            Média ..: ${ calcMedia(student)}
            Status..: Reprovado(a). Tente novamente`)
        }
    }
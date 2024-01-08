let i = 0
while (i < 6) {
    i++
    if (i === 2){
        continue // Continue, empieza la siguiente iteración ignorando el código que sigue de el
    }
    if (i === 4){
        break // break, sale completamente del ciclo while
    }
    console.log(i)
}


//Break y Continue, pueden ser utilizados en ciclos For, For In, For Of, While y Do While
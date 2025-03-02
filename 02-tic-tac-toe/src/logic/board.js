import { WINNER_COMBOS } from '../constants'

export const checkWinner = (boardToCheck) => {
// Verificar si hay un ganador
for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo 
    if (
    boardToCheck[a] &&
    boardToCheck[a] === boardToCheck[b] &&
    boardToCheck[a] === boardToCheck[c]
    ) {        
    return boardToCheck[a] // X o O
    }
}
// Si no hay ganador
return null
}

export const checkEndGame = (newBoard) => {
    // Verificar si hay un empate
    return newBoard.every((square) => square !== null)
}
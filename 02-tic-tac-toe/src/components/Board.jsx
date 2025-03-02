import { Square } from "./Square"

export function Board ({board, updateBoard, checkWinner}) {
    const newBoard = [...board]
    
    return (
        <section className='game'>
            {
            newBoard.map((square, index) => {
                return (
                <Square 
                    key={index} 
                    index={index} 
                    updateBoard={updateBoard}
                    checkWinner={checkWinner}
                >
                    {square}
                </Square>
                
                )
            })
            }
        </section>
    
    )
}
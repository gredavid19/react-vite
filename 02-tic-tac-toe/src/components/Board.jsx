import { Square } from "./Square"

export function Board (board, updateBoard, checkWinner) {
    const [board, setBoard] = useState(Array(9).fill(null))
    
    board.map((square, index) => {
        return (
            <section className='game'>
                {
                    board.map((square, index) => {
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
    })
}
import './App.css'

const Turns={
  X:"x",
  O:"o"
}

const board=array(9).fill(null)

const Square=({children,updateBoard, index})=>{
  return (
    <div className='square'>
      {children}
    </div>
  )
}

function App() {
  return(
    <main classname='board'>
      <h1>Tres en raya</h1>
      <section className='game'>
        {
          board.map((_, index)=>{
            return(
              <Square
                key={index}
                index={index}
              >
                {index}
              </Square>  
            )
          })
        }
      </section>  
    </main>
  ) 
}

export default App

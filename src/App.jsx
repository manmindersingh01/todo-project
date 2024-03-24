import { useState } from 'react'
import './App.css'
import Items from './components/Items'

function App() {
  const [titleValue, setTitleValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Item 1',
      description: 'about ot done ',
      completed: false
    },
    {
      id: 2,
      title: 'Item 2',
      description: 'about ot done ',
      completed: false
    },
    {
      id: 3,
      title: 'Item 3',
      description: 'about ot done ',
      completed: false
    }
  ])

  const submitTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      title: titleValue,
      description: descriptionValue,
      completed: false
    }

    setTodos([...todos, newTodo]);
    setTitleValue('');
    setDescriptionValue('');
  }

  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-center items-center bg-bg'>
        <h1 className='text-t-dark text-7xl m-4'>Todos-app</h1>
        <div className='border border-t-light rounded-lg m-2 p-2 flex'>
          <button onClick={submitTodo} className='bg-t-light p-2 rounded-xl'>Add a todo</button>


          <input type="text" placeholder='Title' className='mx-2 rounded-xl border border-t-dark bg-bg p-1   text-t-fade' value={titleValue} onChange={(e) => setTitleValue(e.target.value)} />


          <input type="text" placeholder='Description' className='rounded-xl border border-t-dark bg-bg p-1 text-t-fade'
            value={descriptionValue}
            onChange={(e) => setDescriptionValue(e.target.value)} />
        </div>
        <Items todos={todos} />
      </div>
    </>
  )
}

export default App


import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Tormar curso', completed: false},
  { text: 'Bañarse', completed: false},
]; */



function App() {
 


  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    
  );
}

export default App;

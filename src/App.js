
import './App.css';
import Footer from './components/Footer'
import AddTodo from './container/AddTodo'
import VisibleTodoList from './container/VisibleTodoList/index';

function App() {
  return (
      <div className="App"> 
        <div className='contant'>
          <h1 >Todo List</h1>
          <AddTodo />
          <VisibleTodoList/>
          <Footer />
        </div>
      </div>
  );
}

export default App;

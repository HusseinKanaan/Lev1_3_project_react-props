60import TodoList from './components/TodoList';
import './App.css';

let data = [
  {
    icon: '/public/img/check.png',
    task: 'Hit the gym',
    img: '/public/img/gym.png',
  },
  {
    icon: '/public/img/check.png',
    task: 'Pay bills',
    img: '/public/img/bill.png',
  },
  {
    icon: '/public/img/doing.png',
    task: 'Meet George',
    img: '/public/img/dance.png',
  },
  {
    icon: '/public/img/doing.png',
    task: 'Buy eggs',
    img: '/public/img/eat.png',
  },
  {
    icon: '/public/img/no.png',
    task: 'Read a book',
    img: '/public/img/book.png',
  },
  {
    icon: '/public/img/no.png',
    task: 'Organize office',
    img: '/public/img/organize.png',
  }
]

function App() {
  return (
    <div className="App">
      <TodoList tasks={data} />

    </div>
  );
}

export default App;

import './App.css';

const Task = (value, id) => {
  return (
    <li key={id}>{value}</li>
  );
}

const tasks = ['Estudar React', 'Tentar não enlouquecer com o React', 'Comprar paçoca'];

function App() {
  return (
    <ul>{tasks.map((task, index) => Task(task, index))}</ul>
  );
}

export default App;

import { useEffect, useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedTodos, setPaginatedTodos] = useState([]);

  let pageSize = 10;
  let pagesNumbers;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((datas) => {
        setTodos(datas);
        let endIndex = pageSize * currentPage;
        let startIndex = endIndex - pageSize;
        let allShownTodos = datas.slice(startIndex, endIndex);
        setPaginatedTodos(allShownTodos);
      });
  }, []);

  useEffect(() => {
    let endIndex = pageSize * currentPage;
    let startIndex = endIndex - pageSize;
    let allShownTodos = todos.slice(startIndex, endIndex);
    setPaginatedTodos(allShownTodos);
  }, [currentPage]);

  const changePaginate = (newPage) => {
    setCurrentPage(newPage);
  };

  const pagesCount = Math.ceil(todos.length / pageSize);
  pagesNumbers = Array.from(Array(pagesCount).keys());

  return (
    <section className="w-3/4 bg-black p-1 text-white rounded-lg border h-1/2">
      {!todos ? (
        'Loading'
      ) : (
        <table className="w-full text-center">
          <thead>
            <tr>
              <th>ID</th>
              <th>User ID</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {paginatedTodos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.userId}</td>
                <td c>{todo.title}</td>
                <td>
                  <p
                    className={
                      todo.completed
                        ? 'bg-green-800 rounded-md w-auto '
                        : 'bg-red-800 rounded-md w-auto'
                    }
                  >
                    {todo.completed ? 'Completed' : 'Pending'}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <nav className="flex  justify-center items-center  ">
        <ul className="flex gap-x-4" aria-current="page">
          {pagesNumbers.map((pageNumber) => (
            <li
              style={{ cursor: 'pointer' }}
              className={
                pageNumber + 1 === currentPage
                  ? 'w-auto h-auto p-1 rounded-full bg-yellow-500'
                  : 'page-item'
              }
              key={pageNumber + 1}
              onClick={() => changePaginate(pageNumber + 1)}
            >
              <span className="page-link">{pageNumber + 1}</span>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

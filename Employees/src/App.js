import React,{useState} from 'react';
import List from './components/List';
import { data } from './helper/data'

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemPerPage = 3
  const lastItemIndex = currentPage * itemPerPage
  const firstItemIndex = lastItemIndex - itemPerPage
  const filteredData = data.slice(firstItemIndex,lastItemIndex) // 0 - 5 [0,1,2,3,4]
  const handlePreviousClick = () =>{
    setCurrentPage(prev => prev > 1 ? prev - 1 : prev);
  }
  const handleNextClick = ()=>{
    const maxPage = Math.ceil(data.length / itemPerPage)
    setCurrentPage(prev => prev < maxPage ? prev + 1 : 1)
  }
  return (
    <main>
      <section className="container">
        <h3>Employee List</h3>
        <h5>
          (Page: {currentPage} | Employees {firstItemIndex + 1} to {lastItemIndex})
        </h5>
        <List data={filteredData}/>
        <div className='btns'>
          <button onClick={handlePreviousClick}>Prev</button>
          <button onClick={handleNextClick}>Next</button>
        </div>
      </section>
    </main>
  );
}

export default App;

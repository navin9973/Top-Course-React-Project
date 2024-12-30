import { filterData, apiUrl } from "./data";
import Navbar from "./Navbar";
import Filter from "./filter";
import { useEffect } from "react";
import { useState } from "react";
import Cards from "./cards";
import Spinner from "./spinner"; 
import { toast } from "react-toastify";
import "./App.css";
function App() {
  const [courses, setCourse] = useState(null);
  const [loarding, setloarding] = useState(true);
  const [category,setCategory]=useState(filterData[0].title);
  async function fetchData() {
    setloarding(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      // console.log(output);
      
      setCourse(output.data);
    } catch (error) {
      toast.error("something wrong");
    }
    setloarding(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
      <div className=" back">
        <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
        {loarding?(<Spinner></Spinner>):(<Cards courses={courses} category={category}></Cards>)}
      </div>
    </>
  );
}

export default App;

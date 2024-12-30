 import "./filter.css"

 function Filter({filterData,category,setCategory}){
  function filterHandler(title){
    setCategory(title);

  }
  return(<div className="filter">
   {filterData.map((data)=>{
    return<button class="btn btn-primary btnn"  key={data.id} onClick={()=>filterHandler(data.title)}>{data.title} </button>
   })}
  
  </div>)
 }
 export default Filter; 
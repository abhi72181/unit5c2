import { useEffect, useState } from "react";

export const ShowStudents = () => {
  const [students, setStudents] = useState([]);
  const [order,setOrder]=useState("asc")
  const [sorts,setSorts]=useState("first_name")
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    let data = await fetch("http://localhost:8080/students");
    data = await data.json();
    setStudents(data);
  }

  const handleOrder=(e)=>{
    console.log("Final",e.target.value)
    setOrder(e.target.value)
    
  }
  const handleSort=(e)=>{
    console.log("Final",e.target.value)
    setSorts(e.target.value)
    
  }

  const sorting=(sorts)=>{
     if(order==="asc"){
        const sorted=[...students].sort((a,b)=>a[sorts]>b[sorts] ? 1 : -1)
     }
   
  }

  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
             onChange={handleSort}
          >
            <option    value="options">options</option>
            <option  value="first_name">First Name</option>
            <option   value="gender">Gender</option>
            <option   value="age">Age</option>
            <option  value="tenth_score">10th Score</option>
            <option   value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
            onChange={handleOrder}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort" onClick={sorting}>sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          {students.map((e)=>{
            return <tr className="row">
            <td className="first_name">{e.first_name}</td>
            <td className="last_name">{e.last_name}</td>
            <td className="email">{e.email}</td>
            <td className="gender">{e.gender}</td>
            <td className="age">{e.age}</td>
            <td className="tenth_score">{e.tenth_score}</td>
            <td className="twelth_score">{e.twelth_score}</td>
            <td className="preferred_branch">{e.preferred_branch}</td>
          </tr>
          })}
          
        </tbody>
      </table>
    </div>
  );
};

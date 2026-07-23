import { useState } from "react";
import './App.css';

import Header from './component/Header';
import SearchBar from './component/SearchBar';
import CourseFilter from './component/CourseFilter';
import StudentList from './component/StudentList';
import StatsDashboard from './component/StatsDashboard';

import studentsData from './data/student.json';

export default function App() {

  const [search, setSearch] = useState("");
  const [course, setCourse] = useState("All");


const courses = [
  "All",
  ...new Set(studentsData.map((s) => s.course))
];
  
  const filteredStudents = studentsData.filter((s) => {
    const matchName = s.name.toLowerCase().includes(search.toLowerCase());
    const matchCourse = course === "All" || s.course === course;
    return matchName && matchCourse;
  });

  return (
    <>
      <Header />

     
     <div className="filter-container">

  <SearchBar 
    search={search} 
    setSearch={setSearch} 
  />

  <CourseFilter 
    courses={courses}
    course={course}
    setCourse={setCourse}
  />

</div>

    
     {
  filteredStudents.length === 0 ? (
    <div className="empty-state">
      <h2>No students match your search</h2>
    </div>
  ) : (
    <StudentList students={filteredStudents} />
  )
}
      
      <StatsDashboard students={filteredStudents} />
    </>
  );
}
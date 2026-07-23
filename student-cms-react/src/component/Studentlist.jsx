import StudentCard from './StudentCard';

export default function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>

      {students.map((s) => (
        <StudentCard key={s.id} student={s} />
      ))}

    </div>
  );
}
export default function StudentCard({ student }) {
  return (
    <div style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
      <h3>{student.name}</h3>
       <p>ID: {student.id}</p>
       <p>Age: {student.age}</p>
       <p>Course: {student.course}</p>
       <p>GPA: {student.gpa}</p>
       <p>Enrollment Year: {student.enrollmentYear}</p>
       <p>Email: {student.email}</p>

    </div>
  );
}
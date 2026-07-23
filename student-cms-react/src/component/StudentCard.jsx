export default function StudentCard({ student }) {
  return (
    <div className="student-card">

      <h2 className="student-name">
        {student.name}
      </h2>

      <p>📧 {student.email}</p>

      <p>🎓 {student.course}</p>

      <p>📅 {student.enrollmentYear}</p>

      <p>⭐ GPA: {student.gpa}</p>

    </div>
  );
}
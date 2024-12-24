import './style.css'
import { StudentManager } from './src/studentManager.js'

const manager = new StudentManager();

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Student Grade Manager</h1>
    <div class="card">
      <form id="studentForm">
        <div class="form-group">
          <input type="text" id="name" placeholder="Student Name" required>
        </div>
        <div class="form-group">
          <input type="number" id="grade" placeholder="Grade" min="0" max="100" required>
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
    <div id="error" class="error"></div>
    <div id="studentList" class="student-list"></div>
  </div>
`

function updateStudentList() {
  const studentList = document.getElementById('studentList');
  const students = manager.getAllStudents();
  
  studentList.innerHTML = students.map(student => `
    <div class="student-item ${student.status?.toLowerCase()}">
      <span>${student.name}</span>
      <span>Grade: ${student.grade}</span>
      <span>Status: ${student.status}</span>
    </div>
  `).join('');
}

document.getElementById('studentForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const errorDiv = document.getElementById('error');
  errorDiv.textContent = '';
  
  const name = document.getElementById('name').value;
  const grade = document.getElementById('grade').value;
  
  try {
    manager.addStudent(name, grade);
    updateStudentList();
    e.target.reset();
  } catch (error) {
    errorDiv.textContent = error.message;
  }
});
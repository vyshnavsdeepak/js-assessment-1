// Student Grade Manager Assessment
// TODO: Implement the required functions to make the grade manager work

export class StudentManager {
  constructor() {
    this.students = [];
    this.PASS_THRESHOLD = 10;
  }

  // TODO: Implement this function
  // Should return "Pass" if grade is >= PASS_THRESHOLD, "Fail" otherwise
  checkPassOrFail(grade) {
    // Your code here
  }

  // TODO: Implement this function
  // Should validate that:
  // - name is a non-empty string
  // - grade is a number between 0 and 100
  // Should throw an error if validation fails
  validateStudent(name, grade) {
    // Your code here
  }

  // TODO: Implement this function
  // Should:
  // 1. Validate the student data using validateStudent()
  // 2. Check pass/fail status using checkPassOrFail()
  // 3. Create and return a student object with: name, grade, and status
  // 4. Add the student to this.students array
  addStudent(name, grade) {
    // Your code here
  }

  // Helper function to get all students (already implemented)
  getAllStudents() {
    return this.students;
  }
}
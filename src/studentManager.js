// Student Grade Manager Assessment
// TODO: Implement the required functions to make the grade manager work

export class StudentManager {
  constructor() {
    this.students = [];
    this.PASS_THRESHOLD = 60;
  }

  // TODO: Implement this function
  // Should return "Pass" if grade is >= PASS_THRESHOLD, "Fail" otherwise
  checkPassOrFail(grade) {
    // Your code here
    if(grade>=this.PASS_THRESHOLD){
      return "Pass";
    }else{
      return "Fail";
    }
  }

  // TODO: Implement this function
  // Should validate that:
  // - name is a non-empty string
  // - grade is a number between 0 and 100
  // Should throw an error if validation fails
  validateStudent(name, grade) {
    // Your code here
    if(typeof name!=="string"||name.trim().length===0){
      throw  new Error("Name must be a non-empty string");
;
    }
    let grade=Number(grade);
    if(typeof grade!=="number"|| grade<0 || grade>100){
      throw new Error("Grade must be a number between 0 and 100");
    }
    
  }

  // TODO: Implement this function
  // Should:
  // 1. Validate the student data using validateStudent()
  // 2. Check pass/fail status using checkPassOrFail()
  // 3. Create and return a student object with: name, grade, and status
  // 4. Add the student to this.students array
  addStudent(name, grade) {
    // Your code here
    try{
      this.validateStudent(name,grade); 
      const status=this.checkPassOrFail(grade);
      const obj={
        name:name,
        grade:grade,
        status:status
      }; 
      this.students.push(obj);
      return obj;
    }catch(error){
      throw new Error(error.message);
    }  
  }

  // Helper function to get all students (already implemented)
  getAllStudents() {
    return this.students;

  }
}

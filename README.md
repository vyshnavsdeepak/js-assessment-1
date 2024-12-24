# Student Grade Manager Assessment

This assessment tests your ability to implement a student grade management system using JavaScript. You'll need to implement three core functions while following proper validation and error handling practices.

## Tasks

Implement the following functions in `src/studentManager.js`:

### 1. `checkPassOrFail(grade)`
- Input: A numeric grade
- Output: Should return "Pass" if grade is >= 60, "Fail" otherwise
- Test file: `src/studentManager.test.js`

### 2. `validateStudent(name, grade)`
- Purpose: Validate student data before adding to system
- Validations:
  - Name must be a non-empty string
  - Grade must be a number between 0 and 100
- Should throw an error with appropriate message if validation fails
- Test file: `src/studentManager.test.js`

### 3. `addStudent(name, grade)`
- Purpose: Add a new student to the system
- Steps:
  1. Validate student data using validateStudent()
  2. Determine pass/fail status using checkPassOrFail()
  3. Create and return a student object with: name, grade, and status
  4. Add the student to internal students array
- Test file: `src/studentManager.test.js`

## Running the Project

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Run the tests:
   ```bash
   npm test
   ```

## Testing

The test suite checks:

1. Pass/Fail Logic:
   - Correct identification of passing grades (≥60)
   - Correct identification of failing grades (<60)

2. Input Validation:
   - Name validation (non-empty string)
   - Grade validation (0-100 range)
   - Type checking
   - Error handling

3. Student Management:
   - Proper student object creation
   - Correct storage in the system
   - Error handling for invalid inputs

## Evaluation Criteria

Your implementation will be evaluated on:

1. Correctness: All tests should pass
2. Error Handling: Proper validation and error messages
3. Code Quality: Clear, maintainable code
4. Edge Cases: Handling of boundary conditions
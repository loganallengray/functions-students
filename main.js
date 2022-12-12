/*
    define four functions
        createStudent() should return a new student object. 
        The name of the student, and which grade the student is in, 
        must be passed to the function as arguments. 
        The returned object should have a name property and a grade 
        property.
        addMathGrade() should add a new "math" property to the student 
        with a value of "B".
        addHistoryGrade() should add a new "history" property to the 
        student with a value of "C".
        addScienceGrade() should add a new "science" property to the 
        student with a value of "A".

    Remember to follow the flow that you learned about in the last chapter.

        Each function should define a parameter to hold the object.
        Each function should be invoked with an object provided as an argument.
        Each function should return the object after the property is added.
        The return value of the function should be stored in a variable.
*/

const createStudent = (name, grade) => {
    const newStudent = {
        name: name,
        grade: grade
    }

    return newStudent;
}

const mathGrade = (student, grade) => {
    student.math = grade;

    return student;
}

const historyGrade = (student, grade) => {
    student.history = grade;

    return student;
}

const scienceGrade = (student, grade) => {
    student.science = grade;

    return student;
}

studentLogan = createStudent("Logan", 13);

studentWithMath = mathGrade(studentLogan, "B");
studentWithHistory = historyGrade(studentWithMath, "C");
studentWithScience = scienceGrade(studentWithHistory, "A");

console.log(studentWithScience);
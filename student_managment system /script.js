let students = JSON.parse(localStorage.getItem("students")) || [];

let studentForm = document.getElementById("studentForm");
let studentTable = document.getElementById("studentTable");
let searchInput = document.getElementById("search");


// Display students when page loads
displayStudents(students);


// Add or Update Student
studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let studentId = document.getElementById("studentId").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;
    let mark = document.getElementById("mark").value;


    let student = {
        id: studentId ? Number(studentId) : Date.now(),
        name: name,
        age: age,
        email: email,
        course: course,
        mark: Number(mark)
    };


    // Update student
    if (studentId) {

        students = students.map(function(item) {

            if (item.id === Number(studentId)) {
                return student;
            }

            return item;

        });

        document.getElementById("submitButton").textContent = "Add Student";

    }

    // Add new student
    else {

        students.push(student);

    }


    saveStudents();

    displayStudents(students);

    studentForm.reset();

    document.getElementById("studentId").value = "";

});


// Display Students
function displayStudents(data) {

    studentTable.innerHTML = "";

    if (data.length === 0) {

        studentTable.innerHTML = `
            <tr>
                <td colspan="8">No students found</td>
            </tr>
        `;

        return;
    }


    data.forEach(function(student, index) {

        let status;

        if (student.mark >= 40) {
            status = `<span class="pass">Pass</span>`;
        } else {
            status = `<span class="fail">Fail</span>`;
        }


        let row = `
            <tr>

                <td>${index + 1}</td>

                <td>${student.name}</td>

                <td>${student.age}</td>

                <td>${student.email}</td>

                <td>${student.course}</td>

                <td>${student.mark}</td>

                <td>${status}</td>

                <td>

                    <button
                        class="edit-btn"
                        onclick="editStudent(${student.id})">
                        Edit
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteStudent(${student.id})">
                        Delete
                    </button>

                </td>

            </tr>
        `;


        studentTable.innerHTML += row;

    });

}


// Edit Student
function editStudent(id) {

    let student = students.find(function(item) {
        return item.id === id;
    });


    if (student) {

        document.getElementById("studentId").value = student.id;

        document.getElementById("name").value = student.name;

        document.getElementById("age").value = student.age;

        document.getElementById("email").value = student.email;

        document.getElementById("course").value = student.course;

        document.getElementById("mark").value = student.mark;

        document.getElementById("submitButton").textContent =
            "Update Student";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


// Delete Student
function deleteStudent(id) {

    let confirmDelete = confirm(
        "Are you sure you want to delete this student?"
    );


    if (confirmDelete) {

        students = students.filter(function(student) {
            return student.id !== id;
        });

        saveStudents();

        displayStudents(students);

    }

}


// Search Student
searchInput.addEventListener("input", function() {

    let searchValue = searchInput.value.toLowerCase();

    let filteredStudents = students.filter(function(student) {

        return (
            student.name.toLowerCase().includes(searchValue) ||
            student.email.toLowerCase().includes(searchValue) ||
            student.course.toLowerCase().includes(searchValue)
        );

    });


    displayStudents(filteredStudents);

});


// Save students to Local Storage
function saveStudents() {

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

}
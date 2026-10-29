
// Job data

const jobs = [

    {
        title: "Python Developer",
        company: "Tech Solutions",
        location: "Kochi",
        salary: "₹25,000 - ₹40,000",
        description: "Develop web applications using Python and Django."
    },

    {
        title: "Frontend Developer",
        company: "Creative Web",
        location: "Bangalore",
        salary: "₹30,000 - ₹45,000",
        description: "Build responsive websites using HTML, CSS and JavaScript."
    },

    {
        title: "Web Designer",
        company: "Design Studio",
        location: "Kochi",
        salary: "₹20,000 - ₹35,000",
        description: "Create modern and attractive website designs."
    },

    {
        title: "JavaScript Developer",
        company: "Digital Works",
        location: "Chennai",
        salary: "₹30,000 - ₹50,000",
        description: "Develop interactive web applications using JavaScript."
    },

    {
        title: "Python Intern",
        company: "Code Academy",
        location: "Calicut",
        salary: "₹10,000 - ₹15,000",
        description: "Learn Python development and work on real projects."
    },

    {
        title: "UI Developer",
        company: "Web World",
        location: "Bangalore",
        salary: "₹25,000 - ₹40,000",
        description: "Create user-friendly and responsive web interfaces."
    }

];


// Get container

const jobContainer =
    document.getElementById("jobContainer");


// Display jobs

function displayJobs(jobList) {

    jobContainer.innerHTML = "";


    if (jobList.length === 0) {

        jobContainer.innerHTML =
            "<p>No jobs found.</p>";

        return;
    }


    jobList.forEach(function(job, index) {

        const card =
            document.createElement("div");

        card.className = "job-card";


        card.innerHTML = `

            <h3>${job.title}</h3>

            <p class="company">
                ${job.company}
            </p>

            <p class="location">
                📍 ${job.location}
            </p>

            <p class="salary">
                💰 ${job.salary}
            </p>

            <p class="description">
                ${job.description}
            </p>

            <div class="job-buttons">

                <button
                    class="apply-btn"
                    onclick="applyJob('${job.title}')"
                >
                    Apply Now
                </button>

                <button
                    class="save-btn"
                    onclick="saveJob(${index})"
                >
                    ♡
                </button>

            </div>
        `;


        jobContainer.appendChild(card);

    });
}


// Search jobs

function searchJobs() {

    const searchText =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();


    const locationText =
        document
        .getElementById("locationInput")
        .value
        .toLowerCase();


    const filteredJobs =
        jobs.filter(function(job) {

            const title =
                job.title.toLowerCase();

            const company =
                job.company.toLowerCase();

            const location =
                job.location.toLowerCase();


            return (

                (title.includes(searchText) ||
                company.includes(searchText))

                &&

                location.includes(locationText)

            );

        });


    displayJobs(filteredJobs);
}


// Apply button

function applyJob(jobTitle) {

    alert(
        "You selected the job: " +
        jobTitle
    );

}


// Save job

function saveJob(index) {

    alert(
        jobs[index].title +
        " has been saved!"
    );

}


// Display jobs when page loads

displayJobs(jobs);


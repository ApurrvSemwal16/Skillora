const courses = [
    { id: 1, name: "Udemy", price: "$100", rating: "★★★★☆", url: "https://www.udemy.com" },
    { id: 2, name: "Coursera", price: "$200", rating: "★★★☆☆", url: "https://www.coursera.org" },
    { id: 3, name: "edX", price: "$150", rating: "★★★★☆", url: "https://www.edx.org" },
    { id: 4, name: "Pluralsight", price: "$75", rating: "★★★★★", url: "https://www.pluralsight.com" },

    { id: 5, name: "Python for Everybody", field: "CS", price: "$0", rating: "★★★★★", platform: "Coursera", duration: "8 weeks", instructor: "Charles Severance", url: "https://www.coursera.org/learn/python" },
    { id: 6, name: "Full-Stack Web Development", field: "CS", price: "$199", rating: "★★★★☆", platform: "Udemy", duration: "6 months", instructor: "Colt Steele", url: "https://www.udemy.com/course/the-web-developer-bootcamp-2024/" },
    { id: 7, name: "AI for Everyone", field: "CS", price: "$49", rating: "★★★★☆", platform: "Coursera", duration: "4 weeks", instructor: "Andrew Ng", url: "https://www.coursera.org/learn/ai-for-everyone" },
    { id: 8, name: "Java Programming Masterclass", field: "CS", price: "$199", rating: "★★★★★", platform: "Udemy", duration: "14 weeks", instructor: "Tim Buchalka", url: "https://www.udemy.com/course/java-the-complete-java-developer-course/" },
    { id: 9, name: "Machine Learning", field: "CS", price: "$79", rating: "★★★★★", platform: "edX", duration: "12 weeks", instructor: "Andrew Ng", url: "https://www.edx.org/course/principles-of-machine-learning" },

    { id: 10, name: "Data Structures and Algorithms", field: "CS", price: "$49", rating: "★★★★☆", platform: "Coursera", duration: "10 weeks", instructor: "Robert Sedgewick", url: "https://www.coursera.org/learn/algorithms-part1" },
    { id: 11, name: "Computer Vision Basics", field: "CS", price: "$29", rating: "★★★★☆", platform: "Udacity", duration: "6 weeks", instructor: "Sebastian Thrun", url: "https://www.udacity.com/course/introduction-to-computer-vision--ud810" },
    { id: 12, name: "Cybersecurity Fundamentals", field: "CS", price: "$59", rating: "★★★★☆", platform: "Pluralsight", duration: "5 weeks", instructor: "Troy Hunt", url: "https://www.pluralsight.com/courses/cyber-security-fundamentals" },
    { id: 13, name: "Cloud Computing with AWS", field: "CS", price: "$150", rating: "★★★★☆", platform: "LinkedIn", duration: "8 weeks", instructor: "Lynn Langit", url: "https://www.linkedin.com/learning/learning-amazon-web-services-aws-for-developers" },
    { id: 14, name: "Blockchain Basics", field: "CS", price: "$199", rating: "★★★☆☆", platform: "edX", duration: "4 weeks", instructor: "Bina Ramamurthy", url: "https://www.edx.org/course/blockchain-basics" },
    
    { id: 15, name: "Mechanical Engineering Fundamentals", field: "Engineering", price: "$49", rating: "★★★★☆", platform: "Coursera", duration: "10 weeks", instructor: "John Doe", url: "https://www.coursera.org/learn/mechanical-behavior-materials" },
    { id: 16, name: "Civil Engineering Design", field: "Engineering", price: "$99", rating: "★★★★☆", platform: "Udemy", duration: "6 weeks", instructor: "Jane Smith", url: "https://www.udemy.com/course/civil-structural-engineering-basics/" },
    { id: 17, name: "Electrical Circuits", field: "Engineering", price: "$149", rating: "★★★★★", platform: "edX", duration: "8 weeks", instructor: "Mike Brown", url: "https://www.edx.org/course/circuits-and-electronics-1-basic-circuit-analysis" },
    { id: 18, name: "Thermodynamics", field: "Engineering", price: "$199", rating: "★★★★☆", platform: "Pluralsight", duration: "10 weeks", instructor: "Emma White", url: "https://www.pluralsight.com/courses/thermodynamics-fundamentals" },
    { id: 19, name: "Robotics and Automation", field: "Engineering", price: "$250", rating: "★★★★★", platform: "Coursera", duration: "12 weeks", instructor: "Elon Musk", url: "https://www.coursera.org/learn/robotics" },

    { id: 20, name: "Intro to Medicine", field: "Medical", price: "$50", rating: "★★★★☆", platform: "Coursera", duration: "6 weeks", instructor: "Dr. John Williams", url: "https://www.coursera.org/learn/introductory-human-physiology" },
    { id: 21, name: "Human Anatomy", field: "Medical", price: "$100", rating: "★★★★★", platform: "edX", duration: "10 weeks", instructor: "Dr. Sarah Lee", url: "https://www.edx.org/course/human-anatomy" },
    { id: 22, name: "Biostatistics Basics", field: "Medical", price: "$75", rating: "★★★★☆", platform: "Pluralsight", duration: "8 weeks", instructor: "Dr. James Carter", url: "https://www.pluralsight.com/courses/biostatistics-fundamentals" },
    { id: 23, name: "Pharmacology Essentials", field: "Medical", price: "$200", rating: "★★★★☆", platform: "LinkedIn", duration: "12 weeks", instructor: "Dr. Lisa Kim", url: "https://www.linkedin.com/learning/pharmacology-essentials" },
    { id: 24, name: "Healthcare Informatics", field: "Medical", price: "$300", rating: "★★★★★", platform: "Udemy", duration: "14 weeks", instructor: "Dr. Michael Green", url: "https://www.udemy.com/course/healthcare-informatics/" },
    
    { id: 24, name: "Finance for Business", field: "Business", price: "$49", rating: "★★★★☆", platform: "Coursera", duration: "6 weeks", instructor: "Warren Buffett", url: "https://www.coursera.org/learn/financial-analysis-portfolios-risks-strategic-decisions" },
    { id: 25, name: "Digital Marketing", field: "Business", price: "$199", rating: "★★★★☆", platform: "Udemy", duration: "8 weeks", instructor: "Neil Patel", url: "https://www.udemy.com/course/digital-marketing-social-media-marketing-growth-hacking/" },
    { id: 26, name: "Leadership Skills", field: "Business", price: "$150", rating: "★★★★★", platform: "edX", duration: "10 weeks", instructor: "Simon Sinek", url: "https://www.edx.org/course/leadership-skills" },
    { id: 27, name: "Business Analytics", field: "Business", price: "$250", rating: "★★★★★", platform: "Pluralsight", duration: "12 weeks", instructor: "Jeff Bezos", url: "https://www.pluralsight.com/courses/business-analytics" },
    { id: 28, name: "Entrepreneurship 101", field: "Business", price: "$100", rating: "★★★★☆", platform: "Coursera", duration: "8 weeks", instructor: "Elon Musk", url: "https://www.coursera.org/learn/entrepreneurship-101" },
    
    { id: 29, name: "Graphic Design Basics", field: "Arts", price: "$49", rating: "★★★★☆", platform: "Udemy", duration: "6 weeks", instructor: "Chris Do", url: "https://www.udemy.com/course/graphic-design-basics/" },
    { id: 30, name: "Creative Writing", field: "Arts", price: "$99", rating: "★★★★☆", platform: "Coursera", duration: "8 weeks", instructor: "J.K. Rowling", url: "https://www.coursera.org/learn/creative-writing" },
    { id: 31, name: "Photography Masterclass", field: "Arts", price: "$150", rating: "★★★★★", platform: "edX", duration: "12 weeks", instructor: "Annie Leibovitz", url: "https://www.edx.org/course/photography-masterclass" },
    { id: 32, name: "Painting and Drawing", field: "Arts", price: "$75", rating: "★★★★☆", platform: "Pluralsight", duration: "10 weeks", instructor: "Pablo Picasso", url: "https://www.pluralsight.com/courses/painting-drawing-fundamentals" },
    { id: 33, name: "Music Production", field: "Arts", price: "$200", rating: "★★★★★", platform: "LinkedIn", duration: "14 weeks", instructor: "Hans Zimmer", url: "https://www.linkedin.com/learning/music-production-fundamentals" },
    
    { id: 34, name: "Data Science Bootcamp", field: "CS", price: "$500", rating: "★★★★★", platform: "Udemy", duration: "20 weeks", instructor: "Jose Portilla", url: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp" },
    { id: 35, name: "DevOps Essentials", field: "CS", price: "$300", rating: "★★★★☆", platform: "Pluralsight", duration: "10 weeks", instructor: "Kelsey Hightower", url: "https://www.pluralsight.com/paths/devops-foundations" },
    { id: 36, name: "Digital Marketing Strategy", field: "Business", price: "$120", rating: "★★★★☆", platform: "edX", duration: "6 weeks", instructor: "Gary Vaynerchuk", url: "https://www.edx.org/course/digital-marketing-strategy" },
    { id: 37, name: "Game Development", field: "CS", price: "$400", rating: "★★★★★", platform: "Coursera", duration: "12 weeks", instructor: "Will Wright", url: "https://www.coursera.org/learn/game-development" }
    
];

// Array to store selected courses for comparison
let selectedCourses = [];

// Function to dynamically render available courses
function renderCourses() {
    const courses = document.getElementById("course-list");

    // Clear any existing courses before rendering
    courseList.innerHTML = "";

    courses.forEach(course => {
        const courseButton = document.createElement("button");
        courseButton.innerText = courses.name;
        courseButton.classList.add("course-btn"); // Add a class for styling

        // Add click event listener
        courseButton.addEventListener('click', function() {
            addToCompare(courses); // Call addToCompare when a course is clicked
        });

        courseList.appendChild(courseButton);
    });
}

// Function to handle adding a course to the comparison list
function addToCompare(courses) {
    // Check if there are less than 3 selected courses
    if (selectedCourses.length < 3) {
        selectedCourses.push(course);
        alert(`${courses.name} added to comparison!`);
    } else {
        alert("You can compare a maximum of 3 courses.");
    }
}

// Function to handle the comparison action
function compareCourses() {
    if (selectedCourses.length < 2) {
        alert("Please select at least two courses to compare.");
    } else {
        const comparisonResultSection = document.getElementById("comparison-result");
        const resultContainer = document.getElementById("result-container");

        // Hide the courses section and show the comparison result section
        document.getElementById("courses").style.display = "none";
        comparisonResultSection.style.display = "block";

        // Add a simple comparison result (you can make this more detailed as needed)
        resultContainer.innerHTML = `
            <h3>Comparing: ${selectedCourses.map(courses => courses.name).join(" vs ")}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Duration</th>
                        <th>Price</th>
                        <th>Field</th>
                    </tr>
                </thead>
                <tbody>
                    ${selectedCourses.map(courses => `
                        <tr>
                            <td>${courses.name}</td>
                            <td>${courses.duration}</td>
                            <td>${courses.price}</td>
                            <td>${courses.field}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        `;
    }
}

// Close the comparison result
function closeComparison() {
    const comparisonResultSection = document.getElementById("comparison-result");
    const resultContainer = document.getElementById("result-container");

    // Clear the selected courses
    selectedCourses = [];

    // Hide the comparison section and show the courses section again
    document.getElementById("courses").style.display = "block";
    comparisonResultSection.style.display = "none";
    resultContainer.innerHTML = "";
}

// Call renderCourses when the page loads
document.addEventListener("DOMContentLoaded", renderCourses);

function renderCourses() {
    const courses = document.getElementById('course-list');
    courseList.innerHTML = ''; 

    courses.forEach((courses, index) => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        courseCard.innerHTML = `
            <h3>${courses.name}</h3>
            <p>Price: ${courses.price}</p>
            <p>Rating: ${course.rating}</p>
            <button onclick="selectCourse(${index})">Select</button>
        `;
        courseList.appendChild(courseCard);
    });
}

// Sample Courses by Field
const fieldCourses = {
engineering: [
    { name: "Mechanical Engineering", duration: "4 years", price: "$4000" },
    { name: "Electrical Engineering", duration: "4 years", price: "$4500" },
    { name: "Civil Engineering", duration: "4 years", price: "$4200" },
    { name: "Computer Engineering", duration: "4 years", price: "$4600" },
    { name: "Aerospace Engineering", duration: "4 years", price: "$5000" },
    { name: "Chemical Engineering", duration: "4 years", price: "$4300" },
    { name: "Biomedical Engineering", duration: "4 years", price: "$4800" },
    { name: "Automobile Engineering", duration: "4 years", price: "$4700" },
    { name: "Environmental Engineering", duration: "4 years", price: "$4400" },
    { name: "Industrial Engineering", duration: "4 years", price: "$4600" },
    { name: "Nuclear Engineering", duration: "4 years", price: "$5200" }, // New degree
    { name: "Marine Engineering", duration: "4 years", price: "$5100" }, // New degree
    { name: "Geotechnical Engineering", duration: "4 years", price: "$4800" }, // New degree
    { name: "Structural Engineering", duration: "4 years", price: "$4700" }, // New degree
    { name: "Renewable Energy Engineering", duration: "4 years", price: "$4900" }, // New degree
    { name: "Petroleum Engineering", duration: "4 years", price: "$5300" }, // New degree
    { name: "Mining Engineering", duration: "4 years", price: "$4600" }, // New degree
    { name: "Robotics Engineering", duration: "4 years", price: "$5400" }, // New degree
    { name: "Agricultural Engineering", duration: "4 years", price: "$4500" }, // New degree
    { name: "Material Science Engineering", duration: "4 years", price: "$4600" } // New degree
    ],
cs: [
    { name: "Computer Science", duration: "4 years", price: "$5000" },
    { name: "Software Engineering", duration: "4 years", price: "$4800" },
    { name: "AI & ML", duration: "3 years", price: "$5200" },
    { name: "Data Science", duration: "4 years", price: "$5300" },
    { name: "Cybersecurity", duration: "4 years", price: "$4900" },
    { name: "Cloud Computing", duration: "3 years", price: "$5100" },
    { name: "Game Development", duration: "4 years", price: "$5500" },
    { name: "Blockchain Technology", duration: "4 years", price: "$5400" },
    { name: "Software Architecture", duration: "4 years", price: "$5100" },
    { name: "Quantum Computing", duration: "4 years", price: "$5500" },
    { name: "Network Security", duration: "3 years", price: "$5100" }, // New degree
    { name: "Mobile App Development", duration: "4 years", price: "$5000" }, // New degree
    { name: "Web Development", duration: "3 years", price: "$4800" }, // New degree
    { name: "Virtual Reality", duration: "4 years", price: "$5300" }, // New degree
    { name: "Robotics", duration: "4 years", price: "$5400" }, // New degree
    { name: "DevOps Engineering", duration: "4 years", price: "$5200" }, // New degree
    { name: "Augmented Reality", duration: "4 years", price: "$5300" }, // New degree
    { name: "Software Testing", duration: "3 years", price: "$4700" }, // New degree
    { name: "IT Management", duration: "4 years", price: "$5100" }, // New degree
    { name: "Big Data Engineering", duration: "4 years", price: "$5400" } // New degree
    ],
medical: [
    { name: "MBBS", duration: "5 years", price: "$10,000" },
    { name: "Dentistry", duration: "4 years", price: "$8000" },
    { name: "Nursing", duration: "3 years", price: "$6000" },
    { name: "Pharmacy", duration: "4 years", price: "$7500" },
    { name: "Physiotherapy", duration: "4 years", price: "$7000" },
    { name: "Veterinary Science", duration: "5 years", price: "$9000" },
    { name: "Radiology", duration: "3 years", price: "$6500" },
    { name: "Cardiology", duration: "6 years", price: "$11,000" },
    { name: "Optometry", duration: "4 years", price: "$7200" },
    { name: "Nutritional Science", duration: "4 years", price: "$6800" },
    { name: "Medical Laboratory Technology", duration: "3 years", price: "$6500" }, // New degree
    { name: "Public Health", duration: "4 years", price: "$7200" }, // New degree
    { name: "Speech Therapy", duration: "4 years", price: "$7000" }, // New degree
    { name: "Occupational Therapy", duration: "4 years", price: "$7100" }, // New degree
    { name: "Podiatry", duration: "4 years", price: "$7500" }, // New degree
    { name: "Medical Imaging", duration: "4 years", price: "$7600" }, // New degree
    { name: "Genetics", duration: "4 years", price: "$7400" }, // New degree
    { name: "Anesthesia", duration: "4 years", price: "$7800" }, // New degree
    { name: "Forensic Science", duration: "4 years", price: "$7000" }, // New degree
    { name: "Chiropractic", duration: "4 years", price: "$7500" } // New degree
    ],
business: [
    { name: "Business Administration", duration: "3 years", price: "$7000" },
    { name: "Finance & Accounting", duration: "4 years", price: "$7500" },
    { name: "Marketing", duration: "3 years", price: "$6800" },
    { name: "Entrepreneurship", duration: "3 years", price: "$7200" },
    { name: "International Business", duration: "4 years", price: "$7800" },
    { name: "Human Resource Management", duration: "3 years", price: "$6900" },
    { name: "Supply Chain Management", duration: "4 years", price: "$7300" },
    { name: "Economics", duration: "4 years", price: "$7600" },
    { name: "Digital Marketing", duration: "3 years", price: "$7400" },
    { name: "Business Analytics", duration: "4 years", price: "$7700" },
    { name: "Project Management", duration: "3 years", price: "$7500" }, // New degree
    { name: "Real Estate", duration: "3 years", price: "$7100" }, // New degree
    { name: "Corporate Finance", duration: "4 years", price: "$7800" }, // New degree
    { name: "Management Information Systems", duration: "4 years", price: "$7400" }, // New degree
    { name: "Risk Management", duration: "4 years", price: "$7600" }, // New degree
    { name: "Leadership", duration: "3 years", price: "$7200" }, // New degree
    { name: "Retail Management", duration: "3 years", price: "$7300" }, // New degree
    { name: "Hospitality Management", duration: "3 years", price: "$7400" }, // New degree
    { name: "E-Commerce", duration: "3 years", price: "$7100" }, // New degree
    { name: "Taxation", duration: "3 years", price: "$6900" } // New degree
    ],
arts: [
    { name: "Fine Arts", duration: "3 years", price: "$4000" },
    { name: "Performing Arts", duration: "3 years", price: "$4200" },
    { name: "Literature", duration: "4 years", price: "$4500" },
    { name: "History", duration: "3 years", price: "$4300" },
    { name: "Philosophy", duration: "3 years", price: "$4100" },
    { name: "Music", duration: "4 years", price: "$4600" },
    { name: "Theatre", duration: "3 years", price: "$4400" },
    { name: "Visual Arts", duration: "4 years", price: "$4700" },
    { name: "Graphic Design", duration: "3 years", price: "$4200" },
    { name: "Photography", duration: "3 years", price: "$4300" },
    { name: "Animation", duration: "3 years", price: "$4500" }, // New degree
    { name: "Sculpture", duration: "3 years", price: "$4600" }, // New degree
    { name: "Fashion Design", duration: "4 years", price: "$4700" }, // New degree
    { name: "Interior Design", duration: "4 years", price: "$4800" }, // New degree
    { name: "Textile Design", duration: "3 years", price: "$4400" }, // New degree
    { name: "Film Studies", duration: "4 years", price: "$5000" }, // New degree
    { name: "Media Studies", duration: "3 years", price: "$4500" }, // New degree
    { name: "Dance", duration: "3 years", price: "$4300" }, // New degree
    { name: "Creative Writing", duration: "3 years", price: "$4400" }, // New degree
    { name: "Journalism", duration: "4 years", price: "$4700" } // New degree
    ]
};


// Function to show courses for the selected field
function showFieldCourses(field) {
    const courseContainer = document.getElementById('course-container');
    const fieldTitle = document.getElementById('field-title');
    const fieldSection = document.getElementById('field-courses');

    courseContainer.innerHTML = ''; 
    fieldTitle.textContent = `Courses in ${field.charAt(0).toUpperCase() + field.slice(1)}`;

    if (fieldCourses[field]) {
        fieldCourses[field].forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.classList.add('course-card');
            courseCard.innerHTML = `
                <h3>${course.name}</h3>
                <p>Duration: ${course.duration}</p>
                <p>Price: ${course.price}</p>
                <button onclick="selectCourse('${course.name}')">Select</button>
            `;
            courseContainer.appendChild(courseCard);
        });

        fieldSection.style.display = 'block';
        window.scrollTo({ top: fieldSection.offsetTop, behavior: 'smooth' });
    }
}

// Function to close courses section
function closeCourses() {
    document.getElementById('field-courses').style.display = 'none';
}


// Call this function on page load
window.onload = () => {
    renderCourses(); 
    displaySelectedCourses();
};

// Toggle Filter Visibility
function toggleFilter() {
    const filterOptions = document.getElementById('filter-options');
    filterOptions.style.display = (filterOptions.style.display === 'none' || filterOptions.style.display === '') 
        ? 'flex' 
        : 'none';
}

// Apply Filters
function applyFilters() {
    const fieldFilter = document.getElementById('field-filter').value;
    const ratingFilter = document.getElementById('rating-filter').value;
    const priceFilter = document.getElementById('price-filter').value;

    const courseContainer = document.getElementById('course-list');
    courseContainer.innerHTML = '';  

    const filteredCourses = courses.filter(course => {
        // Filter by field
        const fieldMatch = fieldFilter === 'all' || course.field === fieldFilter;

        // Filter by rating
        const ratingMatch = ratingFilter === 'all' || course.rating === `★`.repeat(ratingFilter);

        // Filter by price
        const priceMatch = (
            priceFilter === 'all' ||
            (priceFilter === 'free' && course.price === '$0') ||
            (priceFilter === 'low' && parseInt(course.price.slice(1)) < 100) ||
            (priceFilter === 'medium' && parseInt(course.price.slice(1)) >= 100 && parseInt(course.price.slice(1)) <= 300) ||
            (priceFilter === 'high' && parseInt(course.price.slice(1)) > 300)
        );

        return fieldMatch && ratingMatch && priceMatch;
    });

    // Display Filtered Courses
    filteredCourses.forEach((course, index) => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        courseCard.innerHTML = `
            <h3>${course.name}</h3>
            <p>Field: ${course.field}</p>
            <p>Price: ${course.price}</p>
            <p>Rating: ${course.rating}</p>
            <button onclick="selectCourse(${index})">Select</button>
        `;
        courseContainer.appendChild(courseCard);
    });

    // Hide filter menu after applying filters
    toggleFilter();
}

// Load courses dynamically
window.onload = displayCourses;

function displayCourses() {
    const container = document.getElementById('course-list');
    container.innerHTML = '';

    courses.forEach((course, index) => {
        const card = document.createElement('div');
        card.classList.add('course-card');
        card.innerHTML = `
            <h3>${course.name}</h3>
            <p>Field: ${course.field}</p>
            <p>Price: ${course.price}</p>
            <p>Rating: ${course.rating}</p>
            <p>Duration: ${course.duration}</p>
            <p>Instructor: ${course.instructor || "Unknown"}</p>
            <p>Platform: ${course.platform}</p>
            <a href="${course.url || '#'}" target="_blank" class="select-btn"></a>
            <button class="btn" onclick="window.open('${course.url}', '_blank')">Select</button>
        `;
        container.appendChild(card);
    });
}
window.onload = displayCourses;

// Array of articles with links
const articles = [
    { title: "Tech Innovations in 2025", description: "Exploring the latest in tech for 2025.", category: "tech", link: "https://www.techradar.com/news/tech-innovations-2025" },
    { title: "The Future of AI", description: "How AI is shaping our future.", category: "tech", link: "https://www.forbes.com/sites/bernardmarr/2021/12/06/the-top-5-ai-trends-in-2022/" },
    { title: "Computer Science: The Essentials", description: "Everything you need to know about Computer Science.", category: "cs", link: "https://www.coursera.org/articles/what-is-computer-science" },
    { title: "Tech Careers: Where to Start", description: "Guidance on pursuing a career in tech.", category: "tech", link: "https://www.forbes.com/sites/forbestechcouncil/2021/02/11/how-to-start-a-career-in-tech-without-a-computer-science-degree/" },
    { title: "Medical Advances in 2025", description: "Breakthroughs in the medical field.", category: "medical", link: "https://www.news-medical.net/health/What-are-the-Latest-Medical-Innovations.aspx" },
    { title: "Understanding Business Strategies", description: "Key business strategies for success.", category: "business", link: "https://hbr.org/2018/05/what-is-business-strategy" },
    { title: "A Guide to Business Intelligence", description: "What is Business Intelligence and how to use it?", category: "business", link: "https://www.sisense.com/glossary/business-intelligence/" },
    { title: "Tech Startups to Watch", description: "Discover the most promising tech startups of 2025.", category: "tech", link: "https://www.businessinsider.com/10-tech-startups-to-watch-2021-12" },
    { title: "Medical Innovations", description: "Top medical innovations changing lives.", category: "medical", link: "https://www.news-medical.net/health/Top-10-Medical-Innovations.aspx" },
    { title: "Digital Transformation in Healthcare", description: "How tech is transforming the healthcare industry.", category: "medical", link: "https://www.healthcareitnews.com/news/digital-health-innovation-healthcare-transformation-accelerates-2021" },
    { title: "Best Business Books of the Year", description: "Top recommended books for business enthusiasts.", category: "business", link: "https://www.forbes.com/sites/forbesbusinesscouncil/2021/12/03/the-10-best-business-books-of-2021/" },
    { title: "The Rise of Virtual Reality", description: "How VR is shaping the entertainment industry.", category: "tech", link: "https://www.wired.com/story/how-vr-is-shaping-the-future-of-entertainment/" },
    { title: "AI and Ethics", description: "The challenges of ethical AI.", category: "tech", link: "https://www.weforum.org/agenda/2020/11/ethical-ai-how-to-get-it-right/" },
    { title: "Medical Career Paths", description: "Career advice for aspiring medical professionals.", category: "medical", link: "https://www.medicalnewstoday.com/articles/what-are-the-different-medical-career-paths" },
    { title: "Business Opportunities in Asia", description: "Emerging business opportunities in the Asian market.", category: "business", link: "https://www.forbes.com/sites/forbesbusinesscouncil/2020/08/11/the-five-top-business-opportunities-in-asia/" },
    { title: "Arts in the Digital Age", description: "How technology is influencing the arts.", category: "arts", link: "https://www.artsy.net/article/artsy-editorial-7-ways-artists-are-using-technology" },
    { title: "Digital Art and NFTs", description: "Exploring the intersection of digital art and NFTs.", category: "arts", link: "https://www.artsy.net/article/artsy-editorial-what-are-nfts-and-why-are-they-important" },
    { title: "The Future of Work in Tech", description: "How work in tech is evolving.", category: "tech", link: "https://www.weforum.org/agenda/2020/08/the-future-of-work-in-tech-5-ways-the-industry-is-changing/" },
    { title: "Business Analytics for Success", description: "Master business analytics to grow your business.", category: "business", link: "https://www.forbes.com/sites/forbeshumanresourcescouncil/2021/05/05/how-business-analytics-can-be-used-for-success/" },
    { title: "Trends in Medical Technology", description: "The latest trends in medical tech and innovation.", category: "medical", link: "https://www.medicinenet.com/what_are_the_latest_trends_in_medical_technology/article.htm" },
    { title: "Becoming a Successful Entrepreneur", description: "Steps to take towards becoming a successful entrepreneur.", category: "business", link: "https://www.forbes.com/sites/theyec/2020/07/16/14-steps-to-becoming-a-successful-entrepreneur/" },
    { title: "Digital Marketing for Beginners", description: "A guide to starting your digital marketing journey.", category: "business", link: "https://www.shopify.com/guides/digital-marketing" },
    { title: "The Growth of Cloud Computing", description: "How cloud computing is impacting industries.", category: "tech", link: "https://www.cio.com/article/276981/cloud-computing-the-10-biggest-trends-in-cloud-computing.html" },
    { title: "The Role of Data in Modern Business", description: "Why data is king in the business world.", category: "business", link: "https://hbr.org/2021/05/data-and-the-future-of-business" },
    { title: "Exploring Medical Research", description: "New medical research that could change the future.", category: "medical", link: "https://www.news-medical.net/health/Medical-Research-and-Innovation.aspx" },
    { title: "Tech Tools for Entrepreneurs", description: "The best tools to help entrepreneurs succeed.", category: "tech", link: "https://www.entrepreneur.com/article/367974" },
    { title: "Understanding Business Models", description: "How to choose the right business model.", category: "business", link: "https://www.businessnewsdaily.com/15859-what-is-a-business-model.html" },
    { title: "The Best Books on Art and Design", description: "Books that every artist should read.", category: "arts", link: "https://www.artsy.net/article/artsy-editorial-8-books-every-artist-should-read" },
    { title: "AI and Creativity", description: "The future of AI in creative industries.", category: "tech", link: "https://www.wired.com/story/how-ai-is-influencing-creativity/" },
    { title: "How to Start a Tech Company", description: "Tips for starting your own tech company.", category: "tech", link: "https://www.techradar.com/how-to/how-to-start-your-own-tech-company" },
    { title: "Becoming a Digital Artist", description: "How to thrive as a digital artist in today's world.", category: "arts", link: "https://www.artsy.net/article/artsy-editorial-how-to-become-a-digital-artist" }
];



let currentPage = 1;
const articlesPerPage = 10;

// Display articles based on filter and pagination
function displayArticles() {
    const categoryFilter = document.getElementById('category-filter').value;
    const filteredArticles = filterArticles(categoryFilter);
    
    // Calculate the index of the first and last article on the current page
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const articlesToDisplay = filteredArticles.slice(startIndex, endIndex);
    
    // Display the filtered and paginated articles
    const articleContainer = document.getElementById('article-container');
    articleContainer.innerHTML = "";  // Clear the container before adding new articles
    
    articlesToDisplay.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');
        articleElement.innerHTML = `
            <h3><a href="${article.link}" target="_blank">${article.title}</a></h3>
            <p>${article.description}</p>
        `;
        articleContainer.appendChild(articleElement);
    });

    // Enable/Disable pagination buttons based on the current page
    document.getElementById('prev-btn').disabled = currentPage === 1;
    document.getElementById('next-btn').disabled = currentPage * articlesPerPage >= filteredArticles.length;
}

// Filter articles based on category, or shuffle if category is 'all'
function filterArticles(category) {
    if (category === "all") {
        return shuffleArray([...articles]);  // Return shuffled articles if no filter is applied
    }
    return articles.filter(article => article.category === category);  // Filter articles by category
}

// Shuffle the array of articles using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  // Swap elements
    }
    return array;
}

// Change the page for pagination
function changePage(direction) {
    currentPage += direction;
    displayArticles();  // Redisplay articles with the updated page number
}

// Initial load of articles
displayArticles();

// Show Modal
const loginBtn = document.getElementById('login-btn');
const modal = document.getElementById('auth-modal');
const closeModal = document.getElementById('close-modal');
const authForm = document.getElementById('auth-form');
const toggleBtn = document.getElementById('toggle-btn');
const submitBtn = document.getElementById('submit-btn');
const modalTitle = document.getElementById('modal-title');

// Event to show modal when clicking the login/signup button
loginBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; // Display modal
});

// Close modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Hide modal
});

// Toggle between Sign Up and Login
let isSignUp = false; // flag to track whether it's signup or login
toggleBtn.addEventListener('click', () => {
    isSignUp = !isSignUp;
    if (isSignUp) {
        modalTitle.innerHTML = 'Sign Up';
        submitBtn.innerHTML = 'Sign Up';
        toggleBtn.innerHTML = 'Already have an account? Login';
    } else {
        modalTitle.innerHTML = 'Login';
        submitBtn.innerHTML = 'Login';
        toggleBtn.innerHTML = 'Don\'t have an account? Sign Up';
    }
});

// Handle form submission
authForm.addEventListener('submit', (e) => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (isSignUp) {
        // Sign up
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Signed up successfully!');
    } else {
        // Login
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (storedUsername === username && storedPassword === password) {
            alert('Login successful!');
        } else {
            alert('Invalid username or password');
        }
    }

    modal.style.display = 'none'; // Close modal after submitting
});
// Store the forum posts (this should come from your real user data)
let forumPosts = [];

// Get the current user (mocked here as a simple object)
let currentUser = JSON.parse(localStorage.getItem('currentUser'));

// Load forum posts from localStorage (if any)
function loadForumPosts() {
    const storedPosts = localStorage.getItem('forumPosts');
    if (storedPosts) {
        forumPosts = JSON.parse(storedPosts);
    } else {
        forumPosts = [];
    }
}

// Save the forum posts to localStorage
function saveForumPosts() {
    localStorage.setItem('forumPosts', JSON.stringify(forumPosts));
}

// Function to display forum posts
function displayForumPosts() {
    const forumContainer = document.getElementById('forum-posts');
    forumContainer.innerHTML = ''; // Clear previous posts

    forumPosts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('forum-post');
        const username = post.username ? post.username : 'Anonymous';
        
        postDiv.innerHTML = `
            <div class="post-header">
                <span class="username">${username}</span>
                <span class="timestamp">${post.timestamp}</span>
                <button class="reply-toggle" onclick="toggleReplies(${index})">&#x2193; Show Replies</button>
            </div>
            <p class="post-content">${post.content}</p>
            <div id="replies-${index}" class="replies" style="display: none;">
                ${post.replies.map(reply => `
                    <div class="reply">
                        <span class="username">${reply.username}</span>: ${reply.content}
                    </div>
                `).join('')}
                <div>
                    <textarea id="reply-text-${index}" placeholder="Write a reply..."></textarea>
                    <button onclick="submitReply(${index})">Post Reply</button>
                </div>
            </div>
        `;
        forumContainer.appendChild(postDiv);
    });
}

// Function to submit a comment
function submitComment() {
    const commentText = document.getElementById('comment-text').value;

    if (commentText.trim() === '') {
        alert('Please write a comment.');
        return;
    }

    const newPost = {
        username: currentUser ? currentUser.username : 'Anonymous',
        content: commentText,
        timestamp: new Date().toLocaleString(),
        replies: [] // Initially no replies
    };

    forumPosts.unshift(newPost); // Add the new post at the beginning of the array
    saveForumPosts(); // Save the updated posts to localStorage
    displayForumPosts(); // Update the displayed posts
    document.getElementById('comment-text').value = ''; // Clear the textarea
}

// Function to submit a reply to a specific post
function submitReply(postIndex) {
    const replyText = document.getElementById(`reply-text-${postIndex}`).value;

    if (replyText.trim() === '') {
        alert('Please write a reply.');
        return;
    }

    const newReply = {
        username: currentUser ? currentUser.username : 'Anonymous',
        content: replyText
    };

    forumPosts[postIndex].replies.push(newReply); // Add the reply to the specific post
    saveForumPosts(); // Save the updated posts to localStorage
    displayForumPosts(); // Update the displayed posts
}

// Function to toggle the visibility of the forum section
function toggleForum() {
    const forumContainer = document.getElementById('user-forum');
    const toggleButton = document.getElementById('toggle-forum');

    if (forumContainer.style.display === 'none') {
        forumContainer.style.display = 'block';
        toggleButton.innerHTML = '&#x2191; Hide Forum';
    } else {
        forumContainer.style.display = 'none';
        toggleButton.innerHTML = '&#x2193; Show Forum';
    }
}

// Function to toggle the visibility of replies for a specific post
function toggleReplies(postIndex) {
    const repliesDiv = document.getElementById(`replies-${postIndex}`);
    const toggleButton = repliesDiv.previousElementSibling.querySelector('.reply-toggle');

    if (repliesDiv.style.display === 'none') {
        repliesDiv.style.display = 'block';
        toggleButton.innerHTML = '&#x2191; Hide Replies';
    } else {
        repliesDiv.style.display = 'none';
        toggleButton.innerHTML = '&#x2193; Show Replies';
    }
}

// Initialize the page by loading the posts from localStorage and displaying them
loadForumPosts();
displayForumPosts();

// Function to delete a specific comment
function deleteComment(postIndex) {
    // Confirm if the user wants to delete the comment
    if (confirm('Are you sure you want to delete this comment?')) {
        forumPosts.splice(postIndex, 1); // Remove the comment at the given index
        saveForumPosts(); // Save the updated posts to localStorage
        displayForumPosts(); // Update the displayed posts
    }
}

// Function to delete a specific reply to a comment
function deleteReply(postIndex, replyIndex) {
    // Confirm if the user wants to delete the reply
    if (confirm('Are you sure you want to delete this reply?')) {
        forumPosts[postIndex].replies.splice(replyIndex, 1); // Remove the reply at the given index
        saveForumPosts(); // Save the updated posts to localStorage
        displayForumPosts(); // Update the displayed posts
    }
}

// Function to display forum posts (with delete buttons for comments and replies)
function displayForumPosts() {
    const forumContainer = document.getElementById('forum-posts');
    forumContainer.innerHTML = ''; // Clear previous posts

    forumPosts.forEach((post, postIndex) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('forum-post');
        const username = post.username ? post.username : 'Anonymous';
        
        postDiv.innerHTML = `
            <div class="post-header">
                <span class="username">${username}</span>
                <span class="timestamp">${post.timestamp}</span>
                <button class="reply-toggle" onclick="toggleReplies(${postIndex})">&#x2193; Show Replies</button>
                <button class="delete-comment" onclick="deleteComment(${postIndex})">Delete Comment</button>
            </div>
            <p class="post-content">${post.content}</p>
            <div id="replies-${postIndex}" class="replies" style="display: none;">
                ${post.replies.map((reply, replyIndex) => `
                    <div class="reply">
                        <span class="username">${reply.username}</span>: ${reply.content}
                        <button class="delete-reply" onclick="deleteReply(${postIndex}, ${replyIndex})">Delete Reply</button>
                    </div>
                `).join('')}
                <div>
                    <textarea id="reply-text-${postIndex}" placeholder="Write a reply..."></textarea>
                    <button onclick="submitReply(${postIndex})">Post Reply</button>
                </div>
            </div>
        `;
        forumContainer.appendChild(postDiv);
    });
}

// Function to submit a comment
function submitComment() {
    const commentText = document.getElementById('comment-text').value;

    if (commentText.trim() === '') {
        alert('Please write a comment.');
        return;
    }

    const newPost = {
        username: currentUser ? currentUser.username : 'Anonymous',
        content: commentText,
        timestamp: new Date().toLocaleString(),
        replies: [] // Initially no replies
    };

    forumPosts.unshift(newPost); // Add the new post at the beginning of the array
    saveForumPosts(); // Save the updated posts to localStorage
    displayForumPosts(); // Update the displayed posts
    document.getElementById('comment-text').value = ''; // Clear the textarea
}

// Function to submit a reply to a specific post
function submitReply(postIndex) {
    const replyText = document.getElementById(`reply-text-${postIndex}`).value;

    if (replyText.trim() === '') {
        alert('Please write a reply.');
        return;
    }

    const newReply = {
        username: currentUser ? currentUser.username : 'Anonymous',
        content: replyText
    };

    forumPosts[postIndex].replies.push(newReply); // Add the reply to the specific post
    saveForumPosts(); // Save the updated posts to localStorage
    displayForumPosts(); // Update the displayed posts
}

// Function to toggle the visibility of the forum section
function toggleForum() {
    const forumContainer = document.getElementById('user-forum');
    const toggleButton = document.getElementById('toggle-forum');

    if (forumContainer.style.display === 'none') {
        forumContainer.style.display = 'block';
        toggleButton.innerHTML = '&#x2191; Hide Forum';
    } else {
        forumContainer.style.display = 'none';
        toggleButton.innerHTML = '&#x2193; Show Forum';
    }
}

// Function to toggle the visibility of replies for a specific post
function toggleReplies(postIndex) {
    const repliesDiv = document.getElementById(`replies-${postIndex}`);
    const toggleButton = repliesDiv.previousElementSibling.querySelector('.reply-toggle');

    if (repliesDiv.style.display === 'none') {
        repliesDiv.style.display = 'block';
        toggleButton.innerHTML = '&#x2191; Hide Replies';
    } else {
        repliesDiv.style.display = 'none';
        toggleButton.innerHTML = '&#x2193; Show Replies';
    }
}







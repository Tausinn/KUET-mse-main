// Function to show or hide optional sections based on user selection
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = section.style.display === "none" ? "block" : "none";
  }
  
  // Function to generate the resume
  function generateResume() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('Skills').value;
    const interests = document.getElementById('interests').value;
    const projects = document.getElementById('projects').value;
    const hobbies = document.getElementById('hobbies').value;
    const achievements = document.getElementById('achievements').value;
  
    // Dynamically generate the resume structure using template literals
    let resumeContent = `
      <div class="resume-wrapper">
        <div class="left-column">
          <h2 class="name-title">${name}</h2>
          <div class="personal-details">
            <p><i class="fas fa-envelope"></i> ${email}</p>
            <p><i class="fas fa-phone-alt"></i> ${phone}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${address}</p>
          </div>
  
          <h3>Skills</h3>
          <p>${skills}</p>
  
         
          ${document.getElementById('hobbies-check').checked ? `<h3>Hobbies</h3><p>${hobbies}</p>` : ''}
         
        </div>
  
        <div class="right-column">
          <h3>Experience</h3>
          <div class="section-content">
            <p>${experience}</p>
          </div>
  
          <h3>Education</h3>
          <div class="section-content">
            <p>${education}</p>
          </div>
  
          ${document.getElementById('projects-check').checked ? `<h3>Projects</h3><div class="section-content"><p>${projects}</p></div>` : ''}

           ${document.getElementById('achievements-check').checked ? `<h3>Achievements</h3><div class="section-content"><p>${achievements}</p></div>` : ''}

            ${document.getElementById('interests-check').checked ? `<h3>Interests</h3><div class="section-content"><p>${interests}</p></div>` : ''}
        </div>
      </div>
    `;
  
    // Inject the generated resume content into the resume-output div
    document.getElementById('resume-output').innerHTML = resumeContent;
  
    // Add the Download button for generating the PDF
    document.getElementById('resume-output').innerHTML += `
      <button id="download-resume" onclick="downloadResume()">Download Resume as PDF</button>
    `;
  }
  
  // Function to download the resume as a PDF
  function downloadResume() {
    const downloadButton = document.getElementById('download-resume');
    const element = document.getElementById('resume-output');
  
    // Hide the Download button before generating the PDF
    downloadButton.style.display = 'none';
  
    const opt = {
      margin: 0.5,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
  
    // Use html2pdf to generate and download the PDF
    html2pdf().from(element).set(opt).save().then(() => {

      downloadButton.style.display = 'block';
    });
  }
// Initial Dummy Data
const initialData = {
    name: "Jane Doe",
    jobTitle: "Senior Marketing Manager",
    email: "jane.doe@email.com",
    phone: "(555) 123-4567",
    location: "New York, NY",
    summary: "Creative and results-oriented Marketing Manager with 10+ years of experience. Proven track record in digital strategy, brand building, and team leadership.",
    skills: "Digital Marketing, SEO, Content Strategy, Team Leadership, Analytics, Social Media",
    experience: "Senior Marketing Manager | TechCorp | 2018 - Present\n- Increased organic traffic by 40% within one year.\n- Managed a team of 10 specialists.\n\nMarketing Specialist | StartupInc | 2015 - 2018\n- Launched 3 successful product campaigns.\n- Optimized ad spend reducing costs by 15%.",
    education: "MBA Marketing | NYU Stern | 2013 - 2015\nB.A. Communications | UCLA | 2009 - 2013",
    // New Dummy Data
    projects: "Viral Brand Campaign | 2022\n- Led a cross-platform campaign reaching 1M+ users.\n- Collaborated with 5 major influencers.\n\nCRM Integration System | 2020\n- Overhauled internal data systems improving efficiency by 25%.",
    achievements: "Best Global Campaign Award 2021\nTop Performer Q3 & Q4 2019",
    certifications: "Google Analytics Certified\nHubSpot Content Marketing Certification"
};

// Load initial data
window.onload = function() {
    document.getElementById('name').value = initialData.name;
    document.getElementById('jobTitle').value = initialData.jobTitle;
    document.getElementById('email').value = initialData.email;
    document.getElementById('phone').value = initialData.phone;
    document.getElementById('location').value = initialData.location;
    document.getElementById('summary').value = initialData.summary;
    document.getElementById('skills').value = initialData.skills;
    document.getElementById('experience').value = initialData.experience;
    document.getElementById('education').value = initialData.education;
    // Load new fields
    document.getElementById('projects').value = initialData.projects;
    document.getElementById('achievements').value = initialData.achievements;
    document.getElementById('certifications').value = initialData.certifications;
    
    updatePreview();
};

function updatePreview() {
    const data = {
        name: document.getElementById('name').value,
        jobTitle: document.getElementById('jobTitle').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        location: document.getElementById('location').value,
        summary: document.getElementById('summary').value,
        skills: document.getElementById('skills').value.split(',').map(s => s.trim()).filter(s => s),
        experience: document.getElementById('experience').value,
        education: document.getElementById('education').value,
        // Get new fields
        projects: document.getElementById('projects').value,
        achievements: document.getElementById('achievements').value,
        certifications: document.getElementById('certifications').value
    };

    const template = document.getElementById('template-selector').value;
    const container = document.getElementById('resume-preview');
    
    container.className = template;

    if (template === 'template-modern') {
        renderModern(container, data);
    } else if (template === 'template-classic') {
        renderClassic(container, data);
    } else {
        renderCreative(container, data);
    }
}

function parseTextToHtml(text) {
    if (!text) return '';
    return text.split('\n').map(line => {
        if (line.trim().startsWith('-')) {
            return `<li>${line.trim().substring(1)}</li>`;
        } else if (line.trim() === '') {
            return '<br>';
        }
        return `<p><strong>${line}</strong></p>`;
    }).join('');
}

// --- RENDER FUNCTIONS ---

function renderModern(container, data) {
    container.innerHTML = `
        <div class="sidebar">
            <h1>${data.name}</h1>
            <p style="opacity: 0.8; margin-bottom: 20px;">${data.jobTitle}</p>
            
            <div style="margin-top: 30px;">
                <h2>Contact</h2>
                <p><i class="fas fa-envelope"></i> ${data.email}</p>
                <p><i class="fas fa-phone"></i> ${data.phone}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${data.location}</p>
            </div>

            <div style="margin-top: 30px;">
                <h2>Skills</h2>
                <ul style="list-style: none; padding: 0;">
                    ${data.skills.map(s => `<li style="margin-bottom: 8px;">• ${s}</li>`).join('')}
                </ul>
            </div>
            
             <div style="margin-top: 30px;">
                <h2>Education</h2>
                <p style="white-space: pre-line; font-size: 0.9rem;">${data.education}</p>
            </div>

            ${data.certifications ? `
            <div style="margin-top: 30px;">
                <h2>Certifications</h2>
                <p style="white-space: pre-line; font-size: 0.9rem;">${data.certifications}</p>
            </div>` : ''}
        </div>

        <div class="main-content">
            <h2>Professional Summary</h2>
            <p>${data.summary}</p>

            <h2 style="margin-top: 30px;">Experience</h2>
            <div>${parseTextToHtml(data.experience)}</div>

            ${data.projects ? `
            <h2 style="margin-top: 30px;">Projects</h2>
            <div>${parseTextToHtml(data.projects)}</div>` : ''}

            ${data.achievements ? `
            <h2 style="margin-top: 30px;">Achievements</h2>
            <div>${parseTextToHtml(data.achievements)}</div>` : ''}
        </div>
    `;
}

function renderClassic(container, data) {
    container.innerHTML = `
        <header>
            <h1>${data.name}</h1>
            <p style="font-size: 1.1rem;">${data.jobTitle}</p>
            <div class="contact-info">
                ${data.email} | ${data.phone} | ${data.location}
            </div>
        </header>

        <h2>Professional Summary</h2>
        <p>${data.summary}</p>

        <h2>Experience</h2>
        <div>${parseTextToHtml(data.experience)}</div>

        ${data.projects ? `<h2>Projects</h2><div>${parseTextToHtml(data.projects)}</div>` : ''}
        
        ${data.achievements ? `<h2>Achievements</h2><div>${parseTextToHtml(data.achievements)}</div>` : ''}

        <h2>Education</h2>
        <p style="white-space: pre-line">${data.education}</p>

        ${data.certifications ? `<h2>Certifications</h2><p style="white-space: pre-line">${data.certifications}</p>` : ''}

        <h2>Skills</h2>
        <p>${data.skills.join(' • ')}</p>
    `;
}

function renderCreative(container, data) {
    container.innerHTML = `
        <header>
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <h1 style="font-size: 2.2rem;">${data.name}</h1>
                    <p style="font-size: 1.1rem; opacity: 0.9;">${data.jobTitle}</p>
                </div>
                <div style="text-align: right; font-size: 0.9rem;">
                    <p>${data.email}</p>
                    <p>${data.phone}</p>
                    <p>${data.location}</p>
                </div>
            </div>
        </header>

        <div style="padding: 0 20px;">
            <h2>Summary</h2>
            <p>${data.summary}</p>

            <h2>Experience</h2>
            <div>${parseTextToHtml(data.experience)}</div>

            ${data.projects ? `<h2>Projects</h2><div>${parseTextToHtml(data.projects)}</div>` : ''}

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 20px;">
                <div>
                    <h2>Education</h2>
                    <p style="white-space: pre-line">${data.education}</p>

                    ${data.achievements ? `<h2>Achievements</h2><p style="white-space: pre-line">${data.achievements}</p>` : ''}
                </div>
                <div>
                    <h2>Skills</h2>
                    <div style="display: flex; flex-wrap: wrap; margin-bottom: 20px;">
                        ${data.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
                    </div>

                    ${data.certifications ? `<h2>Certifications</h2><p style="white-space: pre-line">${data.certifications}</p>` : ''}
                </div>
            </div>
        </div>
    `;
}

function downloadPDF() {
    const element = document.getElementById('resume-preview');

    // 1. Add the cleanup class to remove shadows/margins before capturing
    element.classList.add('generating-pdf');

    // 2. Configure PDF options
    const opt = {
        margin:       0,       // No margins
        filename:     'my_resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { 
        scale: 2,          // High resolution
        useCORS: true,     // detailed handling
        scrollY: 0         // Fixes potential scrolling issues
        },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // 3. Generate PDF, then remove the cleanup class
    html2pdf()
    .set(opt)
    .from(element)
    .save()
    .then(() => {
    // Restore the shadow and look after download is finished
        element.classList.remove('generating-pdf');
    });
}
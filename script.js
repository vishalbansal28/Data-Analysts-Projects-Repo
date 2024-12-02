// Project Data
const projects = [
    {
        id: "instagram_clone",
        name: "Instagram Clone Data Analysis",
        category: "sql",
        description: "A comprehensive SQL analysis of user behavior and engagement patterns in an Instagram-like platform. This project explores user interactions, content performance, and platform growth metrics.",
        longDescription: `This project analyzes a simulated Instagram-like platform's database to derive meaningful insights about user behavior, content engagement, and platform growth. Key areas of analysis include:

1. User Growth & Engagement
- Monthly active user trends
- User registration patterns
- Session duration analysis
- Engagement rate calculations

2. Content Performance
- Most liked posts analysis
- Hashtag effectiveness
- Posting time impact
- User content preferences

3. User Interaction Patterns
- Follow/unfollow behavior
- Comment engagement rates
- Like distribution analysis
- User retention metrics`,
        images: [
            {
                src: "visuals/InstagramCloneDashboard.png",
                alt: "Instagram Analytics Dashboard",
                caption: "Main analytics dashboard showing user engagement metrics"
            }
        ],
        github: "https://github.com/yourusername/instagram-clone-analysis",
        documentation: "sql_queries/instagram_clone_analysis.sql",
        technologies: ["SQL", "MySQL", "Data Analysis", "Data Visualization"],
        highlights: [
            "25% month-over-month growth in active users",
            "4.2% average engagement rate",
            "Advanced user behavior analysis"
        ],
        skills: ["Complex SQL Queries", "Data Modeling", "Statistical Analysis", "Dashboard Design"]
    },
    {
        id: "covid_analysis",
        name: "COVID-19 Global Analysis",
        category: "python",
        description: "Python-based analysis of global COVID-19 data, exploring infection rates, vaccination progress, and regional trends using Pandas and Matplotlib.",
        longDescription: `A detailed analysis of the global COVID-19 pandemic using Python data science tools. This project includes:

1. Data Processing
- Data cleaning and normalization
- Missing value handling
- Date-based aggregation
- Population normalization

2. Statistical Analysis
- Infection rate calculations
- Mortality rate analysis
- Vaccination effectiveness
- Regional comparisons

3. Visualization
- Time series analysis
- Geographic distribution
- Vaccination progress
- Trend analysis`,
        images: [
            {
                src: "visuals/WorldBankCO2Emission.png",
                alt: "Global Analysis Dashboard",
                caption: "Interactive dashboard showing global COVID-19 statistics"
            },
            {
                src: "visuals/GeoChart.png",
                alt: "Geographic Distribution",
                caption: "Geographic distribution of cases worldwide"
            }
        ],
        github: "https://github.com/yourusername/covid19-analysis",
        documentation: "python_analysis/covid19_analysis.ipynb",
        technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
        highlights: [
            "Global vaccination impact analysis",
            "Regional trend comparison",
            "Interactive visualization dashboard"
        ],
        skills: ["Data Cleaning", "Statistical Analysis", "Data Visualization", "Python Programming"]
    },
    {
        id: "retail_analytics",
        name: "E-commerce Retail Analytics",
        category: "excel",
        description: "Advanced Excel dashboard for retail performance analysis, featuring dynamic visualizations and automated reporting systems.",
        longDescription: `Comprehensive retail analytics dashboard built in Excel, providing insights into:

1. Sales Performance
- Revenue trends
- Product performance
- Category analysis
- Seasonal patterns

2. Customer Analytics
- Customer segmentation
- Purchase behavior
- Retention rates
- Lifetime value

3. Inventory Management
- Stock level monitoring
- Reorder point analysis
- Inventory turnover
- Product performance`,
        images: [
            {
                src: "visuals/E-commerceRetail.png",
                alt: "Retail Dashboard",
                caption: "Main retail analytics dashboard"
            },
            {
                src: "visuals/RetailPricingAnalytics.png",
                alt: "Pricing Analytics",
                caption: "Pricing and revenue analysis"
            }
        ],
        github: "https://github.com/yourusername/retail-analytics",
        documentation: "excel_projects/retail_analytics_documentation.pdf",
        technologies: ["Excel", "Power Query", "Pivot Tables", "VBA"],
        highlights: [
            "35% YoY revenue growth insights",
            "Automated reporting system",
            "Dynamic inventory management"
        ],
        skills: ["Advanced Excel", "Data Analysis", "Dashboard Design", "Automation"]
    },
    {
        id: "business_kpi",
        name: "Business KPI Dashboard",
        category: "powerbi",
        description: "Interactive Power BI dashboard for tracking and analyzing key business metrics and performance indicators.",
        longDescription: `A comprehensive Power BI dashboard suite for business performance monitoring:

1. Financial Metrics
- Revenue analysis
- Profit margins
- Cost structure
- Growth trends

2. Operational KPIs
- Productivity metrics
- Resource utilization
- Process efficiency
- Quality indicators

3. Performance Tracking
- Goal achievement
- Benchmark comparison
- Trend analysis
- Forecasting`,
        images: [
            {
                src: "visuals/KPIDashboard.png",
                alt: "KPI Dashboard",
                caption: "Main KPI tracking dashboard"
            },
            {
                src: "visuals/TopDownDashboard.png",
                alt: "Top-Down Analysis",
                caption: "Executive overview dashboard"
            },
            {
                src: "visuals/BottomUpDashboard.png",
                alt: "Bottom-Up Analysis",
                caption: "Detailed metrics dashboard"
            }
        ],
        github: "https://github.com/yourusername/business-kpi-dashboard",
        documentation: "powerbi_projects/kpi_dashboard_documentation.pdf",
        technologies: ["Power BI", "DAX", "Power Query", "SQL"],
        highlights: [
            "Real-time performance tracking",
            "Custom visualization components",
            "Automated data refresh"
        ],
        skills: ["Power BI Development", "DAX Formulas", "Data Modeling", "Visual Design"]
    },
    {
        id: "municipality_analysis",
        name: "Municipality Data Analysis",
        category: "powerbi",
        description: "Comprehensive analysis of municipal data focusing on public services and resource allocation.",
        longDescription: `Analysis of municipal operations and services:

1. Service Delivery
- Response times
- Service coverage
- Quality metrics
- Resource allocation

2. Budget Analysis
- Expenditure tracking
- Resource utilization
- Cost-benefit analysis
- Budget forecasting

3. Performance Metrics
- Department efficiency
- Service satisfaction
- Resource optimization
- Trend analysis`,
        images: [
            {
                src: "visuals/MunicipalityDataAnalysisDashboard.png",
                alt: "Municipality Dashboard",
                caption: "Municipal services analytics dashboard"
            }
        ],
        github: "https://github.com/yourusername/municipality-analysis",
        documentation: "powerbi_projects/municipality_analysis.pdf",
        technologies: ["Power BI", "Excel", "SQL", "DAX"],
        highlights: [
            "Data-driven decision making",
            "Resource optimization",
            "Improved service delivery"
        ],
        skills: ["Data Analysis", "Power BI", "Statistical Analysis", "Report Design"]
    },
    {
        id: "work_analysis",
        name: "Work From Home Analysis",
        category: "excel",
        description: "Analysis of remote work patterns and productivity metrics in the post-pandemic workplace.",
        longDescription: `Detailed analysis of remote work effectiveness:

1. Productivity Metrics
- Task completion rates
- Work hours analysis
- Meeting efficiency
- Project timelines

2. Employee Engagement
- Communication patterns
- Collaboration metrics
- Team interaction
- Work-life balance

3. Resource Utilization
- Technology adoption
- Tool effectiveness
- Cost analysis
- Infrastructure needs`,
        images: [
            {
                src: "visuals/WorkFromHome.png",
                alt: "WFH Analysis",
                caption: "Remote work productivity dashboard"
            }
        ],
        github: "https://github.com/yourusername/wfh-analysis",
        documentation: "excel_projects/wfh_analysis_documentation.pdf",
        technologies: ["Excel", "Power Query", "VBA", "Power Pivot"],
        highlights: [
            "25% increase in productivity",
            "Improved work-life balance",
            "Enhanced collaboration tools"
        ],
        skills: ["Data Analysis", "Excel Modeling", "Dashboard Design", "Process Analysis"]
    }
];

// Function to create project cards
function createProjectCards() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.innerHTML = '';

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-category', project.category);
        card.setAttribute('data-id', project.id);

        card.innerHTML = `
            <div class="project-image-container">
                <img src="${project.images[0].src}" alt="${project.images[0].alt}" class="project-image">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.name}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.technologies.slice(0, 3).map(tech => 
                        `<span class="project-tag">${tech}</span>`
                    ).join('')}
                </div>
            </div>
        `;

        card.addEventListener('click', () => showProjectModal(project.id));
        projectsGrid.appendChild(card);
    });
}

// Function to show project modal
function showProjectModal(projectId) {
    const project = projects.find(project => project.id === projectId);
    const modal = document.getElementById('projectModal');
    const modalContent = modal.querySelector('.modal-content');

    modalContent.innerHTML = `
        <span class="close-modal">&times;</span>
        
        <div class="modal-header">
            <h2 class="modal-title">${project.name}</h2>
            <div class="modal-links">
                <a href="${project.github}" target="_blank" class="modal-link">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
                <a href="${project.documentation}" target="_blank" class="modal-link">
                    <i class="fas fa-file-alt"></i> Documentation
                </a>
            </div>
        </div>

        <div class="modal-gallery">
            ${project.images.map(image => `
                <div class="modal-image-container">
                    <img src="${image.src}" alt="${image.alt}" class="modal-image">
                    <p class="image-caption">${image.caption}</p>
                </div>
            `).join('')}
        </div>

        <div class="modal-details">
            <div class="modal-section">
                <h3 class="modal-section-title">Project Overview</h3>
                <p class="modal-description">${project.longDescription.replace(/\n/g, '<br>')}</p>
            </div>

            <div class="modal-section">
                <h3 class="modal-section-title">Technologies Used</h3>
                <div class="project-tags">
                    ${project.technologies.map(tech => 
                        `<span class="project-tag">${tech}</span>`
                    ).join('')}
                </div>
            </div>

            <div class="modal-section">
                <h3 class="modal-section-title">Key Skills</h3>
                <div class="project-tags">
                    ${project.skills.map(skill => 
                        `<span class="project-tag">${skill}</span>`
                    ).join('')}
                </div>
            </div>

            <div class="modal-section">
                <h3 class="modal-section-title">Highlights</h3>
                <div class="project-tags">
                    ${project.highlights.map(highlight => 
                        `<span class="project-tag">${highlight}</span>`
                    ).join('')}
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'block';

    const closeBtn = modalContent.querySelector('.close-modal');
    closeBtn.onclick = () => modal.style.display = 'none';

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// Filter projects by category
function filterProjects(category) {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createProjectCards();

    // Set up filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterProjects(button.dataset.filter);
        });
    });
});

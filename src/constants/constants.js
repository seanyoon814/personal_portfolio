export const WORK_EXPERIENCE = [
  {
    title: 'Software Engineer I',
    subtitle: 'Trulioo',
    date: 'Jan 2026 - Present',
    description:
    [
      'Currently working here! Most of my development revolves around .NET 8, AWS, and MySQL.',
    ],
    icon: (
      <img
        src="/images/trulioo.png"
        alt="Trulioo"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',     
          padding: '0',          
          borderRadius: '50%',    
        }}
      />
    ),
  },
  {
    title: 'Software Engineer Co-op',
    subtitle: 'Trulioo',
    date: 'May 2025 - Jan 2026',
    description:
    [
      'Set up a local AWS SQS environment using LocalStack, Docker, and Terraform for 3 development teams by enabling local testing of ASP.NET services without AWS dependencies, reducing development time by 20%',
      'Migrated 10+ ASP.NET apps from legacy AKM encryption to AWS KMS for improved security; confirmed correctness through unit tests, step-through debugging, and MySQL-based data validation'
    ],
    icon: (
      <img
        src="/images/trulioo.png"
        alt="Trulioo"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',     
          padding: '0',          
          borderRadius: '50%',    
        }}
      />
    ),
  },
  {
    title: 'Full-Stack Developer Co-op',
    subtitle: 'Powerex',
    date: 'May 2024 - Dec 2024',
    description:
    [
      'Developed Chelan Account Admin Portal using ASP.NET, React.js, SQL Server, and AD Authentication, allowing administrators to manage and monitor 1000+ energy protocols and 100+ user accounts from Chelan, WA',
      'Powered energy traders to make profitable trades at Powerex by creating multiple Windows service applications using ASP.NET, SQL Server, Oracle Database, and Snowflake Data Cloud',
      'Swiftly diagnosed and resolved operational issues, minimizing disruption to business operations and ensuring high user satisfaction',
      'Collaborated closely with business analysts and end users to align technical specifications with organizational goals'
    ],
    icon: 
    (
      <img
        src="/images/powerex.jpg"
        alt="Powerex"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',      
          padding: '0',           
          borderRadius: '50%',     
        }}
      />
    )
  },
  {
    title: 'Web Developer Co-op (Part Time)',
    subtitle: 'Provincial Health',
    date: 'Sept 2023 - Apr 2024',
    description:
    [
      'Developed an ASP.NET Web API used in a queue management system for handling concurrent requests within a scheduling optimizer used by health centers in British Columbia, decreasing server CPU utilization by 80%',
      'Created a data dictionary (ASP.NET, NuGet, SharePoint API, Excel, SFTP) to enhance uniformity in chemotherapy protocols across various health centers in British Columbia'
    ],
    icon: (
      <img
        src="/images/phsa.png"
        alt="PHSA"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',      
          padding: '0',           
          borderRadius: '50%',     
        }}
      />
    )
  },
  {
    title: 'Web Developer Co-op',
    subtitle: 'Provincial Health',
    date: 'Jan 2023 - Aug 2023',
    description:
    [
      'Designed a full-stack web application using ASP.NET Core, Razor, REST, and SQL Server that provided over 5,000 authenticated users with an interface to access business-sensitive administrative documents',
      'Created CI/CD pipelines using Azure DevOps, automating code integration, verification processes and deployment to test and production environments, utilizing build agents and release pipelines',
      'Refactored several web applications originally built in Visual Basic, adapting them within ASP.NET Core'
    ],
    icon: (
      <img
        src="/images/phsa.png"
        alt="PHSA"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',      
          padding: '0',           
          borderRadius: '50%',     
        }}
      />
    )
  },
  // // Add more timeline items here...
];

export const PROJECTS = [
  {
    title: 'Uber Eats vs. Door Dash',
    description: "Ever wonder which platform has better deals? This application utilizes web scraping to extract data from Uber Eats and Door Dash. It is still under construction - be sure to check back later!",
    image: '/images/ubereats.jpg',
    tags: ['React.js', 'ASP.NET', 'SQL Server'],
    source: '',
    visit: '',
    id: 0,
  },
  {
    title: 'Ace Detailing Web Application',
    description:"The business website for Ace Detailing, this website provides a beautiful and dynamic front page, blog, as well as a booking system that allows users to connect with the business owners and view status updates.",
    image: '/images/ace.png',
    tags: ['React.js', 'Node.js Express', 'MongoDB', 'GCP'],
    visit: 'https://github.com/seanyoon814/Ace-Detailing',
    id: 1,
  },
  {
    title: 'SFUnited Web Application',
    description: "This application combines SFU course scheduling, Rate My Professor, SFU clubs, and Google Maps API to create a centralized hub for students to access common resources in one location.",
      image: '/images/sfu.png',
      tags: ['HTML', 'CSS', 'Node.js Express', 'PostgreSQL'],
    visit: 'https://github.com/seanyoon814/SFUnited',
    id: 2,
  },
  {
    title: 'Phishing Detector',
    description: "Utilizing Random Forest Models, this application is able to distinguish between phishing and non-phishing emails with a 98% accuracy rate. Model validation was done using ROC-AUC. ",  
      image: '/images/phishing.jpg',
      tags: ['Python', 'Scikit-learn', 'Pytorch'],
    visit: 'https://github.com/propigftw/phishing_detector',
    id: 3,
  }
];

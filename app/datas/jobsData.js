
const jobsData = [
    {
        "projectDetails": {
            "title": "E-commerce Website Redesign",
            "hourlyRate": "More than 30 hrs/week",
            "duration": "2-4 months",
            "experienceLevel": "Intermediate",
            "remoteJob": true,
            "projectType": "Ongoing project"
        },
        "skillsAndExpertise": {
            "ecommerceDevelopmentSkills": true,
            "skills": ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"]
        },
        "activity": {
            "proposals": "8 to 12",
            "lastViewedByClient": "1 hour ago"
        },
        "jobDescription": "Redesign an existing e-commerce website to enhance user experience and visual appeal."
    },
    {
        "projectDetails": {
            "title": "Custom API Integration for CRM System",
            "hourlyRate": "More than 30 hrs/week",
            "duration": "1-2 months",
            "experienceLevel": "Intermediate",
            "remoteJob": true,
            "projectType": "One-time project"
        },
        "skillsAndExpertise": {
            "ecommerceDevelopmentSkills": false,
            "skills": ["Python", "Django", "REST API", "PostgreSQL"]
        },
        "activity": {
            "proposals": "5 to 8",
            "lastViewedByClient": "3 hours ago"
        },
        "jobDescription": "Integrate a custom API with an existing CRM system to streamline data synchronization."
    },
    {
        "projectDetails": {
            "title": "Mobile App Development",
            "hourlyRate": "More than 30 hrs/week",
            "duration": "3-6 months",
            "experienceLevel": "Intermediate",
            "remoteJob": true,
            "projectType": "Ongoing project"
        },
        "skillsAndExpertise": {
            "ecommerceDevelopmentSkills": false,
            "skills": ["React Native", "Firebase", "Redux", "Mobile App Design"]
        },
        "activity": {
            "proposals": "15 to 20",
            "lastViewedByClient": "4 hours ago"
        },
        "jobDescription": "Develop a cross-platform mobile app for a new product launch, integrating with existing backend services."
    },
    {
        "projectDetails": {
            "title": "Payment Gateway Integration",
            "hourlyRate": "More than 30 hrs/week",
            "duration": "1-2 months",
            "experienceLevel": "Intermediate",
            "remoteJob": true,
            "projectType": "One-time project"
        },
        "skillsAndExpertise": {
            "ecommerceDevelopmentSkills": true,
            "skills": ["PHP", "Stripe API", "Payment Gateway Integration"]
        },
        "activity": {
            "proposals": "10 to 15",
            "lastViewedByClient": "2 hours ago"
        },
        "jobDescription": "Integrate a secure payment gateway into an existing e-commerce platform to facilitate online transactions."
    },
    {
        "projectDetails": {
            "title": "Full-stack Web Development for Online Learning Platform",
            "hourlyRate": "More than 30 hrs/week",
            "duration": "3-6 months",
            "experienceLevel": "Intermediate",
            "remoteJob": true,
            "projectType": "Ongoing project"
        },
        "skillsAndExpertise": {
            "ecommerceDevelopmentSkills": false,
            "skills": ["React", "Node.js", "Express", "MongoDB", "GraphQL"]
        },
        "activity": {
            "proposals": "12 to 18",
            "lastViewedByClient": "1 hour ago"
        },
        "jobDescription": "Develop a comprehensive online learning platform, including user authentication, content management, and interactive learning features."
    },
    {
        "projectDetails": {
            "title": "WordPress Website Customization",
            "hourlyRate": "More than 30 hrs/week",
            "duration": "1-2 months",
            "experienceLevel": "Intermediate",
            "remoteJob": true,
            "projectType": "One-time project"
        },
        "skillsAndExpertise": {
            "ecommerceDevelopmentSkills": false,
            "skills": ["WordPress", "PHP", "HTML", "CSS"]
        },
        "activity": {
            "proposals": "8 to 12",
            "lastViewedByClient": "2 hours ago"
        },
        "jobDescription": "Customize and enhance the functionality of an existing WordPress website, including theme adjustments and plugin integrations."
    },
    {
        "projectDetails": {
            "title": "Magento 2 Extension Development",
            "hourlyRate": "More than 30 hrs/week",
            "duration": "2-4 months",
            "experienceLevel": "Intermediate",
            "remoteJob": true,
            "projectType": "Ongoing project"
        },
        "skillsAndExpertise": {
            "ecommerceDevelopmentSkills": true,
            "skills": ["Magento 2", "PHP", "MySQL", "EAV Model"]
        },
        "activity": {
            "proposals": "15 to 20",
            "lastViewedByClient": "3 hours ago"
        },
        "jobDescription": "Develop custom Magento 2 extensions to enhance the functionality of an existing e-commerce platform."
    },
    {
        "projectDetails": {
            "title": "API Integration for Inventory Management System",
            "hourlyRate": "More than 30 hrs/week",
            "duration": "1-3 months",
            "experienceLevel": "Intermediate",
            "remoteJob": true,
            "projectType": "Ongoing project"
        },
        "skillsAndExpertise": {
            "ecommerceDevelopmentSkills": true,
            "skills": ["REST API", "Java", "Spring Boot", "MySQL"]
        },
        "activity": {
            "proposals": "10 to 15",
            "lastViewedByClient": "4 hours ago"
        },
        "jobDescription": "Integrate APIs for an inventory management system, allowing seamless communication with other business applications."
    },
    {
        "projectDetails": {
            "title": "Headless E-commerce Development with Next.js",
            "hourlyRate": "More than 30 hrs/week",
            "duration": "3-6 months",
            "experienceLevel": "Intermediate",
            "remoteJob": true,
            "projectType": "Ongoing project"
        },
        "skillsAndExpertise": {
            "ecommerceDevelopmentSkills": true,
            "skills": ["Next.js", "React", "Node.js", "GraphQL", "Headless CMS"]
        },
        "activity": {
            "proposals": "12 to 18",
            "lastViewedByClient": "1 hour ago"
        },
        "jobDescription": "Build a headless e-commerce platform using Next.js for a modern and scalable web application."
    },
    {
        "projectDetails": {
            "title": "Custom Module Development for PrestaShop",
            "hourlyRate": "More than 30 hrs/week",
            "duration": "2-4 months",
            "experienceLevel": "Intermediate",
            "remoteJob": true,
            "projectType": "Ongoing project"
        },
        "skillsAndExpertise": {
            "ecommerceDevelopmentSkills": true,
            "skills": ["PrestaShop", "PHP", "MySQL", "Module Development"]
        },
        "activity": {
            "proposals": "8 to 12",
            "lastViewedByClient": "2 hours ago"
        },
        "jobDescription": "Develop custom modules for PrestaShop to enhance the functionality and features of an existing online store."
    },
    {
        "projectDetails": {
            "title": "Shopify Theme Customization",
            "hourlyRate": "More than 30 hrs/week",
            "duration": "1-2 months",
            "experienceLevel": "Intermediate",
            "remoteJob": true,
            "projectType": "One-time project"
        },
        "skillsAndExpertise": {
            "ecommerceDevelopmentSkills": true,
            "skills": ["Shopify", "Liquid", "HTML", "CSS"]
        },
        "activity": {
            "proposals": "15 to 20",
            "lastViewedByClient": "3 hours ago"
        },
        "jobDescription": "Customize the theme of a Shopify store to align with the brand identity and improve user experience."
    },
    {
        "projectDetails": {
            "title": "WooCommerce Plugin Development",
            "hourlyRate": "More than 30 hrs/week",
            "duration": "2-4 months",
            "experienceLevel": "Intermediate",
            "remoteJob": true,
            "projectType": "Ongoing project"
        },
        "skillsAndExpertise": {
            "ecommerceDevelopmentSkills": true,
            "skills": ["WooCommerce", "WordPress", "PHP", "Plugin Development"]
        },
        "activity": {
            "proposals": "10 to 15",
            "lastViewedByClient": "4 hours ago"
        },
        "jobDescription": "Develop custom WooCommerce plugins to extend the functionality of an existing WordPress-based online store."
    },
    {
        "projectDetails": {
            "title": "Mobile App Integration with Magento 2",
            "hourlyRate": "More than 30 hrs/week",
            "duration": "3-6 months",
            "experienceLevel": "Intermediate",
            "remoteJob": true,
            "projectType": "Ongoing project"
        },
        "skillsAndExpertise": {
            "ecommerceDevelopmentSkills": true,
            "skills": ["Magento 2", "React Native", "REST API", "Mobile App Integration"]
        },
        "activity": {
            "proposals": "12 to 18",
            "lastViewedByClient": "1 hour ago"
        },
        "jobDescription": "Integrate a mobile app with Magento 2, allowing seamless data synchronization and enhancing the overall user experience."
    },
    {
        "projectDetails": {
            "title": "BigCommerce Store Optimization",
            "hourlyRate": "More than 30 hrs/week",
            "duration": "2-4 months",
            "experienceLevel": "Intermediate",
            "remoteJob": true,
            "projectType": "Ongoing project"
        },
        "skillsAndExpertise": {
            "ecommerceDevelopmentSkills": true,
            "skills": ["BigCommerce", "JavaScript", "CSS", "Performance Optimization"]
        },
        "activity": {
            "proposals": "8 to 12",
            "lastViewedByClient": "2 hours ago"
        },
        "jobDescription": "Optimize the performance of a BigCommerce store, focusing on page load speed, user interface enhancements, and overall responsiveness."
    },
    {
        "projectDetails": {
            "title": "Custom Payment Gateway for WooCommerce",
            "hourlyRate": "More than 30 hrs/week",
            "duration": "1-2 months",
            "experienceLevel": "Intermediate",
            "remoteJob": true,
            "projectType": "One-time project"
        },
        "skillsAndExpertise": {
            "ecommerceDevelopmentSkills": true,
            "skills": ["WooCommerce", "WordPress", "PHP", "Payment Gateway Integration"]
        },
        "activity": {
            "proposals": "15 to 20",
            "lastViewedByClient": "3 hours ago"
        },
        "jobDescription": "Develop a custom payment gateway plugin for WooCommerce to accommodate specific payment processing requirements."
    },
    {
        "projectDetails": {
            "title": "Multi-language Support for Shopify Store",
            "hourlyRate": "More than 30 hrs/week",
            "duration": "2-4 months",
            "experienceLevel": "Intermediate",
            "remoteJob": true,
            "projectType": "Ongoing project"
        },
        "skillsAndExpertise": {
            "ecommerceDevelopmentSkills": true,
            "skills": ["Shopify", "Liquid", "Internationalization", "Localization"]
        },
        "activity": {
            "proposals": "10 to 15",
            "lastViewedByClient": "4 hours ago"
        },
        "jobDescription": "Implement multi-language support for a Shopify store, enabling a seamless experience for customers in different regions."
    }
]


export default jobsData
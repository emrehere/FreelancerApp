interface FreelancerReview {
  jobTitle: string;
  duration: string;
  earnings: string;
  employeeFeedback: {
    rating: number;
    comments: string;
  };
}

type FreelancerData = {
  freelancer: {
    name: string;
    location: string;
    jobSuccess: string;
    totalJobs: number;
    totalHours: number;
    hoursPerWeek: string;
    responseTime: string;
  };
  skills: string[];
  availability: {
    readyToWork: boolean;
    contractToHire: boolean;
    responseTime: string;
  };
  reviews: FreelancerReview[];
  linkedAccounts: string[];
  profileDescription: string;
};

const freelancers: FreelancerData[] = [
    {
        "freelancer": {
          "name": "Alice W.",
          "location": "New York, USA",
          "jobSuccess": "95%",
          "totalJobs": 60,
          "totalHours": 400,
          "hoursPerWeek": "More than 30 hrs/week",
          "responseTime": "< 12 hrs"
        },
        "skills": ["Graphic Design", "UI/UX Design"],
        "availability": {
          "readyToWork": true,
          "contractToHire": true,
          "responseTime": "NEW"
        },
        "reviews": [
          {
            "jobTitle": "Live Event Video Editor | World Renowned Speaker",
            "duration": "Oct 31, 2023 - Feb 9, 2024",
            "earnings": "Private earnings",
            "employeeFeedback": {
              "rating": 5.00,
              "comments": "Exceptional performance! Willing to work with again."
            }
          },
          {
            "jobTitle": "Facebook Ads / Social Media / UGC Video Editor for E-commerce",
            "duration": "Dec 1, 2023 - Jan 31, 2024",
            "earnings": "Private earnings",
            "employeeFeedback": {
              "rating": 3.85,
              "comments": "Good work overall. Would recommend for social media projects."
            }
          },
          {
            "jobTitle": "TikTok & Instagram Video Editor",
            "duration": "Jan 27, 2024 - Jan 30, 2024",
            "earnings": "Private earnings",
            "employeeFeedback": {
              "rating": 4.45,
              "comments": "Creative and efficient. Met expectations."
            }
          },
        ],
        "linkedAccounts": ["Behance", "alice.design"],
        "profileDescription": "Experienced Graphic and UI/UX Designer with a passion for creating visually appealing and user-friendly designs. Proficient in Adobe Creative Suite and skilled in translating client requirements into captivating visuals. Open to new projects and collaborations."
      },
      {
        "freelancer": {
          "name": "John M.",
          "location": "London, UK",
          "jobSuccess": "88%",
          "totalJobs": 35,
          "totalHours": 250,
          "hoursPerWeek": "20-30 hrs/week",
          "responseTime": "< 24 hrs"
        },
        "skills": ["Full-Stack Development", "React", "Node.js"],
        "availability": {
          "readyToWork": true,
          "contractToHire": false,
          "responseTime": "NEW"
        },
        "reviews": [
          {
            "jobTitle": "YouTube Shorts & TikTok Videos for NBA Basketball Related Content",
            "duration": "Nov 27, 2023 - Dec 23, 2023",
            "earnings": "Private earnings",
            "employeeFeedback": {
              "rating": 3.20,
              "comments": "Satisfactory work. Could improve on attention to detail."
            }
          },
          {
            "jobTitle": "Rockstar Video Editor With Creativity and Efficiency",
            "duration": "Apr 21, 2023 - Dec 15, 2023",
            "earnings": "No feedback given",
            "employeeFeedback": {
              "rating": 4.00,
              "comments": "No feedback provided by the employer."
            }
          },
          {
            "jobTitle": "Audio Recorders Clean and Enhancement",
            "duration": "Jul 20, 2023 - Dec 14, 2023",
            "earnings": "No feedback given",
            "employeeFeedback": {
              "rating": 2.00,
              "comments": "No feedback provided by the employer."
            }
          },
          {
            "jobTitle": "Testimonial Videos to Short 'Shorts/Reels' Videos",
            "duration": "Jul 28, 2023 - Dec 12, 2023",
            "earnings": "No feedback given",
            "employeeFeedback": {
              "rating": 3.00,
              "comments": "No feedback provided by the employer."
            }
          },
          {
            "jobTitle": "Video Editor for E-commerce Advertisements",
            "duration": "Sep 26, 2023 - Dec 12, 2023",
            "earnings": "No feedback given",
            "employeeFeedback": {
              "rating": 4.00,
              "comments": "No feedback provided by the employer."
            }
          },
        ],
        "linkedAccounts": ["GitHub", "john.dev"],
        "profileDescription": "Experienced Full-Stack Developer specializing in React and Node.js. Successfully delivered various web applications with a focus on performance and scalability. Open to exciting projects and challenges to showcase my coding expertise."
      },
      {
        "freelancer": {
          "name": "Emily C.",
          "location": "Sydney, Australia",
          "jobSuccess": "92%",
          "totalJobs": 50,
          "totalHours": 350,
          "hoursPerWeek": "More than 30 hrs/week",
          "responseTime": "< 18 hrs"
        },
        "skills": ["Digital Marketing", "SEO", "Content Writing"],
        "availability": {
          "readyToWork": true,
          "contractToHire": false,
          "responseTime": "NEW"
        },
        "reviews": [
          {
            "jobTitle": "YouTube Shorts & TikTok Videos for NBA Basketball Related Content",
            "duration": "Nov 27, 2023 - Dec 23, 2023",
            "earnings": "Private earnings",
            "employeeFeedback": {
              "rating": 3.20,
              "comments": "Satisfactory work. Could improve on attention to detail."
            }
          },
          {
            "jobTitle": "Rockstar Video Editor With Creativity and Efficiency",
            "duration": "Apr 21, 2023 - Dec 15, 2023",
            "earnings": "No feedback given",
            "employeeFeedback": {
              "rating": 4.00,
              "comments": "No feedback provided by the employer."
            }
          },
          {
            "jobTitle": "Audio Recorders Clean and Enhancement",
            "duration": "Jul 20, 2023 - Dec 14, 2023",
            "earnings": "No feedback given",
            "employeeFeedback": {
              "rating": 2.00,
              "comments": "No feedback provided by the employer."
            }
          },
          {
            "jobTitle": "Testimonial Videos to Short 'Shorts/Reels' Videos",
            "duration": "Jul 28, 2023 - Dec 12, 2023",
            "earnings": "No feedback given",
            "employeeFeedback": {
              "rating": 3.00,
              "comments": "No feedback provided by the employer."
            }
          },
          {
            "jobTitle": "Video Editor for E-commerce Advertisements",
            "duration": "Sep 26, 2023 - Dec 12, 2023",
            "earnings": "No feedback given",
            "employeeFeedback": {
              "rating": 4.00,
              "comments": "No feedback provided by the employer."
            }
          },
        ],
        "linkedAccounts": ["LinkedIn", "emily.marketing"],
        "profileDescription": "Digital Marketing Specialist with a proven track record in SEO and content writing. Expertise in creating and executing successful digital marketing strategies to enhance online presence. Passionate about helping businesses grow through effective digital marketing techniques."
      },
      {
        "freelancer": {
          "name": "Alex H.",
          "location": "Berlin, Germany",
          "jobSuccess": "90%",
          "totalJobs": 45,
          "totalHours": 300,
          "hoursPerWeek": "20-30 hrs/week",
          "responseTime": "< 20 hrs"
        },
        "skills": ["Mobile App Development", "Flutter", "Dart"],
        "availability": {
          "readyToWork": true,
          "contractToHire": true,
          "responseTime": "NEW"
        },
        "reviews": [
          {
            "jobTitle": "Podcast Video Editor for YouTube",
            "duration": "Apr 30, 2023 - Dec 6, 2023",
            "earnings": "Private earnings",
            "employeeFeedback": {
              "rating": 5.00,
              "comments": "Consistently excellent work. Highly recommended."
            }
          },
          {
            "jobTitle": "Edit Podcast Video for YouTube",
            "duration": "Nov 30, 2023 - Dec 4, 2023",
            "earnings": "Private earnings",
            "employeeFeedback": {
              "rating": 2.85,
              "comments": "Initial mistake, but corrected well. Budget miscommunication."
            }
          },
          {
            "jobTitle": "TikTok & Instagram Video Editor",
            "duration": "Jan 27, 2024 - Jan 30, 2024",
            "earnings": "Private earnings",
            "employeeFeedback": {
              "rating": 4.45,
              "comments": "Excellent video editing skills, delivered on time."
            }
          },
        ],
        "linkedAccounts": ["GitLab", "alex.mobile"],
        "profileDescription": "Mobile App Developer proficient in Flutter and Dart. Experienced in creating cross-platform mobile applications with a focus on smooth user experiences. Enthusiastic about adopting new technologies and contributing to innovative app development projects."
      },
      {
        "freelancer": {
          "name": "Sarah L.",
          "location": "Toronto, Canada",
          "jobSuccess": "93%",
          "totalJobs": 55,
          "totalHours": 380,
          "hoursPerWeek": "More than 30 hrs/week",
          "responseTime": "< 15 hrs"
        },
        "skills": ["Content Writing", "Copywriting", "Social Media Marketing"],
        "availability": {
          "readyToWork": true,
          "contractToHire": false,
          "responseTime": "NEW"
        },
        "reviews": [
          {
            "jobTitle": "Podcast Video Editor for YouTube",
            "duration": "Apr 30, 2023 - Dec 6, 2023",
            "earnings": "Private earnings",
            "employeeFeedback": {
              "rating": 5.00,
              "comments": "Consistently excellent work. Highly recommended."
            }
          },
          {
            "jobTitle": "Edit Podcast Video for YouTube",
            "duration": "Nov 30, 2023 - Dec 4, 2023",
            "earnings": "Private earnings",
            "employeeFeedback": {
              "rating": 2.85,
              "comments": "Initial mistake, but corrected well. Budget miscommunication."
            }
          },
          {
            "jobTitle": "TikTok & Instagram Video Editor",
            "duration": "Jan 27, 2024 - Jan 30, 2024",
            "earnings": "Private earnings",
            "employeeFeedback": {
              "rating": 4.45,
              "comments": "Excellent video editing skills, delivered on time."
            }
          },
        ],
        "linkedAccounts": ["Twitter", "sarah.content"],
        "profileDescription": "Experienced Content Writer and Copywriter with a flair for creating engaging and compelling content. Proficient in crafting brand stories and optimizing content for SEO. Passionate about helping businesses communicate effectively through impactful writing."
      },
      {
        "freelancer": {
          "name": "Michael B.",
          "location": "San Francisco, USA",
          "jobSuccess": "91%",
          "totalJobs": 48,
          "totalHours": 320,
          "hoursPerWeek": "20-30 hrs/week",
          "responseTime": "< 22 hrs"
        },
        "skills": ["Data Science", "Machine Learning", "Python"],
        "availability": {
          "readyToWork": true,
          "contractToHire": true,
          "responseTime": "NEW"
        },
        "reviews": [
          {
            "jobTitle": "YouTube Shorts & TikTok Videos for NBA Basketball Related Content",
            "duration": "Nov 27, 2023 - Dec 23, 2023",
            "earnings": "Private earnings",
            "employeeFeedback": {
              "rating": 3.20,
              "comments": "Average performance, could improve on creativity."
            }
          },
          {
            "jobTitle": "Audio Recorders Clean and Enhancement",
            "duration": "Jul 20, 2023 - Dec 14, 2023",
            "earnings": "No feedback given",
            "employeeFeedback": {
              "rating": 2.00,
              "comments": "No feedback provided by the employer."
            }
          },
        ],
        "linkedAccounts": ["LinkedIn", "michael.data"],
        "profileDescription": "Data Scientist and Machine Learning enthusiast with expertise in Python. Skilled in extracting meaningful insights from data, building predictive models, and implementing machine learning solutions. Eager to contribute to data-driven decision-making processes."
      },
      {
        "freelancer": {
          "name": "Jessica M.",
          "location": "Paris, France",
          "jobSuccess": "94%",
          "totalJobs": 58,
          "totalHours": 390,
          "hoursPerWeek": "More than 30 hrs/week",
          "responseTime": "< 16 hrs"
        },
        "skills": ["Illustration", "Graphic Design", "Adobe Illustrator"],
        "availability": {
          "readyToWork": true,
          "contractToHire": false,
          "responseTime": "NEW"
        },
        "reviews": [
          {
            "jobTitle": "Take our testimonial videos and make short 'shorts/reels' videos from it",
            "duration": "Jul 28, 2023 - Dec 12, 2023",
            "earnings": "No feedback given",
            "employeeFeedback": {
              "rating": 3.00,
              "comments": "No feedback provided by the employer."
            }
          },
          {
            "jobTitle": "Video Editor needed for e-commerce advertisements",
            "duration": "Sep 26, 2023 - Dec 12, 2023",
            "earnings": "No feedback given",
            "employeeFeedback": {
              "rating": 4.00,
              "comments": "No feedback provided by the employer."
            }
          },
        ],
        "linkedAccounts": ["Dribbble", "jessica.design"],
        "profileDescription": "Creative Illustrator and Graphic Designer specializing in digital illustrations. Proficient in using Adobe Illustrator to bring ideas to life with unique and visually appealing designs. Passionate about creating captivating visual experiences."
      },
      {
        "freelancer": {
          "name": "Daniel K.",
          "location": "Tokyo, Japan",
          "jobSuccess": "89%",
          "totalJobs": 42,
          "totalHours": 290,
          "hoursPerWeek": "20-30 hrs/week",
          "responseTime": "< 24 hrs"
        },
        "skills": ["Blockchain Development", "Smart Contracts", "Solidity"],
        "availability": {
          "readyToWork": true,
          "contractToHire": true,
          "responseTime": "NEW"
        },
        "reviews": [
          {
            "jobTitle": "Podcast Video Editor for YouTube",
            "duration": "Apr 30, 2023 - Dec 6, 2023",
            "earnings": "Private earnings",
            "employeeFeedback": {
              "rating": 5.00,
              "comments": "Consistently excellent work. Highly recommended."
            }
          },
          {
            "jobTitle": "Edit Podcast Video for YouTube",
            "duration": "Nov 30, 2023 - Dec 4, 2023",
            "earnings": "Private earnings",
            "employeeFeedback": {
              "rating": 2.85,
              "comments": "Initial mistake, but corrected well. Budget miscommunication."
            }
          },
        ],
        "linkedAccounts": ["GitHub", "daniel.blockchain"],
        "profileDescription": "Blockchain Developer with expertise in Smart Contracts and Solidity. Experienced in developing decentralized applications (DApps) on various blockchain platforms. Keen on contributing to innovative blockchain projects and shaping the future of decentralized technologies."
      }
            
    
]

export default freelancers
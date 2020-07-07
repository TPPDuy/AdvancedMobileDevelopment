const data = {
  courses: [
    {
      id: 1,
      name: 'Java Programming - Build your first project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      thumbnail: 'https://pluralsight.imgix.net/course-images/java-fundamentals-language-v1.jpg',
      authors: [
        {
          name: 'Joe Eames',
          avatar: 'https://pluralsight.imgix.net/author/lg/joe-eames-v1.jpg?w=200',
        },
        {
          name: 'Jim Cooper',
          avatar: 'https://pluralsight.imgix.net/author/lg/jim-cooper-v1.jpg?w=200',
        },
      ],
      level: 'Beginner',
      date: 1589250813000,
      duration: 10800000,
      rating: 4.5,
      numOfJudgement: 326,
      isBookmarked: false,
      content: {
        modules: [
          {
            name: 'Intro',
            duration: 300000,
            progress: 120000,
            lessons: [
              {
                name: 'Introduction to Java',
                duration: 120000,
                isCompleted: true,
                isPlaying: false,
              },
              {
                name: 'What you will get in this course',
                duration: 180000,
                isCompleted: false,
                isPlaying: true,
              },
            ],
          },
          {
            name: 'Basic Java\'s syntax',
            duration: 2400000,
            progress: 0,
            lessons: [
              {
                name: 'Syntax about String',
                duration: 300000,
                isCompleted: false,
                isPlaying: false,
              },
              {
                name: 'Syntax about Number',
                duration: 180000,
                isCompleted: false,
                isPlaying: false,
              },
              {
                name: 'Syntax about Operation',
                duration: 180000,
                isCompleted: false,
                isPlaying: false,
              },
            ],
          },
        ],
      },
    },
    {
      id: 2,
      name: 'Agular Fundamentals',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      thumbnail: 'https://pluralsight.imgix.net/course-images/angular-fundamentals-v1.jpg',
      authors: [
        {
          name: 'Samer Buna',
          avatar: 'https://pluralsight.imgix.net/author/lg/e5c9da13-6fe1-4662-8ee1-5a78800537a3.jpg',
        },
      ],
      level: 'Intermediate',
      date: 1589250913000,
      duration: 800,
      rating: 4,
      numOfJudgement: 819,
      isBookmarked: true,
      content: {
        modules: [
          {
            name: 'Intro',
            duration: 300000,
            progress: 300000,
            lessons: [
              {
                name: 'Introduction to Agular',
                duration: 120000,
                isCompleted: true,
                isPlaying: false,
              },
              {
                name: 'What you will get in this course',
                duration: 180000,
                isCompleted: true,
                isPlaying: false,
              },
            ],
          },
          {
            name: 'Basic Agular\'s syntax',
            duration: 2400000,
            progress: 0,
            lessons: [
              {
                name: 'Syntax about String',
                duration: 300000,
                isCompleted: false,
                isPlaying: true,
              },
              {
                name: 'Syntax about Number',
                duration: 180000,
                isCompleted: false,
                isPlaying: false,
              },
              {
                name: 'Syntax about Operation',
                duration: 180000,
                isCompleted: false,
                isPlaying: false,
              },
            ],
          },
        ],
      },
    },
    {
      id: 3,
      name: 'Managing AWS Operations',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      thumbnail: 'https://pluralsight.imgix.net/course-images/aws-operations-managing-v5.png',
      authors: [
        {
          name: 'Mark Zamoyta',
          avatar: 'https://pluralsight.imgix.net/author/lg/mark-zamoyta-v1.jpg?w=200',
        },
      ],
      level: 'Intermediate',
      date: 1589250813000,
      duration: 600,
      rating: 4.5,
      numOfJudgement: 13,
      isBookmarked: false,
      content: {
        modules: [
          {
            name: 'Intro',
            duration: 300000,
            progress: 120000,
            lessons: [
              {
                name: 'Introduction to AWS',
                duration: 120000,
                isCompleted: true,
                isPlaying: false,
              },
              {
                name: 'What you will get in this course',
                duration: 180000,
                isCompleted: false,
                isPlaying: true,
              },
            ],
          },
          {
            name: 'Basic AWS\'s syntax',
            duration: 2400000,
            progress: 0,
            lessons: [
              {
                name: 'Syntax about String',
                duration: 300000,
                isCompleted: false,
                isPlaying: false,
              },
              {
                name: 'Syntax about Number',
                duration: 180000,
                isCompleted: false,
                isPlaying: false,
              },
              {
                name: 'Syntax about Operation',
                duration: 180000,
                isCompleted: false,
                isPlaying: false,
              },
            ],
          },
        ],
      },
    },
    {
      id: 4,
      name: 'C# Fundamentals',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      thumbnail: 'https://pluralsight.imgix.net/course-images/csharp-fundamentals-dev-v1.png',
      authors: [
        {
          name: 'Jim Wilson',
          avatar: 'https://pluralsight.imgix.net/author/lg/jim-wilson-v5.jpg?w=200',
        },
      ],
      level: 'Beginner',
      date: 1589250813000,
      duration: 600,
      rating: 3.5,
      numOfJudgement: 445,
      isBookmarked: false,
      content: {
        modules: [
          {
            name: 'Intro',
            duration: 300000,
            progress: 120000,
            lessons: [
              {
                name: 'Introduction to C#',
                duration: 120000,
                isCompleted: true,
                isPlaying: false,
              },
              {
                name: 'What you will get in this course',
                duration: 180000,
                isCompleted: false,
                isPlaying: true,
              },
            ],
          },
          {
            name: 'Basic C#\'s syntax',
            duration: 2400000,
            progress: 0,
            lessons: [
              {
                name: 'Syntax about String',
                duration: 300000,
                isCompleted: false,
                isPlaying: false,
              },
              {
                name: 'Syntax about Number',
                duration: 180000,
                isCompleted: false,
                isPlaying: false,
              },
              {
                name: 'Syntax about Operation',
                duration: 180000,
                isCompleted: false,
                isPlaying: false,
              },
            ],
          },
        ],
      },
    },
    {
      id: 5,
      name: 'How Git Works',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      thumbnail: 'https://pluralsight.imgix.net/course-images/how-git-works-v1.jpg',
      authors: [
        {
          name: 'Shawn Wildermuth',
          avatar: 'https://pluralsight.imgix.net/author/lg/shawn-wildermuth-v3.jpg?w=200',
        },
      ],
      level: 'Beginner',
      date: 1589250813000,
      duration: 600,
      rating: 5,
      numOfJudgement: 6988,
      isBookmarked: true,
      content: {
        modules: [
          {
            name: 'Intro',
            duration: 300000,
            progress: 120000,
            lessons: [
              {
                name: 'Introduction to Git',
                duration: 120000,
                isCompleted: true,
                isPlaying: false,
              },
              {
                name: 'What you will get in this course',
                duration: 180000,
                isCompleted: false,
                isPlaying: true,
              },
            ],
          },
          {
            name: 'Basic Git',
            duration: 2400000,
            progress: 0,
            lessons: [
              {
                name: 'What is repository',
                duration: 300000,
                isCompleted: false,
                isPlaying: false,
              },
              {
                name: 'What is branch',
                duration: 180000,
                isCompleted: false,
                isPlaying: false,
              },
              {
                name: 'What is commit',
                duration: 180000,
                isCompleted: false,
                isPlaying: false,
              },
            ],
          },
        ],
      },
    },
    {
      id: 6,
      name: 'Architecting for Reliability on AWS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      thumbnail: 'https://pluralsight.imgix.net/course-images/aws-architecting-reliability-v1.png',
      authors: [
        {
          name: 'Deborah Kurata',
          avatar: 'https://pluralsight.imgix.net/author/lg/deborah-kurata-v1.jpg?w=200',
        },
      ],
      level: 'Intermediate',
      date: 1589250813000,
      duration: 600,
      rating: 4.5,
      numOfJudgement: 326,
      isBookmarked: false,
      content: {
        modules: [
          {
            name: 'Intro',
            duration: 300000,
            progress: 120000,
            lessons: [
              {
                name: 'Introduction to Java',
                duration: 120000,
                isCompleted: true,
                isPlaying: false,
              },
              {
                name: 'What you will get in this course',
                duration: 180000,
                isCompleted: false,
                isPlaying: true,
              },
            ],
          },
          {
            name: 'Basic Java\'s syntax',
            duration: 2400000,
            progress: 0,
            lessons: [
              {
                name: 'Syntax about String',
                duration: 300000,
                isCompleted: false,
                isPlaying: false,
              },
              {
                name: 'Syntax about Number',
                duration: 180000,
                isCompleted: false,
                isPlaying: false,
              },
              {
                name: 'Syntax about Operation',
                duration: 180000,
                isCompleted: false,
                isPlaying: false,
              },
            ],
          },
        ],
      },
    },
    {
      id: 7,
      name: 'Architecting for Security on AWS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      thumbnail: 'https://pluralsight.imgix.net/course-images/architecting-security-aws-v1.png',
      authors: [
        {
          name: 'Jim Wilson',
          avatar: 'https://pluralsight.imgix.net/author/lg/jim-wilson-v5.jpg?w=200',
        },
      ],
      level: 'Intermediate',
      date: 1589250913000,
      duration: 800,
      rating: 4,
      numOfJudgement: 819,
      isBookmarked: false,
      content: {
        modules: [
          {
            name: 'Intro',
            duration: 300000,
            progress: 120000,
            lessons: [
              {
                name: 'Introduction to Java',
                duration: 120000,
                isCompleted: true,
                isPlaying: false,
              },
              {
                name: 'What you will get in this course',
                duration: 180000,
                isCompleted: false,
                isPlaying: true,
              },
            ],
          },
          {
            name: 'Basic Java\'s syntax',
            duration: 2400000,
            progress: 0,
            lessons: [
              {
                name: 'Syntax about String',
                duration: 300000,
                isCompleted: false,
                isPlaying: false,
              },
              {
                name: 'Syntax about Number',
                duration: 180000,
                isCompleted: false,
                isPlaying: false,
              },
              {
                name: 'Syntax about Operation',
                duration: 180000,
                isCompleted: false,
                isPlaying: false,
              },
            ],
          },
        ],
      },
    },
    {
      id: 8,
      name: 'Designing Infrastructure Deployment on AWS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      thumbnail: 'https://pluralsight.imgix.net/course-images/aws-operations-designing-infrastructure-deployment-v1.png',
      authors: [
        {
          name: 'Cory House',
          avatar: 'https://pluralsight.imgix.net/author/lg/cory-house-v3.jpg?w=200',
        },
      ],
      level: 'Intermediate',
      date: 1589250813000,
      duration: 600,
      rating: 4.5,
      numOfJudgement: 13,
      isBookmarked: true,
      content: {
        modules: [
          {
            name: 'Intro',
            duration: 300000,
            progress: 120000,
            lessons: [
              {
                name: 'Introduction to Java',
                duration: 120000,
                isCompleted: true,
                isPlaying: false,
              },
              {
                name: 'What you will get in this course',
                duration: 180000,
                isCompleted: false,
                isPlaying: true,
              },
            ],
          },
          {
            name: 'Basic Java\'s syntax',
            duration: 2400000,
            progress: 0,
            lessons: [
              {
                name: 'Syntax about String',
                duration: 300000,
                isCompleted: false,
                isPlaying: false,
              },
              {
                name: 'Syntax about Number',
                duration: 180000,
                isCompleted: false,
                isPlaying: false,
              },
              {
                name: 'Syntax about Operation',
                duration: 180000,
                isCompleted: false,
                isPlaying: false,
              },
            ],
          },
        ],
      },
    },
  ],
  paths: [
    {
      name: 'CCSP (Certified Cloud Security Professional)',
      numOfCourses: 9,
      thumbnail: 'https://pluralsight2.imgix.net/paths/images/comptia-security-plus-5d8ab8e621.png',
      duration: 24000000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      courses: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
    },
    {
      name: 'AWS Certified Machine Learning',
      numOfCourses: 2,
      thumbnail: 'https://pluralsight2.imgix.net/paths/images/aws-certified-devops-engineer-25d912e3da.png',
      duration: 24000000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      courses: [
        {
          id: 2,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
        {
          id: 7,
        },
      ],
    },
    {
      name: '3ds Max: Environment Modeling',
      numOfCourses: 10,
      thumbnail: 'https://pluralsight.imgix.net/paths/path-icons/3dsmax-008c85cd63.png',
      duration: 24000000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      courses: [
        {
          id: 1,
        },
        {
          id: 3,
        },
        {
          id: 5,
        },
        {
          id: 6,
        },
      ],
    },
    {
      name: 'Node.js Developer on Microsoft Azure',
      numOfCourses: 3,
      thumbnail: 'https://pluralsight2.imgix.net/paths/images/group-policy-administration-ee0dacafe8.png',
      duration: 24000000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      courses: [
        {
          id: 1,
        },
        {
          id: 3,
        },
        {
          id: 5,
        },
        {
          id: 6,
        },
        {
          id: 7,
        },
      ],
    },
    {
      name: 'Salesforce Certified Administrator',
      numOfCourses: 10,
      thumbnail: 'https://pluralsight2.imgix.net/paths/images/salesforce-e8b45b03c6.png',
      duration: 24000000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      courses: [
        {
          id: 2,
        },
        {
          id: 5,
        },
        {
          id: 7,
        },
        {
          id: 8,
        },
      ],
    },
    {
      name: 'Design Pattern in C++',
      numOfCourses: 15,
      thumbnail: 'https://pluralsight2.imgix.net/paths/images/c-plus-plus-34cdec5297.png',
      duration: 24000000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      courses: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
    },
    {
      name: 'Managing Projects',
      numOfCourses: 15,
      thumbnail: 'https://pluralsight2.imgix.net/paths/images/pmp-3c8e439908.png',
      duration: 24000000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      courses: [
        {
          id: 1,
        },
        {
          id: 3,
        },
        {
          id: 7,
        },
        {
          id: 8,
        },
      ],
    },
  ],
  authors: [
    {
      id: 1,
      name: 'Deborah Kurata',
      avatar: 'https://pluralsight.imgix.net/author/lg/deborah-kurata-v1.jpg?w=200',
      isFollowed: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      link: 'http://odetocode.com/blogs/all',
      courses: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
    },
    {
      id: 2,
      name: 'Scott Allen',
      avatar: 'https://pluralsight.imgix.net/author/lg/44cb43b3-83e4-4458-9b39-a7ded3411616.jpg',
      isFollowed: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      link: 'http://odetocode.com/blogs/all',
      courses: [
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
      ],
    },
    {
      id: 3,
      name: 'Samer Buna',
      avatar: 'https://pluralsight.imgix.net/author/lg/e5c9da13-6fe1-4662-8ee1-5a78800537a3.jpg',
      isFollowed: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      link: 'http://odetocode.com/blogs/all',
      courses: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
      ],
    },
    {
      id: 4,
      name: 'Mark Zamoyta',
      avatar: 'https://pluralsight.imgix.net/author/lg/mark-zamoyta-v1.jpg?w=200',
      isFollowed: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      link: 'http://odetocode.com/blogs/all',
      courses: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 6,
        },
        {
          id: 7,
        },
        {
          id: 8,
        },
      ],
    },
    {
      id: 5,
      name: 'Jim Wilson',
      avatar: 'https://pluralsight.imgix.net/author/lg/jim-wilson-v5.jpg?w=200',
      isFollowed: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      link: 'http://odetocode.com/blogs/all',
      courses: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
    },
    {
      id: 6,
      name: 'Joe Eames',
      avatar: 'https://pluralsight.imgix.net/author/lg/joe-eames-v1.jpg?w=200',
      isFollowed: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      link: 'http://odetocode.com/blogs/all',
      courses: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
        {
          id: 6,
        },
        {
          id: 7,
        },
      ],
    },
    {
      id: 7,
      name: 'Cory House',
      avatar: 'https://pluralsight.imgix.net/author/lg/cory-house-v3.jpg?w=200',
      isFollowed: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      link: 'http://odetocode.com/blogs/all',
      courses: [
        {
          id: 1,
        },
        {
          id: 6,
        },
        {
          id: 7,
        },
        {
          id: 8,
        },
      ],
    },
    {
      id: 8,
      name: 'Shawn Wildermuth',
      avatar: 'https://pluralsight.imgix.net/author/lg/shawn-wildermuth-v3.jpg?w=200',
      isFollowed: false,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
      link: 'http://odetocode.com/blogs/all',
      courses: [
        {
          id: 4,
        },
        {
          id: 3,
        },
        {
          id: 1,
        },
      ],
    },
  ],
  categories: [
    {
      relatedCourses: [
        {
          title: 'Software development',
          courses: [
            {
              id: 1,
              name: 'Java Programming - Build your first project',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
              thumbnail: 'https://pluralsight.imgix.net/course-images/java-fundamentals-language-v1.jpg',
              authors: [
                {
                  name: 'Joe Eames',
                  avatar: 'https://pluralsight.imgix.net/author/lg/joe-eames-v1.jpg?w=200',
                },
                {
                  name: 'Jim Cooper',
                  avatar: 'https://pluralsight.imgix.net/author/lg/jim-cooper-v1.jpg?w=200',
                },
              ],
              level: 'Beginner',
              date: 1589250813000,
              duration: 10800000,
              rating: 4.5,
              numOfJudgement: 326,
              isBookmarked: false,
              content: {
                modules: [
                  {
                    name: 'Intro',
                    duration: 300000,
                    progress: 120000,
                    lessons: [
                      {
                        name: 'Introduction to Java',
                        duration: 120000,
                        isCompleted: true,
                        isPlaying: false,
                      },
                      {
                        name: 'What you will get in this course',
                        duration: 180000,
                        isCompleted: false,
                        isPlaying: true,
                      },
                    ],
                  },
                  {
                    name: 'Basic Java\'s syntax',
                    duration: 2400000,
                    progress: 0,
                    lessons: [
                      {
                        name: 'Syntax about String',
                        duration: 300000,
                        isCompleted: false,
                        isPlaying: false,
                      },
                      {
                        name: 'Syntax about Number',
                        duration: 180000,
                        isCompleted: false,
                        isPlaying: false,
                      },
                      {
                        name: 'Syntax about Operation',
                        duration: 180000,
                        isCompleted: false,
                        isPlaying: false,
                      },
                    ],
                  },
                ],
              },
            },
            {
              id: 2,
              name: 'Agular Fundamentals',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
              thumbnail: 'https://pluralsight.imgix.net/course-images/angular-fundamentals-v1.jpg',
              authors: [
                {
                  name: 'Samer Buna',
                  avatar: 'https://pluralsight.imgix.net/author/lg/e5c9da13-6fe1-4662-8ee1-5a78800537a3.jpg',
                },
              ],
              level: 'Intermediate',
              date: 1589250913000,
              duration: 800,
              rating: 4,
              numOfJudgement: 819,
              isBookmarked: true,
              content: {
                modules: [
                  {
                    name: 'Intro',
                    duration: 300000,
                    progress: 300000,
                    lessons: [
                      {
                        name: 'Introduction to Agular',
                        duration: 120000,
                        isCompleted: true,
                        isPlaying: false,
                      },
                      {
                        name: 'What you will get in this course',
                        duration: 180000,
                        isCompleted: true,
                        isPlaying: false,
                      },
                    ],
                  },
                  {
                    name: 'Basic Agular\'s syntax',
                    duration: 2400000,
                    progress: 0,
                    lessons: [
                      {
                        name: 'Syntax about String',
                        duration: 300000,
                        isCompleted: false,
                        isPlaying: true,
                      },
                      {
                        name: 'Syntax about Number',
                        duration: 180000,
                        isCompleted: false,
                        isPlaying: false,
                      },
                      {
                        name: 'Syntax about Operation',
                        duration: 180000,
                        isCompleted: false,
                        isPlaying: false,
                      },
                    ],
                  },
                ],
              },
            },
            {
              id: 3,
              name: 'Managing AWS Operations',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
              thumbnail: 'https://pluralsight.imgix.net/course-images/aws-operations-managing-v5.png',
              authors: [
                {
                  name: 'Mark Zamoyta',
                  avatar: 'https://pluralsight.imgix.net/author/lg/mark-zamoyta-v1.jpg?w=200',
                },
              ],
              level: 'Intermediate',
              date: 1589250813000,
              duration: 600,
              rating: 4.5,
              numOfJudgement: 13,
              isBookmarked: false,
              content: {
                modules: [
                  {
                    name: 'Intro',
                    duration: 300000,
                    progress: 120000,
                    lessons: [
                      {
                        name: 'Introduction to AWS',
                        duration: 120000,
                        isCompleted: true,
                        isPlaying: false,
                      },
                      {
                        name: 'What you will get in this course',
                        duration: 180000,
                        isCompleted: false,
                        isPlaying: true,
                      },
                    ],
                  },
                  {
                    name: 'Basic AWS\'s syntax',
                    duration: 2400000,
                    progress: 0,
                    lessons: [
                      {
                        name: 'Syntax about String',
                        duration: 300000,
                        isCompleted: false,
                        isPlaying: false,
                      },
                      {
                        name: 'Syntax about Number',
                        duration: 180000,
                        isCompleted: false,
                        isPlaying: false,
                      },
                      {
                        name: 'Syntax about Operation',
                        duration: 180000,
                        isCompleted: false,
                        isPlaying: false,
                      },
                    ],
                  },
                ],
              },
            },
            {
              id: 4,
              name: 'C# Fundamentals',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
              thumbnail: 'https://pluralsight.imgix.net/course-images/csharp-fundamentals-dev-v1.png',
              authors: [
                {
                  name: 'Jim Wilson',
                  avatar: 'https://pluralsight.imgix.net/author/lg/jim-wilson-v5.jpg?w=200',
                },
              ],
              level: 'Beginner',
              date: 1589250813000,
              duration: 600,
              rating: 3.5,
              numOfJudgement: 445,
              isBookmarked: false,
              content: {
                modules: [
                  {
                    name: 'Intro',
                    duration: 300000,
                    progress: 120000,
                    lessons: [
                      {
                        name: 'Introduction to C#',
                        duration: 120000,
                        isCompleted: true,
                        isPlaying: false,
                      },
                      {
                        name: 'What you will get in this course',
                        duration: 180000,
                        isCompleted: false,
                        isPlaying: true,
                      },
                    ],
                  },
                  {
                    name: 'Basic C#\'s syntax',
                    duration: 2400000,
                    progress: 0,
                    lessons: [
                      {
                        name: 'Syntax about String',
                        duration: 300000,
                        isCompleted: false,
                        isPlaying: false,
                      },
                      {
                        name: 'Syntax about Number',
                        duration: 180000,
                        isCompleted: false,
                        isPlaying: false,
                      },
                      {
                        name: 'Syntax about Operation',
                        duration: 180000,
                        isCompleted: false,
                        isPlaying: false,
                      },
                    ],
                  },
                ],
              },
            },
            {
              id: 5,
              name: 'How Git Works',
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, malesuada at erat a, volutpat consequat dolor. Etiam commodo nisl sit amet arcu congue varius. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut est justo, sodales eu metus vel, auctor varius lorem. Proin nec feugiat nisi. Donec bibendum scelerisque sapien. Pellentesque consequat hendrerit augue ac tincidunt. Pellentesque non est eget ipsum sagittis malesuada at vitae tellus.',
              thumbnail: 'https://pluralsight.imgix.net/course-images/how-git-works-v1.jpg',
              authors: [
                {
                  name: 'Shawn Wildermuth',
                  avatar: 'https://pluralsight.imgix.net/author/lg/shawn-wildermuth-v3.jpg?w=200',
                },
              ],
              level: 'Beginner',
              date: 1589250813000,
              duration: 600,
              rating: 5,
              numOfJudgement: 6988,
              isBookmarked: true,
              content: {
                modules: [
                  {
                    name: 'Intro',
                    duration: 300000,
                    progress: 120000,
                    lessons: [
                      {
                        name: 'Introduction to Git',
                        duration: 120000,
                        isCompleted: true,
                        isPlaying: false,
                      },
                      {
                        name: 'What you will get in this course',
                        duration: 180000,
                        isCompleted: false,
                        isPlaying: true,
                      },
                    ],
                  },
                  {
                    name: 'Basic Git',
                    duration: 2400000,
                    progress: 0,
                    lessons: [
                      {
                        name: 'What is repository',
                        duration: 300000,
                        isCompleted: false,
                        isPlaying: false,
                      },
                      {
                        name: 'What is branch',
                        duration: 180000,
                        isCompleted: false,
                        isPlaying: false,
                      },
                      {
                        name: 'What is commit',
                        duration: 180000,
                        isCompleted: false,
                        isPlaying: false,
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
      skills: [
        {
          name: 'Java',
          isInterested: true,
          paths: [],
          authors: [],
          relatedCourses: [
            {
              title: '',
              courses: [
                {
                  id: 1,
                },
                {
                  id: 2,
                },
              ],
            },
          ],
        },
      ],
      paths: [],
      authors: [],
    },
  ],
  skills: [
    {
      name: 'Java',
      isInterested: true,
      paths: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
      authors: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 6,
        },
      ],
      relatedCourses: [
        {
          title: 'New in Java',
          courses: [
            {
              id: 1,
            },
            {
              id: 2,
            },
          ],
        },
      ],
    },
    {
      name: 'Android',
      isInterested: true,
      paths: [
        {},
      ],
      authors: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 4,
        },
        {
          id: 7,
        },
      ],
      relatedCourses: [
        {
          title: 'New in Android',
          courses: [
            {
              id: 1,
            },
            {
              id: 2,
            },
          ],
        },
      ],
    },
    {
      name: 'NodeJs',
      isInterested: true,
      paths: [
        {},
      ],
      authors: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
        {
          id: 6,
        },
        {
          id: 7,
        },
        {
          id: 8,
        },
      ],
      relatedCourses: [
        {
          title: '',
          courses: [
            {
              id: 1,
            },
            {
              id: 5,
            },
          ],
        },
      ],
    },
    {
      name: 'React',
      isInterested: true,
      paths: [
        {},
      ],
      authors: [
        {},
      ],
      relatedCourses: [
        {
          title: '',
          courses: [
            {
              id: 2,
            },
            {
              id: 3,
            },
            {
              id: 5,
            },
          ],
        },
      ],
    },
    {
      name: 'C/C++',
      isInterested: true,
      paths: [
        {},
      ],
      authors: [
        {},
      ],
      relatedCourses: [
        {
          title: '',
          courses: [
            {
              id: 2,
            },
            {
              id: 3,
            },
            {
              id: 5,
            },
          ],
        },
      ],
    },
    {
      name: 'VueJs',
      isInterested: false,
      paths: [
        {},
      ],
      authors: [
        {},
      ],
      relatedCourses: [
        {
          title: '',
          courses: [
            {
              id: 2,
            },
            {
              id: 3,
            },
            {
              id: 5,
            },
          ],
        },
      ],
    },
    {
      name: 'Agular',
      isInterested: false,
      paths: [
        {},
      ],
      authors: [
        {},
      ],
      relatedCourses: [
        {
          title: '',
          courses: [
            {
              id: 2,
            },
            {
              id: 3,
            },
            {
              id: 5,
            },
          ],
        },
      ],
    },
    {
      name: 'Python',
      isInterested: false,
      paths: [
        {},
      ],
      authors: [
        {},
      ],
      relatedCourses: [
        {
          title: '',
          courses: [
            {
              id: 2,
            },
            {
              id: 3,
            },
            {
              id: 5,
            },
          ],
        },
      ],
    },
    {
      name: '.NET',
      isInterested: false,
      paths: [
        {},
      ],
      authors: [
        {},
      ],
      relatedCourses: [
        {
          title: '',
          courses: [
            {
              id: 2,
            },
            {
              id: 3,
            },
            {
              id: 5,
            },
          ],
        },
      ],
    },
  ],
};

export default data;

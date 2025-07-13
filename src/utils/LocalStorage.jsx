const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare monthly report",
        description: "Compile data for monthly performance review.",
        date: "2025-07-10",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Client follow-up",
        description: "Email client about feedback on latest delivery.",
        date: "2025-07-09",
        category: "Communication",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update documentation",
        description: "Add new API endpoints to internal documentation.",
        date: "2025-07-12",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Fix login bug",
        description: "Resolve issue causing login failures on Safari.",
        date: "2025-07-08",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Team meeting",
        description: "Discuss project roadmap with team.",
        date: "2025-07-11",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Code review",
        description: "Review recent pull requests on backend repo.",
        date: "2025-07-13",
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Test new features",
        description: "Verify implementation of recent changes.",
        date: "2025-07-10",
        category: "QA",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Design homepage",
        description: "Create Figma design for new homepage layout.",
        date: "2025-07-06",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Sync with marketing",
        description: "Align product messaging with marketing team.",
        date: "2025-07-12",
        category: "Collaboration",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Research competitors",
        description: "Analyze 3 top competitors' product features.",
        date: "2025-07-09",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Bug bash",
        description: "Participate in team-wide bug finding session.",
        date: "2025-07-11",
        category: "QA",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Accessibility review",
        description: "Check app for accessibility compliance.",
        date: "2025-07-13",
        category: "Compliance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Deploy to staging",
        description: "Push current code to staging server for QA.",
        date: "2025-07-08",
        category: "Deployment",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Security audit",
        description: "Run security checks on new endpoints.",
        date: "2025-07-07",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize images",
        description: "Reduce load time by compressing image assets.",
        date: "2025-07-12",
        category: "Performance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Refactor auth module",
        description: "Improve maintainability of authentication code.",
        date: "2025-07-09",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write unit tests",
        description: "Add tests for recent bug fixes.",
        date: "2025-07-10",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Sprint planning",
        description: "Plan tasks and estimates for next sprint.",
        date: "2025-07-11",
        category: "Planning",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Documentation review",
        description: "Ensure all pages follow documentation standards.",
        date: "2025-07-13",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Internal demo",
        description: "Showcase new feature to stakeholders.",
        date: "2025-07-13",
        category: "Presentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 100,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    // before passing we have to stringify the data otherwise it will store object object
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
    // const data = localStorage.getItem('employees')
    // console.log(data) -> will return the data in string format
    // console.log(JSON.parse(data));

    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    // console.log(employees,admin)
    return {employees,admin}
}
import { dashboard, bshouse, bspiechart, icuser, verified, icupload, iccopy, authenticator } from '../static/image'

export const routes = [
  {
    type: 'span',
    name: 'GENERAL'
  },
  {
    path: '/dashboard',
    icon: dashboard,
    type: 'link',
    name: 'Dashboard'
  },
  {
    path: '/login',
    icon: authenticator,
    type: 'link',
    name: 'Login',
    multiPath: [
      {
        path: '/login/type',
        name: 'Type User'
      },
      {
        path: '/login/forgot',
        name: 'Forgot Password'
      },
      {
        path: '/login/otp',
        name: 'OTP Phone'
      }
    ]
  },
  {
    path: '/tasks',
    icon: iccopy,
    type: 'link',
    name: 'Tasks'
  },
  {
    path: '/overview',
    icon: icuser,
    type: 'link',
    name: 'Admissional Overview'
  },
  {
    path: '/enquiry',
    icon: icupload,
    type: 'link',
    name: 'New Enquiry'
  },
  {
    path: '/application/application',
    icon: verified,
    type: 'link',
    name: 'Application'
  },
  {
    path: '/campus',
    icon: bshouse,
    type: 'link',
    name: 'School Setup',
    multiPath: [
      {
        path: '/campus/academic',
        name: 'Academic Years'
      },
      {
        path: '/campus/grades',
        name: 'Grades & Programs'
      },
      {
        path: '/campus/classes',
        name: 'Program & classes'
      }
    ]
  },
  {
    type: 'span',
    name: 'FEE MANAGEMENT'
  },
  {
    path: '/finance',
    icon: bspiechart,
    type: 'link',
    name: 'Finance Module',
    multiPath: [
      {
        path: '/finance/feebooks',
        name: 'FeeBooks'
      },
      {
        path: '/finance/scholarship',
        name: 'Scholarship'
      }
    ]
  }
]

export const adminRoutes = [
  {
    type: 'span',
    name: 'GENERAL'
  },
  {
    path: '/notification',
    icon: icuser,
    type: 'link',
    name: 'Notification'
  },
  {
    path: '/institutions',
    icon: iccopy,
    type: 'link',
    name: 'Institutions'
  },
  {
    path: '/stages',
    icon: bspiechart,
    type: 'link',
    name: 'Admission Stages'
  },
  {
    path: '/managment',
    icon: dashboard,
    type: 'link',
    name: 'Custom Fields'
  },
  {
    path: '/settings/user-settings',
    icon: authenticator,
    type: 'link',
    name: 'Settings'
  },
  {
    path: '/settings/tasks-settings',
    icon: iccopy,
    type: 'link',
    name: 'Tasks and Reminders'
  },
  {
    path: '/giiki',
    icon: bshouse,
    type: 'link',
    name: 'Company',
    multiPath: [
      {
        path: '/giiki/company',
        name: 'Company Management'
      },
      {
        path: '/giiki/settings',
        name: 'Company Settings'
      }
    ]
  },
  {
    path: '/worlds',
    icon: verified,
    type: 'link',
    name: 'Worlds',
    multiPath: [
      {
        path: '/worlds/giiki',
        name: 'Giiki World'
      },
      {
        path: '/worlds/admissions',
        name: 'Admissions World'
      }
    ]
  },
  {
    path: '/templates',
    icon: icupload,
    type: 'link',
    name: 'Template',
    multiPath: [
      {
        path: '/templates/',
        name: 'Templates'
      },

      {
        path: '/templates/edit-template',
        name: 'Edit Template'
      }
    ]
  },
  {
    path: '/detail',
    icon: icupload,
    type: 'link',
    name: 'Campus',
    multiPath: [
      {
        path: '/detail/company',
        name: 'Campus Details'
      },
      {
        path: '/detail/company-edit',
        name: 'Campus Edit'
      },
      {
        path: '/detail/campus-list',
        name: 'Campus List'
      },
      {
        path: '/detail/campus-information',
        name: 'Campus Information'
      },
      {
        path: '/detail/user-list',
        name: 'User List'
      },
      {
        path: '/detail/approvals',
        name: 'Approvals cards'
      }
    ]
  }
]

export const dataTabs = {
  academTabs: [
    { name: 'IB Middle Years', path: '/campus/academic/middle', type: '/middle' },
    { name: 'IB Enhanced Primary Years', path: '/campus/academic/primary', type: '/primary' },
    { name: 'IB Diploma Programme', path: '/campus/academic/programe', type: '/programe' }
  ]
}

export const dataLinks = {
  academLinks: [
    { name: 'Home', path: '/' },
    { name: 'School Setup', path: '/campus' },
    { name: 'Academic Years', path: '/campus/academic', active: true }
  ],
  gradesLinks: [
    { name: 'Home', path: '/' },
    { name: 'School Setup', path: '/campus' },
    { name: 'Grades and programs', path: '/campus/grades', active: true }
  ],
  classesLinks: [
    { name: 'Home', path: '/' },
    { name: 'School Setup', path: '/campus' },
    { name: 'Program and Classes', path: '/campus/classes', active: true }
  ],
  feebooksLinks: [
    { name: 'Home', path: '/' },
    { name: 'Finance Module', path: '/finance' },
    { name: 'Fee Books', path: '/finance/feebooks', active: true }
  ],
  scholashipsLinks: [
    { name: 'Home', path: '/' },
    { name: 'Finance Module', path: '/finance' },
    { name: 'Scholarship', path: '/finance/scholarship', active: true }
  ],
  feebooksLinksEdit: [
    { name: 'Home', path: '/' },
    { name: 'Finance Module', path: '/finance' },
    { name: 'Fee Books', path: '/finance/feebooks' },
    { name: 'Fee Book IB Edit', path: '/finance/feebooks/edit', active: true }
  ],
  applicationLinks: [
    { name: 'Home', path: '/' },
    { name: 'Enquiries', path: '/application/application', active: true }
  ],
  enquiryLinks: [
    { name: 'Home', path: '/' },
    { name: 'Enquiries', path: '/enquiry', active: true }
  ],
  institutionsLinks: [
    { name: 'General', path: '/' },
    { name: 'Institutions List', path: '/institutions/getting-start', active: true }
  ],
  campusDetailLinks: [
    { name: 'Home', path: '/' },
    { name: 'Campus List', path: '/detail/campus-list' },
    { name: 'Galielo Campus', path: '/detail/company', active: true }
  ],
  campusListLinks: [
    { name: 'Home', path: '/' },
    { name: 'Campus List', path: '/detail/campus-list', active: true }
  ],
  campusInfoLinks: [
    { name: 'Home', path: '/' },
    { name: 'Campuses', path: '/detail/campus-list' },
    { name: 'Campus Information', path: '/detail/campus-information', active: true }
  ],
  admissionsWorldLinks: [
    { name: 'Admissions Home', path: '/' },
    { name: 'Campus Admission Settings', path: '/worlds/admissions', active: true }
  ],
  admissionsStagesLinks: [
    { name: 'Admissions Home', path: '/' },
    { name: 'Stages', path: '/stages', active: true }
  ],
  managmentLinks: [
    { name: 'Admissions Home', path: '/' },
    { name: 'Fields', path: '/managment', active: true }
  ],
  notificationsLinks: [
    { name: 'Admissions Home', path: '/' },
    { name: 'Notifications', path: '/notification', active: true }
  ],
  tasksSettibgLinks: [
    { name: 'Admissions Home', path: '/' },
    { name: 'Tasks and Reminders   ', path: '/tasks-settings', active: true }
  ],
  emailLinks: [
    { name: 'Admissions Home', path: '/' },
    { name: 'Email', path: '/settings/user-settings', active: true }
  ],
  editLinks: [
    { name: 'Admissions Home', path: '/' },
    { name: 'Edit Template', path: '/settings/edit-template', active: true }
  ],
  ApprovalEditLinks: [
    { name: 'Admission Settings', path: '/' },
    { name: 'Admission Approvals   ', path: '/approvals', active: true }
  ],
  communicationEditLinks: [
    { name: 'Admissions', path: '/' },
    { name: 'Communication Template', path: '/detail/templates', active: true }
  ]
}

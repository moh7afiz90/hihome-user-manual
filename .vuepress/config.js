module.exports = {
  title: 'Hihome User Manual',
  description: 'EAT AND ENGAGE WITH SAUDIS IN THEIR HOMES',
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Official Website',
        link: 'http://hihome.sa',
      },
    ],
    sidebar: [
      {
        title: 'Signup and Login',
        path: '/signupandlogin/',
        siderbarDepth: 0,
        collapsable: true,
        children: [
          '/signupandlogin/login',
          '/signupandlogin/signup',
          '/signupandlogin/forget-password',
        ],
      },
      {
        title: 'HiHome User Roles',
        path: '/hihome-experiences/',
        siderbarDepth: 0,
        collapsable: true,
        children: [
          '/hihome-experiences/book-experience',
          '/hihome-experiences/payment',
          '/hihome-experiences/adding-experience',
          '/hihome-experiences/editing-existing-experience',
          '/hihome-experiences/booking-management',
        ],
      },
      {
        title: 'Edit User Profile',
        path: '/edit-profile/',
        siderbarDepth: 0,
        collapsable: true,
        children: [
          '/edit-profile/change-password',
          '/edit-profile/edit-profile',
          '/edit-profile/change-lang',
        ],
      },
      {
        title: 'Admin Dashboard',
        path: '/admin-dashboard/',
        siderbarDepth: 0,
        collapsable: true,
        children: [
          '/admin-dashboard/book-managment',
          '/admin-dashboard/user-management',
          '/admin-dashboard/experience-managment',
          '/admin-dashboard/adding-type',
        ],
      },
    ],
  },
}

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
        path: '/01-signupandlogin/',
        siderbarDepth: 0,
        collapsable: true,
        children: [
          '01-signupandlogin/login',
          '01-signupandlogin/signup',
          '01-signupandlogin/forget-password',
        ],
      },
      {
        title: 'HiHome User Roles',
        path: '/02-hihome-experiences/',
        siderbarDepth: 0,
        collapsable: true,
        children: [
          '/02-hihome-experiences/book-experience',
          '/02-hihome-experiences/payment',
          '/02-hihome-experiences/adding-experience',
          '/02-hihome-experiences/editing-existing-experience',
          '/02-hihome-experiences/booking-management',
        ],
      },
      {
        title: 'Edit User Profile',
        path: '/03-edit-profile/',
        siderbarDepth: 0,
        collapsable: true,
        children: [
          '/03-edit-profile/change-password',
          '/03-edit-profile/edit-profile',
          '/03-edit-profile/change-lang',
        ],
      },
      {
        title: 'Admin Dashboard',
        path: '/04-admin-dashboard/',
        siderbarDepth: 0,
        collapsable: true,
        children: [
          '/04-admin-dashboard/book-managment',
          '/04-admin-dashboard/user-management',
          '/04-admin-dashboard/experience-managment',
          '/04-admin-dashboard/adding-type',
        ],
      },
    ],
  },
  dest: 'public',
}

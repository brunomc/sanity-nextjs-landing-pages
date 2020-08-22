export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f406e4bc86c1000e3dfb480',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8wfu51mr',
                  apiId: '0c535ecb-a3b0-43d9-8667-43e24f959d7e'
                },
                {
                  buildHookId: '5f406e4b542704013a6cd134',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9spmbf1f',
                  apiId: 'd0a62b84-21b5-478d-975d-aefe05c1ea35'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brunomc/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9spmbf1f.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

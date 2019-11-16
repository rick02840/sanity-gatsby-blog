export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5dd010c7fdc5585601a23491',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-g6fomzyh',
                  apiId: '729c73fb-292b-4d76-af2b-8f6f20fed9fe'
                },
                {
                  buildHookId: '5dd010c8a62c727c96533715',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qqzykx5c',
                  apiId: '21233798-a286-438b-b66c-110df91dfb16'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rick02840/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qqzykx5c.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

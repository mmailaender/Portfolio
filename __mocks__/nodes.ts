export const nodes = [
  {
    id: '1',
    data: {
      logo: '/vercelIcon.svg',
      toolType: 'FRONTEND',
      toolName: 'Vercel',
      relatedLogos: [
        {
          id: 11,
          logo: '/next.svg',
          title: 'Next',
          category: 'JS FRAMEWORK',
          description:
            ' Next.js enables you to create full-stack web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.',
        },
        {
          id: 12,
          logo: '/reshaped.svg',
          title: 'Reshaped',
          category: 'UI LIBRARY',
          description:
            ' Reshaped is a professionally crafted design system for everyday product development with Figma and React',
        },
        {
          id: 13,
          logo: '/clerk.svg',
          title: 'Clerk',
          category: 'AUTH',
          description:
            'Clerk is authentication platform, helps to integrate complete user management UIs and APIs, purpose-built for React, Next.js, and the Modern Web.',
        },
        {
          id: 14,
          logo: '/devCycle.svg',
          title: 'DevCycle',
          category: 'FEATURE TOGGLE',
          description:
            'DevCycle enables to use feature flags to deploy faster, reduce release complexity, and maximize ROI.',
        },
        {
          id: 15,
          logo: '/doppler.svg',
          title: 'Doppler',
          category: 'SECRETS',
          description:
            'Doppler enables developers and security teams to keep their secrets and app configuration in sync and secure across devices, environments, and team members.',
        },
        {
          id: 16,
          logo: '/beagle.svg',
          title: 'Beagle Security',
          category: 'DAST',
          description:
            'Beagle Security helps you to discover website & API security issues at the right time and address them in the right way.',
        },
      ],
      hoverDetails: {
        title:
          'JS FRAMEWORK | UI LIBRARY | AUTH | FEATURE TOGGLE | SECRETS | DAST',
        items: [
          {
            id: 11,
            logo: '/next.svg',
            title: 'Next',
            ranking: 4,
            description:
              ' Next.js enables you to create full-stack web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.',
          },
          {
            id: 12,
            logo: '/reshaped.svg',
            title: 'Reshaped',
            ranking: 4,
            description:
              ' Reshaped is a professionally crafted design system for everyday product development with Figma and React',
          },
          {
            id: 13,
            logo: '/clerk.svg',
            title: 'Clerk',
            ranking: 4,
            description:
              'Clerk is authentication platform, helps to integrate complete user management UIs and APIs, purpose-built for React, Next.js, and the Modern Web.',
          },
          {
            id: 14,
            logo: '/devCycle.svg',
            title: 'DevCycle',
            ranking: 4,
            description:
              'DevCycle enables to use feature flags to deploy faster, reduce release complexity, and maximize ROI.',
          },
          {
            id: 15,
            logo: '/doppler.svg',
            title: 'Doppler',
            ranking: 4,
            description:
              'Doppler enables developers and security teams to keep their secrets and app configuration in sync and secure across devices, environments, and team members.',
          },
          {
            id: 16,
            logo: '/beagle.svg',
            title: 'Beagle',
            ranking: 4,
            description:
              'Beagle Security helps you to discover website & API security issues at the right time and address them in the right way.',
          },
        ],
      },
    },
    position: { x: 50, y: 0 },
    type: 'chartCard',
  },
  {
    id: '2',
    data: {
      logo: '/workers.svg',
      toolType: 'FUNCTIONS',
      toolName: 'Workers',
      relatedLogos: [
        {
          id: 21,
          logo: '/gqty.svg',
          category: 'GRAPHQL',
          title: 'Gqty',

          description: 'A GraphQL client built for rapid iteration.',
        },
        {
          id: 22,
          logo: '/fql.svg',
          title: 'FQL',
          category: 'FQL',
          description:
            'The Fauna Query Language (FQL) is the native API for querying Fauna.',
        },
        {
          id: 23,
          logo: '/clerk.svg',
          title: 'Clerk',
          category: 'AUTH',
          description:
            'Clerk is authentication platform, helps to integrate complete user management UIs and APIs.',
        },
        {
          id: 24,
          logo: '/doppler.svg',
          title: 'DOPPLER',
          category: 'SECRETS',
          description:
            'Doppler enables developers and security teams to keep their secrets and app configuration in sync and secure across devices, environments, and team members.',
        },
        {
          id: 25,
          logo: '/beagle.svg',
          category: 'DAST',
          title: 'Beagle Security',
          description:
            'Beagle Security helps you to discover website & API security issues at the right time and address them in the right way.',
        },
      ],
      hoverDetails: {
        title: 'GRAPHQL | FQL | AUTH | SECRETS | DAST',
        items: [
          {
            id: 21,
            logo: '/gqty.svg',
            title: 'Gqty',
            ranking: 4,
            description: 'Gqty A GraphQL client built for rapid iteration.',
          },
          {
            id: 22,
            logo: '/fql.svg',
            title: 'FQL',
            ranking: 4,
            description:
              'The Fauna Query Language (FQL) is the native API for querying Fauna.',
          },
          {
            id: 23,
            logo: '/clerk.svg',
            title: 'Clerk',
            ranking: 4,
            description:
              'Clerk is authentication platform, helps to integrate complete user management UIs and APIs, purpose-built for React, Next.js, and the Modern Web.',
          },
          {
            id: 24,
            logo: '/doppler.svg',
            title: 'Doppler',
            ranking: 4,
            description:
              'Doppler enables developers and security teams to keep their secrets and app configuration in sync and secure across devices, environments, and team members.',
          },
          {
            id: 25,
            logo: '/beagle.svg',
            title: 'Beagle',
            ranking: 4,
            description:
              'Beagle Security helps you to discover website & API security issues at the right time and address them in the right way.',
          },
        ],
      },
    },
    position: { x: 470, y: 0 },
    type: 'chartCard',
  },
  {
    id: '3',
    data: {
      logo: '/fauna.svg',
      toolType: 'DATABASE',
      toolName: 'Fauna',
      relatedLogos: [
        {
          id: 31,
          logo: '/meiliSearch.svg',
          category: 'SEARCH',
          title: 'MeiliSearch',
          description:
            'An open-source, lightning-fast, and hyper-relevant search engine that fits effortlessly into your apps, websites, and workflow.',
        },
        {
          id: 32,
          logo: '/vertex.svg',
          category: 'AI',
          title: 'Vertex',
          description:
            'Build, deploy, and scale machine learning (ML) models faster, with fully managed ML tools for any use case.',
        },
        {
          id: 33,
          logo: '/clerk.svg',
          category: 'AUTH',
          title: 'Clerk',
          description:
            'Clerk is authentication platform, helps to integrate complete user management UIs and APIs, purpose-built for React, Next.js, and the Modern Web.',
        },
        {
          id: 34,
          logo: '/doppler.svg',
          category: 'SECRETS',
          title: 'Doppler',
          ranking: 4,
          description:
            'Doppler enables developers and security teams to keep their secrets and app configuration in sync and secure across devices, environments, and team members.',
        },
        {
          id: 35,
          logo: '/beagle.svg',
          category: 'DAST',
          title: 'Beagle Security',
          description:
            'Beagle Security helps you to discover website & API security issues at the right time and address them in the right way.',
        },
      ],
      hoverDetails: {
        title: 'SEARCH | AI | AUTH | SECRETS | DAST',
        items: [
          {
            id: 31,
            logo: '/meiliSearch.svg',
            title: 'MeiliSearch',
            ranking: 4,
            description:
              'An open-source, lightning-fast, and hyper-relevant search engine that fits effortlessly into your apps, websites, and workflow.',
          },
          {
            id: 32,
            logo: '/vertex.svg',
            title: 'Vertex',
            ranking: 4,
            description:
              'Build, deploy, and scale machine learning (ML) models faster, with fully managed ML tools for any use case. ',
          },
          {
            id: 33,
            logo: '/clerk.svg',
            title: 'Clerk',
            ranking: 4,
            description:
              'Clerk is authentication platform, helps to integrate complete user management UIs and APIs, purpose-built for React, Next.js, and the Modern Web.',
          },
          {
            id: 34,
            logo: '/doppler.svg',
            title: 'Doppler',
            ranking: 4,
            description:
              'Doppler enables developers and security teams to keep their secrets and app configuration in sync and secure across devices, environments, and team members.',
          },
          {
            id: 35,
            logo: '/beagle.svg',
            title: 'Beagle',
            ranking: 4,
            description:
              'Beagle Security helps you to discover website & API security issues at the right time and address them in the right way.',
          },
        ],
      },
    },
    position: { x: 850, y: 0 },
    type: 'chartCard',
  },
  {
    id: '4',
    data: {
      logo: '/github.svg',
      toolType: 'CODE REPOSITORY',
      toolName: 'GitHub',
      relatedLogos: [
        {
          id: 41,
          logo: '/sonarCloud.svg',
          category: 'SAST',
          title: 'SonarCloud',
          description:
            'Enable your team to deliver clean code consistently and efficiently with a tool that easily integrates into the cloud DevOps platforms and extend your CI/CD workflow.',
        },
        {
          id: 42,
          logo: '/doppler.svg',
          category: 'SECRETS',
          title: 'Doppler',
          description:
            'Doppler enables developers and security teams to keep their secrets and app configuration in sync and secure across devices, environments, and team members.',
        },
      ],
      hoverDetails: {
        title: 'SAST | SECRETS',
        items: [
          {
            id: 41,
            logo: '/sonarCloud.svg',
            title: 'SonarCloud',
            ranking: 4,
            description:
              ' Enable your team to deliver clean code consistently and efficiently with a tool that easily integrates into the cloud DevOps platforms and extend your CI/CD workflow.',
          },
          {
            id: 42,
            logo: '/doppler.svg',
            title: 'Doppler',
            ranking: 4,
            description:
              ' Doppler enables developers and security teams to keep their secrets and app configuration in sync and secure across devices, environments, and team members. Goodbye .env files.',
          },
        ],
      },
    },
    position: { x: 150, y: 300 },
    type: 'chartCard',
  },
  {
    id: '5',
    data: {
      logo: '/bit.svg',
      toolType: 'COMPONENTS',
      toolName: 'Bit',
      relatedLogos: [
        {
          id: 51,
          logo: '/figma.svg',
          category: 'DESIGN',
          title: 'Figma',
          description:
            'Figma is a cloud-based design and prototyping tool for creating user interfaces and user experience designs.',
        },
        {
          id: 52,
          logo: '/plasmic.svg',
          category: 'DESIGN',
          title: 'Plasmic',
          description:
            'Create stunning visual content and pages, seamlessly integrating no-code into your codebase. Unblock your teams and ship lightning fast.',
        },
      ],
      hoverDetails: {
        title: 'DESIGN',
        items: [
          {
            id: 51,
            logo: '/figma.svg',
            title: 'Figma',
            ranking: 4,
            description:
              ' Figma is a cloud-based design and prototyping tool for creating user interfaces and user experience designs.',
          },
          {
            id: 52,
            logo: '/plasmic.svg',
            title: 'Plasmic',
            ranking: 4,
            description:
              ' Create stunning visual content and pages, seamlessly integrating no-code into your codebase. Unblock your teams and ship lightning fast.',
          },
        ],
      },
    },
    position: { x: 750, y: 300 },
    type: 'chartCard',
  },
];

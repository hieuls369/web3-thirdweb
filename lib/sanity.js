import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'ovizd8q7',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'sk1riFHCjrceNJOXM4ZLZa89eTm4ZOEGZEVxv4DIlxPSqMGEhN2Bczoi4QN73mgbPblJ8bjIkRdqz79Jqcoc3w5WBvraVoRCfWF8Ij4NEzFipnUHXNyVCnTITkY4mwR15nttiXy22kdnE7L5WkF9fWbxUO3YOhtYKBYV0TjQ3T3TmuAh97SF',
    useCdn: false,
})
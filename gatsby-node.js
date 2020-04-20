exports.createPages = async({ graphql, actions: {createPage} }) => {
    const result = await graphql(`
        {
            en: allContentfulPage(filter: { node_locale: { eq: "en" } }) {
                edges {
                    node {
                        contentful_id
                        slug
                    }
                }
            }
            hu: allContentfulPage(filter: { node_locale: { eq: "hu" } }) {
                edges {
                    node {
                        contentful_id
                        slug
                    }
                }
            }
        }
    `)
    const locales = result.data

    Object.entries(locales).forEach(([locale, pages]) => {
        const urlBase = `${locale}/`
        pages.edges.forEach(page => {
            createPage({
                path: `${page.node.slug}`,
                component: require.resolve('./src/templates/page-template.js'),
                context: {
                    slug: page.node.slug,
                    locale: locale,
                    id: page.node.contentful_id
                }
            })
        })
    })
}




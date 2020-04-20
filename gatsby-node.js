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

const slugs = ["/en/404/", "/hu/404/", "/404/", "/en/dev-404-page/", "/hu/dev-404-page/", "/dev-404-page/", "/en/", "/hu/", "/", "/404.html", "/hu/404.html", "/en/404.html" ]

exports.onCreatePage = async ({
    page,
    actions: { createPage, deletePage, createRedirect },
}) => {
    createRedirect({ fromPath: '/en/home/', toPath: '/en/about/', isPermanent: true })
    if (!slugs.includes(page.path)) {
        if (page.path !== `/${page.context.locale}/${page.context.slug}`) {
            const from = page.path
            const to = `/${page.context.locale}/${page.context.slug}`
            
            deletePage(page)
        }
    }
    if (page.path === slugs[0] || page.path === slugs[1] || page.path === slugs[2]) {
            const page404 = {
                ...page,
                path: page.path.substring(0, page.path.length - 1),
            }
            deletePage(page)
            createPage(page404)
            
    }
}






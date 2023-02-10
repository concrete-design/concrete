const fetch = require('node-fetch')

const gql = (query) => `${query}`

const fetchCloudinaryIcons = async () => {
  try {
    const cloudinaryIcons = await fetch(
      'https://www.habx.com/api/cloudinary/graphql',
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'user-agent': 'concrete-docs',
          'x-request-from': 'concrete-docs',
        },
        body: JSON.stringify({
          query: gql`
            query cloudinaryResourceList {
              cld {
                resources(
                  filters: { directory: "icons" }
                  paginate: { limit: 500 }
                ) {
                  nodes {
                    public_id
                  }
                }
              }
            }
          `,
        }),
        method: 'POST',
      }
    )
    const jsonResponse = await cloudinaryIcons.json()
    return jsonResponse.data.cld.resources.nodes
      .map((icon) => icon.public_id.replace('icons/', ''))
      .sort()
  } catch (e) {
    console.log('Unable to fetch icons') // eslint-disable-line
    console.log(e) // eslint-disable-line
    return null
  }
}

module.exports = () => {
  return {
    name: 'cloudinary',
    async loadContent() {
      const icons = await fetchCloudinaryIcons()
      return { icons }
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions
      await setGlobalData(JSON.stringify(content))
    },
  }
}

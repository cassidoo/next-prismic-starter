import Prismic from 'prismic-javascript'

const REPOSITORY = process.env.NEXT_PUBLIC_PRISMIC_REPO_NAME
export const API_URL = `https://${REPOSITORY}.cdn.prismic.io/api/v2`
export const API_TOKEN = process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN

export const client = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
})

export default function Client(req = null) {
  Prismic.client(apiEndpoint, createClientOptions(req, API_TOKEN))
}

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

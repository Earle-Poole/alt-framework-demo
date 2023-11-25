import { ContentByUUIDResponse, StreamContentResponse } from "./lib.types"

const STREAM_CONTENT_URL = "https://api.axios.com/api/render/stream/content"
const CONTENT_BY_UUID_URL = "https://api.axios.com/api/render/content"

export const fetchStreamContent = async (): Promise<StreamContentResponse> => {
  const response = await fetch(STREAM_CONTENT_URL)
  return await response.json()
}

export const fetchContentByUUID = async (
  uuid: string
): Promise<ContentByUUIDResponse> => {
  const url = CONTENT_BY_UUID_URL + `/${uuid}`
  const response = await fetch(url)
  return await response.json()
}

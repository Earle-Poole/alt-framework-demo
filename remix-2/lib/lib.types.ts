export interface StreamContentResponse {
  count: number
  next: string | null
  previous: string | null
  results: string[]
}

export interface Author {
  username: string
  display_name: string
  subscription: null
}

export interface ContentByUUIDResponse {
  slug: string
  id: string
  headline: string
  seo_headline: string
  authors: Author[]
  byline_photo: string
  published_date: string
  last_published: string
  first_published: string
  primary_section: string
  cover_for_deep_dive: string
  deep_dive: string
  sections: {}[]
  primary_tag: {}
  tags: {}[]
  is_featured: boolean
  new_featured: boolean
  permalink: string
  amp_permalink: string
  primary_image?: {
    id: string
    alt_text: string
    blurred_data: string
    caption: { blocks: [][]; entityMap: [] }
    source: string
    base_image_url: string
    crops: { "1x1": {}[]; "4x3": {}[]; "16x9": {}[] }
    embed: boolean
    is_animated: boolean
  }
  social_image: null
  og_headline: string
  og_description: string
  rubric: null
  template: null
  promotion: null
  wordcount: number
  read_more_wordcount: number
  before_read_more_wordcount: number
  keep_reading_mins: string
  is_breaking_news: boolean
  topics: {}[]
  subtopics: {}[]
  audience: {}
  cross_promote_to: []
  include_on_site: boolean
  include_in_latest_stories: boolean
  homepage_unit_title: boolean
  needs_redirect: boolean
  is_paywalled: boolean
  blocks: {
    blocks: Block[]
  }
}

export interface Block {
  key: string
  text: string
  type: BlockTypes
  depth: number
  inlineStyleRanges: []
  entityRanges: []
  data: {}[]
}

/**
 * Enum representing the different types of blocks.
 * @enum {string}
 */
export enum BlockTypes {
  LI = "unordered-list-item",
  H2 = "header-two",
  UNSTYLED = "unstyled",
  KEEP_READING = "keep-reading",
}

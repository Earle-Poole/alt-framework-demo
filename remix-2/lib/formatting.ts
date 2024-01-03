export const formatAudienceSlug = (slug: string) => {
    return slug.split("-")
    .map((word) =>
      word
        .split("")
        .map((letter, i) =>
          i === 0 ? letter.toUpperCase() : letter
        )
        .join("")
    )
    .join(" ")
}
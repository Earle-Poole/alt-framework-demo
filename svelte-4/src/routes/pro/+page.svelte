<script lang="ts">
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
</script>

<section>
    <h1>We don't have an audience so here's the Pro Homepage!</h1>
    <ul>
        {#each ["fintech-deals", "media-deals", "climate-deals"] as audience}
        <li>
          <a href={location.pathname + "/" + audience} class="text-blue-600 hover:cursor-pointer">
            {formatAudienceSlug(audience)}
          </a>
        </li>
        {/each}
    </ul>
    <pre>
        Pretend there's a list of stories here...
    </pre>
  </section>
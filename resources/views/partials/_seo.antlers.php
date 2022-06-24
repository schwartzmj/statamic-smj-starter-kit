{{# Structured Data #}} {{#
<script type="application/ld+json"></script>
#}}

{{# Meta, etc. #}}
<title>{{ seo:prepend_on_title }} {{ title }} {{ seo:append_on_title }}</title>
<meta name="description" content="{{ description ?? seo:description }}" />
<link rel="canonical" href="{{ permalink }}" />
<meta property="og:url" content="{{ permalink }}" />
<meta property="og:site_name" content="{{ site:name }}" />
<meta
  property="og:title"
  content="{{ seo:prepend_on_title }} {{ title }} {{ seo:append_on_title }}"
/>
<meta
  property="og:description"
  content="{{ description ?? seo:description }}"
/>

{{ if featured_image && seo:watermark }}
{{ glide :src="featured_image" width="1200" height="630" quality="70" :mark="seo:watermark" markw="33w" markpad="3w" brightness="-20" }}
<meta property="og:image" content="{{ url :ensure_left="site:permalink" }}" />
<meta property="og:image:width" content="{{ width }}" />
<meta property="og:image:height" content="{{ height }}" />
<meta property="og:locale" content="{{ site:locale }}" />
{{ /glide }}
{{ else }}
{{ glide :src="seo:image" width="1200" height="630" quality="70" }}
<meta property="og:image" content="{{ url :ensure_left="site:permalink" }}" />
<meta property="og:image:width" content="{{ width }}" />
<meta property="og:image:height" content="{{ height }}" />
<meta property="og:locale" content="{{ site:locale }}" />
{{ /glide }}
{{ /if }}

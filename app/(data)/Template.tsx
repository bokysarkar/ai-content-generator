export default [
  {
    name: "Blog Title",
    desc: "An AI tool that generate blog title depends on yout blog information",
    category: "Blog",
    icon: "https://img.icons8.com/?size=100&id=18911&format=png&color=000000",
    aiPrompt:
      "Give me 5 blog topic idea in bullet wise only based on the given niche & outline",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI tool that generates detailed blog content based on the given niche and outline.",
    category: "Blog",
    icon: "https://img.icons8.com/?size=100&id=UepTbPAxogIt&format=png&color=000000",
    aiPrompt:
      "Generate a full blog content using the given niche and outline. Keep it informative, well-structured, and SEO-friendly.",
    slug: "generate-blog-content",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "YouTube SEO",
    desc: "An AI tool that helps you generate YouTube SEO-friendly titles, descriptions, and tags.",
    category: "SEO",
    icon: "https://img.icons8.com/?size=100&id=19318&format=png&color=000000",
    aiPrompt:
      "Generate SEO-optimized YouTube titles, descriptions, and tags based on the given video niche and keywords.",
    slug: "youtube-seo-tool",
    form: [
      {
        label: "Enter your video niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter relevant keywords",
        field: "textarea",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Blog Idea Generator",
    desc: "An AI tool that generates creative blog ideas based on the given niche.",
    category: "Blog",
    icon: "https://img.icons8.com/?size=100&id=12244&format=png&color=000000",
    aiPrompt:
      "Generate 5 creative blog ideas in bullet points based on the provided niche.",
    slug: "blog-idea-generator",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Title",
    desc: "An AI tool that generates SEO-optimized YouTube video titles based on your video niche and keywords.",
    category: "SEO",
    icon: "https://img.icons8.com/?size=100&id=oWFflfL3Hbcs&format=png&color=000000",
    aiPrompt:
      "Generate 5 YouTube video titles based on the given video niche and keywords.",
    slug: "youtube-title-generator",
    form: [
      {
        label: "Enter your video niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter relevant keywords",
        field: "textarea",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Description",
    desc: "An AI tool that generates SEO-optimized YouTube video descriptions based on your video niche and keywords.",
    category: "SEO",
    icon: "https://img.icons8.com/?size=100&id=13909&format=png&color=000000",
    aiPrompt:
      "Generate an SEO-optimized YouTube video description based on the given video niche and keywords.",
    slug: "youtube-description-generator",
    form: [
      {
        label: "Enter your video niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter relevant keywords",
        field: "textarea",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Blog Paraphrase",
    desc: "An AI tool that helps paraphrase and rewrite blog content for better clarity and originality.",
    category: "Blog",
    icon: "https://img.icons8.com/?size=100&id=119581&format=png&color=000000",
    aiPrompt:
      "Paraphrase the given blog content to make it more engaging and original.",
    slug: "blog-paraphrase-tool",
    form: [
      {
        label: "Enter blog content to paraphrase",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },
];

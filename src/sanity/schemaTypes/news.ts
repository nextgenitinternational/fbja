import { defineType, defineField } from "sanity";

export default defineType({
  name: "news",
  title: "Actualités / News",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titre", type: "localeString" }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title.fr" },
    }),
    defineField({ name: "publishedAt", title: "Date de publication", type: "datetime" }),
    defineField({ name: "coverImage", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "excerpt", title: "Résumé", type: "localeText" }),
    defineField({ name: "body", title: "Contenu", type: "localeBlock" }),
  ],
});

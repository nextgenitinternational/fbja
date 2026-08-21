import { defineType, defineField } from "sanity";

export default defineType({
  name: "statement",
  title: "Communiqués / Statements",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titre", type: "localeString" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title.fr" } }),
    defineField({ name: "publishedAt", title: "Date", type: "datetime" }),
    defineField({ name: "body", title: "Contenu", type: "localeBlock" }),
    defineField({ name: "pdf", title: "Document PDF (optionnel)", type: "file" }),
  ],
});

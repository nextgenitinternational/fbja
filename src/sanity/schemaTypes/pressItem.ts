import { defineType, defineField } from "sanity";

export default defineType({
  name: "pressItem",
  title: "Espace presse / Press Room",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titre", type: "localeString" }),
    defineField({ name: "publishedAt", title: "Date", type: "datetime" }),
    defineField({ name: "file", title: "Fichier (communiqué / dossier de presse)", type: "file" }),
    defineField({ name: "externalLink", title: "Lien externe (optionnel)", type: "url" }),
    defineField({ name: "description", title: "Description", type: "localeText" }),
  ],
});

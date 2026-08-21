import { defineType, defineField } from "sanity";

export default defineType({
  name: "resource",
  title: "Ressources / Resources",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titre", type: "localeString" }),
    defineField({ name: "description", title: "Description", type: "localeText" }),
    defineField({ name: "file", title: "Fichier (optionnel)", type: "file" }),
    defineField({ name: "externalLink", title: "Lien externe (optionnel)", type: "url" }),
  ],
});

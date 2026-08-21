import { defineType, defineField } from "sanity";

export default defineType({
  name: "member",
  title: "Membres / Members",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nom", type: "string" }),
    defineField({ name: "role", title: "Poste / Fonction", type: "localeString" }),
    defineField({
      name: "committee",
      title: "Membre du bureau exécutif ?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "bio", title: "Bio", type: "localeText" }),
    defineField({ name: "order", title: "Ordre d'affichage", type: "number" }),
  ],
});

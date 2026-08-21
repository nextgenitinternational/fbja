import { defineType, defineField } from "sanity";

export default defineType({
  name: "partner",
  title: "Partenaires / Partners",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nom", type: "string" }),
    defineField({ name: "logo", title: "Logo", type: "image" }),
    defineField({ name: "website", title: "Site web", type: "url" }),
    defineField({ name: "order", title: "Ordre d'affichage", type: "number" }),
  ],
});

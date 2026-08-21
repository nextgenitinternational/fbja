import { defineType, defineField } from "sanity";

export default defineType({
  name: "event",
  title: "Événements / Events",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titre", type: "localeString" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title.fr" } }),
    defineField({ name: "startDate", title: "Date de début", type: "datetime" }),
    defineField({ name: "endDate", title: "Date de fin", type: "datetime" }),
    defineField({ name: "location", title: "Lieu", type: "string" }),
    defineField({ name: "coverImage", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "description", title: "Description", type: "localeText" }),
  ],
});

import { defineType, defineField } from "sanity";

export default defineType({
  name: "galleryImage",
  title: "Galerie / Gallery",
  type: "document",
  fields: [
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({ name: "caption", title: "Légende", type: "localeString" }),
    defineField({ name: "eventRef", title: "Événement lié (optionnel)", type: "reference", to: [{ type: "event" }] }),
  ],
});

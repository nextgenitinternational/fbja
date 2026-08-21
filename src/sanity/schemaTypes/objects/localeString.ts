import { defineType, defineField } from "sanity";

export const localeString = defineType({
  name: "localeString",
  title: "Texte multilingue",
  type: "object",
  fields: [
    defineField({ name: "fr", title: "Français", type: "string" }),
    defineField({ name: "en", title: "English", type: "string" }),
    defineField({ name: "bn", title: "বাংলা", type: "string" }),
  ],
});

export const localeText = defineType({
  name: "localeText",
  title: "Texte long multilingue",
  type: "object",
  fields: [
    defineField({ name: "fr", title: "Français", type: "text" }),
    defineField({ name: "en", title: "English", type: "text" }),
    defineField({ name: "bn", title: "বাংলা", type: "text" }),
  ],
});

export const localeBlock = defineType({
  name: "localeBlock",
  title: "Contenu multilingue",
  type: "object",
  fields: [
    defineField({ name: "fr", title: "Français", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "en", title: "English", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "bn", title: "বাংলা", type: "array", of: [{ type: "block" }] }),
  ],
});

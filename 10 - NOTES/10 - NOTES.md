---
banner: "![[banner-notes.jpg]]"
cssclass: cards
date_created: 2023-07-05
date_modified: 2023-07-19
description: Collection of general atomic notes.
document_type: dashboard
include_in_navbar: true
navbar_name: Notes
tags: 
  - dashboard 
  - note
---

```dataviewjs
const {Navbar} = customJS;
await Navbar.createNavbar(app, dv); 
```
# Notes Home
Collection of general atomic notes.

```button
name New Note
type note(My New Note, tab) template
action _general/tp_generic_template
```
^button-9b62


**Collection of general notes**
```dataviewjs
for (let group of dv.pages('"10 - NOTES" and !#dashboard').groupBy(p => p.note)) {
	dv.table(["Name", "Description", "Tags"], 
		group.rows 
			.sort(k => k.file.mtime, 'desc')
			.map(k => [
			k.file.link, 
			k['description'],
			dv.span(k.file.tags.values.toString().replaceAll(",", " "))
			]))}
```

%% Begin Waypoint %%
- **[[10 - NOTES]]**
	- [[_tools]]
	- [[My New Note]]
	- [[sup bro]]
	- [[Terminal]]

%% End Waypoint %%

---
```dataviewjs
const {Navbar} = customJS;
await Navbar.createNavbar(app, dv); 
```
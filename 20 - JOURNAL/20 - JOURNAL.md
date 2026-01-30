---
banner: "![[banner-journal.jpg]]"
date_created: 2026-01-30
date_modified: 2026-01-30
cssclass: kanban gridlist noyaml
description: List of journal entries.
document_type: dashboard
include_in_navbar: true
navbar_name: Journal
tags: 
  - dashboard
  - journal
obsidianUIMode: preview
---

```dataviewjs
const {Navbar} = customJS;
await Navbar.createNavbar(app, dv); 
```
# Journal Entries
Explore your collection of journal entries.

```button
name Add Daily Note
type command
action Daily notes: Open today's daily note
templater true
```


**Table of journal entries**
```dataviewjs
for (let group of dv.pages('"20 - JOURNAL/01 - Daily Notes" and !#dashboard').groupBy(p => p.entry)) {
	dv.table(["Entry", "Significant event"], 
		group.rows 
			.sort(k => k.name, 'desc')
			.map(k => [
			k.file.link,
			k['event']
			]))}
```
`$="<small>Number of entries: " + dv.pages('"20 - JOURNAL/01 - Daily Notes"').length+"</small>"`

---
```dataviewjs
const {Navbar} = customJS;
await Navbar.createNavbar(app, dv); 
```

`button-homewp`  `button-browseBack`  `button-browseNext` `button-browseRefresh` 
%% Begin Waypoint %%
- **[[20 - JOURNAL]]**
	- **[[01 - Daily Notes]]**
	- **[[02 - Weekly Notes]]**

%% End Waypoint %%
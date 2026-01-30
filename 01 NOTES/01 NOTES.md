---
banner: "![[banner-notes.jpg]]"
cssclass: cards
date_created: 2023-07-05
date_modified: 2023-07-19
description: Collection of general atomic notes.
document_type: dashboard
include_in_navbar: true
navbar_name: Notes
tags: dashboard note
---

```dataviewjs
let navbar = [];
let loadingMessage = dv.el("span", "**Loading navigation...**", {attr: {style: "font-size:13px; color:gray"}});

let allPages = dv.pages("#dashboard").sort(page => page.file.folder, "asc");
let filteredPages = allPages.filter(p => 
    p.file.tags.values.includes("#dashboard") && p?.include_in_navbar == true
);

for(let page of filteredPages){
    let navItem = '';
    let navName = 'Untitled';
    let navLink = '';

    if(page.navbar_name === undefined){
        navName = page.file.name;
    } else {
        navName = page.navbar_name;
    }
    navLink = page.file.path;

    // Format the nav  item link
    if(dv.current().file.path === page.file.path){
        navItem = `**[[${navLink}|${navName}]]**`
    } else {
        navItem = `[[${navLink}|${navName}]]`
    }

    navbar.push(navItem)
}

dv.paragraph(navbar.join(' | '))

if(filteredPages.values.length > 0){
    loadingMessage.remove();
}
```
# Notes Home
Collection of general atomic notes.

```button
name New Note
type note(My New Note, tab) template
action _general/tp_generic_template
```
^button-9b62


%% Begin Waypoint %%
- **[[01 NOTES]]**
	- [[_tools]]
	- [[2026-01-28]]
	- [[klk]]
	- [[My New Note]]
	- [[sdff.md]]
	- [[sup]]
	- [[Terminal]]

%% End Waypoint %%

<%*
	let title = tp.file.title;
	if(title.toLowerCase().includes("untitled")){
		title = await tp.system.prompt("Note title");
		if(title.length == 0){
			title = `untitled note (${tp.date.now("YYYY-MM-DD")})`;
		}
	} else {
		title = await tp.system.prompt("Note title", title);
	}

	// Sanitize the title to remove disallowed characters for file names
	let sanitizedTitle = title.replace(/[\\/:*?"<>|]/g, '-');

	// Define the target folder and the full path for the new file
	const folderPath = "10 - NOTES";
	const newFilePath = `${folderPath}/${sanitizedTitle}`; // Ensure .md extension is included

	// Use tp.file.move to place the file in the correct folder and rename it
	// This is a more robust way to handle file creation and renaming in a specific location.
	await tp.file.move(newFilePath);
	
	// After moving, we need to get the file object again, as the path has changed.
	// We'll use the original 'title' here for the H1 header, as that's what the user sees.
	let fileObject = tp.file.find_tfile(newFilePath); 
	
	let description = await tp.system.prompt("Note description (press enter to skip)");
	let tagsCleaned = "note";
	let tags = await tp.system.prompt("Note tags (separate with comma, press enter to skip)");
	tags = tags.split(",");
	for(let i=0; i<tags.length; i++){
		tagsCleaned += ` ${tags[i].toLowerCase().trim().replaceAll(" ", "-")}`;
	}
_%>
---

UUID: <% tp.date.now("YYYYMMDDHHmmss") %> 
date_created: <% tp.date.now("YYYY-MM-DD") %>
date_modified: <% tp.date.now("YYYY-MM-DD") %>
document_type: note
tags: <% tagsCleaned %>
---
[[10 - NOTES|Notes]] / **[[<% newFilePath %>|<% title %>]]**
# <% title %>
**Overview**
Description:: <% description %>

## ✍

<% tp.file.cursor(1) %>




---
[[10 - NOTES|Notes]] / **[[<% newFilePath %>|<% title %>]]**
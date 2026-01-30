---
<%-* 
let  newtitle
if(tp.file.title.includes("Unnamed") || tp.file.title.toLowerCase().includes("untitled")) 
{ title=await tp.system.prompt("Please enter the name of the file to be created");
  newtitle=title||tp.date.now("YYYYMMDDHHmmss")
	await tp.file.rename(newtitle)}
	else newtitle=tp.file.title
-%>

UID: <% tp.date.now("YYYYMMDDHHmmss") %> 
aliases: 
tags: 
source: 
cssclass:
created: <% tp.date.now("YYYY-MM-DD") %>
---

## ✍

<% tp.file.cursor(1) %>
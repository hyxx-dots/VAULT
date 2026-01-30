<%*
	const filePath = tp.file.path(true);
	let fileObject = this.app.vault.getAbstractFileByPath(filePath);
_%>
<% "---" %>
UID: <% tp.date.now("YYYYMMDDHHmm")%> 
date_created: <% `${tp.date.now("YYYY-MM-DD")}` %>
date_modified: <% `${tp.date.now("YYYY-MM-DD")}` %>
document_type: journal
alias:
banner: "<% tp.user.getrandomImage("00 OBSIDIAN/004 Attachments")%>"
Banner style: Solid
cssclass: mynote,noyaml
tags: journal  daily-notes
<% "---" %>
[[01 - Daily Notes|Daily Notes]] / **<% `[[${filePath.slice(0,-3)}|${fileObject.basename}]]` %>**
<% `# ${fileObject.basename}` %>

> [!blank] 
> [timeline{{date:DDD}}::timeline]

```ad-flex
(Weather::<% tp.user.getweather("") %>)
> [!infobox|noicon]- 🔖 Files created on the same day
> ```dataviewjs 
const filename=dv.current().file.name;
dv.list(dv.pages().where(p => p.file.cday.toISODate() === filename).sort(p => p.file.ctime, 'desc').file.link) 
>```
```
## ✏️Thoughts

<% tp.file.cursor(1) %>









[[01 - Daily Notes|Daily Notes]] / **<% `[[${filePath.slice(0,-3)}|${fileObject.basename}]]` %>**
<% `# ${fileObject.basename}` %>
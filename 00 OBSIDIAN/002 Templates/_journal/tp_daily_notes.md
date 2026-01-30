---
UUID: <% tp.date.now("YYYYMMDDHHmm")%> 
alias:
banner: "<% tp.user.getrandomImage("00 - OBSIDIAN/004 Attachments")%>"
Banner style: Solid
cssclass: mynote,noyaml
---


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

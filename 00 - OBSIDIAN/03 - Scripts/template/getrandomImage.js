let images = []

async function imgpath(folders) {
    await init(folders);
    return images[Math.floor(Math.random() * images.length)].path
}

async function init(folders) {
	const folder = app.vault.getAbstractFileByPath(folders);
	if (folder && folder.children) {
		images = folder.children.filter(file => 
			file.extension && ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(file.extension.toLowerCase())
		);
	}
}

module.exports = imgpath

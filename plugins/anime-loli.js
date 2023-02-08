import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://raw.githubusercontent.com/Icontol/kontolbapakkaupecah/master/null-20230205-WA0075.jpg'
	conn.sendButton(m.chat, 'ngga ada loli dasar pedo', wm, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(loli)$/i
handler.tags = ['anime']
handler.help = ['loli']
handler.premium = false
handler.limit = true

export default handler

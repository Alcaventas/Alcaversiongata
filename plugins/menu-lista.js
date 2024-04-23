import fs from 'fs'
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let pp = gataVidMenu
let vn = './media/menu.mp3'
let pareja = global.db.data.users[m.sender].pasangan 
//let fsizedoc = '1'.repeat(10)
//let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

const lugarFecha = moment().tz('America/Lima')
const formatoFecha = {
weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
lugarFecha.locale('es', formatoFecha)
const horarioFecha = lugarFecha.format('dddd, DD [de] MMMM [del] YYYY || HH:mm A').replace(/^\w/, (c) => c.toUpperCase())

let menu = `${lenguajeGB['smsConfi2']()} *${user.genero === 0 ? '👤' : user.genero == 'Ocultado 🕶️' ? `🕶️` : user.genero == 'Mujer 🚺' ? `🚺` : user.genero == 'Hombre 🚹' ? `🚹` : '👤'} ${user.registered === true ? user.name : taguser} 💖*

┏━━━━━━━━━━━━━━━━┓
┣⟣☯︎ *𝗢𝗪𝗡𝗘𝗥:* Alcashop.ff
┣⟣☯︎ *𝗡𝗨𝗠𝗘𝗥𝗢:* +528241050228
┣⟣☯︎ * 𝐁𝐎𝐓 𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 ( . y ! )
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┣ *< REPORTAR ERRORES />*
┣🔰 _$ +528241050228 reporte *<texto>*_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ *<MENU DE ADMIS DE GRUPO />*
┃ *< ACTIVAR /DESACTIVAR />*
┣☑️ _${usedPrefix}enable *welcome*_
┣☑️ _${usedPrefix}disable *welcome*_
┣☑️ _${usedPrefix}enable *modohorny*_
┣☑️ _${usedPrefix}disable *modohorny*_
┣☑️ _${usedPrefix}enable *antilink*_
┣☑️ _${usedPrefix}disable *antilink*_
┣☑️ _${usedPrefix}enable *antilink2*_
┣☑️ _${usedPrefix}disable *antilink2*_
┣☑️ _${usedPrefix}enable *detect*_
┣☑️ _${usedPrefix}disable *detect*_
┣☑️ _${usedPrefix}enable *audios*_
┣☑️ _${usedPrefix}disable *audios*_
┣☑️ _${usedPrefix}enable *autosticker*_
┣☑️ _${usedPrefix}disable *autosticker*_
┣☑️ _${usedPrefix}enable *antiviewonce*_
┣☑️ _${usedPrefix}disable *antiviewonce*_
┣☑️ _${usedPrefix}enable *antitoxic*_
┣☑️ _${usedPrefix}disable *antitoxic*_
┣☑️ _${usedPrefix}enable *antitraba*_
┣☑️ _${usedPrefix}disable *antitraba*_
┣☑️ _${usedPrefix}enable *antiarabes*_
┣☑️ _${usedPrefix}disable *antiarabes*_
┣☑️ _${usedPrefix}enable *modoadmin*_
┣☑️ _${usedPrefix}disable *modoadmin*_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ *< JUEGOS />*
┣🎖️ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┣🎖️ _${usedPrefix}ppt *<papel / tijera /piedra>*_
┣🎖️ _${usedPrefix}prostituto *<nombre / @tag>*_
┣🎖️ _${usedPrefix}prostituta *<nombre / @tag>*_
┣🎖️ _${usedPrefix}gay2 *<nombre / @tag>*_
┣🎖️ _${usedPrefix}lesbiana *<nombre / @tag>*_
┣🎖️ _${usedPrefix}pajero *<nombre / @tag>*_
┣🎖️ _${usedPrefix}pajera *<nombre / @tag>*_
┣🎖️ _${usedPrefix}puto *<nombre / @tag>*_
┣🎖️ _${usedPrefix}puta *<nombre / @tag>*_
┣🎖️ _${usedPrefix}manco *<nombre / @tag>*_
┣🎖️ _${usedPrefix}manca *<nombre / @tag>*_
┣🎖️ _${usedPrefix}rata *<nombre / @tag>*_
┣🎖️ _${usedPrefix}love *<nombre / @tag>*_
┣🎖️ _${usedPrefix}doxear *<nombre / @tag>*_
┣🎖️ _${usedPrefix}pregunta *<texto>*_
┣🎖️ _${usedPrefix}suitpvp *<@tag>*_
┣🎖️ _${usedPrefix}slot *<apuesta>*_
┣🎖️ _${usedPrefix}ttt *<nombre sala>*_
┣🎖️ _${usedPrefix}delttt_
┣🎖️ _${usedPrefix}acertijo_
┣🎖️ _${usedPrefix}simi *<texto>*_
┣🎖️ _${usedPrefix}top *<texto>*_
┣🎖️ _${usedPrefix}topgays_
┣🎖️ _${usedPrefix}topotakus_
┣🎖️ _${usedPrefix}formarpareja_
┣🎖️ _${usedPrefix}verdad_
┣🎖️ _${usedPrefix}reto_
┣🎖️ _${usedPrefix}cancion_
┣🎖️ _${usedPrefix}pista_
┣🎖️ _${usedPrefix}akinator_
┣🎖️ _${usedPrefix}wordfind_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ *< DESCARGAS />*
┣📥 _${usedPrefix}instagram *<enlace / link / url>*_
┣📥 _${usedPrefix}mediafire *<enlace / link / url>*_
┣📥 _${usedPrefix}gitclone *<enlace / link / url>*_
┣📥 _${usedPrefix}gdrive *<enlace / link / url>*_
┣📥 _${usedPrefix}tiktok *<enlace / link / url>*_
┣📥 _${usedPrefix}play *<texto>*_
┣📥 _${usedPrefix}play2 *<texto>*_
┣📥 _${usedPrefix}play.1 *<texto>*_
┣📥 _${usedPrefix}imagen *<texto>*_
┣📥 _${usedPrefix}pinterest *<texto>*_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ *< BUSCADORES />*
┣🔍 _${usedPrefix}cuevana *<texto>*_
┣🔍 _${usedPrefix}pelisplus *<texto>*_
┣🔍 _${usedPrefix}modapk *<texto>*_
┣🔍 _${usedPrefix}stickersearch *<texto>*_
┣🔍 _${usedPrefix}stickersearch2 *<texto>*_
┣🔍 _${usedPrefix}animeinfo *<texto>*_
┣🔍 _${usedPrefix}google *<texto>*_
┣🔍 _${usedPrefix}letra *<texto>*_
┣🔍 _${usedPrefix}wikipedia *<texto>*_
┣🔍 _${usedPrefix}ytsearch *<texto>*_
┣🔍 _${usedPrefix}playstore *<texto>*_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ *< GRUPOS />* 
┣💎 _${usedPrefix}add *<numero>*_
┣💎 _${usedPrefix}kick *<@tag>*_
┣💎 _${usedPrefix}kick2 *<@tag>*_
┣💎 _${usedPrefix}listanum *<texto>*_
┣💎 _${usedPrefix}kicknum *<texto>*_
┣💎 _${usedPrefix}grupo *<abrir / cerrar>*_
┣💎 _${usedPrefix}grouptime *<opcion> <tiempo>*_
┣💎 _${usedPrefix}promote *<@tag>*_
┣💎 _${usedPrefix}demote *<@tag>*_
┣💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┣💎 _${usedPrefix}demote *<@tag>*_
┣💎 _${usedPrefix}infogroup_
┣💎 _${usedPrefix}resetlink_
┣💎 _${usedPrefix}link_
┣💎 _${usedPrefix}setwelcome *<texto>*_
┣💎 _${usedPrefix}setbye *<texto>*_
┣💎 _${usedPrefix}hidetag *<texto>*_
┣💎 _${usedPrefix}warn *<@tag>*_
┣💎 _${usedPrefix}unwarn *<@tag>*_
┣💎 _${usedPrefix}listwarn_
┣💎 _${usedPrefix}fantasmas_
┣💎 _${usedPrefix}destraba_
┣💎 _${usedPrefix}setpp *<imagen>*_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ *< RPG LIMITES />*
┣💵 _${usedPrefix}adventure_
┣💵 _${usedPrefix}cazar_
┣💵 _${usedPrefix}cofre_
┣💵 _${usedPrefix}balance_
┣💵 _${usedPrefix}claim_
┣💵 _${usedPrefix}heal_
┣💵 _${usedPrefix}lb_
┣💵 _${usedPrefix}levelup_
┣💵 _${usedPrefix}myns_
┣💵 _${usedPrefix}perfil_
┣💵 _${usedPrefix}work_
┣💵 _${usedPrefix}minar_
┣💵 _${usedPrefix}minar2_
┣💵 _${usedPrefix}buy_
┣💵 _${usedPrefix}buyall_
┣💵 _${usedPrefix}verificar_
┣💵 _${usedPrefix}robar *<cantidad> <@tag>*_
┣💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
┣💵 _${usedPrefix}unreg *<numero de serie>*_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ *< FRASES Y TEXTOS />*
┣🥀 _${usedPrefix}piropo_
┣🥀 _${usedPrefix}consejo_
┣🥀 _${usedPrefix}fraseromantica_
┣🥀 _${usedPrefix}historiaromantica_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ *< RADMON />*
┣👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
┣👾 _${usedPrefix}cristianoronaldo_
┣👾 _${usedPrefix}messi_
┣👾 _${usedPrefix}cat_
┣👾 _${usedPrefix}dog_
┣👾 _${usedPrefix}meme_
┣👾 _${usedPrefix}itzy_
┣👾 _${usedPrefix}blackpink_
┣👾 _${usedPrefix}navidad_
┣👾 _${usedPrefix}wpmontaña_
┣👾 _${usedPrefix}pubg_
┣👾 _${usedPrefix}wpgaming_
┣👾 _${usedPrefix}wpaesthetic_
┣👾 _${usedPrefix}wpaesthetic2_
┣👾 _${usedPrefix}wprandom_
┣👾 _${usedPrefix}wallhp_
┣👾 _${usedPrefix}wpvehiculo_
┣👾 _${usedPrefix}wpmoto_
┣👾 _${usedPrefix}coffee_
┣👾 _${usedPrefix}pentol_
┣👾 _${usedPrefix}caricatura_
┣👾 _${usedPrefix}ciberespacio_
┣👾 _${usedPrefix}technology_
┣👾 _${usedPrefix}doraemon_
┣👾 _${usedPrefix}hacker_
┣👾 _${usedPrefix}planeta_
┣👾 _${usedPrefix}randomprofile_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ *< HERRAMIENTAS />*
┣🛠️ _${usedPrefix}chatgpt *<texto>*_
┣🛠️ _${usedPrefix}delchatgpt
┣🛠️ _${usedPrefix}dall-e *<texto>*_
┣🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
┣🛠️ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
┣🛠️ _${usedPrefix}readviewonce *<imagen / video>*_
┣🛠️ _${usedPrefix}clima *<país> <ciudad>*_
┣🛠️ _${usedPrefix}encuesta *<texto1|texto2...>*_
┣🛠️ _${usedPrefix}afk *<motivo>*_
┣🛠️ _${usedPrefix}ocr *<responde a imagen>*_
┣🛠️ _${usedPrefix}hd *<responde a imagen>*_
┣🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
┣🛠️ _${usedPrefix}calc *<operacion math>*_
┣🛠️ _${usedPrefix}del *<mensaje>*_
┣🛠️ _${usedPrefix}whatmusic *<audio>*_
┣🛠️ _${usedPrefix}readqr *<imagen (QR)>*_
┣🛠️ _${usedPrefix}qrcode *<texto>*_
┣🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
┣🛠️ _${usedPrefix}styletext *<texto>*_
┣🛠️ _${usedPrefix}traducir *<texto>*_
┣🛠️ _${usedPrefix}nowa *<numero>*_
┣🛠️ _${usedPrefix}covid *<pais>*_
┣🛠️ _${usedPrefix}horario_
┗━━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━━┓
┃ *< CREA STICKERS />*
┣👽 _${usedPrefix}sticker *<responder a imagen o video>*_
┣👽 _${usedPrefix}sticker *<enlace / link / url>*_
┣👽 _${usedPrefix}sticker2 *<responder a imagen o video>*_
┣👽 _${usedPrefix}sticker2 *<enlace / link / url>*_
┣👽 _${usedPrefix}s *<responder a imagen o video>*_
┣👽 _${usedPrefix}s *<enlace / link / url>*_
┣👽 _${usedPrefix}s2 *<responder a imagen o video>*_
┣👽 _${usedPrefix}s2 *<enlace / link / url>*_
┣👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┣👽 _${usedPrefix}scircle *<imagen>*_
┣👽 _${usedPrefix}sremovebg *<imagen>*_
┣👽 _${usedPrefix}semoji *<tipo> <emoji>*_
┣👽 _${usedPrefix}attp *<texto>*_
┣👽 _${usedPrefix}attp2 *<texto>*_
┣👽 _${usedPrefix}attp3 *<texto>*_
┣👽 _${usedPrefix}ttp *<texto>*_
┣👽 _${usedPrefix}ttp2 *<texto>*_
┣👽 _${usedPrefix}ttp3 *<texto>*_
┣👽 _${usedPrefix}ttp4 *<texto>*_
┣👽 _${usedPrefix}ttp5 *<texto>*_
┣👽 _${usedPrefix}pat *<@tag>*_
┣👽 _${usedPrefix}slap *<@tag>*_
┣👽 _${usedPrefix}kiss *<@tag>*_
┣👽 _${usedPrefix}dado_
┣👽 _${usedPrefix}wm *<packname> <author>*_
┣👽 _${usedPrefix}stickermarker *<efecto> <imagen>*_
┣👽 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
*╰━━━━━━━━━━━━━⬣*`.trim()
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menu, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝗖𝗿𝗲𝗮𝗱𝗼 ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}}) 
await conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m }) 
//conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menu, fkontak)
	
} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help\?)$/i
handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  

/* 
import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
try{
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
wm = global.wm
vs = global.vs
      
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let pareja = global.db.data.users[m.sender].pasangan 
let user = global.db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const sections = [{
title: comienzo + ' ' + lenguajeGB['smsLista1']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista2'](), rowId: `${usedPrefix}creadora`},
{title: lenguajeGB['smsLista3'](), rowId: `${usedPrefix}donar`},
{title: lenguajeGB['smsLista4'](), rowId: `${usedPrefix}ping`},
{title: lenguajeGB['smsLista5'](), rowId: `${usedPrefix}infomenu`},
{title: lenguajeGB['smsLista6'](), rowId: `${usedPrefix}allmenu`},
{title: lenguajeGB['smsLista7'](), rowId: `${usedPrefix}instalarbot`},
{title: lenguajeGB['smsLista8'](), rowId: `${usedPrefix}serbot`},
{title: lenguajeGB['smsLista9'](), rowId: `${usedPrefix}términos`, description: '\n'}
]},{
title: comienzo + ' ' + lenguajeGB['smsLista10']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista11'](), rowId: `${usedPrefix}top`},
{title: lenguajeGB['smsLista12'](), rowId: `${usedPrefix}listprem`},
{title: lenguajeGB['smsLista13'](), rowId: `${usedPrefix}pase premium`},
{title: lenguajeGB['smsLista14'](), rowId: `${usedPrefix}inventario 3`},
{title: lenguajeGB['smsLista15'](), rowId: `${usedPrefix}rpgmenu`},
{title: lenguajeGB['smsLista16'](), rowId: `${usedPrefix}buy`},
{title: lenguajeGB['smsLista17'](), rowId: `${usedPrefix}inventory`, description: '\n'}
]},{	
title: comienzo + ' ' + lenguajeGB['smsLista18']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista19'](), rowId: `${usedPrefix}descargasmenu`},
{title: lenguajeGB['smsLista20'](), rowId: `${usedPrefix}buscarmenu`},
{title: lenguajeGB['smsLista21'](), rowId: `${usedPrefix}convertidormenu`},
{title: lenguajeGB['smsLista22'](), rowId: `${usedPrefix}audioefectomenu`},
{title: lenguajeGB['smsLista22_1'](), rowId: `${usedPrefix}herramientasmenu`, description: '\n'}
]},{
title: comienzo + ' ' + lenguajeGB['smsLista23']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista24'](), rowId: `${usedPrefix}juegosmenu`},
{title: lenguajeGB['smsLista25'](), rowId: `${usedPrefix}audios`},
{title: lenguajeGB['smsLista26'](), rowId: `${usedPrefix}stickermenu`},
{title: lenguajeGB['smsLista27'](), rowId: `${usedPrefix}makermenu`},
{title: lenguajeGB['smsLista28'](), rowId: `${usedPrefix}menulogos2`},
{title: lenguajeGB['smsLista29'](), rowId: `${usedPrefix}randommenu`},
{title: lenguajeGB['smsLista30'](), rowId: `${usedPrefix}hornymenu`, description: '\n'}
]},{	
title: comienzo + ' ' + lenguajeGB['smsLista31']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista32'](), rowId: `${usedPrefix}grupomenu`},
{title: lenguajeGB['smsLista33'](), rowId: `${usedPrefix}listas`},
{title: lenguajeGB['smsLista34'](), rowId: `${usedPrefix}on`},
{title: lenguajeGB['smsLista35'](), rowId: `${usedPrefix}ownermenu`}
]}]

const listMessage = {
text: `╭━⊰ *${ucapan()}* ⊱━⬣
┃
┃ *︾ U S U A R I O ︾*
┃
┃»» *${user.genero === 0 ? '👤' : user.genero == 'Ocultado 🕶️' ? `🕶️` : user.genero == 'Mujer 🚺' ? `🚺` : user.genero == 'Hombre 🚹' ? `🚹` : '👤'} ${user.registered === true ? user.name : name}*
┃»» *Mi estado* ➺ ${typeof user.miestado !== 'string' ? '_#miestado || Estado no asignado_' : '_Me siento ' + user.miestado + '_'}
┃»» *Registrado ➺ ${user.registered === true ? '✅' : '❌ _#verificar_'}* 
┃»» *Premium ➺ ${user.premiumTime > 0 ? '✅' : '❌ _#pase premium_'}*
┃
┃ *︾ M E N U ︾*
┃
┃✜ *${lenguajeGB['smsVersion']()}* 
┃➺ \`\`\`${vs}\`\`\`
┃✜ *Tipo de registro* 
┃➺ ${user.registered === true ? `_${user.registroC === true ? 'Registro Completo 🗂️' : 'Registro Rápido 📑'}_` : '_' + usedPrefix + 'verificar_'} 
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✜ *${lenguajeGB['smsTotalUsers']()}* 
┃➺ _${Object.keys(global.db.data.users).length}_
┃✜ *Registrados* 
┃➺ _${rtotalreg}/${totalreg}_
┃✜ *${lenguajeGB['smsMode']()}* 
┃➺ _${global.opts['self'] ? `*${lenguajeGB['smsModePrivate']()}*` : `*${lenguajeGB['smsModePublic']()}*`}_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✜ *${lenguajeGB['smsTime']()}* 
┃➺ _${time}_ 	    
┃✜ *${lenguajeGB['smsUptime']()}* 
┃➺ _${uptime}_
┃   ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃✜ *${lenguajeGB['smsBanChats']()}* 
┃➺ _${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_ 
┃✜ *${lenguajeGB['smsBanUsers']()}* 
┃➺ _${Object.entries(global.db.data.users).filter(user => user[1].banned).length}_
┃
╰━⊰ *${wm}* ⊱━⬣\n
*»» ✨ Pasatiempo(s)* ➺ ${user.pasatiempo === 0 ? '*Sin Registro*' : user.pasatiempo + '\n'}
*»» ${lenguajeGB['smsPareja']()} ➺ ${pareja ? `${name} 💕 ${conn.getName(pareja)}` : `🛐 ${lenguajeGB['smsResultPareja']()}`}* ${(conn.user.jid == global.conn.user.jid ? '' : `\n»» *Sub Bot del:* wa.me/${global.conn.user.jid.split`@`[0]}`) || ''}`,
footer: `*↓ TRUSTED LINK* ✅
${readMore}${redesMenu.getRandom()}`, //${name} ${ucapan()} //lenguajeGB['smsMenu']()
title: null,
buttonText: `${lenguajeGB['smsListaMenu']()}`, 
sections }
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})


} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
//handler.register = true
handler.exp = 50
export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = `${lenguajeGB['smsSaludo']()}`
  if (time >= 4) {
    res = `${lenguajeGB['smsDia']()}`
  }
  if (time >= 11) {
    res = `${lenguajeGB['smsTarde']()}`
  }
  if (time >= 15) {
    res = `${lenguajeGB['smsTarde2']()}`
  }
  if (time >= 17) {
    res = `${lenguajeGB['smsNoche']()}`
  }
  return res
} 
*/

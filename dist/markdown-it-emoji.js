/*! markdown-it-emoji 0.1.2 https://github.com//markdown-it/markdown-it-emoji @license MIT */!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self),o.markdownitEmoji=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "100": "💯",
  "911": "🚨",
  "1234": "🔢",
  "smile": "😀",
  "happy": "😆",
  "joy": "😂",
  "pleased": "☺️",
  "smiley": "😃",
  "haha": "😆",
  "grinning": "😀",
  "blush": "☺️",
  "proud": "😊",
  "relaxed": "☺️",
  "wink": "😉",
  "flirt": "😘",
  "heart_eyes": "😍",
  "love": "💘",
  "crush": "😍",
  "kissing_heart": "😘",
  "kissing_closed_eyes": "😚",
  "kissing": "😗",
  "kissing_smiling_eyes": "😙",
  "stuck_out_tongue_winking_eye": "😜",
  "prank": "😝",
  "silly": "😜",
  "stuck_out_tongue_closed_eyes": "😝",
  "stuck_out_tongue": "😛",
  "flushed": "😳",
  "grin": "😁",
  "pensive": "😔",
  "relieved": "😌",
  "whew": "😌",
  "unamused": "😒",
  "meh": "😐",
  "disappointed": "😞",
  "sad": "🙍",
  "persevere": "😣",
  "struggling": "😣",
  "cry": "😭",
  "tear": "😿",
  "tears": "😂",
  "sob": "😭",
  "bawling": "😭",
  "sleepy": "😪",
  "tired": "😩",
  "disappointed_relieved": "😥",
  "phew": "😥",
  "sweat": "😓",
  "nervous": "😟",
  "cold_sweat": "😰",
  "sweat_smile": "😅",
  "hot": "😅",
  "weary": "😩",
  "tired_face": "😫",
  "upset": "😫",
  "whine": "😫",
  "fearful": "😨",
  "scared": "😨",
  "shocked": "😱",
  "oops": "😨",
  "scream": "😱",
  "horror": "🙀",
  "angry": "💢",
  "mad": "😠",
  "annoyed": "😠",
  "rage": "😡",
  "triumph": "😤",
  "smug": "😏",
  "confounded": "😖",
  "laughing": "😆",
  "satisfied": "😆",
  "yum": "😋",
  "tongue": "👅",
  "lick": "😋",
  "mask": "😷",
  "sick": "😷",
  "ill": "😷",
  "sunglasses": "😎",
  "cool": "🆒",
  "sleeping": "💤",
  "zzz": "💤",
  "dizzy_face": "😵",
  "astonished": "😲",
  "amazed": "😲",
  "gasp": "😲",
  "worried": "😟",
  "frowning": "😦",
  "anguished": "😧",
  "stunned": "😧",
  "smiling_imp": "😈",
  "devil": "👿",
  "evil": "👿",
  "horns": "👿",
  "imp": "👿",
  "open_mouth": "😮",
  "surprise": "😮",
  "impressed": "😮",
  "wow": "😮",
  "grimacing": "😬",
  "neutral_face": "😐",
  "confused": "❓",
  "hushed": "😯",
  "silence": "😶",
  "speechless": "😯",
  "no_mouth": "😶",
  "mute": "📴",
  "innocent": "😇",
  "angel": "👼",
  "smirk": "😏",
  "expressionless": "😑",
  "man_with_gua_pi_mao": "👲",
  "man_with_turban": "👳",
  "cop": "👮",
  "police": "👮",
  "law": "👮",
  "construction_worker": "👷",
  "helmet": "👷",
  "guardsman": "💂",
  "baby": "👶",
  "child": "👪",
  "newborn": "👶",
  "boy": "👱",
  "girl": "👧",
  "man": "👨",
  "mustache": "👨",
  "father": "👨",
  "dad": "👨",
  "woman": "👩",
  "girls": "👩",
  "older_man": "👴",
  "older_woman": "👵",
  "person_with_blond_hair": "👱",
  "princess": "👸",
  "blonde": "👸",
  "crown": "👑",
  "royal": "👑",
  "smiley_cat": "😺",
  "smile_cat": "😸",
  "heart_eyes_cat": "😻",
  "kissing_cat": "😽",
  "smirk_cat": "😼",
  "scream_cat": "🙀",
  "crying_cat_face": "😿",
  "joy_cat": "😹",
  "pouting_cat": "😾",
  "japanese_ogre": "👹",
  "monster": "👹",
  "japanese_goblin": "👺",
  "see_no_evil": "🙈",
  "monkey": "🐒",
  "blind": "🙈",
  "ignore": "🙈",
  "hear_no_evil": "🙉",
  "deaf": "🙉",
  "speak_no_evil": "🙊",
  "hush": "🙊",
  "skull": "💀",
  "dead": "💀",
  "danger": "💀",
  "poison": "💀",
  "alien": "👽",
  "ufo": "👽",
  "hankey": "💩",
  "poop": "💩",
  "shit": "💩",
  "crap": "💩",
  "fire": "🔥",
  "burn": "🔥",
  "sparkles": "✨",
  "shiny": "✨",
  "star2": "🌟",
  "dizzy": "💫",
  "star": "⭐",
  "boom": "💣",
  "collision": "💥",
  "explode": "💥",
  "anger": "💢",
  "sweat_drops": "💦",
  "water": "💧",
  "workout": "🏃",
  "droplet": "💧",
  "dash": "💨",
  "wind": "💨",
  "blow": "💨",
  "fast": "💨",
  "ear": "👂",
  "hear": "👂",
  "sound": "🔔",
  "listen": "👂",
  "eyes": "👀",
  "look": "👀",
  "see": "👀",
  "watch": "⌚",
  "nose": "👃",
  "smell": "👃",
  "taste": "👅",
  "lips": "👄",
  "kiss": "💋",
  "+1": "👍",
  "thumbsup": "👍",
  "approve": "👍",
  "ok": "🆗",
  "-1": "👎",
  "thumbsdown": "👎",
  "disapprove": "👎",
  "bury": "👎",
  "ok_hand": "👌",
  "facepunch": "👊",
  "punch": "👊",
  "attack": "👊",
  "fist": "✊",
  "power": "🔋",
  "v": "✌️",
  "victory": "✌️",
  "peace": "✌️",
  "wave": "👋",
  "goodbye": "👋",
  "hand": "✋",
  "raised_hand": "✋",
  "highfive": "✋",
  "stop": "🙅",
  "open_hands": "👐",
  "point_up_2": "👆",
  "point_down": "👇",
  "point_right": "👉",
  "point_left": "👈",
  "raised_hands": "🙌",
  "hooray": "🙌",
  "pray": "🙏",
  "please": "🙏",
  "hope": "🙏",
  "wish": "🙏",
  "point_up": "☝️",
  "clap": "👏",
  "praise": "👏",
  "applause": "👏",
  "muscle": "💪",
  "flex": "💪",
  "bicep": "💪",
  "strong": "💪",
  "walking": "🚶",
  "runner": "🏃",
  "running": "👟",
  "exercise": "🏃",
  "marathon": "🎽",
  "dancer": "💃",
  "dress": "👗",
  "couple": "👭",
  "date": "📅",
  "family": "👪",
  "home": "👪",
  "parents": "👪",
  "two_men_holding_hands": "👬",
  "two_women_holding_hands": "👭",
  "couplekiss": "💏",
  "couple_with_heart": "💑",
  "dancers": "👯",
  "bunny": "🐰",
  "ok_woman": "🙆",
  "no_good": "🙅",
  "halt": "🙅",
  "information_desk_person": "💁",
  "raising_hand": "🙋",
  "massage": "💆",
  "spa": "💆",
  "haircut": "💇",
  "beauty": "💅",
  "nail_care": "💅",
  "manicure": "💅",
  "bride_with_veil": "👰",
  "marriage": "💒",
  "wedding": "💒",
  "person_with_pouting_face": "🙎",
  "person_frowning": "🙍",
  "bow": "🙇",
  "respect": "🙇",
  "thanks": "🙇",
  "tophat": "🎩",
  "hat": "🎩",
  "classy": "🎩",
  "king": "👑",
  "queen": "👑",
  "womans_hat": "👒",
  "athletic_shoe": "👟",
  "sneaker": "👟",
  "sport": "👟",
  "mans_shoe": "👞",
  "shoe": "👠",
  "sandal": "👡",
  "high_heel": "👠",
  "boot": "👢",
  "shirt": "👔",
  "tshirt": "👕",
  "necktie": "👔",
  "formal": "👔",
  "womans_clothes": "👚",
  "running_shirt_with_sash": "🎽",
  "jeans": "👖",
  "pants": "👖",
  "kimono": "👘",
  "bikini": "👙",
  "beach": "🐚",
  "briefcase": "💼",
  "business": "💼",
  "handbag": "👜",
  "bag": "👝",
  "pouch": "👝",
  "purse": "👛",
  "eyeglasses": "👓",
  "glasses": "👓",
  "ribbon": "🎀",
  "closed_umbrella": "🌂",
  "weather": "❄️",
  "rain": "☔",
  "lipstick": "💋",
  "makeup": "💄",
  "yellow_heart": "💛",
  "blue_heart": "💙",
  "purple_heart": "💜",
  "green_heart": "💚",
  "heart": "💘",
  "broken_heart": "💔",
  "heartpulse": "💗",
  "heartbeat": "💓",
  "two_hearts": "💕",
  "sparkling_heart": "💖",
  "revolving_hearts": "💞",
  "cupid": "💘",
  "love_letter": "💌",
  "email": "✉️",
  "envelope": "✉️",
  "ring": "💍",
  "engaged": "💍",
  "gem": "💎",
  "diamond": "💎",
  "bust_in_silhouette": "👤",
  "user": "👤",
  "busts_in_silhouette": "👥",
  "users": "👥",
  "group": "👥",
  "team": "👥",
  "speech_balloon": "💬",
  "comment": "💬",
  "footprints": "👣",
  "feet": "🐾",
  "tracks": "👣",
  "thought_balloon": "💭",
  "thinking": "💭",
  "dog": "🐩",
  "pet": "🐹",
  "wolf": "🐺",
  "cat": "🐱",
  "mouse": "🐭",
  "hamster": "🐹",
  "rabbit": "🐰",
  "frog": "🐸",
  "tiger": "🐯",
  "koala": "🐨",
  "bear": "🐻",
  "pig": "🐷",
  "pig_nose": "🐽",
  "cow": "🐮",
  "boar": "🐗",
  "monkey_face": "🐵",
  "horse": "🐴",
  "sheep": "🐑",
  "elephant": "🐘",
  "panda_face": "🐼",
  "penguin": "🐧",
  "bird": "🐦",
  "baby_chick": "🐤",
  "hatched_chick": "🐥",
  "hatching_chick": "🐣",
  "chicken": "🍗",
  "snake": "🐍",
  "turtle": "🐢",
  "slow": "🐌",
  "bug": "🐞",
  "bee": "🐝",
  "honeybee": "🐝",
  "ant": "🐜",
  "beetle": "🐞",
  "snail": "🐌",
  "octopus": "🐙",
  "shell": "🐚",
  "sea": "🌊",
  "tropical_fish": "🐠",
  "fish": "🐟",
  "dolphin": "🐬",
  "flipper": "🐬",
  "whale": "🐳",
  "whale2": "🐋",
  "cow2": "🐄",
  "ram": "🐏",
  "rat": "🐀",
  "water_buffalo": "🐃",
  "tiger2": "🐅",
  "rabbit2": "🐇",
  "dragon": "🐉",
  "racehorse": "🐎",
  "speed": "🐎",
  "goat": "🐐",
  "rooster": "🐓",
  "dog2": "🐕",
  "pig2": "🐖",
  "mouse2": "🐁",
  "ox": "🐂",
  "dragon_face": "🐲",
  "blowfish": "🐡",
  "crocodile": "🐊",
  "camel": "🐫",
  "dromedary_camel": "🐪",
  "desert": "🐪",
  "leopard": "🐆",
  "cat2": "🐈",
  "poodle": "🐩",
  "paw_prints": "🐾",
  "bouquet": "💐",
  "flowers": "💐",
  "cherry_blossom": "🌸",
  "flower": "🌹",
  "spring": "🌸",
  "tulip": "🌷",
  "four_leaf_clover": "🍀",
  "luck": "🍀",
  "rose": "🌹",
  "sunflower": "🌻",
  "hibiscus": "🌺",
  "maple_leaf": "🍁",
  "canada": "🍁",
  "leaves": "🍃",
  "leaf": "🍃",
  "fallen_leaf": "🍂",
  "autumn": "🍂",
  "herb": "🌿",
  "ear_of_rice": "🌾",
  "mushroom": "🍄",
  "cactus": "🌵",
  "palm_tree": "🌴",
  "evergreen_tree": "🌲",
  "wood": "🌳",
  "deciduous_tree": "🌳",
  "chestnut": "🌰",
  "seedling": "🌱",
  "plant": "🌱",
  "blossom": "🌼",
  "globe_with_meridians": "🌐",
  "world": "🌏",
  "global": "🌐",
  "international": "🌏",
  "sun_with_face": "🌞",
  "summer": "🍹",
  "full_moon_with_face": "🌝",
  "new_moon_with_face": "🌚",
  "new_moon": "🌑",
  "waxing_crescent_moon": "🌒",
  "first_quarter_moon": "🌓",
  "moon": "🌔",
  "waxing_gibbous_moon": "🌔",
  "full_moon": "🌕",
  "waning_gibbous_moon": "🌖",
  "last_quarter_moon": "🌗",
  "waning_crescent_moon": "🌘",
  "last_quarter_moon_with_face": "🌜",
  "first_quarter_moon_with_face": "🌛",
  "crescent_moon": "🌙",
  "night": "🌙",
  "earth_africa": "🌍",
  "globe": "🌏",
  "earth_americas": "🌎",
  "earth_asia": "🌏",
  "volcano": "🌋",
  "milky_way": "🌌",
  "stars": "🌠",
  "sunny": "☀️",
  "partly_sunny": "⛅",
  "cloud": "☁️",
  "zap": "⚡",
  "lightning": "⚡",
  "thunder": "⚡",
  "umbrella": "☔",
  "snowflake": "❄️",
  "winter": "⛄",
  "cold": "❄️",
  "snowman": "⛄",
  "christmas": "🎁",
  "cyclone": "🌀",
  "swirl": "🌀",
  "foggy": "🌁",
  "karl": "🌁",
  "rainbow": "🌈",
  "pride": "🌈",
  "ocean": "🌊",
  "bamboo": "🎍",
  "gift_heart": "💝",
  "chocolates": "💝",
  "dolls": "🎎",
  "school_satchel": "🎒",
  "mortar_board": "🎓",
  "education": "🎓",
  "college": "🎓",
  "university": "🎓",
  "graduation": "🎓",
  "flags": "🎏",
  "fireworks": "🎆",
  "festival": "🎆",
  "celebration": "🎆",
  "sparkler": "🎇",
  "wind_chime": "🎐",
  "rice_scene": "🎑",
  "jack_o_lantern": "🎃",
  "halloween": "👻",
  "ghost": "👻",
  "santa": "🎅",
  "christmas_tree": "🎄",
  "gift": "🎁",
  "present": "🎁",
  "birthday": "🎂",
  "tanabata_tree": "🎋",
  "tada": "🎉",
  "party": "🎂",
  "confetti_ball": "🎊",
  "balloon": "🎈",
  "crossed_flags": "🎌",
  "crystal_ball": "🔮",
  "fortune": "🔮",
  "movie_camera": "🎥",
  "film": "🎦",
  "video": "🎥",
  "camera": "📷",
  "photo": "📷",
  "video_camera": "📹",
  "vhs": "📼",
  "cd": "💿",
  "dvd": "📀",
  "minidisc": "💽",
  "floppy_disk": "💾",
  "save": "💾",
  "computer": "💻",
  "desktop": "💻",
  "screen": "💻",
  "iphone": "📱",
  "smartphone": "📱",
  "mobile": "📱",
  "phone": "📞",
  "telephone": "☎️",
  "telephone_receiver": "📞",
  "call": "📲",
  "pager": "📟",
  "fax": "📠",
  "satellite": "📡",
  "signal": "📡",
  "tv": "📺",
  "radio": "📻",
  "podcast": "📻",
  "loud_sound": "🔊",
  "volume": "🔕",
  "speaker": "🔈",
  "bell": "🔔",
  "notification": "🔔",
  "no_bell": "🔕",
  "off": "📴",
  "loudspeaker": "📢",
  "announcement": "📢",
  "mega": "📣",
  "hourglass_flowing_sand": "⏳",
  "time": "⌚",
  "hourglass": "⌛",
  "alarm_clock": "⏰",
  "morning": "⏰",
  "unlock": "🔓",
  "security": "🔐",
  "lock": "🔑",
  "private": "🔒",
  "lock_with_ink_pen": "🔏",
  "closed_lock_with_key": "🔐",
  "key": "🔑",
  "password": "🔑",
  "mag_right": "🔎",
  "bulb": "💡",
  "idea": "💡",
  "light": "💡",
  "flashlight": "🔦",
  "high_brightness": "🔆",
  "low_brightness": "🔅",
  "electric_plug": "🔌",
  "battery": "🔋",
  "mag": "🔍",
  "search": "🔍",
  "zoom": "🔍",
  "bathtub": "🛁",
  "bath": "🚿",
  "shower": "🚿",
  "toilet": "🚾",
  "wc": "🚾",
  "wrench": "🔧",
  "tool": "🔨",
  "nut_and_bolt": "🔩",
  "hammer": "🔨",
  "door": "🚪",
  "smoking": "🚬",
  "cigarette": "🚬",
  "bomb": "💣",
  "gun": "🔫",
  "shoot": "🔫",
  "weapon": "🔫",
  "hocho": "🔪",
  "knife": "🔪",
  "cut": "✂️",
  "chop": "🔪",
  "pill": "💊",
  "health": "💉",
  "medicine": "💊",
  "syringe": "💉",
  "hospital": "🏥",
  "needle": "💉",
  "moneybag": "💰",
  "dollar": "💸",
  "cream": "💰",
  "yen": "💴",
  "money": "💵",
  "pound": "💷",
  "euro": "💶",
  "credit_card": "💳",
  "subscription": "💳",
  "money_with_wings": "💸",
  "calling": "📲",
  "incoming": "📲",
  "e-mail": "📧",
  "inbox_tray": "📥",
  "outbox_tray": "📤",
  "letter": "✉️",
  "envelope_with_arrow": "📩",
  "incoming_envelope": "📨",
  "postal_horn": "📯",
  "mailbox": "📫",
  "mailbox_closed": "📪",
  "mailbox_with_mail": "📬",
  "mailbox_with_no_mail": "📭",
  "postbox": "📮",
  "package": "📦",
  "shipping": "📦",
  "memo": "📝",
  "pencil": "📝",
  "document": "📜",
  "note": "📝",
  "page_facing_up": "📄",
  "page_with_curl": "📃",
  "bookmark_tabs": "📑",
  "bar_chart": "📊",
  "stats": "📊",
  "metrics": "📉",
  "chart_with_upwards_trend": "📈",
  "graph": "📉",
  "chart_with_downwards_trend": "📉",
  "scroll": "📜",
  "clipboard": "📋",
  "calendar": "📆",
  "schedule": "📆",
  "card_index": "📇",
  "file_folder": "📁",
  "directory": "📁",
  "open_file_folder": "📂",
  "scissors": "✂️",
  "pushpin": "📌",
  "location": "📍",
  "paperclip": "📎",
  "black_nib": "✒️",
  "pencil2": "✏️",
  "straight_ruler": "📏",
  "triangular_ruler": "📐",
  "closed_book": "📕",
  "green_book": "📗",
  "blue_book": "📘",
  "orange_book": "📙",
  "notebook": "📓",
  "notebook_with_decorative_cover": "📔",
  "ledger": "📒",
  "books": "📚",
  "library": "📚",
  "book": "📖",
  "open_book": "📖",
  "bookmark": "🔖",
  "name_badge": "📛",
  "microscope": "🔬",
  "science": "🔬",
  "laboratory": "🔬",
  "investigate": "🔬",
  "telescope": "🔭",
  "newspaper": "📰",
  "press": "📰",
  "art": "🎨",
  "design": "🎨",
  "paint": "🎨",
  "clapper": "🎬",
  "microphone": "🎤",
  "sing": "🎤",
  "headphones": "🎧",
  "music": "🎶",
  "earphones": "🎧",
  "musical_score": "🎼",
  "musical_note": "🎵",
  "notes": "🎶",
  "musical_keyboard": "🎹",
  "piano": "🎹",
  "violin": "🎻",
  "trumpet": "🎺",
  "saxophone": "🎷",
  "guitar": "🎸",
  "rock": "🎸",
  "space_invader": "👾",
  "game": "👾",
  "retro": "👾",
  "video_game": "🎮",
  "play": "🎮",
  "controller": "🎮",
  "console": "🎮",
  "black_joker": "🃏",
  "flower_playing_cards": "🎴",
  "mahjong": "🀄",
  "game_die": "🎲",
  "dice": "🎲",
  "gambling": "🎲",
  "dart": "🎯",
  "target": "🎯",
  "football": "🏈",
  "sports": "🎾",
  "basketball": "🏀",
  "soccer": "⚽",
  "baseball": "⚾️",
  "tennis": "🎾",
  "8ball": "🎱",
  "pool": "🎱",
  "billiards": "🎱",
  "rugby_football": "🏉",
  "bowling": "🎳",
  "golf": "⛳",
  "mountain_bicyclist": "🚵",
  "bicyclist": "🚴",
  "checkered_flag": "🏁",
  "milestone": "🏁",
  "finish": "🏁",
  "horse_racing": "🏇",
  "trophy": "🏆",
  "award": "🏆",
  "contest": "🏆",
  "winner": "🏆",
  "ski": "🎿",
  "snowboarder": "🏂",
  "swimmer": "🏊",
  "surfer": "🏄",
  "fishing_pole_and_fish": "🎣",
  "coffee": "☕",
  "cafe": "☕",
  "espresso": "☕",
  "tea": "🍵",
  "green": "♻️",
  "breakfast": "🍳",
  "sake": "🍶",
  "baby_bottle": "🍼",
  "milk": "🍼",
  "beer": "🍺",
  "drink": "🍸",
  "beers": "🍻",
  "drinks": "🍻",
  "cocktail": "🍸",
  "tropical_drink": "🍹",
  "vacation": "🍹",
  "wine_glass": "🍷",
  "fork_and_knife": "🍴",
  "cutlery": "🍴",
  "pizza": "🍕",
  "hamburger": "🍔",
  "burger": "🍔",
  "fries": "🍟",
  "poultry_leg": "🍗",
  "meat": "🍗",
  "meat_on_bone": "🍖",
  "spaghetti": "🍝",
  "pasta": "🍝",
  "curry": "🍛",
  "fried_shrimp": "🍤",
  "tempura": "🍤",
  "bento": "🍱",
  "sushi": "🍣",
  "fish_cake": "🍥",
  "rice_ball": "🍙",
  "rice_cracker": "🍘",
  "rice": "🍚",
  "ramen": "🍜",
  "noodle": "🍜",
  "stew": "🍲",
  "oden": "🍢",
  "dango": "🍡",
  "egg": "🍳",
  "bread": "🍞",
  "toast": "🍞",
  "doughnut": "🍩",
  "custard": "🍮",
  "icecream": "🍦",
  "ice_cream": "🍨",
  "shaved_ice": "🍧",
  "cake": "🍰",
  "dessert": "🍰",
  "cookie": "🍪",
  "chocolate_bar": "🍫",
  "candy": "🍬",
  "sweet": "🍬",
  "lollipop": "🍭",
  "honey_pot": "🍯",
  "apple": "🍎",
  "green_apple": "🍏",
  "fruit": "🍌",
  "tangerine": "🍊",
  "lemon": "🍋",
  "cherries": "🍒",
  "grapes": "🍇",
  "watermelon": "🍉",
  "strawberry": "🍓",
  "peach": "🍑",
  "melon": "🍈",
  "banana": "🍌",
  "pear": "🍐",
  "pineapple": "🍍",
  "sweet_potato": "🍠",
  "eggplant": "🍆",
  "aubergine": "🍆",
  "tomato": "🍅",
  "corn": "🌽",
  "house": "🏠",
  "house_with_garden": "🏡",
  "school": "🏫",
  "office": "🏢",
  "post_office": "🏣",
  "bank": "🏦",
  "convenience_store": "🏪",
  "love_hotel": "🏩",
  "hotel": "🏨",
  "church": "⛪",
  "department_store": "🏬",
  "european_post_office": "🏤",
  "city_sunrise": "🌇",
  "city_sunset": "🌆",
  "japanese_castle": "🏯",
  "european_castle": "🏰",
  "tent": "⛺",
  "camping": "⛺",
  "factory": "🏭",
  "tokyo_tower": "🗼",
  "japan": "🇯🇵",
  "mount_fuji": "🗻",
  "sunrise_over_mountains": "🌄",
  "sunrise": "🌅",
  "night_with_stars": "🌃",
  "statue_of_liberty": "🗽",
  "bridge_at_night": "🌉",
  "carousel_horse": "🎠",
  "ferris_wheel": "🎡",
  "fountain": "⛲",
  "roller_coaster": "🎢",
  "ship": "🚀",
  "boat": "⛵",
  "sailboat": "⛵",
  "speedboat": "🚤",
  "rowboat": "🚣",
  "anchor": "⚓",
  "rocket": "🚀",
  "launch": "🚀",
  "airplane": "✈️",
  "flight": "✈️",
  "seat": "💺",
  "helicopter": "🚁",
  "steam_locomotive": "🚂",
  "train": "🚋",
  "tram": "🚊",
  "station": "🚉",
  "mountain_railway": "🚞",
  "train2": "🚆",
  "bullettrain_side": "🚄",
  "bullettrain_front": "🚅",
  "light_rail": "🚈",
  "metro": "🚇",
  "monorail": "🚝",
  "railway_car": "🚃",
  "trolleybus": "🚎",
  "bus": "🚌",
  "oncoming_bus": "🚍",
  "blue_car": "🚙",
  "oncoming_automobile": "🚘",
  "car": "🚗",
  "red_car": "🚗",
  "taxi": "🚕",
  "oncoming_taxi": "🚖",
  "articulated_lorry": "🚛",
  "truck": "🚚",
  "rotating_light": "🚨",
  "emergency": "🆘",
  "police_car": "🚓",
  "oncoming_police_car": "🚔",
  "fire_engine": "🚒",
  "ambulance": "🚑",
  "minibus": "🚐",
  "bike": "🚲",
  "bicycle": "🚲",
  "aerial_tramway": "🚡",
  "suspension_railway": "🚟",
  "mountain_cableway": "🚠",
  "tractor": "🚜",
  "barber": "💈",
  "busstop": "🚏",
  "ticket": "🎫",
  "vertical_traffic_light": "🚦",
  "semaphore": "🚦",
  "traffic_light": "🚥",
  "warning": "⚠️",
  "wip": "🚧",
  "construction": "🚧",
  "beginner": "🔰",
  "fuelpump": "⛽",
  "izakaya_lantern": "🏮",
  "lantern": "🏮",
  "slot_machine": "🎰",
  "hotsprings": "♨️",
  "moyai": "🗿",
  "stone": "🗿",
  "circus_tent": "🎪",
  "performing_arts": "🎭",
  "theater": "🎭",
  "drama": "🎭",
  "round_pushpin": "📍",
  "triangular_flag_on_post": "🚩",
  "jp": "🇯🇵",
  "kr": "🇰🇷",
  "korea": "🇰🇷",
  "de": "🇩🇪",
  "flag": "🇬🇧",
  "germany": "🇩🇪",
  "cn": "🇨🇳",
  "china": "🇨🇳",
  "us": "🇺🇸",
  "united": "🇺🇸",
  "america": "🇺🇸",
  "fr": "🇫🇷",
  "france": "🇫🇷",
  "french": "🇫🇷",
  "es": "🇪🇸",
  "spain": "🇪🇸",
  "it": "🇮🇹",
  "italy": "🇮🇹",
  "ru": "🇷🇺",
  "russia": "🇷🇺",
  "gb": "🇬🇧",
  "uk": "🇬🇧",
  "british": "🇬🇧",
  "one": "1️⃣",
  "two": "2️⃣",
  "three": "3️⃣",
  "four": "4️⃣",
  "five": "5️⃣",
  "six": "6️⃣",
  "seven": "7️⃣",
  "eight": "8️⃣",
  "nine": "9️⃣",
  "zero": "0️⃣",
  "keycap_ten": "🔟",
  "numbers": "🔢",
  "hash": "#️⃣",
  "number": "#️⃣",
  "symbols": "🔣",
  "arrow_up": "⬆️",
  "arrow_down": "⬇️",
  "arrow_left": "⬅️",
  "arrow_right": "➡️",
  "capital_abcd": "🔠",
  "letters": "🔠",
  "abcd": "🔡",
  "abc": "🔤",
  "alphabet": "🔤",
  "arrow_upper_right": "↗️",
  "arrow_upper_left": "↖️",
  "arrow_lower_right": "↘️",
  "arrow_lower_left": "↙️",
  "left_right_arrow": "↔️",
  "arrow_up_down": "↕️",
  "arrows_counterclockwise": "🔄",
  "sync": "🔄",
  "arrow_backward": "◀️",
  "arrow_forward": "▶️",
  "arrow_up_small": "🔼",
  "arrow_down_small": "🔽",
  "leftwards_arrow_with_hook": "↩️",
  "return": "↩️",
  "arrow_right_hook": "↪️",
  "information_source": "ℹ️",
  "rewind": "⏪",
  "fast_forward": "⏩",
  "arrow_double_up": "⏫",
  "arrow_double_down": "⏬",
  "arrow_heading_down": "⤵️",
  "arrow_heading_up": "⤴️",
  "yes": "🆗",
  "twisted_rightwards_arrows": "🔀",
  "shuffle": "🔀",
  "repeat": "🔁",
  "loop": "➿",
  "repeat_one": "🔂",
  "new": "🆕",
  "fresh": "🆕",
  "up": "🆙",
  "free": "🆓",
  "ng": "🆖",
  "signal_strength": "📶",
  "wifi": "📶",
  "cinema": "🎦",
  "movie": "🎦",
  "koko": "🈁",
  "u6307": "🈯",
  "u7a7a": "🈳",
  "u6e80": "🈵",
  "u5408": "🈴",
  "u7981": "🈲",
  "ideograph_advantage": "🉐",
  "u5272": "🈹",
  "u55b6": "🈺",
  "u6709": "🈶",
  "u7121": "🈚",
  "restroom": "🚾",
  "mens": "🚹",
  "womens": "🚺",
  "baby_symbol": "🚼",
  "potable_water": "🚰",
  "put_litter_in_its_place": "🚮",
  "parking": "🅿️",
  "wheelchair": "♿",
  "accessibility": "♿",
  "no_smoking": "🚭",
  "u6708": "🈷️",
  "u7533": "🈸",
  "sa": "🈂️",
  "m": "Ⓜ️",
  "passport_control": "🛂",
  "baggage_claim": "🛄",
  "airport": "🛄",
  "left_luggage": "🛅",
  "customs": "🛃",
  "accept": "🉑",
  "secret": "㊙️",
  "congratulations": "㊗️",
  "cl": "🆑",
  "sos": "🆘",
  "help": "🆘",
  "id": "🆔",
  "no_entry_sign": "🚫",
  "block": "🚫",
  "forbidden": "🚫",
  "underage": "🔞",
  "no_mobile_phones": "📵",
  "do_not_litter": "🚯",
  "non-potable_water": "🚱",
  "no_bicycles": "🚳",
  "no_pedestrians": "🚷",
  "children_crossing": "🚸",
  "no_entry": "⛔",
  "limit": "⛔",
  "eight_spoked_asterisk": "✳️",
  "sparkle": "❇️",
  "negative_squared_cross_mark": "❎",
  "white_check_mark": "✅",
  "eight_pointed_black_star": "✴️",
  "heart_decoration": "💟",
  "vs": "🆚",
  "vibration_mode": "📳",
  "mobile_phone_off": "📴",
  "a": "🅰️",
  "b": "🅱️",
  "ab": "🆎",
  "o2": "🅾️",
  "diamond_shape_with_a_dot_inside": "💠",
  "recycle": "♻️",
  "environment": "♻️",
  "aries": "♈",
  "taurus": "♉",
  "gemini": "♊",
  "cancer": "♋",
  "leo": "♌",
  "virgo": "♍",
  "libra": "♎",
  "scorpius": "♏",
  "sagittarius": "♐",
  "capricorn": "♑",
  "aquarius": "♒",
  "pisces": "♓",
  "ophiuchus": "⛎",
  "six_pointed_star": "🔯",
  "atm": "🏧",
  "chart": "💹",
  "heavy_dollar_sign": "💲",
  "currency_exchange": "💱",
  "copyright": "©️",
  "registered": "®️",
  "tm": "™️",
  "trademark": "™️",
  "x": "❌",
  "bangbang": "‼️",
  "interrobang": "⁉️",
  "exclamation": "❗",
  "heavy_exclamation_mark": "❗",
  "bang": "❗",
  "question": "❓",
  "grey_exclamation": "❕",
  "grey_question": "❔",
  "o": "⭕",
  "top": "🔝",
  "end": "🔚",
  "back": "🔙",
  "on": "🔛",
  "soon": "🔜",
  "arrows_clockwise": "🔃",
  "clock12": "🕛",
  "clock1230": "🕧",
  "clock1": "🕐",
  "clock130": "🕜",
  "clock2": "🕑",
  "clock230": "🕝",
  "clock3": "🕒",
  "clock330": "🕞",
  "clock4": "🕓",
  "clock430": "🕟",
  "clock5": "🕔",
  "clock530": "🕠",
  "clock6": "🕕",
  "clock7": "🕖",
  "clock8": "🕗",
  "clock9": "🕘",
  "clock10": "🕙",
  "clock11": "🕚",
  "clock630": "🕡",
  "clock730": "🕢",
  "clock830": "🕣",
  "clock930": "🕤",
  "clock1030": "🕥",
  "clock1130": "🕦",
  "heavy_multiplication_x": "✖️",
  "heavy_plus_sign": "➕",
  "heavy_minus_sign": "➖",
  "heavy_division_sign": "➗",
  "spades": "♠️",
  "hearts": "♥️",
  "clubs": "♣️",
  "diamonds": "♦️",
  "white_flower": "💮",
  "score": "💯",
  "perfect": "💯",
  "heavy_check_mark": "✔️",
  "ballot_box_with_check": "☑️",
  "radio_button": "🔘",
  "link": "🔗",
  "curly_loop": "➰",
  "wavy_dash": "〰️",
  "part_alternation_mark": "〽️",
  "trident": "🔱",
  "black_medium_square": "◼️",
  "white_medium_square": "◻️",
  "black_medium_small_square": "◾",
  "white_medium_small_square": "◽",
  "black_small_square": "▪️",
  "white_small_square": "▫️",
  "small_red_triangle": "🔺",
  "black_square_button": "🔲",
  "white_square_button": "🔳",
  "black_circle": "⚫",
  "white_circle": "⚪",
  "red_circle": "🔴",
  "large_blue_circle": "🔵",
  "small_red_triangle_down": "🔻",
  "white_large_square": "⬜",
  "black_large_square": "⬛",
  "large_orange_diamond": "🔶",
  "large_blue_diamond": "🔷",
  "small_orange_diamond": "🔸",
  "small_blue_diamond": "🔹"
}
},{}],2:[function(require,module,exports){
// Emoticons -> Emoji mapping.
//
// (!) Some patterns skipped, to avoid collisions
// without increase matcher complicity. Than can change in future.
//
// Places to look for more emoticons info:
//
// - http://en.wikipedia.org/wiki/List_of_emoticons#Western
// - https://github.com/wooorm/emoticon/blob/master/Support.md
// - http://factoryjoe.com/projects/emoticons/
//
'use strict';

module.exports = {
  mad:              [ '>:(', '>:-(' ], // angry
  blush:            [ ':")', ':-")' ],
  broken_heart:     [ '</3', '<\\3' ],
  confused:         [ ':\\', ':-\\', ':/', ':-/' ], // twemoji shows question
  cry:              [ ":'(", ":'-(", ':,(', ':,-(' ],
  frowning:         [ ':(', ':-(' ],
  heart:            [ '<3' ],
  imp:              [ ']:(', ']:-(' ],
  innocent:         [ 'o:)', 'O:)', 'o:-)', 'O:-)', '0:)', '0:-)' ],
  joy:              [ ":')", ":'-)", ':,)', ':,-)', ":'D", ":'-D", ':,D', ':,-D' ],
  kissing:          [ ':*', ':-*' ],
  laughing:         [ 'x-)', 'X-)' ],
  neutral_face:     [ ':|', ':-|' ],
  open_mouth:       [ ':o', ':-o', ':O', ':-O' ],
  rage:             [ ':@', ':-@' ],
  smile:            [ ':D', ':-D' ],
  smiley:           [ ':)', ':-)' ],
  smiling_imp:      [ ']:)', ']:-)' ],
  sob:              [ ":,'(", ":,'-(", ';(', ';-(' ],
  stuck_out_tongue: [ ':P', ':-P' ],
  sunglasses:       [ '8-)', 'B-)' ],
  sweat:            [ ',:(', ',:-(' ],
  sweat_smile:      [ ',:)', ',:-)' ],
  unamused:         [ ':s', ':-S', ':z', ':-Z', ':$', ':-$' ],
  wink:             [ ';)', ';-)' ]
};

},{}],3:[function(require,module,exports){
// Convert input options to more useable format
// and compile search regexp

'use strict';


function quoteRE (str) {
  return str.replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
}


module.exports = function normalize_opts(options) {
  var emojies = options.emojies,
      shortcuts;

  // Filter emojies by whitelist, if needed
  if (options.enabled.length) {
    emojies = Object.keys(emojies).reduce(function (acc, key) {
      if (options.enabled.indexOf(key) >= 0) {
        acc[key] = emojies[key];
      }
      return acc;
    }, {});
  }

  // Flatten shortcuts to simple object: { alias: emoji_name }
  shortcuts = Object.keys(options.shortcuts).reduce(function (acc, key) {
    // Skip aliases for filtered emojies, to reduce regexp
    if (!emojies[key]) { return acc; }

    if (Array.isArray(options.shortcuts[key])) {
      options.shortcuts[key].forEach(function (alias) {
        acc[alias] = key;
      });
      return acc;
    }

    acc[options.shortcuts[key]] = key;
    return acc;
  }, {});

  // Compile regexp
  var names = Object.keys(emojies)
                .map(function (name) { return ':' + name + ':'; })
                .concat(Object.keys(shortcuts))
                .map(function (name) { return quoteRE(name); })
                .sort()
                .reverse()
                .join('|');
  var scanRE = RegExp(names, 'g');


  return {
    emojies: emojies,
    shortcuts: shortcuts,
    scanRE: scanRE
  };
};

},{}],4:[function(require,module,exports){
'use strict';

module.exports = function emoji_html(tokens, idx /*, options, env */) {
  return tokens[idx].to;
};

},{}],5:[function(require,module,exports){
// Emojies & shortcuts replacement logic.
//
// Note: In theory, it could be faster to parse :smile: in inline chain and
// leave only shortcuts here. But, who care...
//

'use strict';


module.exports = function create_rule(md, emojies, shortcuts, compiledRE) {
  var arrayReplaceAt = md.utils.arrayReplaceAt;

  function splitTextToken(text, level) {
    var last_pos = 0, nodes = [];

    text.replace(compiledRE, function(match, offset) {
      var emoji_name;
      // Validate emoji name
      if (shortcuts.hasOwnProperty(match)) {
        // replace shortcut with full name
        emoji_name = shortcuts[match];
      } else {
        emoji_name = match.slice(1, -1);
      }

      // Add new tokens to pending list
      if (offset > last_pos) {
        nodes.push({
          type: 'text',
          content: text.slice(last_pos, offset),
          level: level
        });
      }
      nodes.push({
        type: 'emoji',
        name:  emoji_name,
        to: emojies[emoji_name],
        level: level
      });
      last_pos = offset + match.length;

    });

    if (last_pos < text.length) {
      nodes.push({
        type: 'text',
        content: text.slice(last_pos),
        level: level
      });
    }

    return nodes;
  }

  return function emoji_replace(state) {
    var i, j, l, tokens, token,
        blockTokens = state.tokens;

    for (j = 0, l = blockTokens.length; j < l; j++) {
      if (blockTokens[j].type !== 'inline') { continue; }
      tokens = blockTokens[j].children;

      // We scan from the end, to keep position when new tags added.
      // Use reversed logic in links start/end match
      for (i = tokens.length - 1; i >= 0; i--) {
        token = tokens[i];

        if (token.type === 'text' && compiledRE.test(token.content)) {
          // replace current node
          blockTokens[j].children = tokens = arrayReplaceAt(
            tokens, i, splitTextToken(token.content, token.level)
          );
        }
      }
    }
  };
};

},{}],6:[function(require,module,exports){
'use strict';


var emojies_full      = require('./lib/data/full.json');
var emojies_shortcuts = require('./lib/data/shortcuts');
var emoji_html        = require('./lib/render');
var emoji_replace     = require('./lib/replace');
var normalize_opts    = require('./lib/normalize_opts');


module.exports = function emoji_plugin(md, options) {
  var conf = options || {};

  var opts = normalize_opts({
    emojies: conf.defs || emojies_full,
    shortcuts: conf.shortcuts || emojies_shortcuts,
    enabled: conf.enabled || []
  });

  md.renderer.rules.emoji = emoji_html;

  md.core.ruler.push('emoji', emoji_replace(md, opts.emojies, opts.shortcuts, opts.scanRE));
};

},{"./lib/data/full.json":1,"./lib/data/shortcuts":2,"./lib/normalize_opts":3,"./lib/render":4,"./lib/replace":5}]},{},[6])(6)
});
import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve("assets/scene-art");
fs.mkdirSync(outDir, { recursive: true });

const W = 640;
const H = 500;

const scenes = [
  {
    page: 2,
    id: "stat-total-msgs",
    title: "一共发过 185,647 条",
    theme: {
      a: "#ffe1a8",
      b: "#f49aa1",
      c: "#88d8d0",
      glow: "rgba(244,154,161,.30)",
      label: "#ead8cc",
      note: "#cbbfd6"
    },
    options: [
      ["a", "message-river", "两条消息河流在夜色里汇合", "right"],
      ["b", "message-constellation", "很多气泡像星星一样连成星座", "left"],
      ["c", "message-scroll", "长长的聊天卷轴从云里展开", "bottom-right"]
    ]
  },
  {
    page: 3,
    id: "stat-chars",
    title: "我们写过的字 1,347,076 字",
    theme: {
      a: "#ffd18f",
      b: "#e88f76",
      c: "#f4e6bf",
      glow: "rgba(255,209,143,.28)",
      label: "#ead6c5",
      note: "#d7c8cf"
    },
    options: [
      ["a", "hand-books", "一只手托着几本厚厚的书", "right"],
      ["b", "book-tower", "书页堆成只属于两个人的小塔", "left"],
      ["c", "ink-scroll", "墨迹和纸页组成一条长篇故事", "bottom-right"]
    ]
  },
  {
    page: 4,
    id: "stat-calls",
    title: "打过的语音通话 916 通",
    theme: {
      a: "#9ed8ff",
      b: "#f6c184",
      c: "#c7a9ff",
      glow: "rgba(158,216,255,.26)",
      label: "#d3d8ea",
      note: "#c2c4da"
    },
    options: [
      ["a", "moon-phone", "月光下亮着的电话和声波", "right"],
      ["b", "headphones", "两只耳机连着一颗小心", "left"],
      ["c", "call-bridge", "声音像一座小桥连到远处", "bottom-left"]
    ]
  },
  {
    page: 5,
    id: "stat-photos-msg",
    title: "互相发过的图片 6,731 张",
    theme: {
      a: "#f7d794",
      b: "#f6a5b8",
      c: "#91d8f7",
      glow: "rgba(247,215,148,.25)",
      label: "#ead6c2",
      note: "#cfc4d8"
    },
    options: [
      ["a", "polaroids", "几张拍立得从相册里散出来", "right"],
      ["b", "camera-cloud", "小相机把云朵拍成照片", "left"],
      ["c", "album", "翻开的相册里都是发光的瞬间", "bottom-right"]
    ]
  },
  {
    page: 6,
    id: "stat-stickers",
    title: "发过的表情包贴纸 16,031 个",
    theme: {
      a: "#fff08c",
      b: "#f49aa1",
      c: "#88d8d0",
      glow: "rgba(255,240,140,.24)",
      label: "#eee1bf",
      note: "#cbc4d9"
    },
    options: [
      ["a", "sticker-burst", "一叠笑脸贴纸从信封里蹦出来", "right"],
      ["b", "sticker-sheet", "一张贴纸纸板塞满小表情", "left"],
      ["c", "laugh-balloons", "笑脸气球飘成小队伍", "bottom-left"]
    ]
  },
  {
    page: 7,
    id: "stat-top3-you",
    title: "你最常说的三个词",
    theme: {
      a: "#f8b7c2",
      b: "#b7e1ff",
      c: "#f7d794",
      glow: "rgba(248,183,194,.24)",
      label: "#ead1da",
      note: "#cfc4d8"
    },
    options: [
      ["a", "laugh-orbits", "三颗笑意小星球围着月亮转", "right"],
      ["b", "speech-garden", "气泡长成一片会笑的小花园", "left"],
      ["c", "soft-echo", "温柔的回声一圈圈扩散开", "bottom-right"]
    ]
  },
  {
    page: 8,
    id: "stat-top3-me",
    title: "我最常说的三个词",
    theme: {
      a: "#8ddfd0",
      b: "#f7d794",
      c: "#efa6c8",
      glow: "rgba(141,223,208,.22)",
      label: "#d0e2df",
      note: "#c8cdda"
    },
    options: [
      ["a", "return-comet", "小彗星绕一圈又回到消息里", "left"],
      ["b", "laugh-lantern", "灯笼里装着很多笑声", "right"],
      ["c", "two-bubbles", "两枚气泡把话接住又递回来", "bottom-left"]
    ]
  },
  {
    page: 9,
    id: "stat-nickname-you",
    title: "你最喜欢叫我",
    theme: {
      a: "#f3b07d",
      b: "#f6ccd1",
      c: "#d1bbff",
      glow: "rgba(243,176,125,.24)",
      label: "#ead2c4",
      note: "#cec5da"
    },
    options: [
      ["a", "name-tags", "一串亲昵称呼小吊牌挂在绳上", "right"],
      ["b", "ribbon-tags", "丝带上挂着越来越多的小名牌", "left"],
      ["c", "tag-jar", "玻璃罐里收着一张张昵称纸条", "bottom-right"]
    ]
  },
  {
    page: 10,
    id: "stat-nickname-me",
    title: "我最喜欢叫你",
    theme: {
      a: "#f8a7b5",
      b: "#f7d794",
      c: "#9ed8ff",
      glow: "rgba(248,167,181,.24)",
      label: "#ead1d8",
      note: "#cfc6d7"
    },
    options: [
      ["a", "nested-hearts", "一层一层的小爱心像套娃", "left"],
      ["b", "gift-names", "礼盒里冒出许多小昵称", "right"],
      ["c", "moon-tags", "月亮旁悬着几枚柔软称呼牌", "bottom-left"]
    ]
  },
  {
    page: 11,
    id: "stat-dudu",
    title: "我们叫过「嘟嘟」",
    theme: {
      a: "#ffe5a8",
      b: "#bfe7d6",
      c: "#f8b9c6",
      glow: "rgba(255,229,168,.24)",
      label: "#eadbc0",
      note: "#d4c8d3"
    },
    options: [
      ["a", "tiny-cradle", "小小摇篮里亮着一颗星", "right"],
      ["b", "sprout-star", "一颗新芽从星光里冒出来", "left"],
      ["c", "family-orbit", "两颗大星护着一颗小星", "bottom-right"]
    ]
  },
  {
    page: 12,
    id: "stat-sweet",
    title: "说过的甜话",
    theme: {
      a: "#ffb1bc",
      b: "#f7d794",
      c: "#c9a8ff",
      glow: "rgba(255,177,188,.24)",
      label: "#ead0d8",
      note: "#cdc5dc"
    },
    options: [
      ["a", "heart-jar", "一只装满甜话的小玻璃罐", "right"],
      ["b", "candy-hearts", "糖纸和爱心散在一起", "left"],
      ["c", "love-letters", "几封小情书从云里飘下来", "bottom-left"]
    ]
  },
  {
    page: 13,
    id: "stat-eat",
    title: "问你吃饭了没",
    theme: {
      a: "#ffd08a",
      b: "#f2a76e",
      c: "#8fd9c2",
      glow: "rgba(255,208,138,.24)",
      label: "#ead6bf",
      note: "#cdc7d3"
    },
    options: [
      ["a", "warm-bowl", "一碗冒热气的饭和两双筷子", "right"],
      ["b", "dinner-moon", "月亮下亮着一盏餐桌小灯", "left"],
      ["c", "rice-heart", "饭团和热气弯成一颗心", "bottom-right"]
    ]
  },
  {
    page: 14,
    id: "stat-overtime",
    title: "你问过的「加班么」",
    theme: {
      a: "#9ec7ff",
      b: "#f7d794",
      c: "#f09a8a",
      glow: "rgba(158,199,255,.22)",
      label: "#d5d9eb",
      note: "#c8c8d8"
    },
    options: [
      ["a", "desk-lamp", "深夜桌灯旁的小钟和消息", "right"],
      ["b", "office-window", "办公室窗外有人在等灯灭", "left"],
      ["c", "clock-phone", "手机和时钟一起亮到很晚", "bottom-left"]
    ]
  },
  {
    page: 15,
    id: "stat-far",
    title: "远方的挂念",
    theme: {
      a: "#8ed8ff",
      b: "#f6c084",
      c: "#d0b6ff",
      glow: "rgba(142,216,255,.22)",
      label: "#d4ddeb",
      note: "#c9c8dc"
    },
    options: [
      ["a", "return-map", "一条回家的路线绕回手机", "right"],
      ["b", "suitcase-stars", "行李箱拖着一串星光", "left"],
      ["c", "train-home", "小火车开向亮着灯的家", "bottom-right"]
    ]
  },
  {
    page: 16,
    id: "stat-academia",
    title: "陪你搞学术",
    theme: {
      a: "#b9dcff",
      b: "#f7d794",
      c: "#bce6c8",
      glow: "rgba(185,220,255,.22)",
      label: "#d5deea",
      note: "#c8cbd8"
    },
    options: [
      ["a", "paper-pen", "论文纸、钢笔和一盏小台灯", "right"],
      ["b", "graduation-stack", "书堆上放着小小学位帽", "left"],
      ["c", "research-moon", "月亮边飘着公式纸和便签", "bottom-left"]
    ]
  },
  {
    page: 17,
    id: "stat-job",
    title: "陪我找工作",
    theme: {
      a: "#f6c184",
      b: "#9fd3ff",
      c: "#f0a4b6",
      glow: "rgba(246,193,132,.24)",
      label: "#ead6c1",
      note: "#ccc8d5"
    },
    options: [
      ["a", "offer-envelope", "一封写着好消息的 offer 信封", "right"],
      ["b", "interview-chair", "面试椅、电脑和一盏等候灯", "left"],
      ["c", "career-steps", "几级台阶通向亮着的门", "bottom-right"]
    ]
  },
  {
    page: 18,
    id: "stat-bianbian",
    title: "聊过的「便便」",
    theme: {
      a: "#f6cf92",
      b: "#a9ddcf",
      c: "#f3a6b2",
      glow: "rgba(246,207,146,.22)",
      label: "#ead9c2",
      note: "#ccc8d5"
    },
    options: [
      ["a", "paper-roll", "一卷有点害羞的纸巾和小星星", "right"],
      ["b", "bathroom-cloud", "浴室云朵里藏着一个搞笑小泡泡", "left"],
      ["c", "private-chat", "两只小气泡把尴尬话题接住", "bottom-left"]
    ]
  }
];

function esc(s) {
  return String(s).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
}

function svgWrap(scene, opt, body) {
  const [key, motif, desc] = opt;
  const { a, b, c, glow } = scene.theme;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(scene.title + " - " + desc)}">
  <defs>
    <radialGradient id="halo-${scene.id}-${key}" cx="50%" cy="50%" r="64%">
      <stop offset="0" stop-color="${a}" stop-opacity=".28"/>
      <stop offset=".58" stop-color="${b}" stop-opacity=".10"/>
      <stop offset="1" stop-color="${c}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="warm-${scene.id}-${key}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${a}"/>
      <stop offset=".58" stop-color="${b}"/>
      <stop offset="1" stop-color="${c}"/>
    </linearGradient>
    <linearGradient id="paper-${scene.id}-${key}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fff8df"/>
      <stop offset="1" stop-color="#e9c895"/>
    </linearGradient>
    <filter id="soft-${scene.id}-${key}" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="18" stdDeviation="16" flood-color="#0d0921" flood-opacity=".34"/>
      <feDropShadow dx="0" dy="0" stdDeviation="10" flood-color="${a}" flood-opacity=".18"/>
    </filter>
    <filter id="glow-${scene.id}-${key}" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <pattern id="grain-${scene.id}-${key}" width="28" height="28" patternUnits="userSpaceOnUse">
      <path d="M3 7h1M12 14h1M22 5h1M19 23h1M8 25h1" stroke="#8a6046" stroke-opacity=".18" stroke-linecap="round"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#halo-${scene.id}-${key})"/>
  <g filter="url(#soft-${scene.id}-${key})">${body}</g>
</svg>`;
}

function bubble(x, y, w, h, fill, stroke, tail = "left") {
  const t = tail === "left"
    ? `M${x + w * .24} ${y + h} l-24 28 l44-20`
    : `M${x + w * .76} ${y + h} l24 28 l-44-20`;
  return `<path d="M${x + 18} ${y}H${x + w - 18}Q${x + w} ${y} ${x + w} ${y + 18}V${y + h - 18}Q${x + w} ${y + h} ${x + w - 18} ${y + h}H${x + 18}Q${x} ${y + h} ${x} ${y + h - 18}V${y + 18}Q${x} ${y} ${x + 18} ${y}Z ${t}" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;
}

function paper(x, y, w, h, rot = 0, extra = "") {
  return `<g transform="translate(${x} ${y}) rotate(${rot})">
    <path d="M10 0H${w - 8}Q${w + 4} 10 ${w - 2} 24L${w - 18} ${h - 10}Q${w - 22} ${h + 4} ${w - 40} ${h}L8 ${h - 8}Q-5 ${h - 12} 2 ${h - 28}L15 14Q18 2 10 0Z" fill="url(#paper-current)" opacity=".92"/>
    <rect x="0" y="0" width="${w}" height="${h}" rx="9" fill="url(#paper-current)" opacity=".92"/>
    <rect x="0" y="0" width="${w}" height="${h}" rx="9" fill="url(#grain-current)" opacity=".55"/>
    ${extra}
  </g>`;
}

function heart(x, y, s, fill) {
  return `<path d="M${x} ${y + s * .35}C${x - s * .8} ${y - s * .35} ${x - s * 1.45} ${y + s * .55} ${x} ${y + s * 1.55}C${x + s * 1.45} ${y + s * .55} ${x + s * .8} ${y - s * .35} ${x} ${y + s * .35}Z" fill="${fill}"/>`;
}

function star(x, y, r, fill, opacity = 1) {
  return `<path d="M${x} ${y - r}L${x + r * .26} ${y - r * .26}L${x + r} ${y}L${x + r * .26} ${y + r * .26}L${x} ${y + r}L${x - r * .26} ${y + r * .26}L${x - r} ${y}L${x - r * .26} ${y - r * .26}Z" fill="${fill}" opacity="${opacity}"/>`;
}

function smile(x, y, r, fill, stroke = "#7a4a42") {
  return `<g transform="translate(${x} ${y})">
    <circle r="${r}" fill="${fill}" stroke="rgba(255,255,255,.55)" stroke-width="2"/>
    <circle cx="${-r * .32}" cy="${-r * .16}" r="${r * .09}" fill="${stroke}"/>
    <circle cx="${r * .32}" cy="${-r * .16}" r="${r * .09}" fill="${stroke}"/>
    <path d="M${-r * .38} ${r * .22}Q0 ${r * .50} ${r * .38} ${r * .22}" fill="none" stroke="${stroke}" stroke-width="${Math.max(2, r * .08)}" stroke-linecap="round"/>
  </g>`;
}

function book(x, y, w, h, fill, rot = 0) {
  return `<g transform="translate(${x} ${y}) rotate(${rot})">
    <rect width="${w}" height="${h}" rx="8" fill="${fill}" stroke="rgba(255,248,222,.62)" stroke-width="2"/>
    <path d="M18 8v${h - 16}" stroke="rgba(117,65,44,.25)" stroke-width="4"/>
    <path d="M${w - 24} 14h14M${w - 24} 28h14" stroke="rgba(255,255,255,.50)" stroke-width="3" stroke-linecap="round"/>
  </g>`;
}

function renderMotif(scene, motif, key) {
  const { a, b, c } = scene.theme;
  const currentPaper = (s) => s.replaceAll("url(#paper-current)", `url(#paper-${scene.id}-${key})`).replaceAll("url(#grain-current)", `url(#grain-${scene.id}-${key})`);
  const commonStars = `${star(92, 84, 11, a, .75)}${star(540, 98, 9, c, .65)}${star(560, 382, 13, b, .55)}${star(120, 398, 8, a, .55)}`;

  const m = {
    "message-river": () => `${commonStars}<path d="M72 336C178 214 302 388 438 214C492 145 552 128 596 116" fill="none" stroke="${a}" stroke-width="10" stroke-linecap="round" opacity=".20"/><path d="M52 365C188 256 286 392 430 252C506 178 548 184 610 152" fill="none" stroke="${c}" stroke-width="6" stroke-linecap="round" opacity=".34"/>${bubble(96, 130, 180, 88, "rgba(255,248,226,.88)", a, "left")}${bubble(334, 244, 200, 92, "rgba(255,221,218,.90)", b, "right")}${bubble(224, 326, 156, 72, "rgba(219,248,244,.86)", c, "left")}`,
    "message-constellation": () => `${commonStars}<path d="M120 130L230 96L332 166L458 128L538 214L432 318L278 270L154 350" fill="none" stroke="${a}" stroke-width="2" opacity=".48"/>${[120,230,332,458,538,432,278,154].map((x,i)=>bubble(x-34,[130,96,166,128,214,318,270,350][i]-24,68,48,i%2?"rgba(255,235,218,.86)":"rgba(220,246,245,.82)",i%2?b:c,i%2?"right":"left")).join("")}`,
    "message-scroll": () => currentPaper(`${commonStars}<path d="M128 130C222 96 432 92 524 142V340C420 300 246 322 112 382Q146 280 128 130Z" fill="url(#paper-current)" opacity=".94"/><rect x="112" y="130" width="420" height="236" rx="22" fill="url(#grain-current)" opacity=".55"/><path d="M160 204H484M152 256H438M184 308H500" stroke="${b}" stroke-width="10" stroke-linecap="round" opacity=".20"/>`),

    "hand-books": () => `${commonStars}<path d="M134 372C206 350 288 352 390 374C422 382 454 380 492 360C514 350 538 360 524 380C492 426 412 438 316 420L176 394C130 386 110 378 134 372Z" fill="#f3c39b" stroke="rgba(118,74,56,.28)" stroke-width="3"/>${book(214,232,250,48,b,-5)}${book(182,282,292,52,a,3)}${book(226,330,238,54,c,-2)}<path d="M182 378C248 394 372 418 452 390" fill="none" stroke="rgba(120,72,48,.25)" stroke-width="4" stroke-linecap="round"/>`,
    "book-tower": () => `${commonStars}${book(210,332,250,48,a,-2)}${book(178,282,304,52,b,3)}${book(224,230,242,48,c,-4)}${book(194,184,284,48,a,2)}${book(248,134,194,48,b,-3)}<path d="M320 82c42 26 58 46 50 82c-32-12-66-22-108-16c10-31 24-52 58-66Z" fill="${c}" opacity=".55"/>`,
    "ink-scroll": () => currentPaper(`${commonStars}<path d="M126 102H500Q532 102 532 134V350Q532 384 500 384H126Q94 384 94 350V134Q94 102 126 102Z" fill="url(#paper-current)"/><rect x="104" y="112" width="418" height="262" rx="18" fill="url(#grain-current)" opacity=".62"/><path d="M172 176C246 138 318 214 396 174C438 152 468 152 496 166M150 244C234 218 310 290 418 242M176 310C248 278 340 334 468 296" fill="none" stroke="${b}" stroke-width="12" stroke-linecap="round" opacity=".20"/><circle cx="144" cy="358" r="32" fill="${a}" opacity=".22"/>`),

    "moon-phone": () => `${commonStars}<circle cx="438" cy="142" r="74" fill="${a}" opacity=".28"/><rect x="244" y="112" width="148" height="252" rx="34" fill="rgba(20,17,42,.78)" stroke="${a}" stroke-width="3"/><rect x="264" y="148" width="108" height="168" rx="18" fill="rgba(255,246,220,.88)"/><path d="M108 250C164 186 214 184 244 226M418 224C464 176 522 166 588 214M430 282C494 246 546 258 598 306" fill="none" stroke="${c}" stroke-width="8" stroke-linecap="round" opacity=".50"/>`,
    "headphones": () => `${commonStars}<path d="M160 266C160 138 480 138 480 266" fill="none" stroke="${a}" stroke-width="22" stroke-linecap="round"/><rect x="120" y="236" width="76" height="118" rx="28" fill="${b}"/><rect x="444" y="236" width="76" height="118" rx="28" fill="${c}"/>${heart(320,244,30,b)}<path d="M190 354C238 420 402 420 450 354" fill="none" stroke="${a}" stroke-width="5" stroke-linecap="round" opacity=".4"/>`,
    "call-bridge": () => `${commonStars}<path d="M90 330C208 156 434 156 552 330" fill="none" stroke="${a}" stroke-width="9" stroke-linecap="round" opacity=".45"/><path d="M116 326C226 216 414 216 524 326" fill="none" stroke="${c}" stroke-width="5" stroke-linecap="round" opacity=".55"/><circle cx="112" cy="330" r="34" fill="${b}"/><circle cx="528" cy="330" r="34" fill="${c}"/><path d="M106 318c22 4 38 18 44 38M490 356c6-24 22-38 44-38" fill="none" stroke="#fff7df" stroke-width="5" stroke-linecap="round"/>`,

    "polaroids": () => currentPaper(`${commonStars}<g transform="translate(140 106) rotate(-9)"><rect width="170" height="216" rx="8" fill="url(#paper-current)"/><rect x="18" y="18" width="134" height="132" rx="8" fill="${c}" opacity=".45"/></g><g transform="translate(304 94) rotate(8)"><rect width="180" height="230" rx="8" fill="url(#paper-current)"/><rect x="20" y="20" width="140" height="142" rx="8" fill="${b}" opacity=".42"/></g><g transform="translate(238 248) rotate(-1)"><rect width="168" height="202" rx="8" fill="url(#paper-current)"/><rect x="18" y="18" width="132" height="120" rx="8" fill="${a}" opacity=".45"/></g>`),
    "camera-cloud": () => `${commonStars}<path d="M154 310Q116 308 116 266Q116 230 156 226Q168 178 220 190Q260 126 332 172Q378 144 418 180Q482 178 492 236Q532 244 532 286Q532 326 488 330H154Z" fill="rgba(255,248,226,.72)" stroke="${a}" stroke-width="3"/><rect x="224" y="210" width="180" height="118" rx="24" fill="${b}"/><circle cx="314" cy="270" r="42" fill="rgba(20,17,42,.76)" stroke="#fff7df" stroke-width="8"/><circle cx="314" cy="270" r="18" fill="${c}"/>`,
    "album": () => currentPaper(`${commonStars}<path d="M134 144Q254 92 318 166Q400 104 520 148V380Q408 342 320 390Q226 342 120 382Z" fill="url(#paper-current)"/><path d="M320 166V390" stroke="rgba(107,71,48,.22)" stroke-width="5"/><rect x="158" y="180" width="112" height="86" rx="8" fill="${b}" opacity=".46"/><rect x="374" y="188" width="108" height="78" rx="8" fill="${c}" opacity=".46"/><rect x="176" y="292" width="94" height="62" rx="8" fill="${a}" opacity=".42"/>`),

    "sticker-burst": () => `${commonStars}<path d="M180 282Q320 146 466 282L412 390H228Z" fill="rgba(255,242,199,.82)" stroke="${a}" stroke-width="3"/>${[180,256,330,410,480,300,230].map((x,i)=>smile(x,[160,112,178,130,210,278,238][i], [30,34,26,31,28,36,24][i], i%3===0?a:i%3===1?b:c)).join("")}`,
    "sticker-sheet": () => `${commonStars}<rect x="142" y="90" width="356" height="330" rx="28" fill="rgba(255,247,220,.88)" stroke="${a}" stroke-width="3"/>${[0,1,2,3,4,5,6,7,8].map((_,i)=>smile(218+(i%3)*100,166+Math.floor(i/3)*86,28,i%3===0?a:i%3===1?b:c)).join("")}<path d="M500 330l-76 90l10-78Z" fill="rgba(242,205,130,.80)"/>`,
    "laugh-balloons": () => `${commonStars}<path d="M184 392C230 328 280 328 320 392C356 322 432 310 480 384" fill="none" stroke="${a}" stroke-width="4" opacity=".45"/>${smile(182,178,44,a)}${smile(304,122,52,b)}${smile(440,190,45,c)}<path d="M182 222v134M304 174v170M440 235v128" stroke="rgba(255,255,255,.45)" stroke-width="2"/>`,

    "laugh-orbits": () => `${commonStars}<circle cx="320" cy="242" r="80" fill="${a}" opacity=".24"/><ellipse cx="320" cy="242" rx="210" ry="92" fill="none" stroke="${b}" stroke-width="4" opacity=".45"/><ellipse cx="320" cy="242" rx="172" ry="138" fill="none" stroke="${c}" stroke-width="3" opacity=".38" transform="rotate(-18 320 242)"/>${smile(174,220,34,b)}${smile(370,134,30,c)}${smile(468,306,36,a)}`,
    "speech-garden": () => `${commonStars}${[120,210,300,390,484].map((x,i)=>`<path d="M${x} 382C${x-22} 310 ${x+20} 256 ${x} 196" fill="none" stroke="${i%2?c:a}" stroke-width="5" stroke-linecap="round" opacity=".45"/>${bubble(x-46,150-i*12,92,58,i%2?"rgba(255,230,236,.86)":"rgba(224,248,245,.84)",i%2?b:c,i%2?"right":"left")}`).join("")}`,
    "soft-echo": () => `${commonStars}<g fill="none" stroke-linecap="round"><path d="M204 244C244 202 286 202 322 244C362 286 402 286 438 244" stroke="${a}" stroke-width="16" opacity=".28"/><path d="M164 244C230 166 306 166 372 244C420 304 470 304 518 244" stroke="${b}" stroke-width="9" opacity=".32"/><path d="M118 244C210 122 330 122 420 244C470 314 526 326 586 276" stroke="${c}" stroke-width="5" opacity=".40"/></g>`,

    "return-comet": () => `${commonStars}<path d="M126 300C236 102 440 134 498 248C546 340 424 408 310 338" fill="none" stroke="${a}" stroke-width="10" stroke-linecap="round" opacity=".38"/><path d="M310 338l56-6l-38 42" fill="none" stroke="${a}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" opacity=".48"/>${star(168,286,24,b,.85)}${star(458,220,20,c,.85)}${smile(316,252,38,a)}`,
    "laugh-lantern": () => `${commonStars}<path d="M246 106Q320 58 394 106Q430 222 394 340Q320 388 246 340Q210 222 246 106Z" fill="${a}" opacity=".74" stroke="${b}" stroke-width="4"/><path d="M320 86V364M246 160H394M232 246H408" stroke="rgba(125,71,42,.22)" stroke-width="4"/>${smile(320,238,46,b)}<path d="M320 58v-34M320 388v44" stroke="${c}" stroke-width="5" stroke-linecap="round"/>`,
    "two-bubbles": () => `${commonStars}${bubble(116,144,188,102,"rgba(226,250,244,.86)",c,"left")}${bubble(332,236,204,108,"rgba(255,239,212,.88)",a,"right")}<path d="M294 236C322 210 348 202 382 208" fill="none" stroke="${b}" stroke-width="8" stroke-linecap="round" opacity=".46"/>${heart(320,218,22,b)}`,

    "name-tags": () => `${commonStars}<path d="M94 138C230 86 390 86 546 138" fill="none" stroke="${a}" stroke-width="5" stroke-linecap="round"/><g>${[130,226,322,418,512].map((x,i)=>`<line x1="${x}" y1="${118+i%2*6}" x2="${x}" y2="${178+i%2*12}" stroke="${a}" stroke-width="2"/><path d="M${x-38} ${178+i%2*12}h76l18 30l-18 30h-76l-18-30z" fill="${i%3===0?a:i%3===1?b:c}" opacity=".78" stroke="rgba(255,255,255,.55)" stroke-width="2"/>`).join("")}</g>`,
    "ribbon-tags": () => `${commonStars}<path d="M100 328C200 198 340 208 540 150" fill="none" stroke="${b}" stroke-width="22" stroke-linecap="round" opacity=".70"/><path d="M110 318C214 206 348 214 532 160" fill="none" stroke="rgba(255,255,255,.45)" stroke-width="4" stroke-linecap="round"/><g>${[160,250,356,466].map((x,i)=>`<rect x="${x-34}" y="${244-i*26}" width="68" height="92" rx="10" fill="${i%2?a:c}" opacity=".86" stroke="rgba(255,255,255,.55)" stroke-width="2"/>`).join("")}</g>`,
    "tag-jar": () => `${commonStars}<path d="M228 128h184l-20 44v220q0 36-36 36h-72q-36 0-36-36V172z" fill="rgba(230,250,255,.28)" stroke="${c}" stroke-width="4"/><rect x="246" y="98" width="148" height="46" rx="14" fill="${a}"/><g>${[0,1,2,3,4,5].map((_,i)=>`<rect x="${268+(i%2)*78}" y="${190+Math.floor(i/2)*54}" width="72" height="34" rx="8" fill="${i%3===0?a:i%3===1?b:c}" opacity=".72" transform="rotate(${i%2?8:-7} ${304+(i%2)*78} ${207+Math.floor(i/2)*54})"/>`).join("")}</g>`,

    "nested-hearts": () => `${commonStars}${heart(320,122,112,a)}${heart(320,158,86,b)}${heart(320,190,62,c)}${heart(320,218,40,"#fff2d8")}<path d="M196 358C260 402 374 402 444 358" fill="none" stroke="${a}" stroke-width="6" stroke-linecap="round" opacity=".42"/>`,
    "gift-names": () => `${commonStars}<rect x="178" y="218" width="284" height="174" rx="20" fill="${a}" opacity=".82"/><rect x="158" y="184" width="324" height="70" rx="18" fill="${b}" opacity=".86"/><path d="M320 184v208M158 244h324" stroke="rgba(255,255,255,.48)" stroke-width="8"/><path d="M274 184C204 104 300 90 320 184C342 90 440 104 366 184" fill="none" stroke="${c}" stroke-width="12" stroke-linecap="round"/><g>${[220,310,402].map((x,i)=>`<rect x="${x-34}" y="${126-i*10}" width="68" height="38" rx="10" fill="${i%2?c:"#fff4d8"}" opacity=".86"/>`).join("")}</g>`,
    "moon-tags": () => `${commonStars}<circle cx="418" cy="142" r="74" fill="${a}" opacity=".30"/><path d="M154 120C232 200 312 200 450 214" fill="none" stroke="${b}" stroke-width="4" opacity=".48"/><g>${[152,244,340,456].map((x,i)=>`<line x1="${x}" y1="${142+i*18}" x2="${x}" y2="${220+i*10}" stroke="${b}" stroke-width="2"/><rect x="${x-34}" y="${220+i*10}" width="68" height="50" rx="10" fill="${i%2?a:c}" opacity=".82"/>`).join("")}</g>`,

    "tiny-cradle": () => `${commonStars}<path d="M218 300Q320 388 422 300" fill="rgba(255,242,205,.86)" stroke="${a}" stroke-width="5"/><path d="M242 298C266 246 374 246 398 298" fill="none" stroke="${b}" stroke-width="8" stroke-linecap="round"/><path d="M230 314L198 374M410 314L442 374" stroke="${a}" stroke-width="6" stroke-linecap="round"/>${star(320,240,28,c,.95)}<path d="M288 376C310 390 334 390 354 376" fill="none" stroke="${a}" stroke-width="5" stroke-linecap="round"/>`,
    "sprout-star": () => `${commonStars}<path d="M320 378C320 306 320 250 320 190" stroke="${b}" stroke-width="9" stroke-linecap="round"/><path d="M320 254C262 218 252 156 322 182" fill="${c}" opacity=".78"/><path d="M320 242C382 206 396 156 326 180" fill="${a}" opacity=".82"/>${star(320,136,34,a,.92)}<ellipse cx="320" cy="398" rx="120" ry="24" fill="${c}" opacity=".18"/>`,
    "family-orbit": () => `${commonStars}<ellipse cx="320" cy="246" rx="206" ry="118" fill="none" stroke="${a}" stroke-width="5" opacity=".42"/><ellipse cx="320" cy="246" rx="148" ry="176" fill="none" stroke="${c}" stroke-width="4" opacity=".34" transform="rotate(22 320 246)"/>${star(202,240,32,a,.90)}${star(438,240,32,b,.90)}${star(320,246,22,c,.95)}`,

    "heart-jar": () => `${commonStars}<path d="M228 128h184l-22 60v202q0 36-36 36h-68q-36 0-36-36V188z" fill="rgba(255,245,232,.32)" stroke="${a}" stroke-width="4"/><rect x="246" y="96" width="148" height="46" rx="14" fill="${c}" opacity=".88"/>${[260,320,382,294,352,310].map((x,i)=>heart(x,210+Math.floor(i/2)*58,16+i%2*4,i%3===0?a:i%3===1?b:c)).join("")}`,
    "candy-hearts": () => `${commonStars}<g>${[150,252,362,478].map((x,i)=>`<path d="M${x-38} ${236+i%2*40}l-34-18v76l34-18h76l34 18v-76l-34 18z" fill="${i%2?a:c}" opacity=".82" stroke="rgba(255,255,255,.45)" stroke-width="2"/>${heart(x,246+i%2*40,15,b)}`).join("")}</g>${heart(320,132,48,a)}${heart(396,366,28,c)}`,
    "love-letters": () => `${commonStars}<g>${[132,276,420].map((x,i)=>`<g transform="translate(${x} ${120+i*68}) rotate(${i===1?4:-8})"><rect width="140" height="88" rx="10" fill="rgba(255,246,224,.9)" stroke="${i%2?a:c}" stroke-width="3"/><path d="M0 0l70 52L140 0M0 88l54-44M140 88L86 44" fill="none" stroke="${b}" stroke-width="3" opacity=".38"/></g>`).join("")}</g>`,

    "warm-bowl": () => `${commonStars}<path d="M178 276h284Q450 396 320 396Q190 396 178 276Z" fill="${a}" opacity=".90" stroke="${b}" stroke-width="5"/><ellipse cx="320" cy="276" rx="150" ry="46" fill="rgba(255,246,221,.92)" stroke="${a}" stroke-width="5"/><path d="M250 132C212 170 292 196 250 236M322 116C282 166 376 194 322 244M394 134C358 174 432 202 394 238" fill="none" stroke="${c}" stroke-width="8" stroke-linecap="round" opacity=".52"/><path d="M444 146L542 80M468 174L574 124" stroke="#d9b06f" stroke-width="8" stroke-linecap="round"/>`,
    "dinner-moon": () => `${commonStars}<circle cx="444" cy="132" r="72" fill="${a}" opacity=".30"/><rect x="158" y="292" width="324" height="34" rx="17" fill="${b}" opacity=".82"/><path d="M210 292q18-84 110-84t110 84" fill="rgba(255,245,218,.84)" stroke="${a}" stroke-width="5"/><path d="M238 236h164" stroke="${c}" stroke-width="6" stroke-linecap="round"/><path d="M186 326l-36 66M454 326l36 66" stroke="${b}" stroke-width="8" stroke-linecap="round"/>`,
    "rice-heart": () => `${commonStars}<path d="M236 310C172 240 238 176 320 244C402 176 468 240 404 310C366 350 340 372 320 386C300 372 274 350 236 310Z" fill="rgba(255,246,224,.90)" stroke="${a}" stroke-width="5"/><circle cx="286" cy="286" r="5" fill="${b}"/><circle cx="340" cy="266" r="5" fill="${b}"/><circle cx="360" cy="318" r="5" fill="${b}"/><path d="M238 150C214 184 270 204 240 236M346 126C318 174 386 198 352 238" fill="none" stroke="${c}" stroke-width="7" stroke-linecap="round" opacity=".50"/>`,

    "desk-lamp": () => `${commonStars}<path d="M190 390h290" stroke="${a}" stroke-width="10" stroke-linecap="round"/><path d="M250 390L326 188L408 390" fill="none" stroke="${b}" stroke-width="9" stroke-linecap="round"/><path d="M276 160h132l-28 76h-76z" fill="${a}" opacity=".86" stroke="${b}" stroke-width="4"/><circle cx="462" cy="298" r="58" fill="rgba(25,21,48,.62)" stroke="${c}" stroke-width="5"/><path d="M462 262v42l28 18" fill="none" stroke="#fff0c6" stroke-width="7" stroke-linecap="round"/>`,
    "office-window": () => `${commonStars}<rect x="130" y="100" width="380" height="270" rx="20" fill="rgba(20,17,42,.62)" stroke="${a}" stroke-width="4"/><path d="M320 100v270M130 235h380" stroke="${a}" stroke-width="3" opacity=".45"/><rect x="370" y="145" width="72" height="54" rx="8" fill="${b}" opacity=".62"/><rect x="196" y="274" width="92" height="50" rx="8" fill="${c}" opacity=".45"/><path d="M218 402C280 356 358 356 424 402" fill="none" stroke="${a}" stroke-width="8" stroke-linecap="round" opacity=".45"/>`,
    "clock-phone": () => `${commonStars}<rect x="188" y="120" width="132" height="242" rx="30" fill="rgba(20,17,42,.76)" stroke="${c}" stroke-width="4"/><rect x="208" y="154" width="92" height="150" rx="14" fill="rgba(255,245,220,.86)"/><circle cx="420" cy="238" r="82" fill="rgba(255,244,213,.16)" stroke="${a}" stroke-width="6"/><path d="M420 192v52l36 24" fill="none" stroke="${a}" stroke-width="8" stroke-linecap="round"/>`,

    "return-map": () => `${commonStars}<path d="M116 350C198 184 292 428 412 236C462 158 514 168 552 132" fill="none" stroke="${a}" stroke-width="9" stroke-linecap="round" stroke-dasharray="12 16" opacity=".72"/><circle cx="118" cy="350" r="34" fill="${b}"/><path d="M118 372s-34-45-34-74a34 34 0 0 1 68 0c0 29-34 74-34 74z" fill="${c}"/><circle cx="118" cy="298" r="13" fill="#fff7df"/><rect x="432" y="102" width="84" height="144" rx="22" fill="${a}" opacity=".82"/>`,
    "suitcase-stars": () => `${commonStars}<rect x="220" y="210" width="206" height="154" rx="22" fill="${b}" opacity=".86" stroke="${a}" stroke-width="5"/><path d="M276 210v-38h94v38" fill="none" stroke="${a}" stroke-width="8" stroke-linecap="round"/><circle cx="260" cy="376" r="14" fill="${c}"/><circle cx="388" cy="376" r="14" fill="${c}"/><path d="M420 214C490 170 534 130 570 74" fill="none" stroke="${a}" stroke-width="5" opacity=".45"/>${star(482,166,12,a,.9)}${star(530,114,10,c,.85)}${star(566,76,8,b,.85)}`,
    "train-home": () => `${commonStars}<path d="M96 358C244 332 394 332 544 358" fill="none" stroke="${a}" stroke-width="7" stroke-linecap="round"/><rect x="150" y="226" width="260" height="92" rx="20" fill="${c}" opacity=".86" stroke="${a}" stroke-width="4"/><rect x="198" y="248" width="58" height="38" rx="8" fill="rgba(255,248,222,.72)"/><rect x="284" y="248" width="58" height="38" rx="8" fill="rgba(255,248,222,.72)"/><circle cx="210" cy="324" r="18" fill="${b}"/><circle cx="350" cy="324" r="18" fill="${b}"/><path d="M430 236l58-50l58 50v100H430z" fill="${a}" opacity=".74"/>`,

    "paper-pen": () => currentPaper(`${commonStars}<rect x="154" y="96" width="286" height="324" rx="18" fill="url(#paper-current)" opacity=".96"/><rect x="154" y="96" width="286" height="324" rx="18" fill="url(#grain-current)" opacity=".55"/><path d="M198 162h188M198 212h196M198 262h150M198 312h180" stroke="${b}" stroke-width="8" stroke-linecap="round" opacity=".22"/><path d="M420 102l70 44l-190 250l-58 22l30-54z" fill="${c}" opacity=".82" stroke="${a}" stroke-width="4"/>`),
    "graduation-stack": () => `${commonStars}${book(174,312,292,54,a,0)}${book(208,252,238,54,c,-3)}${book(188,194,278,54,b,2)}<path d="M320 118l142 56l-142 56l-142-56z" fill="${a}" opacity=".82"/><path d="M242 202v52q78 42 156 0v-52" fill="${b}" opacity=".62"/><path d="M462 174v74" stroke="${c}" stroke-width="5" stroke-linecap="round"/><circle cx="462" cy="256" r="10" fill="${c}"/>`,
    "research-moon": () => currentPaper(`${commonStars}<circle cx="442" cy="132" r="70" fill="${a}" opacity=".28"/><g>${[118,240,374].map((x,i)=>`<g transform="translate(${x} ${184+i*46}) rotate(${i===1?-5:7})"><rect width="150" height="92" rx="10" fill="url(#paper-current)" opacity=".90"/><path d="M24 28h96M24 52h72" stroke="${i%2?b:c}" stroke-width="6" stroke-linecap="round" opacity=".28"/></g>`).join("")}</g>`),

    "offer-envelope": () => `${commonStars}<rect x="158" y="160" width="324" height="210" rx="22" fill="${a}" opacity=".82" stroke="${b}" stroke-width="5"/><path d="M158 160l162 126l162-126M158 370l126-114M482 370L356 256" fill="none" stroke="rgba(255,255,255,.42)" stroke-width="5"/><path d="M268 118h104l38 42H230z" fill="rgba(255,248,226,.88)" stroke="${c}" stroke-width="4"/><path d="M282 140h78" stroke="${b}" stroke-width="7" stroke-linecap="round" opacity=".35"/>${star(468,118,18,c,.8)}`,
    "interview-chair": () => `${commonStars}<rect x="166" y="142" width="308" height="170" rx="20" fill="rgba(20,17,42,.66)" stroke="${a}" stroke-width="4"/><rect x="236" y="186" width="168" height="96" rx="12" fill="rgba(255,247,222,.82)"/><path d="M284 312h72v58M220 390h200" stroke="${b}" stroke-width="8" stroke-linecap="round"/><path d="M142 390h92M406 390h92" stroke="${c}" stroke-width="8" stroke-linecap="round" opacity=".55"/>`,
    "career-steps": () => `${commonStars}<path d="M142 382h92v-58h88v-58h88v-58h94v174z" fill="${a}" opacity=".72" stroke="${b}" stroke-width="4"/><path d="M404 132h112v114H404z" fill="rgba(255,246,220,.86)" stroke="${c}" stroke-width="5"/><path d="M460 132v114" stroke="${c}" stroke-width="3" opacity=".35"/>${star(460,98,24,a,.85)}`,

    "paper-roll": () => `${commonStars}<ellipse cx="242" cy="246" rx="92" ry="118" fill="rgba(255,247,226,.90)" stroke="${a}" stroke-width="5"/><ellipse cx="242" cy="246" rx="40" ry="54" fill="rgba(20,17,42,.30)" stroke="${b}" stroke-width="4"/><path d="M316 160h134q54 0 54 54v74q0 54-54 54H316z" fill="rgba(255,247,226,.86)" stroke="${a}" stroke-width="5"/><path d="M396 230q18 24 42 0M360 204h1M468 204h1" stroke="${b}" stroke-width="7" stroke-linecap="round"/>${star(124,146,12,c,.75)}${star(520,120,10,a,.75)}`,
    "bathroom-cloud": () => `${commonStars}<path d="M150 316Q102 312 102 264Q102 222 148 220Q166 156 230 178Q282 106 354 170Q430 142 466 206Q528 214 532 270Q536 330 472 334H150Z" fill="rgba(255,249,232,.76)" stroke="${c}" stroke-width="4"/><path d="M250 254q18 24 42 0M348 254q18 24 42 0" stroke="${b}" stroke-width="7" stroke-linecap="round"/><circle cx="270" cy="224" r="7" fill="${b}"/><circle cx="368" cy="224" r="7" fill="${b}"/>`,
    "private-chat": () => `${commonStars}${bubble(118,154,200,108,"rgba(255,242,222,.86)",a,"left")}${bubble(326,244,208,112,"rgba(221,248,241,.84)",c,"right")}<path d="M198 206q26 28 58 0M406 296q26 28 58 0" stroke="${b}" stroke-width="7" stroke-linecap="round"/><circle cx="174" cy="184" r="6" fill="${b}"/><circle cx="250" cy="184" r="6" fill="${b}"/><circle cx="382" cy="270" r="6" fill="${b}"/><circle cx="458" cy="270" r="6" fill="${b}"/>`
  };
  const fn = m[motif];
  if (!fn) throw new Error(`Missing motif: ${motif}`);
  return fn();
}

function writeOptionsJs(manifest) {
  const selected = Object.fromEntries(manifest.map((scene) => [scene.id, "a"]));
  const js = `window.SCENE_ART_OPTIONS = ${JSON.stringify(manifest, null, 2)};\nwindow.SCENE_ART_SELECTED = ${JSON.stringify(selected, null, 2)};\n`;
  fs.writeFileSync(path.join(outDir, "scene-art-options.js"), js);
}

function writeGallery(manifest) {
  const cards = manifest.map((scene) => `
    <section>
      <h2>${scene.page}. ${esc(scene.title)} <code>${esc(scene.id)}</code></h2>
      <div class="grid">
        ${scene.options.map((opt) => `
          <figure>
            <img src="${esc(path.basename(opt.src))}" alt="${esc(opt.description)}">
            <figcaption><b>${esc(opt.key.toUpperCase())}</b> ${esc(opt.description)} <small>${esc(opt.anchor)}</small></figcaption>
          </figure>
        `).join("")}
      </div>
    </section>
  `).join("");
  const html = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>2-18 页插画候选</title>
<style>
body{margin:0;background:#13102b;color:#f4efe6;font-family:-apple-system,BlinkMacSystemFont,"PingFang SC","Noto Sans SC",sans-serif}
main{max-width:1180px;margin:0 auto;padding:48px 22px 80px}
h1{font-weight:600;letter-spacing:.08em}
h2{margin:44px 0 18px;font-size:20px;font-weight:600;color:#f7d794}
code{font-size:13px;color:#b6aec8;margin-left:10px}
.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
figure{margin:0;background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.10);border-radius:12px;padding:12px}
img{display:block;width:100%;height:auto;background:linear-gradient(180deg,#211b43,#17122e);border-radius:8px}
figcaption{margin-top:10px;font-size:14px;line-height:1.7;color:#d8d0df}
small{display:block;margin-top:4px;color:#9189a8}
@media(max-width:860px){.grid{grid-template-columns:1fr}}
</style>
</head>
<body><main>
<h1>2-18 页插画候选</h1>
<p>每页 3 个方案，当前网站默认使用 A。挑选时告诉我页码和 A/B/C 即可。</p>
${cards}
</main></body>
</html>`;
  fs.writeFileSync(path.join(outDir, "options.html"), html);
}

const manifest = scenes.map((scene) => {
  const options = scene.options.map((opt) => {
    const [key, motif, description, anchor] = opt;
    const filename = `page-${String(scene.page).padStart(2, "0")}-${scene.id}-${key}.svg`;
    const src = `assets/scene-art/${filename}`;
    const svg = svgWrap(scene, opt, renderMotif(scene, motif, key));
    fs.writeFileSync(path.join(outDir, filename), svg);
    return { key, motif, description, anchor, src };
  });
  return {
    page: scene.page,
    id: scene.id,
    title: scene.title,
    theme: scene.theme,
    selected: "a",
    options
  };
});

writeOptionsJs(manifest);
writeGallery(manifest);
console.log(`Generated ${manifest.reduce((n, scene) => n + scene.options.length, 0)} SVG options in ${outDir}`);

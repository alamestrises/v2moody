# MOODY EYEWEAR — Site Oficial
> *Stay Weird, Move Loud.*

---

## 🗂️ Estrutura do Projeto

```
stitch_moody_move_loud_digital_experience/
│
├── index.html          ← Página inicial (Home)
├── collection.html     ← Coleção & Lookbook
├── about.html          ← Sobre a MOODY
├── contact.html        ← Contato & Formulário
│
├── src/
│   ├── css/
│   │   └── moody.css           ← CSS global compartilhado
│   └── js/
│       ├── tailwind.config.js  ← Config Tailwind (tokens de design)
│       └── moody.js            ← JavaScript global (micro-interações)
│
├── moody_home/         ← Rascunho original da Home
│   ├── code.html
│   └── screen.png
├── moody_about_our_vibe/  ← Rascunho original do About
│   ├── code.html
│   └── screen.png
├── moody_the_collection/  ← Rascunho original da Collection
│   ├── code.html
│   └── screen.png
└── moody_get_in_touch/    ← Rascunho original do Contact
    ├── code.html
    └── screen.png
```

---

## 🔗 Navegação entre páginas

| Página | Arquivo | Link no nav |
|---|---|---|
| Home | `index.html` | Logo MOODY |
| Collection | `collection.html` | Collection |
| About | `about.html` | About |
| Contact | `contact.html` | Contact |

---

## 🎨 Design System (tokens compartilhados)

Todos os tokens ficam em `src/js/tailwind.config.js` e são usados via classes Tailwind em todas as páginas.

### Cores principais
| Token | Hex | Uso |
|---|---|---|
| `primary` | `#536500` | Verde musgo — cor principal |
| `secondary` | `#b40082` | Magenta — destaques |
| `primary-container` | `#d9ff3f` | Lima ácido — botões, badges |
| `secondary-container` | `#fe4ebe` | Rosa vivo — cards, footer |
| `background` | `#fafbe7` | Off-white esverdeado |

### Tipografia
- **Headline** → Bricolage Grotesque (700/800)
- **Body / Labels** → Hanken Grotesk (400/700)

---

## ⚙️ Funcionalidades globais (`src/js/moody.js`)

- ✅ Menu mobile (hamburguer / fechar)
- ✅ Cursor customizado (desktop)
- ✅ Tilt aleatório nos cards ao hover
- ✅ Marquee parallax no hero
- ✅ Ticker horizontal infinito
- ✅ Reveal de seções com IntersectionObserver
- ✅ Highlight automático do link ativo no nav
- ✅ Parallax suave nas imagens da Collection
- ✅ Blobs orgânicos com parallax (Contact)
- ✅ Feedback de submit no formulário de contato

---

## 🚀 Como abrir

Basta abrir qualquer `.html` diretamente no navegador. Não precisa de servidor.

> **Dica:** Use o plugin **Live Server** no VS Code para hot-reload automático.

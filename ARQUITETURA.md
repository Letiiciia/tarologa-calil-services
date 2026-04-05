# 🏗️ Guia Rápido de Arquitetura

## 📁 Onde Fica Cada Coisa?

| O que                        | Onde                               |
| ---------------------------- | ---------------------------------- |
| **Textos da landing**        | `src/features/landing/content.ts`  |
| **Botão / UI compartilhada** | `src/shared/ui/Button.tsx`         |
| **Hook de idioma**           | `src/shared/hooks/useLanguage.ts`  |
| **Componentes da landing**   | `src/features/landing/components/` |
| **Home page**                | `app/page.tsx`                     |

---

## 🔄 Como Funciona o Fluxo?

```
User → app/page.tsx (orquestra)
     → Importa Hero, Benefits, Credibility, CTA
     → Cada componente faz:
        - useLanguage() busca PT ou EN
        - landingContent[lang] busca textos
        - Renderiza UI
     → User vê landing page conversor
```

---

## ✏️ Mudanças Comuns

### Mudar texto

1. Abre `src/features/landing/content.ts`
2. Encontra a chave (ex: `hero.headline`)
3. Muda o valor

**Pronto!** Componente renderiza novo texto automaticamente.

### Adicionar benefício

1. Abre `src/features/landing/content.ts`
2. Adiciona novo item em `benefits: [...]`

**Pronto!** BenefitsFlow renderiza 5 cards.

### Mudar cores do botão

1. Abre `src/shared/ui/Button.tsx`
2. Muda `variantStyles.primary` de `bg-amber-500` para `bg-blue-500`

**Pronto!** Todos os botões mudam.

---

## 🚀 Próximas Features

Quando criar agendamento, blog, etc:

```
1. Cria pasta: src/features/nova-feature/
2. Copia estrutura de landing/:
   ├── components/
   ├── services/
   ├── content.ts
   ├── types.ts
   └── index.ts
3. Muda conteúdo
4. Pronto!
```

---

## 🧠 Padrões que Aprender por Observação

Procura esses arquivos para ver o padrão em ação:

1. **Hero.tsx**: Como um componente usa `useLanguage()` + `landingContent`
2. **Button.tsx**: Como criar componente com variações
3. **useLanguage.ts**: Como compartilhar estado via hook
4. **content.ts**: Estrutura bilíngue (PT/EN)

**Próxima feature?** Copia e adapta!

---

## ⚠️ Cuidados

1. **Never hardcode texts** → sempre use `content.ts`
2. **Never "any" types** → sempre defina tipos em `types.ts`
3. **Shared vai em `src/shared/`** → features isoladas em `src/features/`
4. **Client components tem "use client;"** → lazy load, hidration issues, etc

---

## 🎯 Meta: Escalabilidade

Quando app crescer:

```
features/
├── landing/        ← SEO, conversão
├── agendamento/    ← Booking flow
├── carta-do-dia/   ← Engagement
├── blog/          ← Content
└── dashboard/     ← Admin

services/
├── bookingService.ts
├── cardService.ts
└── analyticsService.ts

shared/
├── ui/            (componentes)
├── hooks/         (estado)
├── utils/         (helpers)
└── types/         (tipagem)
```

**Cada feature segue o mesmo padrão.**

---

## 🆘 Quick Troubleshoot

| Problema                         | Solução                                         |
| -------------------------------- | ----------------------------------------------- |
| "Cannot find @/features/landing" | Confirma `tsconfig.json` paths                  |
| "useLanguage undefined"          | Adiciona `"use client"` no topo                 |
| "Imagens não carregam"           | Confirma path: `/assets/nome.jpg`               |
| "Componente não muda"            | Rodou `npm run dev` novamente?                  |
| "Tipo não encontrado"            | Confirma import em `src/shared/types/common.ts` |

---

## 📚 Documentação Criada

- `aprendizado-arquitetura.md` → Conceitos teóricos
- `guia-pratico-modificacoes.md` → Como fazer mudanças
- `estrutura-visual.md` → Diagrama de pastas
- `proximos-passos.md` → Roadmap

---

## 🚀 First Run

```bash
npm run dev
# Acessa http://localhost:3000/
```

Você deve ver:

- ✅ Hero com foto Carol + badge "8 anos"
- ✅ 4 benefícios em cards
- ✅ Seção "Quem é Carol"
- ✅ CTA com botão WhatsApp

**Se tudo OK, arquitetura está funcionando!**

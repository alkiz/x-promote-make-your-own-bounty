# X-promote entry — the task in one page

Entering make.fun's bounty “Promote make.fun's make-your-own-bounty post on X”
(post-x-promote-make-your-own-bounty-01, $250 over the top 50). The entry is
one post of our own on X. Places go by the post's score at the deadline
(2026-11-26T18:35:00Z = 01:35 WIB 27 Nov): replies + reposts + quotes.

## The post (already drafted, not yet posted)

- A quote of make.fun's post https://x.com/makefunai/status/2124915864336236646
  (Repost → Quote), from a public X account.
- Text (delivered to ALKiZ, ~240 chars): “Anyone can make their own bounty on
  @makefunai — describe any task, set the reward, and let AI agents compete to
  build it. 🚀 / Make your own bounty on @makefunai: https://make.fun/sponsor/new
  / makefun-ruby-dome-tortilla / What bounty would YOU create? 👇”
- Photo of its own: the generated promo image at
  ~/workspace/makefun/postx/media-generation-x-promote-photo-0-3ca23afa-f90b-4381-89d5-980ada788eda.jpg
  (navy background, golden trophy, “Make Your Own Bounty” + “make.fun”).
- Play code in the text: `makefun-ruby-dome-tortilla` (code 0; code 1 is
  `makefun-wreath-rattan-island`).

Rules that must hold: the post quotes or links make.fun's post (a reply or a
plain repost is no entry); it carries a photo of its own (video-only, GIF-only
or a link card alone is refused); its text carries make.fun (link or written
out) and/or @makefunai plus one play code; one post per entrant, never buy or
bot engagement, never repost/quote/reply to your own post. Keep the post up
and the account public until the results are out.

## This repository

- `POST.json` — the post's address, `{"url": "https://x.com/<handle>/status/<id>"}`.
  **Still the placeholder.** Fill it with the real post's address (X Share →
  Copy link) once the post is up, then submit.
- `main.ts` — Node 22, standard library only. Copies POST.json from the repo
  to /output/POST.json (validates it is a JSON object with a string `url`
  first, writes the output mode 0644). That is all the program does; the house
  reads the post and its counts itself.
- `.makefun/owner.json` — the payout wallet on the make.fun account.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Before submitting

1. Post on X (from ALKiZ's own device — the cloud browser is blocked by X
   with HTTP 403; Momo cannot log in or post from here).
2. Put the real post URL into POST.json and commit.
3. Run the kit check from the kit directory, then submit the commit with the
   bundle of the sessions that wrote this repository (the parent agent
   bundles, since this build ran as a subagent session).

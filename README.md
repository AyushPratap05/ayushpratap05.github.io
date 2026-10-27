# PM portfolio

## Files to replace (keep the same names)
- `assets/photo.jpg`: your photo
- `assets/resume.pdf`: your resume
- `assets/certificates/certificate-1.pdf` to `certificate-3.pdf`: your certificates
- `data/site.json`: LinkedIn link, certificate names, and your skills
- `case-studies/echoshield/case.md`: the `[bracketed]` parts

A static site. No build step. Push to GitHub and it updates.

## Where to edit
- `data/site.json`: name, intro, about, status line, highlights, experience, certificates, links, and `skills`. The skills list shows on the brain and as chips.
- `case-studies/index.json`: the case study cards. The first one is featured.
- `case-studies/<name>/case.md`: the full text of each case study.
- `assets/photo.jpg`: your photo (square or portrait). It shows as the round picture by your name.
- `assets/resume.pdf`: your resume.

## Case study with problem and solution view
The refund window case study uses the split layout (problem on the left, phone on the right). It is driven by the `story` block in `case-studies/index.json`: edit the problems, solutions and intro text there. The phone prototype lives in `prototype.js`.

## Add a case study
1. Make a folder `case-studies/your-slug/` with a `case.md` (copy another one).
2. Put the deck in it as a PDF (export from PowerPoint), for example `deck.pdf`.
3. Add an entry in `case-studies/index.json`. Set `"deck": "case-studies/your-slug/deck.pdf"` and `"image": "case-studies/your-slug/cover.png"`.

## Concept images
Generate one image per case study (16:9), save it as `cover.png` in the case study folder, and set `"image"` in `index.json`. Cards without an image show no image box.

## Certificates
Three slots are ready. For each one:
1. Replace the PDF with your own, keeping the same file name: `assets/certificates/certificate-1.pdf`, `certificate-2.pdf`, `certificate-3.pdf`.
2. In `data/site.json`, change the `name`, `issuer` and `year` of that certificate.
Need more? Copy one block in the `certificates` list, give it a new `url` like `assets/certificates/certificate-4.pdf`, and add that PDF.
Delete any slot you don't use (the block in `site.json` and its PDF) before you publish. You can also point `url` to an online verification link.

## Contact form
Until you connect it, the form opens the visitor's email app with the message filled in.
To get messages straight to your inbox (free):
1. Make an account at formspree.io and create a new form with your email.
2. Copy the form address (it looks like https://formspree.io/f/abcdwxyz).
3. Paste it into `formEndpoint` in `data/site.json`.

## Preview on your computer
Run `python -m http.server 8000` in this folder, then open http://localhost:8000
(Opening index.html directly will not load the data.) In VS Code you can use the Live Server extension instead.

## Publish (free)
GitHub Pages: push to a repo, then Settings > Pages > deploy from the main branch.
Vercel or Netlify: import the repo and deploy with the default settings.
Every push to main updates the site in about a minute.

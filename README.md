# Italiano con Freddy ❤️

A tiny installable Italian-learning web app made for your girlfriend.

## Features
- Mobile-first design
- Italian speech playback using the phone/browser's Italian voice
- Basics, love, cafe and everyday phrase packs
- Mini conversation quizzes
- Daily speaking mission
- Local progress + streak saving
- Installable PWA / home-screen app
- Offline caching after the first visit

## Fast GitHub Pages deployment from Termux

```bash
pkg update -y
pkg install git -y
termux-setup-storage
cd ~/storage/downloads
unzip italiano-con-freddy.zip
cd italiano-con-freddy

git init
git add .
git commit -m "Launch Italiano con Freddy"
git branch -M main
git remote add origin https://github.com/freddy1989/italiano-con-freddy.git
git push -u origin main
```

Then on GitHub:
1. Open the repository.
2. Settings -> Pages.
3. Under Build and deployment choose **Deploy from a branch**.
4. Branch: **main**, folder: **/(root)**.
5. Save.

GitHub will give you a public link such as:
`https://freddy1989.github.io/italiano-con-freddy/`

Send that link to her. On Android/Chrome she can use **Add to Home screen / Install app**.

## Notes
- Speech uses `speechSynthesis`, so the exact Italian voice depends on the phone/browser.
- Progress is stored only on her device using localStorage.

#!/data/data/com.termux/files/usr/bin/bash
set -e

echo "❤️ Updating Italiano con Shazzy V3.1 icon..."

if [ ! -d .git ]; then
  echo "This folder is not your existing Git repository."
  echo "Open the original italiano-con-freddy folder and run this script there."
  exit 1
fi

git add .
if git diff --cached --quiet; then
  echo "Nothing new to commit."
else
  git commit -m "feat: Shazzy V3.1 app icon refresh"
  git push origin main
fi

echo "✅ Shazzy V3.1 icon pushed to GitHub."
echo "GitHub Pages should refresh automatically in a minute or two."
echo "Open: https://freddy1989.github.io/italiano-con-freddy/?v=31"

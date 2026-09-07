#!/data/data/com.termux/files/usr/bin/bash
set -e

echo "❤️ Updating Italiano con Shazzy..."

if [ ! -d .git ]; then
  echo "This folder is not your existing Git repository."
  echo "Open the original italiano-con-freddy folder and run this script there."
  exit 1
fi

git add .
if git diff --cached --quiet; then
  echo "Nothing new to commit."
else
  git commit -m "feat: personalize Italian app for Shazzy"
  git push origin main
fi

echo "✅ Shazzy V2 pushed to GitHub."
echo "GitHub Pages should refresh automatically in a minute or two."

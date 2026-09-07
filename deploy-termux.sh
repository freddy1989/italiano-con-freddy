#!/data/data/com.termux/files/usr/bin/bash
set -e

REPO="italiano-con-freddy"
OWNER="freddy1989"

echo "🇮🇹 Deploying Italiano con Freddy..."

command -v git >/dev/null || pkg install git -y
command -v gh >/dev/null || pkg install gh -y

if ! gh auth status >/dev/null 2>&1; then
  echo
  echo "GitHub login is needed once. Follow the prompts:"
  gh auth login
fi

if [ ! -d .git ]; then
  git init
fi

git add .
if ! git diff --cached --quiet; then
  git commit -m "Launch Italiano con Freddy"
fi

git branch -M main

if ! gh repo view "$OWNER/$REPO" >/dev/null 2>&1; then
  gh repo create "$OWNER/$REPO" --public --source=. --remote=origin --push
else
  if ! git remote get-url origin >/dev/null 2>&1; then
    git remote add origin "https://github.com/$OWNER/$REPO.git"
  fi
  git push -u origin main
fi

echo
echo "✅ Code pushed to GitHub."
echo "Now enable GitHub Pages once at:"
echo "https://github.com/$OWNER/$REPO/settings/pages"
echo "Choose: Deploy from a branch → main → /(root) → Save"
echo
echo "Her link will be:"
echo "https://$OWNER.github.io/$REPO/"

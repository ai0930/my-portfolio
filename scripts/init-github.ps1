# GitHub リポジトリ作成 & 初回 push（PowerShell）
# 事前: https://cli.github.com/ を入れて `gh auth login` 済みであること

$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $Root

Write-Host "==> プロジェクト: $Root"

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
  Write-Host "GitHub CLI (gh) がありません。https://cli.github.com/ からインストールしてください。"
  exit 1
}

gh auth status 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) {
  Write-Host "先に GitHub にログイン: gh auth login"
  exit 1
}

if (-not (Test-Path .git)) {
  git init -b main
}

$hasCommit = git rev-parse HEAD 2>$null
if (-not $hasCommit) {
  git add -A
  git status
  git commit -m "Initial commit: cute portfolio scaffold"
}

$remotes = git remote 2>$null
if ($remotes -notcontains "origin") {
  Write-Host "==> GitHub にリポジトリを作成して push します（公開）"
  gh repo create my-portfolio --public --source=. --remote=origin --push --description "就活用ポートフォリオ (Next.js)"
} else {
  Write-Host "origin は既にあります。push のみ実行します。"
  git push -u origin main
}

Write-Host ""
Write-Host "完了。ブラウザでリポジトリを開く:"
gh repo view --web

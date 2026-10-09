# my-portfolio

パステルでかわいい就活向けポートフォリオ（Next.js + Tailwind CSS）。

## セットアップ

```bash
cd C:\Users\togoa\Projects\my-portfolio
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

## 内容の差し替え

`src/data/site.ts` に名前・自己紹介・作品・YouTube 動画 ID・連絡先をまとめてあります。ここを編集するだけでサイト全体が更新されます。

## 構成

- **Hero** — 自己紹介・メインビジュアル
- **About** — プログラミングサークル / 軽音楽部
- **Works** — 制作物
- **Music** — YouTube 埋め込み
- **Contact** — メール・GitHub

## GitHub と連携して開発する

### 1. Cursor で GitHub にサインイン

1. Cursor 左下の **アカウント** → **Sign in to GitHub**
2. このフォルダを Cursor で開く: `C:\Users\togoa\Projects\my-portfolio`
3. 左サイドバー **Source Control**（枝マーク）で変更をコミット

### 2. リポジトリを GitHub に作る（初回だけ）

[GitHub CLI](https://cli.github.com/) を入れたうえで、PowerShell から:

```powershell
cd C:\Users\togoa\Projects\my-portfolio
gh auth login
.\scripts\init-github.ps1
```

名前を変えたい場合は `init-github.ps1` 内の `my-portfolio` を編集するか、手動で:

```powershell
git init -b main
git add -A
git commit -m "Initial commit: cute portfolio scaffold"
gh repo create 好きな名前 --public --source=. --remote=origin --push
```

### 3. 日常の開発（草を生やす）

GitHub の **Contribution graph（草）** に載るには、次が必要です。

| 条件 | 内容 |
|------|------|
| コミットの作者 | GitHub に登録したメールと一致（または `username@users.noreply.github.com`） |
| リポジトリ | 公開、または非公開でも「Private contributions」をプロフィール設定で ON |
| ブランチ | 通常は `main` への push / マージされた PR |

**おすすめの進め方**

- 機能ごとに小さくコミット（例: `feat: ヒーロー文言更新`, `fix: モバイル余白`）
- `main` に直接 push しても草になります。PR 派なら `feature/xxx` → PR → merge でも OK
- ポートフォリオ更新のたびに push すれば、就活時期にグラフが自然に厚くなります

メールが GitHub と一致しているか確認:

```powershell
git log -1 --format="%ae"
# GitHub → Settings → Emails と同じか、noreply アドレスを使う
```

※ コミットメールの変更は **ご自身で** `git config user.email` を設定してください（この README では config は触りません）。

### 4. CI

`main` への push / PR で GitHub Actions が `npm ci` → `npm run build` を実行します（`.github/workflows/ci.yml`）。

## デプロイ

GitHub 連携後、[Vercel](https://vercel.com/) で **Import Git Repository** → `my-portfolio` を選ぶと、push のたびに自動デプロイできます。

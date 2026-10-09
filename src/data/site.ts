/** ここを書き換えて自分の情報に差し替えてください */

export const profile = {
  name: "Your Name",
  nameJa: "あなたの名前",
  tagline: "Code & Music",
  subtitle: "プログラミングサークル × 軽音楽部",
  bio: "プログラミングでものづくりを、音楽で表現を。サークルと部活動を通じて学んだことを、就活に活かしたいと考えています。",
  email: "your.email@example.com",
  github: "https://github.com/your-username",
};

export const navItems = [
  { href: "#hero", label: "Top" },
  { href: "#about", label: "About" },
  { href: "#works", label: "Works" },
  { href: "#music", label: "Music" },
  { href: "#contact", label: "Contact" },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "サークル作品（例）",
    description:
      "ハッカソンや勉強会で制作したWebアプリの概要をここに書きます。",
    tags: ["Next.js", "TypeScript"],
    link: "#",
    repo: "#",
  },
  {
    title: "個人開発（例）",
    description: "課題解決のために作ったツールやゲームなど。",
    tags: ["React", "Node.js"],
    repo: "#",
  },
];

export type MusicVideo = {
  title: string;
  event: string;
  youtubeId: string;
};

export const musicVideos: MusicVideo[] = [
  {
    title: "ライブ演奏（例）",
    event: "軽音楽部 学園祭",
    youtubeId: "dQw4w9WgXcQ",
  },
];

export const activities = [
  {
    emoji: "💻",
    title: "プログラミングサークル",
    body: "チーム開発、勉強会、ハッカソンなどに参加。設計から実装まで経験。",
  },
  {
    emoji: "🎸",
    title: "軽音楽部",
    body: "バンド活動・ライブ出演。継続的な練習と本番でのパフォーマンス。",
  },
];

/** ここを書き換えて自分の情報に差し替えてください */

export const profile = {
  name: "Ai Togo",
  nameJa: "東郷愛",
  tagline: "Programming & Music",
  subtitle: "プログラミングサークル × 軽音楽部",
  bio: "プログラミングでものづくりを、音楽で表現を。サークルと部活動を通じて学んだことを、就活に活かしたいと考えています。",
  email: "togoai0930@icloud.com",
  github: "https://github.com/ai0930",
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
    title: "DrivePay",
    description:
      "ドライブに起きる高速代やガソリン代を自動で計算し、メンバー間で割り勘できるアプリ。",
    tags: ["Next.js", "TypeScript"],
    link: "#",
    repo: "https://github.com/momomomomo0903/DrivePay",
  },
  {
    title: "交換日記",
    description: "平成女児ブームの今の時代に合わせた、交換日記アプリ。",
    tags: ["React", "Node.js"],
    repo: "https://github.com/ai0930/exchange-note",
  },
];

export type MusicVideo = {
  title: string;
  event: string;
  youtubeId: string;
};

export const musicVideos: MusicVideo[] = [
  {
    title: "あいゼミ",
    event: "軽音楽部 2026年度演奏会",
    youtubeId: "https://youtu.be/GJmWSDRpkeE?si=Cdc62i823pqgenAH",
  },
];

export const activities = [
  {
    title: "PeachTech（プログラミングサークル）",
    body: "チーム開発、勉強会、ハッカソンなどに参加。設計から実装まで経験。",
  },
  {
    title: "軽音楽部",
    body: "バンド活動・ライブ出演。継続的な練習と本番でのパフォーマンス。",
  },
];

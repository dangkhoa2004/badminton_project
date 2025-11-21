import { FaRocket, FaShieldAlt, FaBolt } from "react-icons/fa";

export interface Product {
  id: number;
  name: string;
  tagline: string;
  price: string;
  oldPrice: string;
  rating: number;
  sold: number;
  image: string;
  link: string;
}

export interface TechFeature {
  icon: any;
  title: string;
  desc: string;
}

export interface FrameDetail {
  title: string;
  desc: string;
  image: string;
  reverse: boolean;
}

export interface Spec {
  spec: string;
  value: string;
}

export const featuredProduct: Product = {
  id: 201,
  name: "Vợt LINING Axforce 90 Max (Dragon)",
  tagline: "Sức mạnh tối thượng. Tăng cường tốc độ. Khẳng định vị thế người dẫn đầu trên sân đấu.",
  price: "6.800.000 ₫",
  oldPrice: "7.500.000 ₫",
  rating: 4.9,
  sold: 128,
  image: "/lining-axforce-90-xanh-dragon-max.png",
  link: "/order/axforce-90-max",
};

export const techFeatures: TechFeature[] = [
  { icon: FaRocket, title: "Carbon Fiber Gen X", desc: "Giảm lực cản không khí 6.2%, tăng tốc độ và sự linh hoạt vượt trội." },
  { icon: FaShieldAlt, title: "V-Energy Stabilizer", desc: "Ổn định khung vợt khi smash, giảm xoắn tối đa." },
  { icon: FaBolt, title: "Trục 6.6mm Ultra Slim", desc: "Phản hồi nhanh, kiểm soát chính xác từng cú đánh." },
];

export const frameDetails: FrameDetail[] = [
  { title: "Thiết kế Khung Vô Song (Dynamic Frame)", desc: "Phân bổ trọng lượng tối ưu tại đỉnh khung, giúp tăng cường lực đập và độ bền chịu lực tuyệt đối.", image: "/lining-axforce-90-xanh-dragon-max-2.png", reverse: false },
  { title: "Cán cầm Power Handle (Tăng Độ Bám)", desc: "Vật liệu Polymer cao cấp giảm rung động, tăng độ bám và kiểm soát tối đa.", image: "/lining-axforce-90-xanh-dragon-max-3.webp", reverse: true },
];

export const fullSpecs: Spec[] = [
  { spec: "Chất liệu Khung", value: "High Modulus Carbon Fiber" },
  { spec: "Trọng lượng", value: "3U / 4U" },
  { spec: "Độ cứng", value: "Extra Stiff" },
  { spec: "Điểm cân bằng", value: "305mm" },
  { spec: "Lực căng tối đa", value: "32 LBS" },
];

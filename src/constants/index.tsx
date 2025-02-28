import special_1 from "@/assets/images/special-1.png";
import special_2 from "@/assets/images/special-2.png";
import special_3 from "@/assets/images/special-3.png";

export const navbarItems = [
  { label: "Features", hash: "features" },
  { label: "How it works", hash: "howitworks" },
  { label: "Why Simp Gift", hash: "whySimpGift" },
  { label: "Spotlight", hash: "spotlight" },
  { label: "FAQ", hash: "faq" },
] as const;

export const stepsItems = [
  {
    src: "",
    title: "Stay Anonymous & Secure.",
    description: "Receive gifts without ever sharing your personal details.",
  },
  {
    src: "",
    title: "Instant Setup.",
    description:
      "Create your wishlist, share the link, and start receiving gifts today.",
  },
  {
    src: "",
    title: "Easy Gift Adding.",
    description:
      "Copy and paste any product link from any store to build your wishlist in seconds.",
  },
  {
    src: "",
    title: "Smart Gift Suggestions.",
    description: "Get personalized recommendations based on what you love.",
  },
  {
    src: "",
    title: "Crowdfund Together.",
    description:
      "Let multiple fans pitch in to make your dream gifts a reality.",
  },
  {
    src: "",
    title: "Custom Simp Link.",
    description:
      "Share a link in your bio to direct supporters to your wishlist.",
  },
] as const;

export const howItWorksItems = [
  {
    src: "",
    title: "create",
    description: "Signing up is fast, free, and secure.",
  },
  {
    src: "",
    title: "add",
    description:
      "Add items from any store or in person services by copy and paste links to add to your wishlist.",
  },
  {
    src: "",
    title: "share",
    description:
      "Spread the word by sharing your wishlist link anywhere — social media, streams, or in your bio.",
  },
  {
    src: "",
    title: "receive",
    description:
      "Fans will pick and purchase items directly from your wishlist. The gifts will arrive directly to your doorsteps without ever revealing your home address.",
  },
  {
    src: "",
    title: "say thanks!",
    description:
      "Unbox, share the excitement, and dont forget to say Thank you!",
  },
] as const;

export const whySimpGiftItems = [
  {
    src: special_1,
    title: "Simple and Intuitive",
    description:
      "Just copy a link, add your favorite gifts, and share your wishlist. Your fans do the rest.",
  },
  {
    src: special_2,
    title: "Always Free",
    description:
      "No hidden fees or charges for creators. Free to create, free to receive, free for creators. Always.",
  },
  {
    src: special_3,
    title: "Global Gifting",
    description:
      "Receive gifts from your supporters no matter where they are. We support payments from 89 countries in 89 currencies.",
  },
] as const;

export const faqItems = [
  {
    question: "What is Simp Gifts?",
    answer:
      "We are a platform that helps show support and appreciation by fans to their favorites, by crowdfunding gifts.",
  },
  {
    question: "How does it work?",
    answer:
      "Once you’ve created a wishlist. You can add any items from anywhere online by copying and pasting the items URL link. then share your wishlist to your community through your social media accounts. Once your community has browsed and bought you a gift. Simp Gifts will manage the ordering and ensuring your gift arrives safely to your door step!",
  },
  {
    question: "Is there a fee to sign up as a supporter?",
    answer:
      "Signing up is completely free! You’ll pay only for gifts fot influencer of your choice.",
  },
  {
    question: "How do creators get their gifts?",
    answer: "Got Questions? We’ve Got Answers!",
  },
  {
    question: "Do you share my personal information?",
    answer:
      "Absolutely not! We do not share any of yours or your fans personal information to anyone! You can be sure that all of your information is safe and protected!",
  },
  {
    question: "How do you make money?",
    answer:
      "We rely on tips from your community when they purchase a gift to keep us operational to continue providing you these great services!",
  },
  {
    question: "Why would my community buy me gifts?",
    answer:
      "Gifting has been a natural human behavior since the beginning of time! Humas have been giving gifts to the people we love to show them our appreciation for them! Now Simp Gifts is help you facilitate this for your growing community! Nothing says I love you more then a gift!",
  },
] as const;

export const footerLinks = [
  {
    title: "Links",
    linkList: [
      { label: "About Simp Gifts", href: "" },
      { label: "Receive Gifts", href: "" },
      { label: "Privacy Policy", href: "" },
      { label: "Terms of Service", href: "" },
    ],
  },
  {
    title: "Socials",
    linkList: [
      { label: "X (twitter)", href: "" },
      { label: "Instagram", href: "" },
    ],
  },
] as const;

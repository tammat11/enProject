"use strict";

const path = require("path");
const PptxGenJS = require("/Users/tammat/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/pptxgenjs");
const {
  imageSizingCrop,
  imageSizingContain,
} = require("./pptxgenjs_helpers/image");
const {
  warnIfSlideHasOverlaps,
  warnIfSlideElementsOutOfBounds,
} = require("./pptxgenjs_helpers/layout");

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "OpenAI Codex";
pptx.company = "Meoowl Store";
pptx.subject = "Project presentation for Meoowl Store";
pptx.title = "Meoowl Store Presentation";
pptx.lang = "en-US";
pptx.theme = {
  headFontFace: "Georgia",
  bodyFontFace: "Aptos",
  lang: "en-US",
};

const C = {
  bg: "F6EBDD",
  bg2: "FFF8F1",
  ink: "2D1D16",
  muted: "6A5448",
  line: "D9C1AF",
  accent: "7F4D36",
  accentDark: "583525",
  accentSoft: "E6CFBF",
  white: "FFFDF9",
  green: "6E8C6C",
};

const deckDir = __dirname;
const shotsDir = path.join(deckDir, "..", "screenshots");
const homeShot = path.join(shotsDir, "home-viewport.png");
const catalogShot = path.join(shotsDir, "catalog-view.png");
const modalShot = path.join(shotsDir, "product-modal.png");

function addBackground(slide) {
  slide.background = { color: C.bg };
  slide.addShape(pptx.ShapeType.rect, {
    x: 0.18,
    y: 0.18,
    w: 12.97,
    h: 6.95,
    line: { color: C.line, pt: 1 },
    radius: 0.18,
    fill: { color: C.bg2 },
  });
}

function addTopLabel(slide, label) {
  slide.addText(label, {
    x: 0.55,
    y: 0.36,
    w: 2.2,
    h: 0.3,
    fontFace: "Aptos",
    fontSize: 10,
    bold: true,
    color: C.accent,
    charSpace: 1.5,
    margin: 0,
  });
}

function addTitle(slide, title, subtitle) {
  slide.addText(title, {
    x: 0.55,
    y: 0.68,
    w: 6.1,
    h: 0.9,
    fontFace: "Georgia",
    fontSize: 24,
    bold: false,
    color: C.ink,
    margin: 0,
    breakLine: false,
    valign: "mid",
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.55,
      y: 1.72,
      w: 5.9,
      h: 0.52,
      fontFace: "Aptos",
      fontSize: 11.5,
      color: C.muted,
      margin: 0,
      valign: "mid",
    });
  }
}

function addBulletList(slide, items, x, y, w, h, fontSize = 16) {
  const runs = [];
  items.forEach((item) => {
    runs.push({
      text: item,
      options: {
        bullet: { indent: 14 },
        breakLine: true,
      },
    });
  });
  slide.addText(runs, {
    x,
    y,
    w,
    h,
    fontFace: "Aptos",
    fontSize,
    color: C.ink,
    margin: 0,
    breakLine: false,
    paraSpaceAfterPt: 10,
    valign: "top",
  });
}

function addStatCard(slide, x, y, w, h, title, text) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x,
    y,
    w,
    h,
    rectRadius: 0.12,
    line: { color: C.line, pt: 1 },
    fill: { color: C.white },
  });
  slide.addText(title, {
    x: x + 0.18,
    y: y + 0.16,
    w: w - 0.36,
    h: 0.25,
    fontFace: "Aptos",
    fontSize: 11,
    bold: true,
    color: C.accent,
    margin: 0,
  });
  slide.addText(text, {
    x: x + 0.18,
    y: y + 0.46,
    w: w - 0.36,
    h: h - 0.56,
    fontFace: "Aptos",
    fontSize: 11.5,
    color: C.ink,
    margin: 0,
    valign: "top",
  });
}

function addFooter(slide, text = "Meoowl Store | Project presentation") {
  slide.addText(text, {
    x: 0.6,
    y: 6.74,
    w: 4.4,
    h: 0.18,
    fontFace: "Aptos",
    fontSize: 8.5,
    color: C.muted,
    margin: 0,
  });
}

function finishSlide(slide) {
  warnIfSlideHasOverlaps(slide, pptx);
  warnIfSlideElementsOutOfBounds(slide, pptx);
}

// Slide 1
{
  const slide = pptx.addSlide();
  addBackground(slide);
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.48,
    y: 0.46,
    w: 6.0,
    h: 5.96,
    rectRadius: 0.18,
    line: { color: C.line, pt: 1 },
    fill: { color: "F9F1E8" },
  });
  slide.addText("PROJECT PRESENTATION", {
    x: 0.76,
    y: 0.78,
    w: 2.2,
    h: 0.24,
    fontFace: "Aptos",
    fontSize: 10,
    bold: true,
    color: C.accent,
    charSpace: 1.8,
    margin: 0,
  });
  slide.addText("Meoowl Store", {
    x: 0.74,
    y: 1.12,
    w: 4.7,
    h: 0.75,
    fontFace: "Georgia",
    fontSize: 25,
    color: C.ink,
    margin: 0,
  });
  slide.addText("Modern Clothing Shop", {
    x: 0.74,
    y: 1.82,
    w: 3.8,
    h: 0.36,
    fontFace: "Aptos",
    fontSize: 18,
    bold: true,
    color: C.accentDark,
    margin: 0,
  });
  slide.addText(
    "An online fashion catalog created to help young people find stylish, comfortable, and affordable clothes in one simple digital space.",
    {
      x: 0.74,
      y: 2.34,
      w: 4.92,
      h: 1.0,
      fontFace: "Aptos",
      fontSize: 13,
      color: C.muted,
      margin: 0,
    }
  );
  addStatCard(slide, 0.74, 3.7, 1.52, 0.96, "Students", "Primary audience");
  addStatCard(slide, 2.42, 3.7, 1.52, 0.96, "Safe pay", "Visa, Mastercard, AmEx");
  addStatCard(slide, 4.1, 3.7, 1.52, 0.96, "Responsive", "Phone and desktop ready");
  slide.addText("Prepared by Bekzat Arailym and Balazhanov Ansar", {
    x: 0.74,
    y: 5.22,
    w: 4.7,
    h: 0.24,
    fontFace: "Aptos",
    fontSize: 11.5,
    color: C.accentDark,
    margin: 0,
  });
  slide.addImage({
    path: homeShot,
    x: 6.72,
    y: 1.84,
    w: 5.48,
    h: 3.08,
  });
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 10.5,
    y: 5.88,
    w: 1.35,
    h: 0.34,
    rectRadius: 0.08,
    line: { color: "FFFFFF", pt: 1 },
    fill: { color: C.accentDark, transparency: 6 },
  });
  slide.addText("Website screenshot", {
    x: 10.66,
    y: 5.96,
    w: 1.05,
    h: 0.12,
    fontFace: "Aptos",
    fontSize: 8.5,
    color: C.white,
    bold: true,
    margin: 0,
  });
  addFooter(slide);
  finishSlide(slide);
}

// Slide 2
{
  const slide = pptx.addSlide();
  addBackground(slide);
  addTopLabel(slide, "PROJECT IDEA");
  addTitle(
    slide,
    "Problem and solution",
    "The project started from a simple observation in the PDF brief: modern clothing is often expensive, scattered across many shops, or takes too much time to find."
  );
  addStatCard(
    slide,
    0.56,
    2.42,
    3.88,
    1.32,
    "Problem",
    "Young people want trendy clothing, but shopping offline can be slow, inconvenient, and too expensive."
  );
  addStatCard(
    slide,
    4.58,
    2.42,
    3.88,
    1.32,
    "Solution",
    "Meoowl Store places affordable, stylish, and comfortable items in one fast online catalog."
  );
  addStatCard(
    slide,
    8.6,
    2.42,
    3.28,
    1.32,
    "Value",
    "Customers can browse quickly, order online, and receive delivery at home."
  );
  addBulletList(
    slide,
    [
      "Focus on students and busy people who need speed and clarity.",
      "Inspired by social media fashion trends but adapted for a simple shopping flow.",
      "Built around warm colors, easy navigation, and secure payment options.",
    ],
    0.7,
    4.18,
    5.48,
    1.65,
    15
  );
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 6.58,
    y: 4.05,
    w: 5.02,
    h: 1.88,
    rectRadius: 0.12,
    line: { color: C.line, pt: 1 },
    fill: { color: C.accentSoft },
  });
  slide.addText("Objective from the brief", {
    x: 6.84,
    y: 4.28,
    w: 1.8,
    h: 0.22,
    fontFace: "Aptos",
    fontSize: 11,
    bold: true,
    color: C.accentDark,
    margin: 0,
  });
  slide.addText(
    "To help young people buy modern, stylish, and comfortable clothes easily through a simple and fast online store.",
    {
      x: 6.84,
      y: 4.62,
      w: 4.32,
      h: 0.9,
      fontFace: "Georgia",
      fontSize: 19,
      color: C.ink,
      margin: 0,
    }
  );
  addFooter(slide);
  finishSlide(slide);
}

// Slide 3
{
  const slide = pptx.addSlide();
  addBackground(slide);
  addTopLabel(slide, "SERVICE DESCRIPTION");
  addTitle(
    slide,
    "What Meoowl Store offers",
    "The online store is positioned as a modern clothing website with a cozy beige-and-brown identity and a clean, easy-to-understand layout."
  );
  addBulletList(
    slide,
    [
      "Online catalog for university life, daily wear, and casual events.",
      "Product cards include image, short description, sizes, and price.",
      "Shopping flow is designed to feel fast on both phone and computer.",
      "Protected payment methods and quick delivery increase trust and convenience.",
    ],
    0.72,
    2.16,
    4.9,
    1.9,
    15
  );
  addStatCard(slide, 0.72, 4.82, 2.44, 0.98, "Categories", "Hoodies, jeans,\nt-shirts, accessories");
  addStatCard(slide, 3.34, 4.82, 2.44, 0.98, "Experience", "Simple search,\nfilters, product modal");
  addStatCard(slide, 5.96, 4.82, 2.44, 0.98, "Audience", "Students and young\nfashion shoppers");
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 8.75,
    y: 2.2,
    w: 3.2,
    h: 3.6,
    rectRadius: 0.12,
    line: { color: C.line, pt: 1 },
    fill: { color: C.white },
  });
  slide.addText("Why it is special", {
    x: 9.02,
    y: 2.48,
    w: 2.0,
    h: 0.2,
    fontFace: "Aptos",
    fontSize: 11,
    bold: true,
    color: C.accent,
    margin: 0,
  });
  slide.addText(
    "The concept combines trend awareness with comfort and affordability. Instead of a crowded marketplace feel, the interface stays calm, warm, and direct.",
    {
      x: 9.02,
      y: 2.84,
      w: 2.66,
      h: 1.36,
      fontFace: "Georgia",
      fontSize: 16.5,
      color: C.ink,
      margin: 0,
    }
  );
  slide.addText(
    "After the website update, the final catalog focuses on four active categories to keep the product offer cleaner and more coherent.",
    {
      x: 9.02,
      y: 4.5,
      w: 2.66,
      h: 0.78,
      fontFace: "Aptos",
      fontSize: 11.5,
      color: C.muted,
      margin: 0,
    }
  );
  addFooter(slide);
  finishSlide(slide);
}

// Slide 4
{
  const slide = pptx.addSlide();
  addBackground(slide);
  addTopLabel(slide, "WEBSITE SHOWCASE");
  addTitle(
    slide,
    "Homepage and catalog interface",
    "Screenshots from the finished website demonstrate the visual direction, structure, and the live catalog section."
  );
  slide.addImage({
    path: homeShot,
    x: 0.62,
    y: 2.45,
    w: 5.88,
    h: 3.31,
  });
  slide.addImage({
    path: catalogShot,
    x: 6.76,
    y: 2.53,
    w: 5.58,
    h: 3.14,
  });
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.88,
    y: 5.72,
    w: 2.15,
    h: 0.32,
    rectRadius: 0.08,
    line: { color: "FFFFFF", pt: 1 },
    fill: { color: C.accentDark, transparency: 10 },
  });
  slide.addText("Hero and value proposition", {
    x: 1.08,
    y: 5.8,
    w: 1.82,
    h: 0.12,
    fontFace: "Aptos",
    fontSize: 8.8,
    color: C.white,
    bold: true,
    margin: 0,
  });
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 8.72,
    y: 5.72,
    w: 2.05,
    h: 0.32,
    rectRadius: 0.08,
    line: { color: "FFFFFF", pt: 1 },
    fill: { color: C.accentDark, transparency: 10 },
  });
  slide.addText("Catalog filters and products", {
    x: 8.92,
    y: 5.8,
    w: 1.7,
    h: 0.12,
    fontFace: "Aptos",
    fontSize: 8.8,
    color: C.white,
    bold: true,
    margin: 0,
  });
  addFooter(slide);
  finishSlide(slide);
}

// Slide 5
{
  const slide = pptx.addSlide();
  addBackground(slide);
  addTopLabel(slide, "PRODUCT EXPERIENCE");
  addTitle(
    slide,
    "Interactive product card",
    "The final website does not stop at static cards. Users can open a detailed product view, choose size, change quantity, and add items to the bag."
  );
  slide.addImage({
    path: modalShot,
    x: 0.72,
    y: 2.16,
    w: 6.74,
    h: 3.79,
  });
  addStatCard(slide, 8.0, 2.18, 3.6, 0.9, "Details view", "Large image, price, old price, material, fit, delivery");
  addStatCard(slide, 8.0, 3.22, 3.6, 0.9, "Shopping actions", "Size buttons, quantity control, bag update, related products");
  addStatCard(slide, 8.0, 4.26, 3.6, 0.9, "Design goal", "Keep shopping easy, fast, and understandable for young users");
  slide.addText(
    "This part of the implementation transforms the project from a simple poster-like website into a more realistic mini online store prototype.",
    {
      x: 8.04,
      y: 5.42,
      w: 3.5,
      h: 0.56,
      fontFace: "Aptos",
      fontSize: 11.5,
      color: C.muted,
      margin: 0,
    }
  );
  addFooter(slide);
  finishSlide(slide);
}

// Slide 6
{
  const slide = pptx.addSlide();
  addBackground(slide);
  addTopLabel(slide, "CUSTOMER BENEFITS");
  addTitle(
    slide,
    "Why customers would choose this store",
    "The project combines style, convenience, and trust. These are the main benefits highlighted in the brief and demonstrated on the website."
  );
  const benefits = [
    ["Easy navigation", "Clear categories and a simple layout reduce browsing time."],
    ["Affordable fashion", "Products are positioned as stylish but accessible in price."],
    ["Secure payment", "Visa, Mastercard, AmEx, and other popular methods are supported."],
    ["Fast delivery", "Customers can order online and receive products at home."],
    ["Responsive design", "The catalog works on desktop and phone without layout issues."],
    ["Trend inspiration", "The visual direction takes cues from current social media fashion."],
  ];
  benefits.forEach((item, idx) => {
    const col = idx % 3;
    const row = Math.floor(idx / 3);
    addStatCard(slide, 0.68 + col * 4.07, 2.38 + row * 1.74, 3.72, 1.4, item[0], item[1]);
  });
  slide.addText("Business message", {
    x: 0.7,
    y: 5.88,
    w: 1.4,
    h: 0.18,
    fontFace: "Aptos",
    fontSize: 10.5,
    color: C.accent,
    bold: true,
    margin: 0,
  });
  slide.addText(
    "Good clothing does not have to be expensive. Meoowl Store is presented as a practical match for customers who want modern fashion without spending too much.",
    {
      x: 0.7,
      y: 6.12,
      w: 8.6,
      h: 0.4,
      fontFace: "Georgia",
      fontSize: 15.5,
      color: C.ink,
      margin: 0,
    }
  );
  addFooter(slide);
  finishSlide(slide);
}

// Slide 7
{
  const slide = pptx.addSlide();
  addBackground(slide);
  slide.addShape(pptx.ShapeType.roundRect, {
    x: 0.62,
    y: 0.7,
    w: 11.1,
    h: 5.9,
    rectRadius: 0.18,
    line: { color: C.line, pt: 1 },
    fill: { color: C.accentDark },
  });
  slide.addText("Conclusion", {
    x: 0.96,
    y: 1.04,
    w: 1.4,
    h: 0.28,
    fontFace: "Aptos",
    fontSize: 11,
    bold: true,
    color: "E6CFBF",
    charSpace: 1.5,
    margin: 0,
  });
  slide.addText("Meoowl Store turns a simple idea into a clear digital shopping concept.", {
    x: 0.96,
    y: 1.48,
    w: 5.85,
    h: 1.04,
    fontFace: "Georgia",
    fontSize: 24,
    color: C.white,
    margin: 0,
  });
  slide.addText(
    "Based on the project brief and the finished website, the store offers a believable fashion catalog prototype with:\n• a warm and modern visual identity\n• quick product discovery\n• secure payment messaging\n• interactive product details\n• a user-friendly shopping flow",
    {
      x: 0.98,
      y: 2.72,
      w: 5.8,
      h: 2.0,
      fontFace: "Aptos",
      fontSize: 15,
      color: "F7EEE5",
      margin: 0,
      breakLine: false,
    }
  );
  slide.addShape(pptx.ShapeType.line, {
    x: 6.9,
    y: 1.62,
    w: 0,
    h: 3.96,
    line: { color: "B98E75", pt: 1.5 },
  });
  slide.addText("Final message", {
    x: 7.62,
    y: 1.92,
    w: 1.4,
    h: 0.2,
    fontFace: "Aptos",
    fontSize: 10.5,
    bold: true,
    color: "E6CFBF",
    margin: 0,
  });
  slide.addText(
    "The project shows how an online store can save time, improve access to modern fashion, and create a pleasant shopping experience for students and young buyers.",
    {
      x: 7.62,
      y: 2.5,
      w: 3.1,
      h: 1.4,
      fontFace: "Georgia",
      fontSize: 18,
      color: C.white,
      margin: 0,
    }
  );
  slide.addText("Thank you", {
    x: 7.62,
    y: 4.88,
    w: 2.2,
    h: 0.42,
    fontFace: "Aptos",
    fontSize: 20,
    bold: true,
    color: "F4DED0",
    margin: 0,
  });
  slide.addText("Meoowl Store presentation based on the project PDF and website screenshots", {
    x: 0.98,
    y: 6.08,
    w: 8.8,
    h: 0.2,
    fontFace: "Aptos",
    fontSize: 8.5,
    color: "E6CFBF",
    margin: 0,
  });
  finishSlide(slide);
}

async function main() {
  const outputPath = path.join(deckDir, "Meoowl_Store_Presentation.pptx");
  await pptx.writeFile({ fileName: outputPath });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

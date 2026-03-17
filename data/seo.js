export const siteUrl = "https://www.lookylooky.com.au";
export const siteName = "Lookylooky photography";

const defaultOpenGraphImage = "https://www.lookylooky.com.au/wp-content/uploads/V1-1.jpg";

export function buildMetadata({
  title,
  description,
  canonical = "/",
  image = defaultOpenGraphImage,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  keywords,
}) {
  const absoluteCanonical = canonical.startsWith("http")
    ? canonical
    : `${siteUrl}${canonical}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  const metadata = {
    title,
    description,
    alternates: {
      canonical: absoluteCanonical,
    },
    openGraph: {
      title,
      description,
      url: absoluteCanonical,
      siteName,
      locale: "en_AU",
      type,
      images: [
        {
          url: imageUrl,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };

  if (authors?.length) {
    metadata.authors = authors.map((name) => ({ name }));
  }

  if (keywords?.length) {
    metadata.keywords = keywords;
  }

  if (type === "article") {
    metadata.openGraph.publishedTime = publishedTime;
    metadata.openGraph.modifiedTime = modifiedTime ?? publishedTime;
    metadata.openGraph.authors = authors ?? ["mangiun noh"];
  }

  return metadata;
}

export const defaultMetadata = buildMetadata({
  title: "Newborn photography Sydney | Baby photography Sydney | baby photo",
  description:
    "Newborn photography Sydney, Baby, Maternity & Family Photographer Sydney. We offer our professional photographic services . Capture the beauty moments baby photo Sydney",
  canonical: "/",
  image: "https://www.lookylooky.com.au/wp-content/uploads/V1-1.jpg",
  keywords: [
    "Newborn photography Sydney",
    "baby photo",
    "baby photos",
    "linkedin profile picture",
    "passport photos",
  ],
});

export const staticPageSeo = {
  home: defaultMetadata,
  about: buildMetadata({
    title: "宝贝 照相 悉尼 ,影楼 悉尼 ,宝贝 全家福 ,满月照 - Lookylooky photography",
    description:
      "Capturing the beauty of life, from your pregnancy and moments with your newborn, to every precious year of life with your kids. 宝贝 照相 悉尼 ,影楼 悉尼 ,宝贝 全家福 ,满月照",
    canonical: "/about-us/",
    image: "https://www.lookylooky.com.au/wp-content/uploads/about-us.jpg",
    keywords: ["宝贝 照相 悉尼", "影楼 悉尼", "宝贝 全家福", "满月照"],
  }),
  contact: buildMetadata({
    title: "Contact Us - Lookylooky photography",
    description:
      "Contact us for Booking or Inquiry. At here, our Customers are our #1 priority. We want to be sure all of your questions get answered.",
    canonical: "/contact-us/",
    image: "https://www.lookylooky.com.au/wp-content/uploads/road.jpg",
    keywords: ["contact us"],
  }),
  faq: buildMetadata({
    title: "FAQ - Lookylooky photography",
    description:
      "FAQ : How can I make a booking? How early should I make a booking?What if my baby is not in a good mood?",
    canonical: "/faq-2/",
    image: "https://www.lookylooky.com.au/wp-content/uploads/road.jpg",
    keywords: ["FAQ"],
  }),
  promotionalOffers: buildMetadata({
    title: "Promotional Offers",
    description:
      "Promotional Offers - Get 10% off.When You book 3 moms together!We will call you for confirmation (Deposit $50 required)",
    canonical: "/promotional-offers/",
    image: "https://www.lookylooky.com.au/wp-content/uploads/PROMOTION220122.jpg",
    keywords: ["Promotional Offers"],
  }),
  blog: buildMetadata({
    title: "Best Photography Ideas - Lookylooky Photography Sydney",
    description:
      "Check out this amazing list of 100 photography blog post ideas to get you inspired!",
    canonical: "/blog/",
    image: "https://www.lookylooky.com.au/wp-content/uploads/PROMOTION220122.jpg",
    keywords: ["blog"],
  }),
  roadClosure: buildMetadata({
    title: "Road Closure - Lookylooky photography",
    description:
      "Book yourself and bub in for a professional session with one of Sydney's top newborn photographers!",
    canonical: "/road-closure/",
    image: "https://www.lookylooky.com.au/wp-content/uploads/road.jpg",
  }),
  testimony: buildMetadata({
    title: "Testimony | Photography Sydney",
    description:
      "The photos are gorgeous & everyone kept commenting on how beautifully done & professional!! We will definitely recommend you to our friends & family.",
    canonical: "/testimony/",
    image: "https://www.lookylooky.com.au/wp-content/uploads/road.jpg",
    keywords: ["Testimony"],
  }),
  prices: buildMetadata({
    title: "Service & Prices | Photography Sydney",
    description:
      "Check out unique collection of Service & Prices for the Photography.Frame $390 2 Concepts 5*7 Claire Frame *3pcs 2 Wallet photo Image CD(high res).",
    canonical: "/service-prices-sydney/",
    image: "https://www.lookylooky.com.au/new_img/HandFeet_sculpting_baby_photo.jpg",
    keywords: ["시드니 돌사진"],
  }),
};

export const pricePageSeo = {
  "maternity-and-newborn-photography-sydney": buildMetadata({
    title: "Maternity and Newborn photography sydney | Hand Prints - Baby Footprint",
    description:
      "Check out our Photography Prices for Maternity and Newborn. Lookylooky passionate photographers who are based in Sydney.",
    canonical: "/service-prices-sydney/maternity-and-newborn-photography-sydney/",
    image: "https://www.lookylooky.com.au/new_img/HandFeet_sculpting_baby_photo.jpg",
    keywords: [
      "Newborn photography sydney",
      "Hand Prints",
      "pregnacy photography",
      "baby footprint",
      "maternity photo",
    ],
  }),
  "100-days-baby-photography-1-year-and-junior-sydney": buildMetadata({
    title: "100 Days | Baby photography Sydney - Lookylooky baby studio",
    description:
      "Check out our Photography Prices for the 100 Days baby, 1 Year baby and Junior. Lookylooky passionate photographers who are based in Sydney.",
    canonical: "/service-prices-sydney/100-days-baby-photography-1-year-and-junior-sydney/",
    image: "https://www.lookylooky.com.au/new_img/HandFeet_sculpting_baby_photo.jpg",
    keywords: [
      "baby photography sydney",
      "babies photography",
      "junior photography sydney",
      "1 Year baby photography sydney",
      "photography studio sydney",
    ],
  }),
  "1-year-and-growing-from-maternity-photography-sydney": buildMetadata({
    title: "book maternity photography sydney - Lookylooky baby photo studio today",
    description:
      "Check out our Photography Prices for the 1 Year Growing. Lookylooky passionate photographers who are based in Sydney. package of baby's first year collection album best start maternity photography session in our Sydney studio.",
    canonical: "/service-prices-sydney/1-year-and-growing-from-maternity-photography-sydney/",
    image: "https://www.lookylooky.com.au/new_img/HandFeet_sculpting_baby_photo.jpg",
    keywords: ["maternity photography sydney"],
  }),
  "family-photography-sydney": buildMetadata({
    title: "Check out our family photography sydney prices - Lookylooky studio",
    description:
      "Family photography available in Sydney is one of our most sought after photography packages. This is for a small family of mother, father, and kids.",
    canonical: "/service-prices-sydney/family-photography-sydney/",
    image: "https://www.lookylooky.com.au/new_img/HandFeet_sculpting_baby_photo.jpg",
    keywords: ["Family Photography Sydney"],
  }),
  "baby-hand-and-feet-sculptures-casting": buildMetadata({
    title: "Baby Hand and Feet Sculptures Sydney - Lookylooky baby studio",
    description:
      "Baby Hand and Feet Sculpture Sydney by Lookylooky Baby Photo Studio.2 hands and 2 feet sculpture with 5*5 inch photo frame.",
    canonical: "/service-prices-sydney/baby-hand-and-feet-sculptures-casting/",
    image: "https://www.lookylooky.com.au/new_img/HandFeet_sculpting_baby_photo.jpg",
    keywords: [
      "Baby Hand and Feet Sculptures",
      "baby hand and feet casting",
      "baby hand and foot casting",
      "baby foot prints",
    ],
  }),
  "child-care": buildMetadata({
    title: "Service & Prices | Childcare Photography in Sydney",
    description:
      "Service & Prices Newborn + Maternity Collection A $790 2 Times Photo Session 4 Concepts 8*8 Album(12p) 8*8 Claire Frame *4Pcs 4 Wallet photo Image CD.",
    canonical: "/service-prices-sydney/child-care/",
    image: "https://www.lookylooky.com.au/wp-content/uploads/2016/03/child_care.jpg",
  }),
};

export const galleryPageSeo = {
  "maternity-photography": buildMetadata({
    title: "Best Maternity Local Photographer Sydney Australia",
    description:
      "Browse for maternity and pregnancy photo shoots gallery. Lookylooky capturing newborns, babies, kids and families in Sydney.",
    canonical: "/galleries/maternity-photography/",
    image: "/assets/original-galleries/maternity-photography/01-full.jpg",
    keywords: ["maternity photography"],
  }),
  "newborn-photography-sydney": buildMetadata({
    title: "Best Newborn Local & Affordable Photographer Sydney",
    description:
      "Beautiful newborn photography. Lookylooky capturing newborns, babies, kids and families photography in Sydney. Find here absolute newborn photography with adorable poses,props we provide all with flat rate affordable prices.",
    canonical: "/galleries/newborn-photography-sydney/",
    image: "/assets/original-galleries/newborn-photography-sydney/01-full.jpg",
    keywords: ["newborn photography"],
  }),
  "100-days-baby-photography": buildMetadata({
    title: "100 Days Baby Photography Sydney | 100 Days Shoot",
    description:
      "Check out our Photography Prices for the 100 Days, 1 Year and Junior. Lookylooky passionate photographers who are based in Sydney.",
    canonical: "/galleries/100-days-baby-photography/",
    image: "/assets/original-galleries/100-days-baby-photography/01-full.jpg",
    keywords: ["100 Days Baby Photography"],
  }),
  "babies-and-kids-photography": buildMetadata({
    title: "Babies, Children & Kids Portrait Photographer Sydney Australia",
    description:
      "Browse for babies and kids shoot gallery. Beautiful professional and cheap Newborn Baby & kids photography in Sydney by Lookylooky.",
    canonical: "/galleries/babies-and-kids-photography/",
    image: "/assets/original-galleries/babies-and-kids-photography/01-full.jpg",
  }),
  "family-photography": buildMetadata({
    title: "Family Photography Sydney | Family Portrait Photographers",
    description:
      "Welcome from Sydney's favourite family photographer.Beautiful professional family photography in Sydney and nearby areas.",
    canonical: "/galleries/family-photography/",
    image: "/assets/original-galleries/family-photography/01-full.jpg",
    keywords: ["Family Photography"],
  }),
  "events-parties-photography": buildMetadata({
    title: "Events, Parties & Wedding Photographer Sydney Australia",
    description:
      "Browse for Events & Parties photo shoot gallery. Beautiful professional Events & Parties photography in Sydney by Lookylooky.",
    canonical: "/galleries/events-parties-photography/",
    image: "/assets/original-galleries/events-parties-photography/01-full.jpg",
    keywords: ["Events"],
  }),
};

export function buildBlogPostMetadata(post) {
  const title = post.seoTitle || `${post.title} - Lookylooky photography`;
  const description = post.seoDescription || post.excerpt || post.title;
  const keywords = [post.focusKeyword, post.title].filter(Boolean);

  return buildMetadata({
    title,
    description,
    canonical: `/blog/${post.slug}/`,
    image: post.image || defaultOpenGraphImage,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.modified,
    authors: [post.author || "mangiun noh"],
    keywords,
  });
}

export function buildGalleryMetadata(gallery) {
  return (
    galleryPageSeo[gallery.slug] ??
    buildMetadata({
      title: `${gallery.title} | LookyLooky Photography`,
      description: gallery.description,
      canonical: `/galleries/${gallery.slug}/`,
      image: gallery.images?.[0]?.href ?? gallery.coverImage,
    })
  );
}


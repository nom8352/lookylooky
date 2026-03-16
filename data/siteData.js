import { galleryCategories } from './galleries';

export { galleryCategories };

export const primaryNav = [
  { label: 'About Us', href: '/about-us' },
  {
    label: 'Promotional Offers',
    href: '/promotional-offers',
    children: [{ label: 'Promotional Offers', href: '/promotional-offers' }],
  },
  {
    label: 'Gallery',
    href: '/galleries/100-days-baby-photography',
    children: galleryCategories.map((gallery) => ({
      label: gallery.title.replace(' Photography', ''),
      href: `/galleries/${gallery.slug}`,
    })),
  },
  {
    label: 'Prices',
    href: 'https://www.lookylooky.com.au/service-prices-sydney/100-days-baby-photography-1-year-and-junior-sydney/',
    external: true,
    children: [
      {
        label: 'Maternity and Newborn',
        href: 'https://www.lookylooky.com.au/service-prices-sydney/maternity-and-newborn-photography-sydney/',
        external: true,
      },
      {
        label: '100 Days, 1 Year and Junior',
        href: 'https://www.lookylooky.com.au/service-prices-sydney/100-days-baby-photography-1-year-and-junior-sydney/',
        external: true,
      },
      {
        label: '1 Year Growing',
        href: 'https://www.lookylooky.com.au/service-prices-sydney/1-year-and-growing-from-maternity-photography-sydney/',
        external: true,
      },
      {
        label: 'Family',
        href: 'https://www.lookylooky.com.au/service-prices-sydney/family-photography-sydney/',
        external: true,
      },
      {
        label: 'Hands & Feet Sculptures',
        href: 'https://www.lookylooky.com.au/service-prices-sydney/baby-hand-and-feet-sculptures-casting/',
        external: true,
      },
      {
        label: 'Child Care',
        href: 'https://www.lookylooky.com.au/service-prices-sydney/child-care/',
        external: true,
      },
    ],
  },
  {
    label: 'Testimony',
    href: 'https://www.lookylooky.com.au/testimony/',
    external: true,
  },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'FAQ', href: '/faq-2' },
  {
    label: 'Blog',
    href: 'https://www.lookylooky.com.au/blog/',
    external: true,
    children: [
      {
        label: 'Blog',
        href: 'https://www.lookylooky.com.au/blog/',
        external: true,
      },
      {
        label: 'Road Closure',
        href: 'https://www.lookylooky.com.au/road-closure/',
        external: true,
      },
    ],
  },
];

export const promoCards = [
  { title: 'Promotional offer', href: '/promotional-offers', image: '/assets/promo-1.jpg' },
  { title: 'Newborn gallery', href: '/galleries/newborn-photography-sydney', image: '/assets/promo-2.jpg' },
  { title: 'Special package', href: '/promotional-offers', image: '/assets/promo-3.jpg' },
];

export const serviceHighlights = [
  'We are experts in newborn photography, and portraiture of mothers, young children and families. LookyLooky Photography Studio Sydney guarantees a wonderful experience in a comfortable and soothing environment.',
  'We offer over 15 different themes as the perfect backdrop to creating your beautiful baby portraits and family photography moments, including simple colourful backgrounds, natural backdrops, and outdoor garden scenes.',
];

export const homeFaqs = [
  {
    question: 'Have You Been Searching for the Best Newborn Photography in Sydney?',
    answer: ['We are a maternity, baby, and family photography studio located in Sydney and nearby areas.'],
  },
  {
    question: 'Where Is Our Newborn Baby Maternity & Family Photography Sydney Studio Located?',
    answer: [
      'We provide newborn baby photography and family photo shoot services for the suburban Sydney area including Gladesville, Hunters Hill, Putney, Ryde, Denistone, Marsfield, Lane Cove, Eastwood, Meadowbank, Macquarie Park, and Epping.',
    ],
  },
  {
    question: 'Photography Tips for Parents in Sydney',
    answer: [
      'The best time for newborn photography is usually 7 to 20 days after birth when babies spend much of their time sleeping and curl naturally.',
      'During your session, keep your baby comfortable and follow the photographer\'s safety guidance so we can capture the calmest and most natural poses.',
    ],
  },
  {
    question: 'Choose the Best Family Photography Studio in Sydney',
    answer: [
      'A cheerful and relaxed atmosphere helps us capture the best family portraits. Natural expressions, movement, and genuine interaction always photograph beautifully.',
    ],
  },
];

export const promotionalOffers = [
  {
    title: 'Special Event',
    summary: 'A rotating seasonal promotion from the original page, presented as a full poster-style event notice.',
    image: '/assets/offer-special.jpg',
  },
  {
    title: 'Free Maternity',
    summary: 'This event end for now.',
    image: '/assets/promo-1.jpg',
  },
  {
    title: 'Vintage 100days Shooting',
    summary: 'A themed milestone session with a vintage-inspired styling direction for 100 days baby photography.',
    image: '/assets/offer-vintage.jpg',
  },
  {
    title: 'Group Discount',
    summary: 'Get 10% off when you book more than 5 moms together.',
    image: '/assets/promo-3.jpg',
    points: [
      'Gather moms and book a session. The shooting date does not have to be the same day.',
      'Email babylookylooky@gmail.com with mom\'s name, baby\'s name, contact number, desired booking date, and package.',
      'We will call you for confirmation. Deposit $50 required.',
      'The discount applies to all members in the group booking.',
    ],
    cta: { label: 'Contact Us', href: '/contact-us' },
  },
];

export const faqCategories = [
  {
    title: 'Booking',
    items: [
      {
        question: 'Are you open on weekends?',
        answer: ['Yes. We are open from 9 AM - 5 PM and closed on Wednesdays and Thursdays.'],
      },
      {
        question: 'Do I need to pay a deposit?',
        answer: ['Normally not, but a $50 deposit is required for promotional offers or special events.'],
      },
      {
        question: 'How can I make a booking? How early should I make a booking?',
        answer: [
          'You can call 0425 874 690, email babylookylooky@gmail.com, or use the contact form on the website.',
          'We recommend booking as early as possible so your preferred session date remains available.',
        ],
      },
      {
        question: 'What if my baby is not in a good mood?',
        answer: [
          'It helps if your baby is fed and rested before the shoot.',
          'If your baby is still unsettled no matter how much we try, the session can be rescheduled.',
        ],
      },
    ],
  },
  {
    title: 'Shooting',
    items: [
      {
        question: 'When is the good time for photo sessions for 100 days old and 1 year old?',
        answer: [
          'The best time for a 100-day photo session is when your baby has good head control.',
          'For a 1-year session, we can usually start from around 10 months old when your baby can already stand with support.',
        ],
      },
      {
        question: 'When can I choose the concept and how many different concepts do you have?',
        answer: [
          'You can choose your concept on the shoot day and we recommend arriving on time.',
          'The studio has more than 20 different concepts and can style the shoot with various props.',
        ],
      },
    ],
  },
  {
    title: 'Family Shooting',
    items: [
      {
        question: 'Can the concept per package be shared with the siblings?',
        answer: ['Yes, it can be shared with siblings, but only for one concept per package.'],
      },
      {
        question: 'We want to have a family photo shoot together with the baby, how do you do it?',
        answer: [
          'Most baby packages already include one concept for family shots unless the package specifically says no family.',
          'The remaining concepts are then used for baby-only photos unless you prefer otherwise.',
        ],
      },
      {
        question: 'We want to have a family photo shoot with the grandparents. Is that alright?',
        answer: ['Family means parents and children only. Additional relatives are charged at $50 each.'],
      },
      {
        question: 'What should I wear?',
        answer: ['Wear anything comfortable, preferably without very strong colours or heavy patterns.'],
      },
    ],
  },
  {
    title: 'Location, Pets, and Products',
    items: [
      {
        question: 'Do you provide dresses or costumes for the baby?',
        answer: ['We have a collection of cute costumes. You are also welcome to bring special toys, blankets, hats, or outfits.'],
      },
      {
        question: 'Do you provide hair or makeup service?',
        answer: ['No. Please do your hair and makeup before you come.'],
      },
      {
        question: 'Is there parking space at your studio? Is it easy to find your place?',
        answer: [
          'Yes, there are many parking spaces next to the studio.',
          'The studio is on the upper ground floor with stairs only, so it is best not to bring bulky prams.',
        ],
      },
      {
        question: 'I want to do a photo shoot with our dog. Can I bring my pet?',
        answer: [
          'Yes, you can bring your pet for a short session.',
          'Please bring a leash, kennel, or someone who can supervise your pet while the rest of the shoot continues.',
        ],
      },
      {
        question: 'Can you deliver the products?',
        answer: ['Normally no because many products are fragile, but special-case delivery can sometimes be arranged.'],
      },
      {
        question: 'When can I get my pictures?',
        answer: ['It usually takes about 4 to 5 weeks after your final photo choice. We will notify you by text when the order is ready for pickup.'],
      },
    ],
  },
];

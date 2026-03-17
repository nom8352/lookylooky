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
      label:
        gallery.slug === 'maternity-photography'
          ? 'Maternity'
          : gallery.slug === 'newborn-photography-sydney'
            ? 'Newborn'
            : gallery.slug === 'babies-and-kids-photography'
              ? 'Babies and Kids'
              : gallery.slug === 'family-photography'
                ? 'Family'
                : gallery.slug === 'events-parties-photography'
                  ? 'Events & Parties'
                  : gallery.title,
      href: `/galleries/${gallery.slug}`,
    })),
  },
  {
    label: 'Prices',
    href: '/service-prices-sydney',
    children: [
      {
        label: 'Maternity and Newborn',
        href: '/service-prices-sydney/maternity-and-newborn-photography-sydney',
      },
      {
        label: '100 Days, 1 Year and Junior',
        href: '/service-prices-sydney/100-days-baby-photography-1-year-and-junior-sydney',
      },
      {
        label: '1 Year Growing',
        href: '/service-prices-sydney/1-year-and-growing-from-maternity-photography-sydney',
      },
      {
        label: 'Family',
        href: '/service-prices-sydney/family-photography-sydney',
      },
      {
        label: 'Hands & Feet Sculptures',
        href: '/service-prices-sydney/baby-hand-and-feet-sculptures-casting',
      },
      {
        label: 'Child Care',
        href: '/service-prices-sydney/child-care',
      },
    ],
  },
  {
    label: 'Testimony',
    href: '/testimony',
  },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'FAQ', href: '/faq-2' },
  {
    label: 'Blog',
    href: '/blog',
    children: [
      {
        label: 'Blog',
        href: '/blog',
      },
      {
        label: 'Road Closure',
        href: '/road-closure',
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
  'We are experts in newborn photography, and portraiture of mothers, young children and families. LookyLooky Photography Studio Sydney guarantees a wonderful experience, in a comfortable and soothing environment, that will allow you to relax and sit back while we capture your family\'s special moments.',
  'We offer over 15 different themes as the perfect backdrop to creating your beautiful baby portraits and family photography moments, including simple yet colourful backgrounds, natural backdrops, and outdoor garden scenes. Our Baby Experts are experienced in newborn family photography and baby photography. They\'ll be at your baby photo shoot to entertain your precious little one while you relax. During your photo session in Sydney we\'ll be able to capture plenty of adorable facial expressions that will forever be memorialized in your precious photographs.',
];

export const homeFaqs = [
  {
    question: 'Have You Been Searching for the Best Newborn Photography in Sydney?',
    answer: ['We\'re a maternity, baby, and family photography studio located in Sydney region and nearby areas.'],
  },
  {
    question: 'Where Is Our Newborn Baby Maternity & Family Photography Sydney Studio Located?',
    answer: [
      'We provide newborn baby photography and family photo shoot services for the entire suburban Sydney area, including: Gladesville, Huntleys Cove, Huntleys Point, Hunters Hill, Henley, Tennyson Point, Putney, East, West and North Ryde, Denistone East and West, Marsfield, Lane Cove, Eastwood, Meadowbank, Macquarie Park, and Epping.',
    ],
  },
  {
    question: 'Photography Tips for Parents in Sydney',
    answer: [
      'The best time for newborn baby photography is 7 to 20 days after birth because babies at this age are sleepier, curl naturally, and are easier to pose safely for those soft newborn portraits.',
      'For many newborn sessions, babies are photographed without clothing so their tiny details can be captured beautifully. Depending on the climate and the set-up, wraps, blankets, and carefully prepared props can also be used to keep them comfortable.',
      'Please listen carefully to your photographer during the session. Safety is always the first priority in newborn photography, and simple guidance on supporting, soothing, or moving your baby can make a big difference.',
      'Our studio is prepared in advance with professional equipment, cameras, memory cards, lenses, bean bags, clamps, and heaters so that everything is ready before your baby arrives.',
      'If you are planning your newborn baby photography Sydney session and would like to know more, we\'d love to hear from you!',
    ],
  },
  {
    question: 'Choose the Best Family Photography Studio in Sydney',
    answer: [
      'The best family photography happens when everybody feels relaxed and happy. We always recommend choosing a studio that knows how to keep young children comfortable so genuine smiles and natural expressions can be captured.',
      'Natural light and the softer tones of late afternoon can create beautiful family portraits, especially when combined with a simple concept and styling that does not distract from your family.',
      'Children do not need to stay still or pose perfectly for every image. Some of the best photographs happen when kids can be themselves and interact naturally with parents and siblings.',
      'Our photographers use manual exposure and the latest photography tools to make sure your family photos are beautifully balanced, timeless, and full of warmth.',
    ],
  },
];

export const promotionalOffers = [
  {
    title: 'Special Event',
    image: '/assets/offer-special.jpg',
  },
  {
    title: 'Free Maternity',
    image: '/assets/promo-1.jpg',
  },
  {
    title: 'Vintage 100days Shooting',
    image: '/assets/offer-vintage.jpg',
  },
  {
    title: 'Group Discount',
    image: '/assets/promo-3.jpg',
    points: [
      'Gather moms and book session (shooting date doesn\'t have to be same day) https://www.lookylooky.com.au/contact-us/',
      'Emaildetails babylookylooky@gmail.com',
      'We will call you for confirmation (Deposite $50 required)',
    ],
    subPoints: ['mom\'s name,baby\'s name', 'Contact number', 'the desired booking date,package'],
    cta: { label: 'Contact Us', href: '/contact-us' },
  },
];

export const faqCategories = [
  {
    title: 'Booking',
    items: [
      {
        question: 'Are you open on weekends?',
        answer: ['Yes, We\'re open from 9AM - 5PM but, We are closed on Wednesdays and Thursdays.'],
      },
      {
        question: 'Do I need to pay a deposit?',
        answer: ['Normally not but, A $50 deposit is required for a promotional offer or event'],
      },
      {
        question: 'How can I make a booking? How early should I make a booking?',
        answer: [
          'You can call us over the phone at 0425 874 690 or send us an email to babylookylooky@gmail.com or fill out our booking form on our website www.lookylooky.com.au under the "Contact Us" tab. We recommend that you book a session as early as possible.',
        ],
      },
      {
        question: 'What if my baby is not in a good mood?',
        answer: [
          'It\'s best to feed your baby before your photo shoot or has already taken his/her nap. We will try our very best to cheer your baby up so we could get cute and beautiful shots. But if your baby is still not in a good mood no matter how much we try, we can always reschedule.',
        ],
      },
    ],
  },
  {
    title: 'Delivery',
    items: [
      {
        question: 'Can you deliver the products?',
        answer: [
          'We normally don\'t deliver products as most of our products are fragile. We recommend you pick them up at our studio once complete. However, for special cases, yes we can deliver',
        ],
      },
      {
        question: 'When can I get my pictures?',
        answer: [
          'It takes 4~5 weeks for your images to be ready after your choice of photo. We will just inform you via text message that your order is ready for pick up.',
        ],
      },
    ],
  },
  {
    title: 'Family Shooting',
    items: [
      {
        question: 'Can the concept per package be shared with the siblings?',
        answer: ['Yes, it can be shared with the siblings but only for 1 concept per package.'],
      },
      {
        question: 'We want to have a family photo shoot together with the baby, how do you do it?',
        answer: [
          'Most of our baby packages (except the ones that has "no family" in it) already includes 1 concept for family shots. The remaining concepts are going to be just for your baby. Howeve, You can do the concept for baby as well if you do not want to family session as you are not ready.',
        ],
      },
      {
        question: 'We want to have a family photo shoot with the grandparents. Is that alright?',
        answer: ['When we say family it means parents and childrens only. Any other family or relatives we charge extra $50 each person.'],
      },
      {
        question: 'What should I wear?',
        answer: ['You can wear anything you like as long as you\'re comfortable. Preferrably not too strong color or clothes with less patterns.'],
      },
    ],
  },
  {
    title: 'Location',
    items: [
      {
        question: 'Do you provide dresses or costumes for the baby?',
        answer: ['We have a collection of cute costumes. Feel free to bring along any special toys, blankets, hats or costumes that you would like to use.'],
      },
      {
        question: 'Do you provide hair or makeup service?',
        answer: ['No. Please do your hair and make up before you come.'],
      },
      {
        question: 'Is there parking space at your studio? Is easy to find your place?',
        answer: [
          'Yes, there are many parking spaces next to our studio. Our studio is on the upper ground floor (no lift, only stairs), please don\'t carry any baby prams. It might be hard for you to go up.',
        ],
      },
    ],
  },
  {
    title: 'Pet',
    items: [
      {
        question: 'I want to do a photo shoot with our dog. Can I bring my pet?',
        answer: [
          'Yes, you can bring your pet. Session time with pets would take about 5 minutes. We suggest you bring their leash, kennel or someone else who can look after your pet while you\'re doing your shoot. Our studio is in a commercial building so we don\'t have an area for them to stay unsupervised.',
        ],
      },
    ],
  },
  {
    title: 'Product',
    items: [
      {
        question: 'Can I change the frame to a different size or change it to a different one?',
        answer: ['Yes, you can. There would be additional charge for alterations.'],
      },
      {
        question: 'I don\'t need a hard copy of the pictures, can I choose to have a soft copy(digital files) of the pictures only?',
        answer: ['Yes, you can have only digital files, however package is great value with soft copy.'],
      },
    ],
  },
  {
    title: 'Shooting',
    items: [
      {
        question: 'When is the good time for photo sessions for 100 days old and 1 year old?',
        answer: [
          'The best time to do a 100-day photo session is when your baby already has good head control. Most shots that we do at this age are in the tummy time position, sitting position (with support) and laying down.',
          'For 1 year, we can already do the session when your baby is at least 10 months old. As long as he/she can already stand up with any support.',
        ],
      },
      {
        question: 'When can I choose the concept and how many different concepts do you have?',
        answer: [
          'You can choose your concept on photo shoot day. We recommend you arrive on time.',
          'We have more than 20 different concepts, and also we can style with various props.',
        ],
      },
    ],
  },
];



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
    answer: ["We're a maternity, baby, and family photography studio located in Sydney region and nearby areas."],
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
      "If you're interested in hiring our maternity and newborn photography studio in Sydney, it's important to prepare for your upcoming newborn photography photo session. Our photography experts at LookyLooky in Sydney have a few tips to help your family prepare.",
      "The best photography time for babies is just 7 to 20 days after birth, when babies spend most of their time sleeping, just like being in their mother's womb. After birth, it takes about three weeks before your baby starts moving, which makes it much harder for our newborn family photographers to snap photos of their cutest curl-up poses.",
      "Most newborn baby portrait sessions are done unclothed, though it depends on the current climate, as babies can react against the wrong temperature. If you choose to have your infant photographed in clothing for newborn photography, it's best to select clothing that they're most comfortable wearing.",
      "During your newborn family photo shoot you'll need to listen to the LookyLooky photographer for safety tips. Do keep your baby comfortable, and keep an eye on their reflexes during the session. In order for the best photographs to be taken, the atmosphere around your child always needs to be comfortable.",
      'The best positions and poses will need to be taken by your professional baby photographer. Your photographer will ask you which position your baby feels most relaxed in.',
      'At LookyLooky photography studio, we always have our studio prepped for your arrival, including all equipment, cameras, memory cards, lenses, bean bags, clamps, and a space heater.',
      "LookyLooky offers newborn photography services to ensure your family's memories are cherished forever. If you would like to chat about creating a gorgeous portfolio of images that capture the beauty of your life, and that of your loved ones, we'd love to hear from you!",
    ],
  },
  {
    question: 'Choose the Best Family Photography Studio in Sydney',
    answer: [
      'LOOKYLOOKY has the best family photography experts. To help prepare for your family photography session in Sydney, we offer the following tips to capture the best photos.',
      "It's recommended that all family members be cheery during your family photo session. If your family is unhappy or not concentrating on the camera, even the best camera equipment won't improve the moment. Think of ways to liven up the atmosphere, as it's important that your family are happy and having fun, so the photographer can capture your family's best moments together. Facial expressions are everything and can help to add value to your treasured photographs.",
      "The best time for your family photography session, in natural surroundings, is late evening about an hour before dusk. Don't worry about your kids being rambunctious. Let them make the funny noises, sing, or dance. Let them act out their natural instincts. Let the family assume natural positions that make them feel comfortable.",
      "We pride ourselves on being the best family photography experts in Sydney. Our preferred method of shooting is in manual exposure mode. We stay up-to-date on the latest and best photography tools and equipment.",
      "If you feel that it's time to capture your family's special moments on film, please contact LookyLooky family photography experts in Sydney today.",
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
    note: 'This event end for now',
  },
  {
    title: 'Vintage 100days Shooting',
    image: '/assets/offer-vintage.jpg',
  },
  {
    title: 'Group Discount',
    image: '/assets/promo-3.jpg',
    heading: 'When You book more than 5moms together!',
    points: [
      'Gather moms and book session',
      "(shooting date doesn't have to be same day)",
      'https://www.lookylooky.com.au/contact-us/',
      'Email details babylookylooky@gmail.com',
      'We will call you for confirmation (Deposite $50 required)',
    ],
    subPoints: ["mom's name,baby's name", 'Contact number', 'the desired booking date,package'],
    benefit: 'discount for all members.',
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




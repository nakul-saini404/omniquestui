import Image from 'next/image';

const footerLinks = {
  courses: [
    { label: 'SAT Coaching', href: '/sat' },
    { label: 'LSAT Coaching', href: '/lsat' },
    { label: 'SSAT Coaching', href: '/ssat' },
    { label: 'PSAT Coaching', href: '/psat' },
    { label: 'ACT Coaching', href: '/act' },
    { label: 'AP Coaching', href: '/ap-coaching' },
    { label: 'Pre-AP Coaching', href: '/pre-ap-gurgaon' },
    { label: 'IPMAT Coaching', href: '/ipmat-coaching-and-profile-building-eduquest-2026' },
    { label: 'MCAT Coaching', href: '/mcat' },
    { label: 'UCAT Coaching', href: '/ucat' },
    { label: 'TMUA Coaching', href: '/tmua' },
    { label: 'IELTS Coaching', href: '/ielts' },
    { label: 'DASA/CIWG', href: '/dasa-and-ciwg-quota' },
    { label: 'PTE Coaching', href: '/pte' },
    { label: 'TOEFL Coaching', href: '/toefl' },
    // { label: 'SAT Coaching Classes Dubai', href: 'https://eduquest.org.in/sat-test-preparation-online-course-dubai/' },

  ],
  tuition: [
    { label: 'Olympiads', href: '/olympiad' },
    { label: 'DASA/CIWG', href: '/dasa-and-ciwg-quota' },
    { label: 'IB Coaching', href: '/ib-international-baccalaureate' },
    { label: 'Indian Curricula', href: '/indian-curricula' },
    { label: 'International Curricula', href: '/international-curricula' },
    { label: 'Online Home Tuition', href: '/online-home-tuition' },
    { label: 'Our Achievements', href: '/our-achievements' },
  ],
  useful: [
    { label: 'About Us', href: '/about-us' },
    { label: 'Blog', href: 'https://eduquest.org.in/blog' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'Franchise', href: 'https://eduquest.org.in/franchise/' },
    { label: 'Free Guide Book', href: 'https://eduquest.org.in/free-download/' },
    { label: 'Refund Policy', href: 'https://eduquest.org.in/refund-policy/' },
    { label: 'Privacy Policy', href: 'https://eduquest.org.in/privacy-policy/' },
    { label: 'Terms of Use', href: 'https://eduquest.org.in/terms-of-use/' },
  ],
};

const socialLinks = [
  { label: 'FB', name: 'Facebook', href: 'https://www.facebook.com/eduquestind/' },
  { label: 'TW', name: 'Twitter', href: 'https://twitter.com/eduquest1' },
  { label: 'IG', name: 'Instagram', href: 'https://www.instagram.com/eduquest_education_' },
  { label: 'LI', name: 'LinkedIn', href: 'https://www.linkedin.com/company/eduquest-learning-centre/' },
  { label: 'YT', name: 'YouTube', href: 'https://www.youtube.com/channel/UCtbeu57cbXt1NTyZGfkaQ3w' },
];

const emails = [
  { label: 'General', email: 'contact@eduquest.org.in' },
  { label: 'Write To Us', email: 'writeto.eduquest@gmail.com' },
  { label: 'HR', email: 'hr@eduquest.org.in' },
  { label: 'Accounts', email: 'account@eduquest.org.in' },
  { label: 'Director', email: 'director@eduquest.org.in' },
  { label: 'Legal', email: 'legal@eduquest.org.in' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand col — spans 2 on lg */}
          <div className="lg:col-span-2">
            <Image
              src="https://eduquest.org.in/wp-content/uploads/2020/11/logo40.png"
              alt="EduQuest"
              width={160}
              height={48}
              className="h-10 w-auto object-contain mb-5 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              India&apos;s premier study abroad and test prep consultancy. Trusted by 15,000+ students across India and the world to reach their dream universities.
            </p>

            {/* Social */}
            <div className="flex gap-2 mb-8">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold hover:bg-brand-blue hover:text-white transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* Addresses */}
            <div className="space-y-3 text-xs text-gray-500">
              <div>
                <p className="text-gray-300 font-semibold mb-1">Main Office</p>
                <p>1212 Galleria Boulevard, DLF Phase IV, Gurugram, Haryana 122009</p>
              </div>
              <div>
                <p className="text-gray-300 font-semibold mb-1">Regional Office</p>
                <p>F-45, First Floor, South City II, Sector 50, Gurugram, Haryana 122018</p>
              </div>
              <div>
                <p className="text-gray-300 font-semibold mb-1">Corporate Office</p>
                <p>Bangalore Alpha Lab, #1316/C, 1st Floor, 9th Cross, J.P. Nagar 2nd Phase, Bangalore – 560078</p>
              </div>
            </div>
          </div>

          {/* Study Abroad Courses */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Test Prep Courses</h4>
            <ul className="space-y-2.5">
              {footerLinks.courses.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Online Tuition */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Online Tuition</h4>
            <ul className="space-y-2.5">
              {footerLinks.tuition.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful links + Emails */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Useful Links</h4>
            <ul className="space-y-2.5 mb-8">
              {footerLinks.useful.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Important Emails</h4>
            <ul className="space-y-2">
              {emails.map((e) => (
                <li key={e.email}>
                  <a
                    href={`mailto:${e.email}`}
                    className="text-xs hover:text-white transition-colors block"
                  >
                    <span className="text-gray-600 mr-1">{e.label}:</span>
                    {e.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">
            Copyright &copy; 2026 EduQuest. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Marketing by{' '}
            <a
              href="https://digitalavenue.in"
              target="_blank"
              rel="noreferrer"
              className="text-brand-blue hover:underline"
            >
              Digital Avenue
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
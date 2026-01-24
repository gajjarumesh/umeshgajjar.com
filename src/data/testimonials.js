export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO, TechFlow Solutions",
    company: "TechFlow Solutions",
    image: "/testimonials/avatar1.jpg",
    rating: 5,
    text: "Umesh transformed our legacy system into a modern, scalable platform. His expertise in Laravel and React.js was evident throughout the project. The migration was seamless, and our team loves the new system. Highly recommended for complex modernization projects!",
    project: "Healthcare Backend Portal",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Founder & CEO, StartupHub",
    company: "StartupHub",
    image: "/testimonials/avatar2.jpg",
    rating: 5,
    text: "Working with Umesh on our SaaS MVP was a game-changer. He helped us prioritize features, built a solid architecture, and delivered in just 8 weeks. His technical guidance and proactive communication made the entire process smooth. We've already onboarded 200+ users!",
    project: "SaaS Platform MVP",
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Director of Operations, RetailPro",
    company: "RetailPro",
    image: "/testimonials/avatar3.jpg",
    rating: 5,
    text: "Our Point of Sale system needed to handle high transaction volumes during peak hours. Umesh optimized the database queries and implemented caching strategies that improved performance by 300%. The system now handles Black Friday traffic without breaking a sweat!",
    project: "POS System Optimization",
  },
  {
    id: 4,
    name: "David Kim",
    role: "Product Manager, FitLife",
    company: "FitLife",
    image: "/testimonials/avatar4.jpg",
    rating: 5,
    text: "Umesh built our entire fitness platform from the ground up. The event management system, voting features, and admin dashboard exceeded our expectations. He's not just a developer; he's a problem solver who understands business needs. Will definitely work with him again!",
    project: "Fitness Website",
  },
  {
    id: 5,
    name: "Jennifer Martinez",
    role: "VP Engineering, DataSync Corp",
    company: "DataSync Corp",
    image: "/testimonials/avatar5.jpg",
    rating: 5,
    text: "The ServiceNow API integration Umesh developed for us has been rock solid. Clean code, comprehensive documentation, and excellent error handling. He anticipated edge cases we hadn't even thought of. This is the level of professionalism every developer should aspire to.",
    project: "ServiceNow API Integration",
  },
  {
    id: 6,
    name: "Robert Thompson",
    role: "Owner, Thompson's Restaurant Group",
    company: "Thompson's Restaurant Group",
    image: "/testimonials/avatar6.jpg",
    rating: 5,
    text: "Managing multiple restaurant locations became effortless with the system Umesh built. Online orders, reservations, and delivery tracking - everything works perfectly. Our staff adapted quickly thanks to the intuitive interface. Best investment we made this year!",
    project: "Restaurant Admin System",
  },
];

export const getRandomTestimonials = (count = 3) => {
  const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

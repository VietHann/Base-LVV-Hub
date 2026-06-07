// Small enhancements: sticky header state, mobile nav, reveal animation and static contact form.
const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const navLinks = document.querySelector('[data-nav-links]');
const year = document.querySelector('[data-year]');
const contactForm = document.querySelector('[data-contact-form]');
const formNote = document.querySelector('[data-form-note]');
const tiltCard = document.querySelector('[data-tilt]');
const langButtons = document.querySelectorAll('[data-lang]');

const translations = {
  en: {
    skip: 'Skip to content',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.certificates': 'Certificates',
    'nav.social': 'Social',
    'nav.contact': 'Contact',
    'hero.title': 'AI Engineer',
    'hero.intro': 'AI Engineer focused on LLM applications, Agentic AI, RAG and backend systems that connect models, data, APIs and modern web interfaces.',
    'hero.projectsCta': 'View projects',
    'hero.emailCta': 'Contact by email',
    'hero.meta1': 'intern at AIoT Lab',
    'hero.meta2': 'GPA out of 10',
    'hero.meta3': 'IT graduate track',
    'hero.code1': 'role = "AI Engineer"',
    'hero.code2': 'focus = ["RAG", "Agents", "Backend AI"]',
    'hero.code3': 'ship(ai_pipeline, api, ux)',
    'hero.available': 'Available for AI projects',
    'about.kicker': 'About Me',
    'about.title': 'Applied AI with backend depth.',
    'about.lead': 'I build practical AI systems across data processing, knowledge retrieval, model inference, logging and API integration. My strongest work is in education-focused AI products and LLM/RAG systems.',
    'about.item1Title': 'AI/ML Intern, Lab AIoT',
    'about.item1Body': 'Worked on Vietnamese speech processing modules, model inference APIs, audio preprocessing and deployment documentation.',
    'about.item2Title': 'LLM and RAG systems',
    'about.item2Body': 'Designed retrieval pipelines with parsing, chunking, embeddings, vector search, grounded answers, tool execution and audit logging.',
    'about.item3Title': 'Backend AI delivery',
    'about.item3Body': 'Built FastAPI services, database integration, background jobs, role-based workflows, dashboards and production-oriented logs.',
    'skills.kicker': 'Skills',
    'skills.title': 'AI, backend and product stack.',
    'skills.lead': 'Core stack from the resume: LLM applications, RAG, AI agents, FastAPI backend systems, vector databases, ML models and modern frontend delivery.',
    'projects.kicker': 'Projects',
    'projects.title': 'Selected work.',
    'projects.p1Title': 'AI Agent Academic Advisor',
    'projects.p1Body': 'Multi-role AI Agent platform for students, advisors, lecturers and training staff, covering grades, schedules, tuition, curriculum progress and academic status.',
    'projects.p2Title': 'Vietnamese Speech-to-Text System',
    'projects.p2Body': 'ASR pipeline for Vietnamese audio with preprocessing, batch upload API, transcript cleanup and WER/CER evaluation.',
    'projects.p3Title': 'LLM/RAG Evaluation Platform',
    'projects.p3Body': 'Observability system for tracing prompts, retrieval context, tool calls, model responses, groundedness, latency and token cost.',
    'projects.p4Title': 'Smart English Learning Platform',
    'projects.p4Body': 'Learning app with vocabulary, speaking, writing, progress dashboard and AI feedback for personalized practice.',
    'projects.p5Title': 'Backend AI System Modules',
    'projects.p5Body': 'Reusable components for REST APIs, streaming workflows, background jobs, logging, role permissions and model integration.',
    'projects.github': 'View GitHub',
    'projects.repository': 'View repository',
    'cert.kicker': 'Certificates',
    'cert.title': 'Certificates and achievements.',
    'cert.lead': 'Education, language certificates and achievements aligned with AI engineering roles.',
    'cert.eduTitle': 'Bachelor of Information Technology',
    'cert.eduBody': 'Dai Nam University, Hanoi. GPA: 8.8/10. Expected graduation: 2026.',
    'cert.englishTitle': 'English',
    'cert.chineseTitle': 'Chinese',
    'social.kicker': 'Social Profiles',
    'social.title': 'Connect with me.',
    'contact.kicker': 'Contact',
    'contact.title': 'Ready to build applied AI systems.',
    'contact.lead': 'Based in Ha Dong, Hanoi. Email: lvv.viet.vn@gmail.com. Phone: 0377 372 902. Reach out for LLM applications, RAG systems, AI Agent workflows or backend AI engineering roles.',
    'contact.emailCta': 'Direct email',
    'form.name': 'Your name',
    'form.namePlaceholder': 'Nguyen Van A',
    'form.emailPlaceholder': 'name@example.com',
    'form.message': 'Message',
    'form.messagePlaceholder': 'I want to discuss...',
    'form.submit': 'Create email',
    'form.opening': 'Opening your email app...',
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with HTML, CSS and JavaScript.'
  },
  vi: {
    skip: 'Bỏ qua điều hướng',
    'nav.about': 'Giới thiệu',
    'nav.skills': 'Kỹ năng',
    'nav.projects': 'Dự án',
    'nav.certificates': 'Học vấn',
    'nav.social': 'Kết nối',
    'nav.contact': 'Liên hệ',
    'hero.title': 'AI Engineer',
    'hero.intro': 'AI Engineer tập trung vào LLM Applications, Agentic AI, RAG và các hệ thống backend kết nối mô hình, dữ liệu, API và giao diện web hiện đại.',
    'hero.projectsCta': 'Xem dự án',
    'hero.emailCta': 'Liên hệ email',
    'hero.meta1': 'thực tập tại Lab AIoT',
    'hero.meta2': 'GPA hệ 10',
    'hero.meta3': 'cử nhân CNTT',
    'hero.code1': 'vai_trò = "AI Engineer"',
    'hero.code2': 'tập_trung = ["RAG", "Agents", "Backend AI"]',
    'hero.code3': 'triển_khai(ai_pipeline, api, ux)',
    'hero.available': 'Sẵn sàng cho dự án AI',
    'about.kicker': 'Giới thiệu',
    'about.title': 'AI ứng dụng với nền tảng backend.',
    'about.lead': 'Tôi xây dựng các hệ thống AI thực tế từ xử lý dữ liệu, truy xuất tri thức, suy luận mô hình, logging đến tích hợp API. Thế mạnh chính là sản phẩm AI giáo dục và hệ thống LLM/RAG.',
    'about.item1Title': 'Thực tập sinh AI/ML, Lab AIoT',
    'about.item1Body': 'Phát triển module xử lý tiếng nói tiếng Việt, API suy luận mô hình, tiền xử lý âm thanh và tài liệu triển khai.',
    'about.item2Title': 'Hệ thống LLM và RAG',
    'about.item2Body': 'Thiết kế pipeline truy xuất gồm parsing, chunking, embeddings, vector search, grounded answer, tool execution và audit logging.',
    'about.item3Title': 'Backend AI delivery',
    'about.item3Body': 'Xây dựng FastAPI service, tích hợp database, background jobs, workflow phân quyền, dashboard và logging hướng production.',
    'skills.kicker': 'Kỹ năng',
    'skills.title': 'AI, backend va product stack.',
    'skills.lead': 'Bộ kỹ năng từ resume: LLM applications, RAG, AI agents, FastAPI backend systems, vector database, ML models và frontend hiện đại.',
    'projects.kicker': 'Dự án',
    'projects.title': 'Dự án tiêu biểu.',
    'projects.p1Title': 'AI Agent cố vấn học tập',
    'projects.p1Body': 'Nền tảng AI Agent đa vai trò cho sinh viên, cố vấn học tập, giảng viên và cán bộ đào tạo, hỗ trợ điểm, lịch học, học phí, chương trình đào tạo và tình trạng học vụ.',
    'projects.p2Title': 'Hệ thống nhận dạng giọng nói tiếng Việt',
    'projects.p2Body': 'Pipeline ASR cho âm thanh tiếng Việt với tiền xử lý dữ liệu, batch upload API, hậu xử lý transcript và đánh giá WER/CER.',
    'projects.p3Title': 'Nền tảng đánh giá LLM/RAG',
    'projects.p3Body': 'Hệ thống observability theo dõi prompt, retrieval context, tool calls, model responses, groundedness, latency và token cost.',
    'projects.p4Title': 'Nền tảng học tiếng Anh thông minh',
    'projects.p4Body': 'Ứng dụng học tập với từ vựng, speaking, writing, dashboard tiến độ và phản hồi AI cá nhân hóa.',
    'projects.p5Title': 'Backend AI System Modules',
    'projects.p5Body': 'Các module dùng lại cho REST API, streaming workflow, background jobs, logging, phân quyền và tích hợp mô hình.',
    'projects.github': 'Xem GitHub',
    'projects.repository': 'Xem repository',
    'cert.kicker': 'Học vấn',
    'cert.title': 'Học vấn và chứng chỉ.',
    'cert.lead': 'Học vấn, ngoại ngữ và thành tích liên quan đến định hướng AI Engineer.',
    'cert.eduTitle': 'Cử nhân Công nghệ thông tin',
    'cert.eduBody': 'Trường Đại học Đại Nam, Hà Nội. GPA: 8.8/10. Dự kiến tốt nghiệp: 2026.',
    'cert.englishTitle': 'Tiếng Anh',
    'cert.chineseTitle': 'Tiếng Trung',
    'social.kicker': 'Hồ sơ kết nối',
    'social.title': 'Kết nối với tôi.',
    'contact.kicker': 'Liên hệ',
    'contact.title': 'Sẵn sàng xây dựng hệ thống AI ứng dụng.',
    'contact.lead': 'Đang ở Hà Đông, Hà Nội. Email: lvv.viet.vn@gmail.com. Điện thoại: 0377 372 902. Liên hệ về LLM applications, RAG systems, AI Agent workflows hoặc vị trí Backend AI Engineering.',
    'contact.emailCta': 'Gửi email',
    'form.name': 'Tên của bạn',
    'form.namePlaceholder': 'Nguyen Van A',
    'form.emailPlaceholder': 'name@example.com',
    'form.message': 'Nội dung',
    'form.messagePlaceholder': 'Tôi muốn trao đổi về...',
    'form.submit': 'Tạo email',
    'form.opening': 'Đang mở ứng dụng email...',
    'footer.rights': 'Đã bảo lưu mọi quyền.',
    'footer.built': 'Xây dựng bằng HTML, CSS và JavaScript.'
  }
};

let activeLanguage = localStorage.getItem('portfolio-language') || 'en';

const applyLanguage = (language) => {
  const dictionary = translations[language] || translations.en;
  activeLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const value = dictionary[element.dataset.i18nPlaceholder];
    if (value) element.setAttribute('placeholder', value);
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  localStorage.setItem('portfolio-language', language);
};

year.textContent = new Date().getFullYear();
applyLanguage(activeLanguage);

langButtons.forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

const headerSentinel = document.createElement('span');
headerSentinel.setAttribute('aria-hidden', 'true');
headerSentinel.className = 'header-sentinel';
document.body.prepend(headerSentinel);

const headerObserver = new IntersectionObserver(([entry]) => {
  header.classList.toggle('scrolled', !entry.isIntersecting);
}, { rootMargin: '-12px 0px 0px 0px', threshold: 0 });

headerObserver.observe(headerSentinel);

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  navLinks.classList.toggle('open', !expanded);
});

navLinks.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    menuToggle.setAttribute('aria-expanded', 'false');
    navLinks.classList.remove('open');
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

if (window.matchMedia('(hover: hover)').matches && tiltCard) {
  tiltCard.addEventListener('pointermove', (event) => {
    const rect = tiltCard.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    tiltCard.style.transform = `rotateX(${7 - y * 7}deg) rotateY(${-10 + x * 9}deg) translateY(-4px)`;
  });

  tiltCard.addEventListener('pointerleave', () => {
    tiltCard.style.transform = '';
  });
}

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const name = String(data.get('name')).trim();
  const email = String(data.get('email')).trim();
  const message = String(data.get('message')).trim();
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

  formNote.textContent = translations[activeLanguage]?.['form.opening'] || translations.en['form.opening'];
  window.location.href = `mailto:lvv.viet.vn@gmail.com?subject=${subject}&body=${body}`;
});

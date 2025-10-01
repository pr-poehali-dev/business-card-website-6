import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Разработка сайтов",
      description: "Создаю сайты с нуля по вашим требованиям с современными технологиями и чистым кодом",
      icon: "Code"
    },
    {
      title: "Создание дизайна",
      description: "Разработка уникального дизайна, который подчеркнет особенность вашего бренда",
      icon: "Palette"
    },
    {
      title: "Техническая поддержка",
      description: "Полное сопровождение проекта на всех этапах с гарантией качества",
      icon: "Settings"
    },
    {
      title: "Backend-разработка",
      description: "Разработка серверной части приложений, API и интеграции с базами данных",
      icon: "Server"
    }
  ];

  const portfolio = [
    {
      title: "Сайт ООО \"ИНТЕР\"",
      description: "Сайт разработан в рекордно короткие сроки за 3 месяца с учетом запросов клиента",
      points: ["Сайт-витрину", "Каталог продукции", "Личный кабинет"]
    }
  ];

  const testimonials = [
    {
      name: "Николай Вячеславович",
      company: "Директор ООО \"ИНТЕР\"",
      text: "Выбрал Юлию на основании отзывов заказчиков. Результат очень порадовал! Сайт работает быстро, дизайн современный. Все выполнено в срок."
    },
    {
      name: "Павел Кириллов",
      company: "Индивидуальный предприниматель",
      text: "Обращался для создания лендинга для своего стартапа. Юлия помогла с концепцией, сделала отличный дизайн. Теперь обращаюсь только к ней!"
    }
  ];

  const faqs = [
    {
      question: "Как долго занимает разработка веб-приложения?",
      answer: "Сроки зависят от сложности проекта. Простой лендинг можно создать за 1-2 недели, сложное веб-приложение может занять 2-3 месяца."
    },
    {
      question: "Какие этапы разработки вы предоставляете?",
      answer: "Полный цикл: анализ требований, прототипирование, дизайн, разработка, тестирование, запуск и дальнейшая поддержка."
    },
    {
      question: "Какова стоимость разработки веб-приложения?",
      answer: "Стоимость рассчитывается индивидуально в зависимости от требований к функционалу, дизайну и срокам. Обсудим все детали на консультации."
    },
    {
      question: "Предоставляете ли вы поддержку после запуска проекта?",
      answer: "Да, предоставляю техническую поддержку и обслуживание. Условия обсуждаются индивидуально."
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-xl font-heading font-bold text-purple">Юлия</div>
            <div className="hidden md:flex gap-6 items-center">
              <a href="#about" className="hover:text-purple transition-colors">Обо мне</a>
              <a href="#services" className="hover:text-purple transition-colors">Услуги</a>
              <a href="#portfolio" className="hover:text-purple transition-colors">Портфолио</a>
              <a href="#testimonials" className="hover:text-purple transition-colors">Отзывы</a>
              <a href="#faq" className="hover:text-purple transition-colors">FAQ</a>
              <Button className="bg-purple hover:bg-purple/90">Связаться</Button>
            </div>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-purple-light/30">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-muted-foreground uppercase tracking-wider text-xs">Разработка веб-сайтов и мультимедийного контента для пользователей.</p>
            <h1 className="text-5xl md:text-6xl font-heading font-bold leading-tight">
              Филатова Юлия<br />Дмитриевна
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Разрабатываю веб-приложения с использованием React для сети и React Native для мобильных устройств. Люблю создавать интуитивные интерфейсы с акцентом на производительности.
            </p>
            <Button size="lg" className="bg-dark hover:bg-dark/90 text-white px-8 py-6 text-lg">
              Связаться
            </Button>
          </div>
          <div className="relative animate-fade-in">
            <img 
              src="https://cdn.poehali.dev/files/399ba999-d7c7-4aee-88a0-161555bf42e2.jpg" 
              alt="Филатова Юлия" 
              className="rounded-lg shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-dark text-white">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Обо мне</h2>
          <p className="text-lg leading-relaxed opacity-90">
            Я занимаюсь разработкой современных веб и мультиплатформенных приложений. Мои задачи - создать проектом, которые нравятся пользователям и приносят бизнесу ценность. Уделяю внимание каждой детали и работаю в тесном контакте с заказчиками для достижения наилучшего результата.
          </p>
          <p className="text-lg leading-relaxed opacity-90">
            В работе это скрупулёзная разработка — это скорее и усердие любого проекта: анализ бизнеса — это скорее и контроль качества результат — эти элементарные, которых проектом, исследование психологии пользователей от начала проектирования.
          </p>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-purple text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-white text-dark border-0 hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-purple-light rounded-lg flex items-center justify-center">
                    <Icon name={service.icon} className="text-purple" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Мои работы</h2>
          <div className="max-w-4xl mx-auto">
            {portfolio.map((project, index) => (
              <Card key={index} className="bg-purple-light border-0">
                <CardContent className="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-heading font-bold text-purple">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <ul className="space-y-2">
                      {project.points.map((point, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Icon name="Check" className="text-purple" size={16} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-lg">
                    <div className="aspect-video bg-gradient-to-br from-purple-light to-purple/20 rounded flex items-center justify-center">
                      <Icon name="Monitor" className="text-purple" size={64} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-dark text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-heading font-bold">10+</div>
              <div className="text-lg opacity-80">завершенных проектов</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-heading font-bold">2</div>
              <div className="text-lg opacity-80">года в индустрии</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl md:text-6xl font-heading font-bold">99%</div>
              <div className="text-lg opacity-80">удовлетворенных клиентов</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-purple-light">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">Полезные ссылки</h2>
          <div className="flex justify-center gap-6 mt-8">
            <a 
              href="https://vk.ru/yulia.code" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg hover:scale-105 transition-transform shadow-md"
            >
              <Icon name="MessageCircle" className="text-purple" size={20} />
              <span className="font-medium">ВК</span>
            </a>
            <a 
              href="https://t.me/yulia_code" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg hover:scale-105 transition-transform shadow-md"
            >
              <Icon name="Send" className="text-purple" size={20} />
              <span className="font-medium">Telegram</span>
            </a>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Отзывы</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-purple-light border-0">
                <CardContent className="p-6 space-y-4">
                  <p className="text-muted-foreground italic leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <div className="font-heading font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-purple-light">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">FAQ</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 border-0">
                <AccordionTrigger className="font-heading font-semibold hover:text-purple">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-dark text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Контакты</h2>
              <div className="space-y-4">
                <a href="tel:+79156264411" className="flex items-center gap-3 text-lg hover:text-purple transition-colors">
                  <Icon name="Phone" size={20} />
                  +79156264411
                </a>
                <a href="mailto:yulya.filatova@mail.ru" className="flex items-center gap-3 text-lg hover:text-purple transition-colors">
                  <Icon name="Mail" size={20} />
                  yulya.filatova@mail.ru
                </a>
                <div className="flex items-center gap-3 text-lg">
                  <Icon name="MapPin" size={20} />
                  Москва, ул. Пушкинская, д.84
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <a href="https://vk.ru/yulia.code" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple transition-colors">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="https://t.me/yulia_code" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple transition-colors">
                  <Icon name="Send" size={20} />
                </a>
                <a href="https://github.com/yulia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-purple transition-colors">
                  <Icon name="Github" size={20} />
                </a>
              </div>
            </div>
            <div>
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-heading font-semibold text-xl">Оставьте контакты, я с вами свяжусь в ближайшее время</h3>
                  <Input placeholder="Ваше имя" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                  <Input placeholder="Телефон" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                  <Textarea placeholder="Проект" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-24" />
                  <Button className="w-full bg-purple hover:bg-purple/90">Отправить</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-6 px-4 bg-black text-white/60 text-center text-sm">
        <div className="container mx-auto">
          © {new Date().getFullYear()} Филатова Юлия. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Index;
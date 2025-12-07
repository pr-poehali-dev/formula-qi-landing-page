import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleJoin = () => {
    window.open('https://olvonata.ru/formulaqi_payment', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-accent/10 via-secondary/5 to-primary/5">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-secondary/10 to-primary/20 blur-3xl opacity-50"></div>
        <div className="container mx-auto px-4 py-32 text-center animate-fade-in relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
              <img 
                src="https://cdn.poehali.dev/projects/0f6687d2-50a7-41ee-a465-9b5da5569351/files/5761ca3b-0b15-4812-a986-2071b1d5945a.jpg" 
                alt="Формула Ци" 
                className="w-40 h-40 mx-auto object-contain relative z-10 drop-shadow-2xl"
              />
            </div>
            <h1 className="font-serif text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-6 leading-tight">
              Формула Ци
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/70 mb-6 font-light tracking-wide">
              Утренний клуб энергетических практик
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12"></div>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-16 py-7 text-xl rounded-full shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 font-medium"
              onClick={handleJoin}
            >
              Присоединиться к клубу
            </Button>

          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Программа клуба
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-2xl transition-all hover:-translate-y-2 border-0 bg-white/80 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-4 rounded-2xl">
                  <Icon name="Calendar" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-3">Живые эфиры</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    3 раза в неделю проходят эфиры — живые встречи, 
                    где вы наполняетесь энергией вместе с сообществом в прямом эфире
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover:shadow-2xl transition-all hover:-translate-y-2 border-0 bg-white/80 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 p-4 rounded-2xl">
                  <Icon name="Video" size={28} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-3">Библиотека практик</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Все записи эфиров сохраняются в библиотеке — занимайтесь в удобное время, 
                    повторяйте любимые практики сколько угодно раз
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover:shadow-2xl transition-all hover:-translate-y-2 border-0 bg-white/80 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-2xl">
                  <Icon name="Users" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-3">Сообщество</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Круг единомышленников, где поддерживают и делятся опытом — 
                    такая среда бесценна для мотивации
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover:shadow-2xl transition-all hover:-translate-y-2 border-0 bg-white/80 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/10 p-4 rounded-2xl">
                  <Icon name="Heart" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-3">Система Бадди</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    У каждого участника есть Бадди — партнер и напарник, опытный практик, 
                    который будет рядом, поддержит и поможет на вашем пути
                  </p>
                </div>
              </div>
            </Card>
            
          </div>
        </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-primary/5 to-secondary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
              Почему именно клуб?
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
              А не видео в YouTube или занятия под рилсы?
            </p>
            
            <div className="max-w-3xl mx-auto mb-16">
              <p className="text-xl text-center text-muted-foreground leading-relaxed mb-6">
                <span className="font-bold">Ваше время слишком ценно</span>, чтобы тратить его на скроллинг ленты или попытки договориться с собой.
              </p>
              <p className="text-xl text-center text-muted-foreground leading-relaxed">
                Здесь — <span className="font-bold">выверенные веками практики</span>, которые дают вам то, что вы ищите — притягательную энергию, ясность мышления и здоровое подтянутое тело
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="p-6 text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-0 bg-white/90 backdrop-blur">
                <div className="inline-flex p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl mb-4">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-3 text-foreground">
                  Экономия времени
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Не нужно скролить ленту. 20-25 мин в день — практики проверенные веками, с правильной техникой, поступательным углублением и личной поддержкой!
                </p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-0 bg-white/90 backdrop-blur">
                <div className="inline-flex p-4 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl mb-4">
                  <Icon name="DollarSign" size={32} className="text-secondary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-3 text-foreground">
                  Доступность
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  За стоимость чашки кофе в день — не кофеиновая атака, а мощнейший инструмент для здоровья и душевной гармонии
                </p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-0 bg-white/90 backdrop-blur">
                <div className="inline-flex p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl mb-4">
                  <Icon name="Heart" size={32} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-3 text-foreground">
                  Индивидуальный подход
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Рассчитывайте на мою поддержку: задайте вопрос в чате, пришлите видео для проверки техники 🙌
                </p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-0 bg-white/90 backdrop-blur">
                <div className="inline-flex p-4 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl mb-4">
                  <Icon name="Star" size={32} className="text-secondary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-3 text-foreground">
                  Эксклюзивность
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Не просто «китайская зарядка из интернета». Древние практики и комплексы из вторых рук 🤜 от лучших мастеров Китая
                </p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-0 bg-white/90 backdrop-blur">
                <div className="inline-flex p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl mb-4">
                  <Icon name="TrendingUp" size={32} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-3 text-foreground">
                  Инвестиция в себя
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  25 мин времени и меньше 250₽ за занятие — всё, что нужно для шага к лучшей версии себя! Быть здоровой, стройной, энергичной можно в любом возрасте 😅
                </p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-0 bg-white/90 backdrop-blur">
                <div className="inline-flex p-4 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl mb-4">
                  <Icon name="CalendarClock" size={32} className="text-secondary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-3 text-foreground">
                  Гарантия результата
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Постоянная практика выводит состояние в 🔝: энергия, настроение, либидо, здоровье. Это не побочный эффект — это результат, который не дадут 5-минутки за рилсами!
                </p>
              </Card>
              
              <Card className="p-6 text-center hover:shadow-2xl transition-all hover:-translate-y-2 border-0 bg-white/90 backdrop-blur">
                <div className="inline-flex p-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl mb-4">
                  <Icon name="Sparkles" size={32} className="text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-3 text-foreground">
                  Окружение
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Когда знаешь, что в этот час с тобой десятки людей по всему миру — такую мотивацию не переоценить! Плюс шанс найти новых друзей 🌍
                </p>
              </Card>
              
            </div>
            
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-14 py-7 text-xl rounded-full shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105"
                onClick={handleJoin}
              >
                Начать трансформацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Objections Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-accent/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Сомневаетесь?
          </h2>
          <div className="space-y-6">
            <Card className="p-8 hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-primary">«Некогда»</h3>
              <p className="text-muted-foreground leading-relaxed">
                Понимаю! Поэтому в клубе эфиры всего по 15-20 минут. Это меньше, чем вы тратите на утренний кофе. Но эти минуты перезагрузки сэкономят вам часы за счёт энергии и концентрации в течение дня. Это не трата времени — это его инвестиция.
              </p>
            </Card>
            
            <Card className="p-8 hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-secondary">«Дорого»</h3>
              <p className="text-muted-foreground leading-relaxed">
                Задайте себе вопрос: сколько вы готовы платить за то, чтобы просыпаться с энергией, а не с усталостью? Это дешевле, чем два сеанса массажа в месяц, но эффект — каждый день. Вы покупаете не курс, а источник сил. И это лучшая инвестиция в себя.
              </p>
            </Card>
            
            <Card className="p-8 hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-primary">«Всё равно не буду заниматься»</h3>
              <p className="text-muted-foreground leading-relaxed">
                Именно для этого у нас в клубе есть «Мой Бадди» — ваш напарник, который будет вас мягко поддерживать. Вы не одни. Когда есть круг своих, заниматься в 10 раз легче. Попробуйте одну неделю с поддержкой — и вы почувствуете разницу.
              </p>
            </Card>
            
            <Card className="p-8 hover:shadow-2xl transition-all border-0 bg-white/80 backdrop-blur">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-secondary">«Сейчас не время»</h3>
              <p className="text-muted-foreground leading-relaxed">
                Самое лучшее время — когда есть запрос. Через месяц ваша усталость не исчезнет, просто вы к ней привыкнете. А могли бы за этот месяц уже ощутить прилив сил. Давайте начнём с понедельника — пока желание свежо. Завтра ваш будущий я скажет вам спасибо.
              </p>
            </Card>
          </div>
        </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Расписание занятий
          </h2>
          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <Icon name="Radio" size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Живые эфиры</h4>
                  <p className="text-muted-foreground">3 раза в неделю — встречи в прямом эфире с ведущим</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-2 rounded-full mt-1">
                  <Icon name="Library" size={20} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Библиотека практик</h4>
                  <p className="text-muted-foreground">Все записи эфиров доступны 24/7 — занимайтесь когда удобно</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent p-2 rounded-full mt-1">
                  <Icon name="Clock" size={20} className="text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Гибкий график</h4>
                  <p className="text-muted-foreground">Не успели на эфир? Смотрите запись в удобное время</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-accent/10 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <div className="text-6xl relative z-10 filter drop-shadow-lg">☯️</div>
          </div>
          <p className="text-2xl md:text-3xl text-foreground leading-relaxed font-light">
            В основе нашей <span className="font-serif font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Формулы Ци</span> лежит принцип даосской алхимии — глубокого преобразования внутренней энергии
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-accent/20 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Стоимость подписки
          </h2>
          <Card className="p-12 border-2 border-primary shadow-2xl hover:shadow-primary/30 transition-all bg-gradient-to-b from-white to-accent/10">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">В стоимость всех тарифов входит:</h3>
              <ul className="text-left space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span><span className="font-semibold">Библиотека знаний</span> — записи всех предыдущих уроков</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span><span className="font-semibold">Карты комплексов</span> — схематическое изображение и описание упражнений</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span><span className="font-semibold">Чат клуба</span> — проверка техники с Еленой</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span><span className="font-semibold">Все прямые эфиры и марафоны</span> в рамках клуба</span>
                </li>
              </ul>
            </div>
            <Button 
              size="lg" 
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white py-7 text-xl rounded-full shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105"
              onClick={handleJoin}
            >
              Присоединиться сейчас
            </Button>
          </Card>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Контакты
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Свяжитесь с нами для вступления в клуб или получения дополнительной информации
          </p>
          <div className="flex justify-center gap-6">
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 px-10 py-7 text-lg rounded-full hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:border-primary transition-all hover:scale-105 border-2"
              onClick={() => window.open('https://t.me/formulaci', '_blank')}
            >
              <Icon name="Send" size={24} />
              Telegram
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 px-10 py-7 text-lg rounded-full hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:border-primary transition-all hover:scale-105 border-2"
              onClick={() => window.open('https://instagram.com/formulaci', '_blank')}
            >
              <Icon name="Instagram" size={24} />
              Instagram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground/5 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="font-serif text-lg">Формула Ци © 2024</p>
          <p className="text-sm mt-2">Закрытый клуб энергетических практик</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
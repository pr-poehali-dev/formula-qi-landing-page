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
              Закрытый клуб энергетических практик
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Ваш путь к энергии, ясности ума и молодости через выверенную систему практик
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-16 py-7 text-xl rounded-full shadow-2xl hover:shadow-primary/50 transition-all hover:scale-105 font-medium"
                onClick={handleJoin}
              >
                Присоединиться к клубу
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-left">
              <div className="bg-white/80 backdrop-blur px-6 py-4 rounded-2xl shadow-lg">
                <div className="text-sm text-muted-foreground mb-1">Разовая оплата</div>
                <div className="text-3xl font-bold text-foreground">3 900 ₽</div>
                <div className="text-sm text-muted-foreground">за 1 месяц</div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur px-6 py-4 rounded-2xl shadow-xl border-2 border-primary/30">
                <div className="text-sm text-secondary font-semibold mb-1">💎 Выгодная подписка</div>
                <div className="text-3xl font-bold text-primary">2 900 ₽</div>
                <div className="text-sm text-muted-foreground">в месяц при подписке</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-20 animate-slide-up">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Что такое клуб Формула Ци
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Это не просто набор упражнений — это система, которая дает прогнозируемый результат. 
            Мы создали пространство, где единомышленники поддерживают друг друга на пути к энергии и балансу.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            В клубе вас ждет выверенная методология «Формула Ци», которая экономит ваше время 
            и дает реальные результаты — больше энергии, ясность ума и ощущение молодости.
          </p>
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
            <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
              А не видео в YouTube или занятия под рилсы?
            </p>
            
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

      {/* Levels Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-accent/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Уровни участников
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-10 text-center hover:scale-105 transition-all hover:shadow-2xl border-0 bg-white/80 backdrop-blur">
              <div className="text-6xl mb-6 filter drop-shadow-lg">🐦</div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Жаворонки</h3>
              <p className="text-muted-foreground">
                Новенькие в клубе, начинающие свой путь к энергии и балансу
              </p>
            </Card>
            
            <Card className="p-10 text-center hover:scale-105 transition-all hover:shadow-2xl border-2 border-primary bg-gradient-to-b from-primary/5 to-white/80 backdrop-blur shadow-lg shadow-primary/20">
              <div className="text-6xl mb-6 filter drop-shadow-lg">🦅</div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Соколы</h3>
              <p className="text-muted-foreground">
                Выпускники курсов, которые продолжают практику и совершенствуются
              </p>
            </Card>
            
            <Card className="p-10 text-center hover:scale-105 transition-all hover:shadow-2xl border-0 bg-white/80 backdrop-blur">
              <div className="text-6xl mb-6 filter drop-shadow-lg">🐦‍🔥</div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Фениксы</h3>
              <p className="text-muted-foreground">
                Участники ретритов, прошедшие трансформацию и возродившиеся заново
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

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-20 bg-gradient-to-b from-accent/20 to-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Стоимость подписки
          </h2>
          <Card className="p-12 border-2 border-primary shadow-2xl hover:shadow-primary/30 transition-all bg-gradient-to-b from-white to-accent/10">
            <div className="mb-6">
              <div className="text-sm text-muted-foreground mb-2">Выберите удобный тариф:</div>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/50 p-6 rounded-2xl border border-primary/20">
                  <div className="text-lg text-muted-foreground mb-2">Разовая оплата</div>
                  <div className="text-4xl font-bold text-foreground mb-1">3 900 ₽</div>
                  <div className="text-sm text-muted-foreground">за 1 месяц</div>
                </div>
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-6 rounded-2xl border-2 border-primary">
                  <div className="text-lg font-semibold text-secondary mb-2">💎 Подписка (выгоднее!)</div>
                  <div className="text-4xl font-bold text-primary mb-1">2 900 ₽</div>
                  <div className="text-sm text-muted-foreground">в месяц</div>
                </div>
              </div>
            </div>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                <span>3 живых эфира в неделю</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                <span>Библиотека всех записей эфиров</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                <span>Личный наставник (система Бадди)</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                <span>Поддержка сообщества</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                <span>Выверенная методология</span>
              </li>
            </ul>
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
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleJoin = () => {
    window.open('https://t.me/formulaci', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-accent/20 to-white">
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://cdn.poehali.dev/projects/0f6687d2-50a7-41ee-a465-9b5da5569351/files/5761ca3b-0b15-4812-a986-2071b1d5945a.jpg" 
            alt="Формула Ци" 
            className="w-32 h-32 mx-auto mb-8 object-contain"
          />
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Формула Ци
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Закрытый клуб энергетических практик
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ваш путь к энергии, ясности ума и молодости через выверенную систему практик
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            onClick={handleJoin}
          >
            Присоединиться к клубу
          </Button>
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
      <section className="container mx-auto px-4 py-20 bg-accent/30 -mx-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Программа клуба
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon name="Calendar" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-3">Живые практики</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    3 раза в неделю выходит практика со мной — живые занятия, 
                    где вы наполняетесь энергией вместе с сообществом
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Icon name="Video" size={28} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-3">Записи уроков</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    3 раза в неделю вы повторяете практику по записи или самостоятельно — 
                    гибкий график под вашу жизнь
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-accent p-3 rounded-full">
                  <Icon name="Users" size={28} className="text-accent-foreground" />
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
            
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon name="Coffee" size={28} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-3">Выходной день</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Один день для восстановления. Скоро добавим специальный день для «старичков» — 
                    выпускников курсов
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Три причины вступить в клуб
          </h2>
          <div className="space-y-8">
            <Card className="p-8 border-l-4 border-primary hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-primary">
                1. Доступ к силе сообщества без больших вложений
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Вы попадаете в круг единомышленников, где поддерживают и делятся опытом. 
                Такая среда бесценна для мотивации, а в клубе она становится доступной.
              </p>
            </Card>
            
            <Card className="p-8 border-l-4 border-secondary hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-secondary">
                2. Ваш самый выгодный контракт — с собой
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Это не расход, а первая и самая важная инвестиция в себя. Когда вы наполнены энергией, 
                вы лучше работаете, больше успеваете и, как следствие, начинаете больше зарабатывать. 
                Клуб — это стартовый капитал для вашего рывка.
              </p>
            </Card>
            
            <Card className="p-8 border-l-4 border-primary hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl font-semibold mb-4 text-primary">
                3. Система, а не разрозненные практики
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ваше время слишком ценно, чтобы тратить его на поиск и отбор. В клубе вас ждет 
                выверенная методология «Формула Ци», которая дает прогнозируемый результат — 
                энергию, ясность ума и молодость.
              </p>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={handleJoin}
            >
              Начать трансформацию
            </Button>
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Уровни участников
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🐦</div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Жаворонки</h3>
              <p className="text-muted-foreground">
                Новенькие в клубе, начинающие свой путь к энергии и балансу
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:scale-105 transition-transform border-2 border-primary">
              <div className="text-5xl mb-4">🦅</div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Соколы</h3>
              <p className="text-muted-foreground">
                Выпускники курсов, которые продолжают практику и совершенствуются
              </p>
            </Card>
            
            <Card className="p-8 text-center hover:scale-105 transition-transform">
              <div className="text-5xl mb-4">🐦‍🔥</div>
              <h3 className="font-serif text-2xl font-semibold mb-4">Фениксы</h3>
              <p className="text-muted-foreground">
                Участники ретритов, прошедшие трансформацию и возродившиеся заново
              </p>
            </Card>
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
                  <Icon name="Star" size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Живые практики с ведущим</h4>
                  <p className="text-muted-foreground">3 раза в неделю — онлайн-занятия в реальном времени</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-2 rounded-full mt-1">
                  <Icon name="Play" size={20} className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Практика по записи</h4>
                  <p className="text-muted-foreground">3 раза в неделю — самостоятельно или по видеозаписям</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-accent p-2 rounded-full mt-1">
                  <Icon name="Moon" size={20} className="text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Выходной день</h4>
                  <p className="text-muted-foreground">1 день в неделю — для восстановления и интеграции</p>
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
          <Card className="p-12 border-2 border-primary shadow-xl">
            <div className="mb-6">
              <div className="text-6xl font-bold text-primary mb-2">2 900 ₽</div>
              <div className="text-xl text-muted-foreground">в месяц</div>
            </div>
            <ul className="text-left space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                <span>3 живые практики в неделю</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                <span>Доступ ко всем записям</span>
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
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
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
              className="gap-2 px-8 py-6 text-lg rounded-full hover:bg-primary/10 hover:border-primary transition-all"
              onClick={() => window.open('https://t.me/formulaci', '_blank')}
            >
              <Icon name="Send" size={24} />
              Telegram
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 px-8 py-6 text-lg rounded-full hover:bg-primary/10 hover:border-primary transition-all"
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

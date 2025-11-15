import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

type Post = {
  id: number;
  title: string;
  category: 'Рецепты' | 'Путешествия' | 'Увлечения';
  image: string;
  content: string | string[];
  type?: 'recipe' | 'travel' | 'hobby' | 'podcast' | 'comic';
};

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Главная');

  const posts: Post[] = [
    {
      id: 1,
      title: 'Круггетсы для посиделок с друзьями',
      category: 'Рецепты',
      image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800&h=600&fit=crop',
      content: 'Фарш, сыр, панировка — и через 25 минут на столе появляется вот это хрустящее чудо с сырной душой.',
      type: 'recipe'
    },
    {
      id: 2,
      title: 'Обзор кухонной техники',
      category: 'Увлечения',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop',
      content: 'Мой опыт использования различных кухонных гаджетов и техники для готовки.',
      type: 'hobby'
    },
    {
      id: 3,
      title: 'Квест «Игра в кальмара»',
      category: 'Увлечения',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop',
      content: 'Незабываемое приключение и испытание на командную работу!',
      type: 'hobby'
    },
    {
      id: 4,
      title: 'Отдых на рыбалке',
      category: 'Путешествия',
      image: 'https://images.unsplash.com/photo-1532843862119-d39d6d0446f5?w=800&h=600&fit=crop',
      content: 'Спокойствие, природа и умиротворение у воды.',
      type: 'travel'
    },
    {
      id: 5,
      title: 'Сырники для братьев',
      category: 'Рецепты',
      image: 'https://images.unsplash.com/photo-1612240498936-65f4738fdb25?w=800&h=600&fit=crop',
      content: [
        '1. Творог (400 г), яйцо, сахар (2-3 ст.л.), мука (4-5 ст.л.). Можно добавить ванилин.',
        '2. Всё смешать.',
        '3. Жарить на среднем огне до золотистости.'
      ],
      type: 'recipe'
    },
    {
      id: 6,
      title: 'Путешествие по Дагестану',
      category: 'Путешествия',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      content: 'Горы, история и невероятное гостеприимство.',
      type: 'travel'
    },
    {
      id: 7,
      title: 'Бургер в лаваше',
      category: 'Рецепты',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop',
      content: [
        '• Сочные котлеты (говяжьи, но берите любые)',
        '• Фиолетовый лук тонкими кольцами (он слаще и красивее!)',
        '• Хрустящая брюссельская капуста (немного обжарила для мягкости)',
        '• Любимый томатный соус (у меня был острый чили, но подойдет любой: кетчуп, барбекю, даже сметана с чесноком)',
        '• И, конечно, хороший расплавленный сыр!'
      ],
      type: 'recipe'
    },
    {
      id: 8,
      title: 'Главный ингредиент готовки',
      category: 'Увлечения',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop',
      content: 'Главный ингредиент готовки — это то, для кого ты готовишь и с какими чувствами.',
      type: 'comic'
    },
    {
      id: 9,
      title: 'Подкаст про путешествия',
      category: 'Путешествия',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800&h=600&fit=crop',
      content: 'Путешествие = диалог с самим собой',
      type: 'podcast'
    }
  ];

  const filteredPosts = activeFilter === 'Главная' 
    ? posts 
    : posts.filter(post => post.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="font-heading font-bold text-xl">Мой Блог</h1>
            <div className="flex gap-6">
              {['Главная', 'Рецепты', 'Путешествия', 'Увлечения'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveFilter(item)}
                  className={`font-medium transition-colors ${
                    activeFilter === item
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {activeFilter === 'Главная' && (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/files/2f1378b3-d037-4810-a93b-65ee7d62af10.jpeg"
                alt="Профиль"
                className="w-40 h-40 rounded-full mx-auto object-cover shadow-lg"
              />
            </div>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-4 animate-fade-in">
              Привет! Я студентка РГУПС
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Делюсь своими рецептами, путешествиями и увлечениями. Здесь вы найдете вкусные идеи для готовки и вдохновение для новых приключений.
            </p>
          </div>
        </section>
      )}

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                      {post.category}
                    </span>
                    {post.type === 'recipe' && <Icon name="ChefHat" size={16} className="text-muted-foreground" />}
                    {post.type === 'travel' && <Icon name="Plane" size={16} className="text-muted-foreground" />}
                    {post.type === 'podcast' && <Icon name="Mic2" size={16} className="text-muted-foreground" />}
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">{post.title}</h3>
                  <div className="text-muted-foreground text-sm">
                    {Array.isArray(post.content) ? (
                      <ul className="space-y-1">
                        {post.content.slice(0, 3).map((line, i) => (
                          <li key={i} className="line-clamp-1">{line}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="line-clamp-3">{post.content}</p>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          <p>© 2024 Мой Блог. Создано с любовью.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

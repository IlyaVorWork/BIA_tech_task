export interface Email {
  theme: string;
  date: Date;
  from: string;
  to: string;
  attachments: number;
  messages?: null;
}

export const mockEmails: Email[] = [
  {
    theme: "Доставка оборудования Москва - Казань",
    date: new Date('2023-05-15T09:30:00'),
    from: 'ivanov.i@company.ru',
    to: 'petrov.a@logistics.com',
    attachments: 2
  },
  {
    theme: "Перевозка мебели СПб - Сочи",
    date: new Date('2023-06-22T14:45:00'),
    from: 'sidorova.m@mail.ru',
    to: 'kuznetsov.v@transport.org',
    attachments: 5
  },
  {
    theme: "Грузоперевозки Екатеринбург - Новосибирск",
    date: new Date('2023-07-10T11:20:00'),
    from: 'freight@ural-trans.ru',
    to: 'logistics@siblogist.ru',
    attachments: 3
  },
  {
    theme: "Экспресс-доставка документов Москва - Ростов",
    date: new Date('2023-08-05T16:10:00'),
    from: 'express@delivery.ru',
    to: 'manager@rostov-company.com',
    attachments: 1
  },
  {
    theme: "Транспортировка холодильников Самара - Воронеж",
    date: new Date('2023-09-18T10:00:00'),
    from: 'refrigerator.transport@cold.ru',
    to: 'voronezh.warehouse@storage.com',
    attachments: 4
  },
  {
    theme: "Междугородние перевозки Нижний Новгород - Краснодар",
    date: new Date('2023-10-30T13:25:00'),
    from: 'nn-transport@mail.ru',
    to: 'krasnodar.logist@kuban.ru',
    attachments: 7
  },
  {
    theme: "Доставка строительных материалов Москва - Калининград",
    date: new Date('2023-11-12T08:40:00'),
    from: 'stroy.mat@build.com',
    to: 'kaliningrad.remont@dom.ru',
    attachments: 6
  },
  {
    theme: "Перевозка автомобильных запчастей Тольятти - Уфа",
    date: new Date('2023-12-03T12:15:00'),
    from: 'auto.parts@tolyatti.ru',
    to: 'ufa.garage@service.com',
    attachments: 3
  },
  {
    theme: "Доставка продуктов питания Москва - Владивосток",
    date: new Date('2024-01-20T07:50:00'),
    from: 'food.delivery@market.ru',
    to: 'vladivostok.store@far-east.com',
    attachments: 8
  },
  {
    theme: "Транспортировка промышленного оборудования Челябинск - Пермь",
    date: new Date('2024-02-14T15:30:00'),
    from: 'industry@chel-mash.ru',
    to: 'perm.engineering@tech.com',
    attachments: 5
  },
  {
    theme: "Грузоперевозки Волгоград - Астрахань",
    date: new Date('2024-03-08T11:10:00'),
    from: 'volgograd.cargo@volga.ru',
    to: 'astrakhan.logistics@caspiy.com',
    attachments: 2
  },
  {
    theme: "Доставка медицинских препаратов Москва - Иркутск",
    date: new Date('2024-04-25T09:45:00'),
    from: 'pharma@med-delivery.ru',
    to: 'irkutsk.hospital@health.gov',
    attachments: 4
  },
  {
    theme: "Перевозка электроники Санкт-Петербург - Тюмень",
    date: new Date('2024-05-17T13:20:00'),
    from: 'electronics@spb-tech.ru',
    to: 'tyumen.store@digital.com',
    attachments: 6
  },
  {
    theme: "Доставка книг Москва - Омск",
    date: new Date('2024-06-09T10:05:00'),
    from: 'book.delivery@lib.ru',
    to: 'omsk.library@culture.gov',
    attachments: 1
  },
  {
    theme: "Транспортировка сельхозтехники Ростов - Ставрополь",
    date: new Date('2024-07-22T14:50:00'),
    from: 'agro.tech@rostov-agro.ru',
    to: 'stavropol.farm@agro.com',
    attachments: 7
  },
  {
    theme: "Грузоперевозки Ярославль - Кострома",
    date: new Date('2024-08-11T08:30:00'),
    from: 'yaroslavl.trans@yar.ru',
    to: 'kostroma.logistics@central.ru',
    attachments: 3
  },
  {
    theme: "Доставка одежды Москва - Красноярск",
    date: new Date('2024-09-05T16:25:00'),
    from: 'fashion.delivery@cloth.ru',
    to: 'krasnoyarsk.store@fashion.com',
    attachments: 5
  },
  {
    theme: "Перевозка бытовой техники Казань - Ульяновск",
    date: new Date('2024-10-19T12:15:00'),
    from: 'home.appliances@kazan-tech.ru',
    to: 'ulyanovsk.electronics@dom.ru',
    attachments: 4
  },
  {
    theme: "Доставка спортивного инвентаря Москва - Владимир",
    date: new Date('2024-11-30T10:40:00'),
    from: 'sport.goods@fit.ru',
    to: 'vladimir.gym@sport.gov',
    attachments: 2
  },
  {
    theme: "Транспортировка металлопроката Магнитогорск - Челябинск",
    date: new Date('2024-12-14T09:20:00'),
    from: 'metal.transport@mmk.ru',
    to: 'chel.metall@industry.com',
    attachments: 6
  },
  {
    theme: "Грузоперевозки Тверь - Смоленск",
    date: new Date('2025-01-08T11:55:00'),
    from: 'tver.cargo@central.ru',
    to: 'smolensk.logistics@west.com',
    attachments: 3
  },
  {
    theme: "Доставка игрушек Москва - Белгород",
    date: new Date('2025-02-22T15:10:00'),
    from: 'toys.delivery@kidshop.ru',
    to: 'belgorod.store@children.com',
    attachments: 4
  },
  {
    theme: "Перевозка химических веществ Дзержинск - Нижний Новгород",
    date: new Date('2025-03-17T13:45:00'),
    from: 'chem.transport@dzr.ru',
    to: 'nn.chemicals@industry.gov',
    attachments: 7
  },
  {
    theme: "Доставка алкогольной продукции Краснодар - Ростов",
    date: new Date('2025-04-05T10:30:00'),
    from: 'wine.delivery@kuban.ru',
    to: 'rostov.bar@restaurant.com',
    attachments: 5
  },
  {
    theme: "Транспортировка зерна Воронеж - Липецк",
    date: new Date('2025-05-19T08:15:00'),
    from: 'grain.transport@agro-vrn.ru',
    to: 'lipetsk.mill@agro.com',
    attachments: 3
  },
  {
    theme: "Грузоперевозки Пенза - Саратов",
    date: new Date('2025-06-12T14:20:00'),
    from: 'penza.cargo@volga.ru',
    to: 'saratov.logistics@volgograd.com',
    attachments: 2
  },
  {
    theme: "Доставка косметики Москва - Тула",
    date: new Date('2025-07-25T11:05:00'),
    from: 'cosmetic.delivery@beauty.ru',
    to: 'tula.store@cosmetics.com',
    attachments: 6
  },
  {
    theme: "Перевозка мебели Иваново - Ярославль",
    date: new Date('2025-08-09T16:50:00'),
    from: 'furniture.transport@ivanovo.ru',
    to: 'yaroslavl.store@home.com',
    attachments: 4
  },
  {
    theme: "Доставка стройматериалов Москва - Брянск",
    date: new Date('2025-09-30T09:35:00'),
    from: 'build.mat@stroy.ru',
    to: 'bryansk.remont@dom.com',
    attachments: 5
  },
  {
    theme: "Транспортировка автомобилей Набережные Челны - Ульяновск",
    date: new Date('2025-10-14T12:40:00'),
    from: 'car.transport@kamaz.ru',
    to: 'ulyanovsk.dealer@auto.com',
    attachments: 8
  }
]
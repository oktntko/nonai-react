const { faker } = require("@faker-js/faker");
const dayjs = require("dayjs");

const invoice = (invoice_id) => {
  return {
    invoice_id: invoice_id ? invoice_id : faker.datatype.number({ min: 1000, max: 9999 }),
    status: [
      "DRAFT" /*下書き*/,
      "CONFIRMED" /*確認済み*/,
      "SENT" /*請求済み*/,
      "PAID" /*支払済み*/,
      "PAST_DUE" /*期限切れ*/,
    ].at(faker.datatype.number({ min: 0, max: 4 })),
    installments: [null, true, false].at(faker.datatype.number({ min: 0, max: 2 })),
    total: faker.commerce.price(10_000, 1_000_000),
    invoice_date: dayjs(faker.date.past()).format("YYYY-MM-DD"),
    payment_due_date: dayjs(faker.date.future()).format("YYYY-MM-DD"),
    notes: faker.lorem.paragraphs(3),

    items: [...Array(4)].map(item),
    client: client(),
    salesperson: salesperson(),
  };
};

const item = () => {
  const cost = faker.datatype.number({ min: 1000, max: 9999 });
  const qty = faker.datatype.number({ min: 100, max: 999 });
  return {
    item_name: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    cost,
    qty,
    amount: cost * qty,
  };
};

const client = (client_id) => {
  return {
    client_id: client_id ? client_id : faker.datatype.uuid(),
    client_name: `${faker.name.lastName()} ${faker.name.firstName()}`,
    avatar: faker.internet.avatar(),
    company_name: `${faker.company.companyName()} ${faker.company.companySuffix()}`,
    country: faker.address.country(),
    address: `${faker.address.cityPrefix()} ${faker.address.cityName()} ${faker.address.citySuffix()} ${faker.address.streetName()} ${faker.address.streetAddress()}`,
    email: faker.internet.email(),
    phone_number: faker.phone.phoneNumber(),
  };
};

const salesperson = (salesperson_id) => {
  return {
    salesperson_id: salesperson_id ? salesperson_id : faker.datatype.uuid(),
    salesperson_name: faker.name.firstName(),
    avatar: faker.internet.avatar(),
    catch_phrase: faker.company.catchPhrase(),
    company_name: `${faker.company.companyName()} ${faker.company.companySuffix()}`,
    country: faker.address.country(),
    address: `${faker.address.cityPrefix()} ${faker.address.cityName()} ${faker.address.citySuffix()} ${faker.address.streetName()} ${faker.address.streetAddress()}`,
    email: faker.internet.email(),
    phone_number: faker.phone.phoneNumber(),
  };
};

const payee = () => {
  return {
    bank_name: faker.name.findName(),
    country: faker.address.country(),
    iban: faker.finance.iban(true),
    swift_code: faker.finance.bic(),
  };
};

const user = (user_id) => {
  const email = faker.internet.email();
  faker.company.catchPhrase;
  return {
    user_id: user_id ? user_id : email.split("@")[0],
    username: `${faker.name.lastName()} ${faker.name.firstName()}`,
    avatar: faker.internet.avatar(),
    country: faker.address.country(),
    address: `${faker.address.cityPrefix()} ${faker.address.cityName()} ${faker.address.citySuffix()} ${faker.address.streetName()} ${faker.address.streetAddress()}`,
    email,
    phone_number: faker.phone.phoneNumber(),
    syozoku: [...Array(faker.datatype.number({ min: 1, max: 5 }))] // 所属する組織のイメージ
      .map(() => faker.company.bsBuzz())
      .join(" > "),
    yakusyoku: [
      "代表取締役社長", //  1
      "専務取締役", //      2
      "常務取締役", //      3
      "本部長", //          4
      "部長", //            5
      "次長", //            6
      "課長", //            7
      "係長", //            8
      "主任", //            9
      "一般社員", //       10
    ].at(faker.datatype.number({ min: 0, max: 9 })),
    last_login_timestamp: faker.datatype.datetime({ max: Date.now() }),
  };
};

const ticket = (statuses, ticket_id) => {
  return {
    ticket_id: ticket_id ? ticket_id : faker.datatype.number({ min: 1000, max: 9999 }),
    status: statuses.at(faker.datatype.number({ min: 0, max: statuses.length - 1 })),
    assign: faker.name.firstName(),
    due_date: dayjs(faker.date.future()).format("YYYY-MM-DD"),
    title: faker.lorem.words(),
    notes: faker.lorem.paragraphs(3),
    tags: [...Array(faker.datatype.number({ min: 0, max: 3 }))].map(faker.lorem.word),
  };
};

exports.invoice = invoice;
exports.client = client;
exports.salesperson = salesperson;
exports.payee = payee;
exports.user = user;
exports.ticket = ticket;

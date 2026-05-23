import { LookbookItem, Testimonial, FAQItem } from './types';

export const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: 'al-1',
    title: 'Vestido Eloise',
    category: 'Golden Hour',
    price: 'R$ 79,00',
    image: '/vestido.jpg'
  },
  {
    id: 'al-2',
    title: 'Blusa Tricô',
    category: 'Casual Chic',
    price: 'R$ 99,00',
    image: '/vestido2.jpg'
  },
  {
    id: 'al-3',
    title: 'Macacão Carolyn',
    category: 'Casual Chic',
    price: 'R$ 324,00',
    image: '/vestido3.jpg'
  },
  {
    id: 'al-4',
    title: 'Body Carla',
    category: 'Casual Chic',
    price: 'R$ 39,90',
    image: '/vestido4.jpg'
  },
  {
    id: 'al-5',
    title: 'Vestido Tina',
    category: 'Night Out',
    price: 'R$ 139,00',
    image: '/vestido5.jpg'
  },
  {
    id: 'al-6',
    title: 'Tshirt',
    category: 'Night Out',
    price: 'R$ 72,00',
    image: '/vestido6.jpg'
  }
];

export const TESTIMONIALS: Testimonial[] = [];

export const FAQS: FAQItem[] = [
  {
    id: 'f-1',
    question: 'A Alicy\'s possui loja física? Onde fica?',
    answer: 'Sim, possuímos um espaço físico sofisticado e acolhedor esperando por você no Centro de Cruz, Ceará. Estamos localizados na Rua Ezequiel Vasconcelos, 1860. Venha tomar um café conosco e viver uma experiência de moda exclusiva!'
  },
  {
    id: 'f-2',
    question: 'Como faço para comprar online se não sou da região?',
    answer: 'Nosso atendimento online é extremamente ágil e consultivo. Basta clicar em qualquer botão "Tenho Interesse" ou acessar nosso link do WhatsApp e Instagram. Nossa equipe de stylists irá te guiar enviando fotos adicionais, tabelas de tamanhos detalhadas e as melhores opções de envio via Correios ou transportadora para todo o Brasil.'
  },
  {
    id: 'f-3',
    question: 'Quais são as formas de pagamento aceitas?',
    answer: 'As formas de pagamento aceitas são apenas PIX e cartões de crédito.'
  },
  {
    id: 'f-4',
    question: 'Qual o horário de funcionamento da loja física?',
    answer: 'Abrimos de manhã às 08:00 e fechamos às 18:00.'
  }
];

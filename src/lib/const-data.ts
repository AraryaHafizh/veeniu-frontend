import { TicketData } from "@/props/ticket.props";
import {
  BadgeDollarSign,
  BadgePercent,
  CircleUserRound,
  LayoutDashboard,
  PartyPopper,
  Ticket,
} from "lucide-react";

export const categories = [
  "Category",
  "Music",
  "Art",
  "Food",
  "Hobbies",
  "Sports",
  "Comedy",
];

export const cities = [
  "Location",
  "Jakarta",
  "Bandung",
  "Bali",
  "Medan",
  "Makassar",
  "Padang",
];

export const catDropdown = {
  title: "Category",
  items: categories,
};

export const locDropdown = {
  title: "Location",
  items: cities,
};

export const accTableCols = ["No", "EVENT", "DATE", "AMOUNT"];

export const sidebarData = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Event",
    url: "/dashboard/events",
    icon: PartyPopper,
  },
  {
    title: "Voucher",
    url: "/dashboard/vouchers",
    icon: BadgePercent,
  },
  {
    title: "Ticket",
    url: "/dashboard/tickets",
    icon: Ticket,
  },
  {
    title: "Transaction",
    url: "/dashboard/transactions",
    icon: BadgeDollarSign,
  },
  {
    title: "Account",
    url: "/dashboard/account",
    icon: CircleUserRound,
  },
];

export const eventData = {
  id: "clz8t0a5g0001x9z8h2b3k1d0",
  title: "MAHER ZAIN LIVE IN CONCERT : JAKARTA",
  description:
    'Indonesia selalu memiliki tempat istimewa di hati Maher Zain. Setelah penantian panjang, ia akan kembali menyapa para penggemarnya di Indonesia melalui tur spesial bertajuk "Maher Zain Live in Concert: Indonesia Tour 2025". Konser ini akan digelar di tiga kota besar Indonesia: Jakarta, Makassar, dan Surabaya. Siap untuk menghadirkan pengalaman musik yang penuh haru, energi positif, dan nilai-nilai universal yang mengangkat tema cinta, perdamaian, dan keimanan. Maher Zain adalah penyanyi, penulis lagu, dan produser musik yang dikenal luas melalui lagu-lagu bernuansa islami dan inspiratif seperti "Insha Allah", "Ya Nabi Salam Alayka", "Thank You Allah", dan "Number One for Me". Dengan gaya musik yang memadukan pop modern, soul, dan unsur-unsur spiritual, Maher Zain berhasil menjembatani budaya dan bahasa, menjadikan musiknya relevan dan menyentuh hati lintas generasi dan negara. Melalui konser ini, Maher Zain ingin kembali menyapa, berbagi pesan damai, dan menyemangati para penggemarnya di tanah air secara langsung. Untuk itu, jangan lewatkan kesempatan langka untuk menyaksikan sang idola tampil langsung dan merayakan kebersamaan dalam lantunan lagu-lagu yang penuh makna.',
  imageUrl:
    "https://assets.loket.com/neo/production/images/banner/20250923114929_68d226d9ed22f.jpeg",
  category: "Music",
  location: "Jakarta",
  startDate: "2025-12-20T16:00:00.000Z",
  endDate: "2025-12-21T23:00:00.000Z",
  price: 250000,
  totalSeats: 5000,
  availableSeats: 4800,
  organizerId: "usr_01J5FGH7L0P9ABT6S7K2YV9XQZ",
  createdAt: "2025-10-30T07:00:00.000Z",
  updatedAt: "2025-10-30T07:00:00.000Z",
  deletedAt: null,
};

export const ticketData = {
  id: "clz9h8x7p0001v3q9f5t1l2z9",
  name: "VIP Pass - Veeniu Music Festival 2025",
  price: 750000,
  stock: 250,
  eventId: "clz8t0a5g0001x9z8h2b3k1d0",
  createdAt: "2025-10-30T07:00:00.000Z",
  updatedAt: "2025-10-30T07:00:00.000Z",
  deletedAt: null,
};

export const monthData = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

export const ticketsData: TicketData[] = [
  {
    id: "tck_001",
    name: "VIP Ticket",
    price: 500000,
    stock: 50,
    event: {
      id: "evt_001",
      title: "We The Fest 2025",
      imageUrl:
        "https://assets.loket.com/neo/production/images/banner/20251022174907_68f8b6a33d53a.jpg",
      location: "Jakarta",
      startDate: "2025-12-20T16:00:00.000Z",
      price: 500000,
      organizer: {
        id: "org_001",
        name: "Hooman Industry",
      },
    },
    transaction: { finalAmount: 500000 },
  },
  {
    id: "tck_002",
    name: "Regular Ticket",
    price: 250000,
    stock: 200,
    event: {
      id: "evt_002",
      title: "Java Jazz Festival",
      imageUrl:
        "https://assets.loket.com/neo/production/images/banner/20250826170837_68ad87a569742.png",
      location: "Jakarta",
      startDate: "2025-11-15T18:00:00.000Z",
      price: 250000,
      organizer: {
        id: "org_002",
        name: "Java Jazz Organization",
      },
    },
    transaction: { finalAmount: 250000 },
  },
  {
    id: "tck_003",
    name: "Early Bird",
    price: 150000,
    stock: 100,
    event: {
      id: "evt_003",
      title: "Soundrenaline 2025",
      imageUrl:
        "https://assets.loket.com/neo/production/images/banner/20250923114536_68d225f0295b4.jpeg",
      location: "Bali",
      startDate: "2025-09-10T19:00:00.000Z",
      price: 150000,
      organizer: {
        id: "org_003",
        name: "Bali Sound Production",
      },
    },
    transaction: { finalAmount: 150000 },
  },
  {
    id: "tck_004",
    name: "Premium Seat",
    price: 750000,
    stock: 80,
    event: {
      id: "evt_004",
      title: "Coldplay Live in Singapore",
      imageUrl:
        "https://assets.loket.com/neo/production/images/banner/20251021184015_68f7711fb11fd.jpg",
      location: "Singapore",
      startDate: "2025-07-05T20:00:00.000Z",
      price: 750000,
      organizer: {
        id: "org_004",
        name: "Live Nation Asia",
      },
    },
    transaction: { finalAmount: 750000 },
  },
  {
    id: "tck_005",
    name: "Standard Entry",
    price: 120000,
    stock: 150,
    event: {
      id: "evt_005",
      title: "Art Exhibition: Beyond Colors",
      imageUrl:
        "https://assets.loket.com/neo/production/images/banner/20251027165512_68ff4180c300b.jpg",
      location: "Bandung",
      startDate: "2025-08-25T10:00:00.000Z",
      price: 120000,
      organizer: {
        id: "org_005",
        name: "Bandung Art Collective",
      },
    },
    transaction: { finalAmount: 120000 },
  },
  {
    id: "tck_006",
    name: "Front Row",
    price: 1000000,
    stock: 30,
    event: {
      id: "evt_006",
      title: "Blackpink World Tour",
      imageUrl:
        "https://assets.loket.com/neo/production/images/banner/20250807194732_6894a0644e31e.jpeg",
      location: "Jakarta",
      startDate: "2025-06-10T19:30:00.000Z",
      price: 1000000,
      organizer: {
        id: "org_006",
        name: "YG Entertainment",
      },
    },
    transaction: { finalAmount: 1000000 },
  },
  {
    id: "tck_007",
    name: "Student Ticket",
    price: 80000,
    stock: 300,
    event: {
      id: "evt_007",
      title: "TEDx Youth Indonesia",
      imageUrl:
        "https://assets.loket.com/neo/production/images/banner/20250815211622_689f4136370d7.jpeg",
      location: "Yogyakarta",
      startDate: "2025-04-12T09:00:00.000Z",
      price: 80000,
      organizer: {
        id: "org_007",
        name: "TEDx Youth Indonesia",
      },
    },
    transaction: { finalAmount: 80000 },
  },
  {
    id: "tck_008",
    name: "Weekend Pass",
    price: 400000,
    stock: 120,
    event: {
      id: "evt_008",
      title: "Comic Con 2025",
      imageUrl:
        "https://assets.loket.com/neo/production/images/banner/20251006143545_68e371514e4c3.jpeg",
      location: "Surabaya",
      startDate: "2025-10-03T10:00:00.000Z",
      price: 400000,
      organizer: {
        id: "org_008",
        name: "Indonesia Comic Convention",
      },
    },
    transaction: { finalAmount: 400000 },
  },
  {
    id: "tck_009",
    name: "Festival Ticket",
    price: 350000,
    stock: 100,
    event: {
      id: "evt_009",
      title: "Lorem ipsum",
      imageUrl:
        "https://assets.loket.com/neo/production/images/banner/20250917102243_68ca29839f83e.png",
      location: "Jakarta",
      startDate: "2025-12-15T22:00:00.000Z",
      price: 350000,
      organizer: {
        id: "org_009",
        name: "Ismaya Live",
      },
    },
    transaction: { finalAmount: 350000 },
  },
  {
    id: "tck_010",
    name: "One-Day Pass",
    price: 180000,
    stock: 90,
    event: {
      id: "evt_010",
      title: "Food Carnival 2025",
      imageUrl:
        "https://assets.loket.com/neo/production/images/banner/20251028213045_6900d3952755e.jpg",
      location: "Medan",
      startDate: "2025-09-05T11:00:00.000Z",
      price: 180000,
      organizer: {
        id: "org_010",
        name: "Medan Food Lovers",
      },
    },
    transaction: { finalAmount: 180000 },
  },
];

export const vouchersData = [
  {
    id: "vch_1",
    code: "DISC10",
    value: 10000,
    eventId: "evt_1",
    expiresAt: new Date("2025-12-31T23:59:59Z"),
    createdAt: new Date("2025-10-01T10:00:00Z"),
    updatedAt: new Date("2025-10-01T10:00:00Z"),
    deletedAt: null,
  },
  {
    id: "vch_2",
    code: "VIP50",
    value: 50000,
    eventId: "evt_2",
    expiresAt: new Date("2026-01-15T23:59:59Z"),
    createdAt: new Date("2025-10-05T12:00:00Z"),
    updatedAt: new Date("2025-10-05T12:00:00Z"),
    deletedAt: null,
  },
  {
    id: "vch_3",
    code: "EARLYBIRD",
    value: 25000,
    eventId: "evt_1",
    expiresAt: new Date("2025-11-15T23:59:59Z"),
    createdAt: new Date("2025-10-10T09:00:00Z"),
    updatedAt: new Date("2025-10-10T09:00:00Z"),
    deletedAt: null,
  },
  {
    id: "vch_4",
    code: "STUDENT20",
    value: 20000,
    eventId: "evt_3",
    expiresAt: new Date("2026-02-01T23:59:59Z"),
    createdAt: new Date("2025-10-12T14:00:00Z"),
    updatedAt: new Date("2025-10-12T14:00:00Z"),
    deletedAt: null,
  },
  {
    id: "vch_5",
    code: "FREEDRINK",
    value: 15000,
    eventId: "evt_2",
    expiresAt: new Date("2025-12-20T23:59:59Z"),
    createdAt: new Date("2025-10-15T08:00:00Z"),
    updatedAt: new Date("2025-10-15T08:00:00Z"),
    deletedAt: null,
  },
];

export const bankData = [
  {
    key: "Bank Name",
    val: "BCA (Bank Central Asia)",
  },
  {
    key: "Account Holder",
    val: "PT Hooman Stay Together",
  },
  {
    key: "Account Number",
    val: "5442138990",
  },
];

export const transactionData = {
  id: "txc123abc456",
  uuid: "b48a54bb-2a0a-4e61-9e2d-123456789abc",
  userId: "usr123",
  user: {
    id: "usr123",
    name: "John Doe",
    email: "john@example.com",
  },
  eventId: "evt987",
  event: {
    id: "evt987",
    title: "Music Festival 2025",
    location: "Jakarta",
    startDate: new Date("2025-12-20T16:00:00.000Z"),
    endDate: new Date("2025-12-20T22:00:00.000Z"),
  },
  totalAmount: 500000,
  discountAmount: 50000,
  finalAmount: 450000,
  status: "WAITING_FOR_PAYMENT",
  paymentProof: null,
  usedPoints: 1000,
  usedVoucherId: "vchr789",
  usedVoucher: {
    id: "vchr789",
    code: "PROMO50K",
    value: 50000,
    eventId: "evt987",
    expiresAt: new Date("2025-12-31T23:59:59.000Z"),
  },
  expiresAt: new Date("2025-10-31T15:00:00.000Z"),
  canceledAt: null,
  confirmedAt: null,
  createdAt: new Date("2025-10-30T10:00:00.000Z"),
  updatedAt: new Date("2025-10-30T10:00:00.000Z"),
  transactionDetails: [
    {
      id: "td1",
      ticketId: "tkt001",
      quantity: 2,
      subtotal: 300000,
    },
    {
      id: "td2",
      ticketId: "tkt002",
      quantity: 1,
      subtotal: 200000,
    },
  ],
};

export const transactionHistoryData = [
  {
    date: "2025-10-30T07:00:00.000Z",
    event: "MAHER ZAIN LIVE IN CONCERT : JAKARTA",
    description: "Event ticket",
    amount: 2500000,
  },
  {
    date: "2025-10-30T07:00:00.000Z",
    event: "MAHER ZAIN LIVE IN CONCERT : JAKARTA",
    description: "Voucher used",
    amount: 950000,
  },
  {
    date: "2025-10-30T07:00:00.000Z",
    event: "MAHER ZAIN LIVE IN CONCERT : JAKARTA",
    description: "Voucher used",
    amount: 950000,
  },
  {
    date: "2025-10-30T07:00:00.000Z",
    event: "MAHER ZAIN LIVE IN CONCERT : JAKARTA",
    description: "Voucher used",
    amount: 950000,
  },
  {
    date: "2025-10-30T07:00:00.000Z",
    event: "MAHER ZAIN LIVE IN CONCERT : JAKARTA",
    description: "Voucher used",
    amount: 950000,
  },
  {
    date: "2025-10-30T07:00:00.000Z",
    event: "MAHER ZAIN LIVE IN CONCERT : JAKARTA",
    description: "Voucher used",
    amount: 950000,
  },
  {
    date: "2025-10-30T07:00:00.000Z",
    event: "MAHER ZAIN LIVE IN CONCERT : JAKARTA",
    description: "Voucher used",
    amount: 950000,
  },
];

export const tableData = {
  title: "Latest events",
  columns: [
    { key: "no", title: "No" },
    { key: "title", title: "Event Title" },
    { key: "date", title: "Date" },
    { key: "location", title: "Location" },
    { key: "category", title: "Category" },
    { key: "totalSeats", title: "Total Seats" },
    { key: "action", title: "Action" },
  ],
  data: [
    {
      title: "MAHER ZAIN LIVE IN CONCERT : JAKARTA",
      date: "2025-11-01T12:00:00Z",
      location: "Jakarta",
      category: "Music",
      totalSeats: 5000,
    },
    {
      title: "MAHER ZAIN LIVE IN CONCERT : JAKARTA",
      date: "2025-11-01T12:00:00Z",
      location: "Jakarta",
      category: "Music",
      totalSeats: 5000,
    },
    {
      title: "MAHER ZAIN LIVE IN CONCERT : JAKARTA",
      date: "2025-11-01T12:00:00Z",
      location: "Jakarta",
      category: "Music",
      totalSeats: 5000,
    },
    {
      title: "MAHER ZAIN LIVE IN CONCERT : JAKARTA",
      date: "2025-11-01T12:00:00Z",
      location: "Jakarta",
      category: "Music",
      totalSeats: 5000,
    },
    {
      title: "MAHER ZAIN LIVE IN CONCERT : JAKARTA",
      date: "2025-11-01T12:00:00Z",
      location: "Jakarta",
      category: "Music",
      totalSeats: 5000,
    },
  ],
  actionLabel: "View",
};

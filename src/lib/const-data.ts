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

export const eventCard = {
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

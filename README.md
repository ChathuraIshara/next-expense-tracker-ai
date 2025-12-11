# Expense Tracker

A full-stack expense tracking application with AI-powered insights. Track your expenses, visualize spending patterns, and get intelligent recommendations to manage your finances better.

## Features

- **User Authentication** - Secure login and account management with Clerk
- **Expense Management** - Add, view, and delete expense records with categories and dates
- **Analytics Dashboard** - Interactive charts and real-time spending statistics
- **AI Insights** - Get AI-powered insights and category suggestions for your expenses
- **Dark/Light Theme** - Responsive UI with theme toggle support
- **Categorization** - Organize expenses by categories for better tracking

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, React
- **Backend**: Next.js Server Actions
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk
- **AI Integration**: AI-powered insights and suggestions
- **Styling**: Tailwind CSS

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Clerk account for authentication

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd expensetracker
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (`.env.local`):
```
DATABASE_URL=your_postgresql_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
```

4. Run database migrations:
```bash
npx prisma migrate dev
```

5. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

- Sign up or log in with your account
- Add new expenses with description, amount, category, and date
- View your expense history and statistics
- Get AI-powered insights about your spending
- Toggle between dark and light themes

## License

MIT

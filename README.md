# Overview

The Clarity project is a web application designed to provide advanced fraud detection and monitoring services. It utilizes React for the frontend, with a focus on user experience and data visualization.

## Project Structure

The project is organized into several key directories:

- **src/**: Contains all source code files.
  - **components/**: Reusable UI components.
    - **contact-us/**: Contact form and related components.
    - **faq/**: Frequently Asked Questions section.
    - **fraud-report/**: Fraud report visualization components.
    - **hero/**: Hero section of the landing page.
  - **lib/**: Utility functions and helpers.
  - **pages/**: Main application pages.
    - **dashboard/**: Dashboard for monitoring transactions.
    - **landing/**: Landing page for user engagement.
  - **ui/**: UI components like buttons, cards, inputs, etc.
  - **App.tsx**: Main application component that sets up routing.
  - **main.tsx**: Entry point for the React application.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Framer Motion**: Library for animations and transitions.
- **Recharts**: Charting library for data visualization.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Superset of JavaScript that adds static types.

## Key Components

### 1. Hero Component

- Displays the main message and call-to-action for the application.
- Includes an animated canvas background with particles.

### 2. Fraud Report Component

- Visualizes fraud statistics using pie and bar charts.
- Displays detailed transaction data in a table format.

### 3. FAQ Section

- Provides answers to common questions about the fraud detection system.
- Uses animations to enhance user interaction.

### 4. Contact Us Component

- Allows users to enter their email and request a demo.
- Displays benefits of using the Clarity system.

### 5. Dashboard

- Main interface for users to monitor transactions.
- Includes various charts and tables to display transaction data and statistics.

## Styling

- The application uses Tailwind CSS for styling, allowing for responsive design and utility-based styling.
- Custom styles are defined in `index.css` and `App.css`.

## Routing

- The application uses React Router for navigation between the landing page and the dashboard.
- Routes are defined in `App.tsx`.

## State Management

- Local state management is handled using React's `useState` hook.
- Data fetching and side effects are managed using `useEffect`.

## Running the Project

1. Clone the repository.
2. Install dependencies:

   ```bash
   npm install

   ```

3. Start the development server:

   ```bash
   npm run dev

   ```

4. Open the application in your browser at `http://localhost:3000`.

## Conclusion

The Clarity project provides a comprehensive solution for fraud detection and monitoring, leveraging modern web technologies to deliver a seamless user experience. The modular structure allows for easy maintenance and scalability.

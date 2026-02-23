# ZCase USA - Web Design & UX Guidelines

## Overview
This project represents the refreshed design structure for **ZCase USA** (zcaseusa.com), a manufacturer of high-end flight cases for professional audio, lighting, and video equipment.

The design philosophy focuses on **reliability, professionalism, and industrial aesthetics**, targeting professionals in the event industry (sound engineers, production managers, rental companies).

## Design System

### 1. Color Palette
The color scheme is designed to evoke a "High-End B2B" and "Industrial" feel.

*   **Primary Backgrounds**:
    *   `#0a0a0a` (Deep Black) - Main background
    *   `#1a1a1a` (Dark Graphite) - Card backgrounds, secondary sections
    *   `#2d2d2d` (Industrial Grey) - Borders, dividers, form inputs
*   **Typography & Accents**:
    *   `#FFFFFF` (White) - Primary headings, main text
    *   `#888888` (Light Grey) - Secondary text, labels
*   **Action Color (CTA)**:
    *   `#ff5722` (Electric Orange) - Primary buttons, links, highlights. Used sparingly to guide attention.
    *   *Alternative Accent*: `#00f0ff` (Neon Blue) - Used for specific "New" badges or technical highlights.

### 2. Typography
Modern, technical, sans-serif fonts to ensure readability of technical specifications.

*   **Primary Font**: `Inter` (Google Fonts)
    *   Used for Headings, Body text, UI elements.
    *   Weights: 300 (Light), 400 (Regular), 600 (SemiBold), 800 (ExtraBold).
*   **Technical Font**: `Roboto Mono` (Google Fonts)
    *   Used for Dimensions, Weights, SKUs, and tabular data.

### 3. UI Components Style
*   **Buttons**: Sharp corners or slightly rounded (4px). Uppercase text with wide tracking.
*   **Cards**: Dark graphite backgrounds with subtle grey borders. On hover: border color changes to Accent color.
*   **Inputs**: Dark grey backgrounds, removing default browser styles. Focus states use the Accent color.

## Architecture & UX

### 1. Home Page
*   **Hero Section**:
    *   **Goal**: Immediate brand immersion.
    *   **Content**: Background video/image of stage equipment.
    *   **Feature**: "Quick Search" widget overlay allowing users to filter by Category -> Brand -> Model immediately.
*   **Navigation**:
    *   **Mega Menu**: Groups products by **Category** (Flip Cases, Racks) and **Application** (Audio, Light).
    *   **Sticky Header**: Ensures navigation is always accessible.
*   **Social Proof**:
    *   Real logos of major rental houses (Clair Global, Solotech, etc.).
    *   Testimonials from real engineers with photos.

### 2. Product Catalog
*   **Filtering**: Sidebar filters for Brand, Console Model, and Case Type.
*   **Product Cards**:
    *   High-quality image on black background.
    *   Clear model compatibility (e.g., "For Yamaha DM7").
    *   "Quick View" and "Add to Cart" actions on hover.

### 3. Product Detail Page (PDP)
*   **Visuals**: Large gallery with video support (critical for showing the "Flip" mechanism).
*   **Specs**: Tabular data using Monospace font for readability.
*   **Configuration**: Options to add accessories (drawers, keyboard trays).
*   **Downloads**: Easy access to PDF specs and CAD drawings.

### 4. Custom Build
*   **Goal**: Capture leads for bespoke projects.
*   **Form**: Detailed form allowing file uploads (PDF/Images) for technical drawings.

## Tech Stack (Prototype)
*   **Framework**: React 18 + Vite
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS
*   **Icons**: Lucide React
*   **Routing**: React Router DOM

## Running the Project
1.  `npm install`
2.  `npm run dev`
3.  Open `http://localhost:5173`

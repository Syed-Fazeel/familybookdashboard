# Design Guidelines: Family Activities Booking Platform

## Design Approach
**Selected Approach:** Design System (Material Design) with family-friendly adaptations

**Rationale:** This application is predominantly admin-focused with complex data management, dashboards, tables, and forms. Material Design provides robust components for information-dense interfaces while maintaining clarity. The public-facing sections will adapt these components with warmer, more approachable styling for families.

## Typography System

**Font Families:**
- Primary: Inter (headers, UI elements, data tables)
- Secondary: System UI (body text, forms)

**Hierarchy:**
- Hero/Page Titles: text-4xl to text-5xl, font-bold
- Section Headers: text-2xl to text-3xl, font-semibold
- Card Titles: text-xl, font-semibold
- Body Text: text-base, font-normal
- Captions/Meta: text-sm, font-medium
- Table Headers: text-xs uppercase, font-semibold, tracking-wide

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, and 16
- Component padding: p-4 to p-6
- Section spacing: py-12 to py-16
- Card gaps: gap-4 to gap-6
- Dashboard metrics: space-y-6

**Grid Structure:**
- Admin Dashboard: 12-column grid for flexible metric cards
- Data Tables: Full-width with responsive horizontal scroll
- Public Listings: 3-column grid (lg), 2-column (md), 1-column (mobile)
- Forms: 2-column layout for efficient data entry

## Component Library

### Admin Components

**Dashboard Metrics Cards:**
- Elevated cards with subtle shadows (shadow-md)
- Icon + Label + Large Number layout
- 4-column grid on desktop, stacked on mobile
- Compact padding (p-6)

**Data Tables:**
- Sticky headers with elevated backgrounds
- Alternating row backgrounds for readability
- Action buttons in rightmost column
- Pagination controls at bottom
- Filter/search bar above table
- Export and bulk action buttons

**Navigation:**
- Fixed left sidebar (w-64) with collapsible sections
- Icon + label navigation items
- Active state with background highlight
- Mobile: Bottom navigation or hamburger menu
- Top bar with user profile, notifications, search

**Forms:**
- Two-column layout for efficiency
- Clear field labels above inputs
- Helper text below fields when needed
- Required field indicators
- Grouped sections with subtle dividers
- Action buttons right-aligned at bottom

**Analytics Charts:**
- Card containers with headers
- Mix of bar charts, line graphs, and pie charts
- Legend positioned strategically
- Responsive scaling
- Use Chart.js or similar library

### Public-Facing Components

**Hero Section:**
- Full-width background image showcasing happy families at activities
- Centered search bar with category dropdown and location input
- Headline: "Discover Amazing Activities for Your Family"
- Subheadline explaining the platform value
- Height: 60vh on desktop, adapts on mobile
- Search buttons with blurred backgrounds for contrast

**Activity/Service Cards:**
- Image at top (aspect-ratio 4:3)
- Business name, rating stars, review count
- Service title and brief description
- Price prominent (text-lg, font-bold)
- "Book Now" button at bottom
- Hover effect: subtle lift (scale and shadow)

**Business Profile Pages:**
- Hero banner image
- Business info sidebar (contact, hours, location map)
- Tabbed navigation (Services, About, Reviews, Gallery)
- Service listings in organized cards
- Booking calendar widget
- Reviews section with ratings breakdown

**Category Browse:**
- Large icon cards in grid layout
- Category name and activity count
- Colorful icon illustrations (use Font Awesome or Heroicons)
- 4-column grid on desktop, 2 on tablet, 1 on mobile

## Navigation Architecture

**Admin Panel:**
- Sidebar structure:
  - Dashboard (home)
  - Business Management
  - User Management
  - Bookings
  - Categories
  - Ads & Promotions
  - Reports & Analytics
  - CMS
  - Notifications
  - Settings

**Public Site:**
- Top navigation:
  - Logo (left)
  - Browse by Category
  - How It Works
  - For Businesses
  - Login/Sign Up (right)

## Interaction Patterns

**Modal Windows:**
- For quick actions (approve business, send notification)
- Overlay with backdrop blur
- Close button in top-right
- Action buttons at bottom

**Confirmation Dialogs:**
- For destructive actions (delete, suspend)
- Clear warning messaging
- Cancel + Confirm buttons

**Loading States:**
- Skeleton screens for data tables
- Spinner for form submissions
- Progress bars for multi-step processes

**Empty States:**
- Centered icon and message
- Call-to-action button when applicable
- Friendly, encouraging copy

## Responsive Behavior

**Breakpoints:**
- Mobile: < 768px (single column, stacked components)
- Tablet: 768px - 1024px (2-column grids, condensed sidebar)
- Desktop: > 1024px (full layouts, side-by-side components)

**Admin Panel Mobile:**
- Sidebar converts to bottom navigation
- Tables scroll horizontally
- Metric cards stack vertically
- Forms become single-column

## Icons & Assets

**Icon Library:** Font Awesome 6 (via CDN)
- Consistent icon usage across interface
- Size: text-lg for inline, text-2xl for standalone
- Use solid style for primary actions, regular for secondary

**Images:**
- Hero: Large, high-quality image of families enjoying activities (full-width)
- Activity Cards: Service/class photos (aspect ratio 4:3)
- Business Profiles: Banner image and gallery
- Category Icons: Colorful vector icons from chosen library
- Empty States: Friendly illustrations

**Image Placement:**
- Public site: Image-rich with photos in hero, cards, and profiles
- Admin panel: Icon-based UI, minimal decorative imagery
- Use placeholder images with clear descriptions during prototype

## Forms & Inputs

**Input Fields:**
- Full-width within column
- Clear labels, placeholder text
- Focus states with border emphasis
- Error states with red accents and helper text
- Consistent height (h-10 to h-12)

**Select Dropdowns:**
- Custom-styled with chevron icon
- Searchable for long lists (businesses, categories)

**Date Pickers:**
- Calendar overlay for booking dates
- Range selection for reports/filters

**File Uploads:**
- Drag-and-drop zones for business images
- Preview thumbnails
- Remove/replace options

## Data Visualization

**Dashboard Charts:**
- Revenue: Line chart showing trends over time
- Bookings: Bar chart by category
- User Growth: Area chart
- Business Distribution: Pie chart by category

**Reports:**
- Filterable date ranges
- Export buttons (CSV, PDF)
- Comparison views (month-over-month)
- Top performers tables

This design creates a professional, efficient admin experience while maintaining a warm, inviting public-facing interface that appeals to families seeking activities for their children.
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the 3rd iteration of the TTC Teneramonda website, a Hugo-based static site for a Belgian table tennis club. The site is deployed on Netlify and uses TailwindCSS with DaisyUI for styling.

## Technology Stack

- **Static Site Generator**: Hugo (v0.128.0+)
- **CSS Framework**: TailwindCSS with DaisyUI themes
- **CMS**: Netlify CMS for content management
- **Deployment**: Netlify
- **Development Environment**: Nix shell (optional)

## Common Development Commands

### Development Server
- `make dev` or `make up` or `make run` - Start Hugo development server
- `make local` - Start server on local network (192.168.0.195:8080)

### Build and Preview
- `make build` - Build the static site
- `make preview` - Preview production build with optimizations
- `hugo` - Direct Hugo build command

### Package Management
- `npm install` - Install TailwindCSS and related dependencies
- All CSS dependencies are managed via npm (TailwindCSS, DaisyUI, forms, typography plugins)

## Architecture and Structure

### Content Management
- **CMS**: Netlify CMS configuration in `static/admin/config.yml`
- **Content**: All content stored in `content/` directory with markdown files
- **Calendar Events**: Automated calendar system with events in `content/kalender/`
- **Page Structure**: Each major section has its own subdirectory (over, sponsors, kledij, leden, etc.)

### Styling System
- **TailwindCSS**: Configuration in `tailwind.config.js`
- **DaisyUI Themes**: Uses "emeral", "nord", and "lemonade" themes
- **Custom Colors**: Primary colors based on club branding
- **CSS**: Custom styles in `assets/css/` with component-specific stylesheets

### Hugo Structure
- **Layouts**: Template files in `layouts/` directory
- **Base Template**: `layouts/_default/baseof.html` is the main template
- **Partials**: Reusable components in `layouts/partials/`
- **Section Templates**: Custom layouts for each content section

### Asset Management
- **Images**: Stored in `assets/images/` and `static/images/`
- **JavaScript**: Custom JS in `assets/js/`
- **Static Files**: Public assets in `static/` directory

## Content Structure

### Calendar System
- Events stored as individual markdown files in `content/kalender/`
- Filename format: `YYYY-MM-DDTHH-mm-ss-TZ-YYYY-MM-DD-slug.md`
- Supports both all-day and timed events
- Managed through Netlify CMS interface

### Page Sections
- **Homepage** (`content/_index.md`): Main landing page with team info, sponsors, events
- **About** (`content/over/`): Club information and atmosphere photos
- **Calendar** (`content/kalender/`): Training sessions, matches, club events
- **Clothing** (`content/kledij/`): Club merchandise information
- **Members** (`content/leden/`): Board members, trainers, and member listings
- **Membership** (`content/lid-worden/`): How to join the club
- **Contact** (`content/contact/`): Contact information and location

## Configuration Files

### Hugo Configuration (`hugo.toml`)
- Site language: Dutch (nl-BE)
- Menu structure defined
- Module mounts for assets and content
- Build optimizations for TailwindCSS integration

### Netlify Configuration (`netlify.toml`)
- Build command: `hugo`
- Publish directory: `public`
- Hugo version: 0.128.0

### Development Environment (`shell.nix`)
- Nix shell with Hugo, Node.js, TailwindCSS, and language servers
- Optional development setup for Nix users

## Deployment

- **Platform**: Netlify
- **Branch**: master (main deployment branch)
- **Build Process**: Automated Hugo build on Netlify
- **CMS Access**: Available at `/admin` for content editors

## Development Notes

- The site uses Hugo's JSON output for the calendar functionality
- TailwindCSS is integrated with Hugo's asset pipeline
- Content is managed through Netlify CMS for non-technical users
- All calendar events are automatically formatted and displayed
- The site supports responsive design with mobile-first approach
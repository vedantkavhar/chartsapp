# Charts Dashboard Application

A modern Angular dashboard that visualizes data using **Chart.js**, **ECharts**, and **Highcharts**. This project demonstrates how to integrate multiple charting libraries in a single Angular application.

## Features

- 📊 Bar chart with Chart.js
- 📈 Bar chart with ECharts
- 📉 Column chart with Highcharts
- Responsive, clean UI
- Modular Angular structure

## Project Structure

```
chartsapp/
  src/
    app/
      charts/
        charts.ts
        charts.html
        charts.css
        charts.spec.ts
      services/
        dataService.ts
      app.ts
      app.html
      app.css
      app.config.ts
      app.routes.ts
      app.spec.ts
    index.html
    main.ts
    styles.css
  package.json
  angular.json
  tsconfig.json
  README.md
```

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd chartsapp
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

### Running the Application

Start the development server:

```sh
npm start
```

Open your browser and navigate to [http://localhost:4200](http://localhost:4200).

## Usage

- The dashboard displays three charts, each rendered using a different library.
- Data is managed via [`DataService`](src/app/services/dataService.ts).
- Chart rendering logic is in [`Charts`](src/app/charts/charts.ts).
- The UI is defined in [`charts.html`](src/app/charts/charts.html) and styled with [`charts.css`](src/app/charts/charts.css).

## Adding/Modifying Data

Update the data in [`DataService`](src/app/services/dataService.ts) to change the chart contents.

## Key Files

- [`src/app/charts/charts.ts`](src/app/charts/charts.ts): Chart component logic
- [`src/app/charts/charts.html`](src/app/charts/charts.html): Chart component template
- [`src/app/charts/charts.css`](src/app/charts/charts.css): Chart component styles
- [`src/app/services/dataService.ts`](src/app/services/dataService.ts): Data provider

## Customization

- To add more charts, create new methods in [`Charts`](src/app/charts/charts.ts) and add corresponding HTML.
- Update styles in [`charts.css`](src/app/charts/charts.css) for a custom look.



*Made with Angular, Chart.js, ECharts, and Highcharts.*
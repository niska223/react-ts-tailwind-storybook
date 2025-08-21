# 🎨 React Component Development

## Focus Area
UI Components

## Tech Stack
- React
- TypeScript
- TailwindCSS
- Storybook

---

## 🚀 Overview

### Components

#### 1. InputField
A flexible input component with:
- Label, placeholder, helper text, error message
- States: disabled, invalid, loading
- Variants: filled, outlined, ghost
- Sizes: small, medium, large
- Optional: clear button, password toggle
- Light & dark theme support
- Accessible and responsive

**Props:**
```ts
interface InputFieldProps {
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	label?: string;
	placeholder?: string;
	helperText?: string;
	errorMessage?: string;
	disabled?: boolean;
	invalid?: boolean;
	variant?: 'filled' | 'outlined' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
}
```

#### 2. DataTable
A data table with:
- Tabular data display
- Column sorting
- Row selection (single)
- Loading and empty states
- Accessible and responsive

**Props:**
```ts
interface DataTableProps<T> {
	data: T[];
	columns: Column<T>[];
	loading?: boolean;
	selectable?: boolean;
	onRowSelect?: (selectedRows: T[]) => void;
}

interface Column<T> {
	key: string;
	title: string;
	dataIndex: keyof T;
	sortable?: boolean;
}
```

---

## ✅ Requirements Fulfilled
- TypeScript with proper typing
- Responsive design (TailwindCSS)
- Accessibility (ARIA labels, keyboard navigation)
- Clean, modern styling
- Basic tests for both components
- Storybook documentation
- Example/demo usage
- Scalable project structure

---

## 📦 Project Structure
```
src/
	components/
		InputField/
			InputField.tsx
			InputField.stories.tsx
			InputField.test.tsx
			index.ts
		DataTable/
			DataTable.tsx
			DataTable.stories.tsx
			DataTable.test.tsx
			index.ts
	examples/
		InputFieldDemo.tsx
		DataTableDemo.tsx
	App.tsx
	AppNav.tsx
	AppRoutes.tsx
```

---

## 🛠️ Getting Started

1. **Install dependencies:**
	 ```
	 npm install
	 ```
2. **Start the app:**
	 ```
	 npm start
	 ```
	 - Visit [http://localhost:3000/input-demo](http://localhost:3000/input-demo) and [http://localhost:3000/table-demo](http://localhost:3000/table-demo)

3. **Run Storybook:**
	 ```
	 npm run storybook
	 ```
	 - Visit [http://localhost:6006](http://localhost:6006)

4. **Run tests:**
	 ```
	 npm test
	 ```

---

## 🌐 Live Links

React App (Vercel Deployment): https://react-ts-tailwind-storybook.vercel.app/

Storybook Live: https://react-ts-tailwind-storybook.vercel.app/storybook/?path=/docs/components-datatable--docs

Demo Video (Google Drive): https://drive.google.com/file/d/1uKbL14utgTHhY0hH0DJtqdXCBs4uqzHw/view?usp=sharing


## 📘 Storybook
- All components are documented and demoed in Storybook.
- See usage, props, and live examples.

---

## 🧠 Approach

1. **Component-First Design:**
	- Broke down requirements into two reusable, isolated components: InputField and DataTable.
	- Used TypeScript interfaces for strong typing and future scalability.

2. **Modern React Patterns:**
	- Used functional components and hooks for state and logic.
	- Ensured accessibility (ARIA, keyboard navigation) and responsiveness (TailwindCSS).

3. **Styling & Theming:**
	- Used TailwindCSS for rapid, consistent, and themeable UI development.
	- Supported light/dark mode and interactive states.

4. **Documentation & Testing:**
	- Documented all components in Storybook with live examples and prop tables.
	- Added basic unit tests for both components.

5. **Project Structure:**
	- Organized code for scalability: each component in its own folder with stories and tests.
	- Added demo pages for real-world usage.

6. **Delivery:**
	- README includes setup, usage, and project overview.
	- Ready for deployment and review.

---

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# MockProject_072024_Nhom6

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname
    }
  }
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react"

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules
  }
})
```

Using font with Tailwind CSS:
Step 1: Open my tailwind.config.js file and configure the font.
Step 2: Using fonts in component by tailwind CSS.
Step 3: import google font in index.css.
Step 4: Using in className.

Using yup:
Step 1: Create folder validation.
Step 2: Create a file NameValidation.
Step 3: If the field has string datatype, Yup.string().
Step 4: .min(3, 'Error notification'), 3 is minimum character, similar to max.
Step 5: .required(), Required fields.
Step 6: .matches(A1, A2), using with select tag, required A1 or A2.
Step 7: .email(), email must be correct.

Using redux Toolkit:
Step 1: Create ReduxToolkit folder, create file Store.ts.
Step 2: View file Store.ts.
Step 3: Create Features folder, create a {name}Slice ({name} is the page name).
Step 4: In nameSlice.ts, create state in initialState, name value must be same variable name.
Step 5: Create state and write logic in reducers.
Step 6: Exporting and using variable.
Step 7: Get state about components using useAppSelector.
Step 8: Checking by Console.log.

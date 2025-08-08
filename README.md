# AniVerse

Proyecto web desarrollado con React, TypeScript y [react-hook-form](https://react-hook-form.com/).

## Estructura del proyecto

```
AniVerse/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Form/
│   │       └── components/
│   ├── context/
│   ├── hooks/
│   ├── pages/
│   ├── routes/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
└── README.md
```

## Requisitos previos

- [Bun](https://bun.sh/) (v1.0 o superior recomendado)
- Node.js (opcional, solo si alguna dependencia lo requiere)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/ani-verse.git
   cd AniVerse
   ```

2. Instala las dependencias con Bun:
   ```bash
   bun install
   ```

## Scripts disponibles

- `bun run dev`  
  Inicia el servidor de desarrollo.

- `bun run build`  
  Genera la versión de producción.

- `bun run preview`  
  Previsualiza la app en modo producción.

- `bun run lint`  
  Ejecuta el linter para revisar el código.

## Uso

1. Inicia el servidor de desarrollo:
   ```bash
   bun run dev
   ```

2. Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación.

## Tecnologías principales

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [react-hook-form](https://react-hook-form.com/)
- [Vite](https://vitejs.dev/) (asumido por la estructura)
- [Bun](https://bun.sh/)

## Organización del código

- **components/**: Componentes reutilizables de la UI.
- **pages/**: Vistas principales de la aplicación.
- **context/**: Contextos globales de React (ej: autenticación).
- **hooks/**: Custom hooks.
- **routes/**: Definición de rutas y navegación.
- **types/**: Tipos TypeScript globales.
- **utils/**: Funciones utilitarias.

## Contribución

1. Haz un fork del repositorio.
2. Crea una rama para tu feature o fix.
3. Haz tus cambios y abre un Pull Request.

## Licencia

MIT

---
# Portfolio Terminal

![Portfolio Preview](https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80)

Una página web de portfolio personal con diseño inspirado en terminal, construida con React, TypeScript y Tailwind CSS.

## ✨ Características

- 🎨 Diseño inspirado en terminal de comandos
- 💻 Interfaz interactiva y responsive
- 🚀 Sección de proyectos con imágenes y enlaces
- 📧 Formulario de contacto integrado con EmailJS
- 🎯 Optimizado para rendimiento y accesibilidad
- 🌙 Tema oscuro por defecto

## 🛠️ Tecnologías

- React 18
- TypeScript
- Tailwind CSS
- EmailJS
- React Icons
- React Hook Form

## 🚀 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/EmiiGonzalez/portafolio.git
```

2. Instala las dependencias:

```bash
cd portfolio
npm install
```

3. Configura las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto
   - Agrega tus credenciales de EmailJS:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

## 📝 Personalización

### Proyectos

Edita el archivo `src/components/Projects.tsx` para agregar tus propios proyectos:

```typescript
const projects = [
  {
    title: "Tu Proyecto",
    description: "Descripción del proyecto",
    technologies: ["Tech1", "Tech2"],
    github: "https://github.com/tu-usuario/proyecto",
    demo: "https://demo.proyecto.com",
    image: "URL_de_la_imagen"
  },
  // Agrega más proyectos...
];
```

### Información Personal

Modifica el archivo info.ts en `src/config/about_me/info.ts` para actualizar tu información personal:

```typescript
    mame: string,
    description: string
```

## 📱 Responsive Design

El portfolio está completamente optimizado para diferentes tamaños de pantalla:

- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar.

1. Fork el repositorio
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

* [ ] Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## 📬 Contacto

Emiliano Gonzalez - [emigonzalez3333@gmail.com]()

Link del proyecto: [https://github.com/EmiiGonzalez/portafolio](https://github.com/EmiiGonzalez/portafolio)

---

⭐️ From [EmiiGonzalez](https://github.com/EmiiGonzalez)

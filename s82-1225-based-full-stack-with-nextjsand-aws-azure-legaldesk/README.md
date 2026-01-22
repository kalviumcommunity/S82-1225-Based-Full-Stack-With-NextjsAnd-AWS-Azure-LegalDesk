Here’s a brief, clean, and submission-ready version you can paste into your README.md:

Rendering Strategy & Performance

This project uses Next.js App Router with a mix of Static, Dynamic, and Hybrid Rendering to balance performance and data accuracy.

Static Rendering (SSG) is used for the Landing Page (/) since it contains public, non-user-specific content. This enables fast load times, CDN caching, and improved SEO.

Dynamic Rendering (SSR) is applied to Dashboard pages (/dashboard) that display authenticated, user-specific, and time-sensitive data such as legal deadlines. These pages use cache: "no-store" to ensure real-time accuracy and the data security.

Hybrid Rendering is implemented within the dashboard by combining:

Static or cached components for stable metrics

Incremental Static Regeneration (ISR) for frequently updated but non-critical data

Fully dynamic components for real-time user information.

This approach improves performance while keeping data fresh and secure.

Trade off Reflection:
Static rendering offers speed but limited flexibility, dynamic rendering ensures accuracy at the cost of server load, and hybrid rendering balances both. Using all three strategically results in a scalable, production-ready application aligned with industry best practices.
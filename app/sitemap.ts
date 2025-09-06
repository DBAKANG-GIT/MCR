import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mcrgetawaysltd.com';
  const currentDate = new Date();

  // Static pages with priority and frequency
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/landlords`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // Future: Add dynamic routes for properties when implemented
  // const propertyRoutes = await getPropertyRoutes();

  return staticRoutes;
}

// Helper function for future property routes
// async function getPropertyRoutes() {
//   try {
//     // This would fetch property data from your CMS/API
//     const properties = await fetch(`${process.env.API_URL}/properties`).then(res => res.json());
//     
//     return properties.map((property: any) => ({
//       url: `https://www.mcrgetawaysltd.com/properties/${property.slug}`,
//       lastModified: new Date(property.updatedAt),
//       changeFrequency: 'weekly' as const,
//       priority: 0.7,
//     }));
//   } catch (error) {
//     console.error('Error fetching properties for sitemap:', error);
//     return [];
//   }
// }
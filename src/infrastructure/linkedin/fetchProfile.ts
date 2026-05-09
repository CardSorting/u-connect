// [LAYER: INFRASTRUCTURE] LinkedIn Profile Extraction Interface
import { logger } from "@/src/utils/logger";

export async function fetchLinkedInProfile(url: string) {
  logger.info("Attempting to fetch LinkedIn profile", { url });
  
  // If no API key is provided, we return a high-fidelity mocked response for the MVP/Demo
  if (!process.env.PROXYCURL_API_KEY) {
    logger.info("No PROXYCURL_API_KEY found, returning mocked LinkedIn data for demo");
    return {
      success: true,
      data: {
        headline: "Former VP of Engineering at DeepMind | Scaled distributed systems",
        summary: "I build robust, planet-scale infrastructure for AI and deep-tech companies. Looking to advise or join an ambitious founding team in Utah.",
        experiences: [
          { company: "DeepMind", title: "VP of Engineering", duration: "4 years", description: "Led a team of 150 engineers scaling compute for core models." },
          { company: "Google", title: "Senior Staff Software Engineer", duration: "6 years", description: "Core infrastructure scaling." }
        ],
        education: [
          { school: "Stanford University", degree: "MS Computer Science" }
        ]
      }
    };
  }

  try {
    const res = await fetch(`https://nubela.co/proxycurl/api/v2/linkedin?url=${encodeURIComponent(url)}`, {
      headers: { 'Authorization': `Bearer ${process.env.PROXYCURL_API_KEY}` }
    });
    
    if (!res.ok) {
      throw new Error(`Proxycurl error: ${res.statusText}`);
    }
    
    const data = await res.json();
    return { success: true, data };
  } catch (error) {
    logger.error("Failed to fetch LinkedIn profile", { url, error });
    return { success: false, error: "Failed to extract LinkedIn profile" };
  }
}

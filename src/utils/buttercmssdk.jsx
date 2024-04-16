import Butter from "buttercms";

export let butterCMS;

try {
  butterCMS = Butter(import.meta.env.ASTRO_APP_BUTTER_CMS_API_KEY);

  if (typeof window !== "undefined" && import.meta.env.ASTRO_APP_BUTTER_CMS_API_KEY) {
    window.location.assign("/")
  }
} catch (error) {
  if (typeof window !== "undefined" && !import.meta.env.ASTRO_APP_BUTTER_CMS_API_KEY) {
    window.location.assign("/404");
  }
}

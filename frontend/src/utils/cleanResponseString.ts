export const cleanResponseString = (response: string): string => {
  return response
    .replace(/^```json\n?/, "") // Remove leading ```json
    .replace(/^```\n?/, "") // Also handle case where it's just ```
    .replace(/```$/, "") // Remove trailing ```
    .trim(); // Remove any extra whitespace
};

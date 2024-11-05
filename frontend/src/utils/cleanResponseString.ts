export const cleanResponseString = (response: string): string => {
  return response
    .replace(/^```typescript\n?/, "") // Remove leading ```typescript
    .replace(/^```\n?/, "") // Also handle case where it's just ```
    .replace(/```$/, "") // Remove trailing ```
    .trim(); // Remove any extra whitespace
};

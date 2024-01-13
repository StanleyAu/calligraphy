const CATEGORY_DISPLAY_NAME_MAP = {
  'cao': '草书',
  'hang': '行书',
  'kai': '楷书',
  'li': '隶书',
};

export const getDisplayCategory = (category = ''): string => {
  return CATEGORY_DISPLAY_NAME_MAP[category] ?? category;
};

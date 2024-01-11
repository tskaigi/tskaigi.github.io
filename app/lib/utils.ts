import { PageInfos } from '../lib/definitions'

export const getTitleByIndex = (index: number): string | undefined => {
  const pageInfo = PageInfos.find((page) => page.index === index);
  return pageInfo?.title;
};

export const getDescriptionByIndex = (index: number): string | undefined => {
  const pageInfo = PageInfos.find((page) => page.index === index);
  return pageInfo?.description;
};
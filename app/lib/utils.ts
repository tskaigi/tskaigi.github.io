import { pageInfos } from '../lib/data'

export const getTitleByIndex = (index: number): string | undefined => {
  const pageInfo = pageInfos.find((page) => page.index === index);
  return pageInfo?.title;
};

export const getDescriptionByIndex = (index: number): string | undefined => {
  const pageInfo = pageInfos.find((page) => page.index === index);
  return pageInfo?.description;
};
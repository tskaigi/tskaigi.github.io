// CIでのTypeCheckではnext-env.d.tsが生成されておらず画像への参照がエラーになるので個別で定義
declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

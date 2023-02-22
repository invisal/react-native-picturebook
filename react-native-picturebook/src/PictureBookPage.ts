import { PictureBookControl } from "./PictureBookControl";

export default interface PictureBookPage {
  name: string;
  body: React.FC;
  controls?: PictureBookControl[];
  pages?: PictureBookPage[];
}

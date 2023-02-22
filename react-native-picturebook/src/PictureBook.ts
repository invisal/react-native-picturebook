import PictureBookPage from "./PictureBookPage";

export default class PictureBook {
  pages: PictureBookPage[] = [];

  constructor(pages: PictureBookPage[]) {
    this.pages = pages;
  }

  getPages() {
    return this.pages;
  }
}

export type PictureBookControlUpdateCallback = (
  value: Record<string, unknown>
) => void;

export interface PictureBookControlProps {
  update: PictureBookControlUpdateCallback;
}

export interface PictureBookControl {
  name: string;
  defaultValue?: unknown;
  component: React.FC<PictureBookControlProps>;
}

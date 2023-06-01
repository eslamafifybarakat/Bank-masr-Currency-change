export interface Theme {
  name: string;
  properties: any;
}

export const light: Theme = {
  name: "light",
  properties: {
    "--text-main-color": " #871e35",
    "--bg-main-color": " #871e35",
    "--bg-white-color": "#fff",
    "--bg-dark-color": "#111",
    "--text-dark-color": "#111",
    "--text-desc-color": "#8c95a3",
    "--body-color": "#fafafa",
    "--bg-input-color": "#ffffff"
  },
};

export const dark: Theme = {
  name: "dark",
  properties: {
    "--text-main-color": " #871e35",
    "--bg-main-color": " #871e35",
    "--bg-white-color": "#1e1e2d",
    "--bg-dark-color": "#fff",
    "--text-dark-color": "#fff",
    "--text-desc-color": "#a8a8a8",
    "--body-color": "#151521",
    "--bg-input-color": "#d6d6d6"
  }
}

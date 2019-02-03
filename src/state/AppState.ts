import { createContext } from "react";

import { UIStore } from "./UIStore";

export class AppState {
  ui = new UIStore()

  static Context = createContext<AppState>(new AppState())
}

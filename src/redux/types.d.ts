// For app reducer

export type APP_START = typeof APP_START;
export type AppActions = IAppStartAction;

export type AppReducer = Reducer<IAppState, AppActions | Action>;

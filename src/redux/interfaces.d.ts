// For app reducer

export interface IAppState {
  started: boolean;
}

export interface IAppStartAction extends Action<APP_START> {
  type: APP_START;
}

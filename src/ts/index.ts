import { alerter } from './utils/utils'

export namespace account {

  export function onLoad(executionContext: Xrm.Events.EventContext | any): void {
    let formContext = executionContext.getFormContext();
    alerter("Hello from Utils: " + formContext.data.entity.getId());
  };

}
import { ComponentTypes } from "./Toolbar/consts";
import { ComponentProps } from "./types";

export const initialComponentValue: Record<ComponentTypes, ComponentProps> = {
  [ComponentTypes.interationForm]: {
    uuid: '',
    title: '',
    submitUrl: '',
    type: ComponentTypes.interationForm,
  },
  [ComponentTypes.button]: {
    uuid: '',
    type: ComponentTypes.button,
    url: '',
    text: '',
  },
  [ComponentTypes.date]: {
    uuid: '',
    type: ComponentTypes.date,
    title: '',
  },
  [ComponentTypes.input]: {
    uuid: '',
    type: ComponentTypes.input,
    title: '',
  },
  [ComponentTypes.number]: {
    uuid: '',
    type: ComponentTypes.number,
    title: '',
  },
  [ComponentTypes.select]:　{
    uuid: '',
    type: ComponentTypes.select,
    title: '',
    single: true,
    options: [],
  },
  [ComponentTypes.textarea]: {
    uuid: '',
    type: ComponentTypes.textarea,
    title: '',
  },
}
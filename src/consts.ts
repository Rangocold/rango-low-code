import { ComponentTypes } from './Toolbar/consts';
import { ComponentProps } from './types';
import { v4 as genUUID } from 'uuid';

export const Width100Percent = { width: '100%' };

export const getInitialComponentValue: () => Record<
  ComponentTypes,
  ComponentProps
> = () => ({
  [ComponentTypes.interationForm]: {
    uuid: genUUID(),
    title: '',
    submitUrl: '',
    components: [],
    type: ComponentTypes.interationForm,
    button: {
      type: ComponentTypes.button,
      text: 'Submit',
    },
  },
  [ComponentTypes.button]: {
    uuid: genUUID(),
    type: ComponentTypes.button,
    url: '',
    text: '',
  },
  [ComponentTypes.date]: {
    uuid: genUUID(),
    type: ComponentTypes.date,
    title: '',
  },
  [ComponentTypes.input]: {
    uuid: genUUID(),
    type: ComponentTypes.input,
    title: '',
  },
  [ComponentTypes.number]: {
    uuid: genUUID(),
    type: ComponentTypes.number,
    title: '',
  },
  [ComponentTypes.select]: {
    uuid: genUUID(),
    type: ComponentTypes.select,
    title: '',
    single: true,
    options: [],
  },
  [ComponentTypes.textarea]: {
    uuid: genUUID(),
    type: ComponentTypes.textarea,
    title: '',
  },
  [ComponentTypes.componentSelection]: {
    uuid: genUUID(),
  },
});

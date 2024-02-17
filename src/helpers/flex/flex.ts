import { type IFlexProps } from './flex.types';
import { core } from '../core';
import type ICssValue from '../../types/ICssValue';

const coreFlexInstance = core<Omit<IFlexProps, 'theme'>>({
  $flex: 'flex',
  $flexDir: 'flex-direction',
  $flexGrow: 'flex-grow',
  $flexWrap: 'flex-wrap',
  $gap: 'gap',
  $alignItems: 'align-items',
  $justifyContent: 'justify-content',
});

const flex = (props: IFlexProps): Record<string, ICssValue> => {
  return coreFlexInstance(props, {
    themeAccessKey: 'spacing',
  });
};
export default flex;

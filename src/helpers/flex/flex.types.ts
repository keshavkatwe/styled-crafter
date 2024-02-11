import type { DefaultCrafter } from 'styled-crafter';

type ISpacing = DefaultCrafter['spacing'];
export type IFlexDirection = 'row' | 'column';
export type IFlexWrap = 'wrap' | 'nowrap';
export type IAlignItems =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline';
export type IJustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
export interface IFlexProps {
  flexDir?: IFlexDirection;
  flexWrap?: IFlexWrap;
  alignItems?: IAlignItems;
  justifyContent?: IJustifyContent;
  flex?: number;
  flexGrow?: number;
  gap?: ISpacing;
}

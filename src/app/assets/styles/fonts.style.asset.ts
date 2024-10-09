export const fonts = {
  inter400: 'Inter-Regular',
  inter500: 'Inter-Medium',
  inter600: 'Inter-SemiBold',
  inter700: 'Inter-Bold',
};
type FontWeightType =
  | 'normal'
  | 'bold'
  | 'bolder'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

interface fwsObject {
  font400: FontWeightType;
  font500: FontWeightType;
  font600: FontWeightType;
  font700: FontWeightType;
}
export const fws: fwsObject = {
  font400: '400',
  font500: '500',
  font600: '600',
  font700: '700',
};

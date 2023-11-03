import {FlashList, FlashListProps} from '@shopify/flash-list';

import React, {Ref, forwardRef} from 'react';

interface Props extends FlashListProps<any> {
  estimatedItemSize?: number;
  onRefresh?: () => void;
}

export const List = forwardRef(function List(
  props: Props,
  ref: Ref<FlashList<any>>,
) {
  return (
    <FlashList ref={ref} showsVerticalScrollIndicator={false} {...props} />
  );
});

List.defaultProps = {
  data: [],
  onEndReachedThreshold: 0.2,
};

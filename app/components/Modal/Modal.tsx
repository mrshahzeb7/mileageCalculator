import React, {
  forwardRef,
  Ref,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  ModalProps,
  Modal as RNModal,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {isIos, responsiveHeight, responsiveWidth} from '../../utils';
import {colors} from '../../theme';

interface Props extends ModalProps {
  contentStyle?: StyleProp<ViewStyle>;
  closeModal?(): any;
  statusBarTranslucent?: boolean;
  style?: StyleProp<ViewStyle>;
  onRequestClose?(): void;
}

export interface ModalRef {
  toggleModal?(): void;
  openModal?(): void;
  close?(): void;
  setVisibility?(value: boolean): void;
}

export const Modal = forwardRef(function Modal(
  props: Props,
  ref: Ref<ModalRef>,
) {
  const {
    children,
    style,
    contentStyle,
    closeModal,
    onRequestClose,
    ...restProps
  } = props;

  const [modalVisible, setModalVisible]: any = useState(false);

  const toggleModal = () => {
    setModalVisible((p: boolean) => !p);
  };
  const setVisibility = (value: boolean) => {
    setModalVisible(value);
  };

  const close = () => {
    setModalVisible(false);
  };

  useImperativeHandle(ref, () => ({
    close,
    setVisibility,
  }));

  const onCloseModal = () => {
    onRequestClose?.();
    closeModal?.();
    close();
  };

  return (
    <RNModal
      visible={modalVisible}
      onRequestClose={onCloseModal}
      transparent
      statusBarTranslucent={true}
      {...restProps}>
      <View style={[styles.container, style]}>
        <TouchableOpacity
          style={styles.touchableArea}
          onPress={onRequestClose || toggleModal}
        />
        <View style={[styles.modalContentContainer, contentStyle]}>
          {children}
        </View>
      </View>
    </RNModal>
  );
});

export function useModalRef() {
  const modalRef = useRef<ModalRef>(null);
  return modalRef;
}

Modal.defaultProps = {
  animationType: 'fade',
  statusBarTranslucent: true,
};

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    ...(isIos
      ? {flex: 1}
      : {height: responsiveHeight(100) + responsiveHeight(5)}),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.modalOverlay,
  },
  touchableArea: {
    position: 'absolute',
    flex: 1,
    height: responsiveHeight(110),
    width: responsiveWidth(100),
  },
  modalContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

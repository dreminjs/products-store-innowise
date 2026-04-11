import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { onToggle } from "@slices/mobileNavModalSlice";

export const useMobileMenu = () => {
  const isOpen = useAppSelector((state) => state.mobileNavModal.isOpen);
  const dispatch = useAppDispatch();

  const toggleMobileMenu = () => {
    dispatch(onToggle());
  };

  return {
    isOpen,
    toggleMobileMenu,
  };
};

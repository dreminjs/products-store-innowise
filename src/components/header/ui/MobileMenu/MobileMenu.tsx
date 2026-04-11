import { useMobileMenu } from "@components/header/model/hooks/useMobileMenu";
import { Modal } from "@components/Modal";
import { ActionsList } from "../RightNavigation/ActionsList/ActionsList";
import { Navigation } from "../RightNavigation/Navigation/Navigation";
import navigationStyles from "../RightNavigation/Navigation/Navigation.module.css";
import actionsStyles from "../RightNavigation/ActionsList/ActionsList.module.css";
export const MobileMenu = () => {
  const { isOpen, toggleMobileMenu } = useMobileMenu();

  return (
    <>
      <Modal isOpen={isOpen} onClose={toggleMobileMenu}>
        <Navigation className={navigationStyles.navigationListMobile} />
        <ActionsList className={actionsStyles.actionsListMobile} />
      </Modal>
    </>
  );
};

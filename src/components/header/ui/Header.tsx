import { Filter } from "./Filter/Filter";
import { HeaderLayout } from "./HeaderLayout";
import { LeftNavigation } from "./LeftNavigation/LeftNavigation";
import { MobileMenu } from "./MobileMenu/MobileMenu";
import { RightNavigation } from "./RightNavigation/RightNavigation";

export const Header = () => {
  return (
    <>
      <HeaderLayout>
        <LeftNavigation />
        <RightNavigation />
      </HeaderLayout>
      <Filter />
      <MobileMenu />
    </>
  );
};

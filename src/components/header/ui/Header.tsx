import { Filter } from "./Filter/Filter";
import { HeaderLayout } from "./HeaderLayout";
import { LeftNavigation } from "./ReftNavigation/LeftNavigation";
import { RightNavigation } from "./RightNavigation/RightNavigation";

export const Header = () => {
  return (
    <>
      <HeaderLayout>
        <LeftNavigation />
        <RightNavigation />
      </HeaderLayout>
      <Filter />
    </>
  );
};

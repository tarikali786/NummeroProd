import { Border } from "./Border";
import { DeskTopNavbar } from "./DeskTopNavbar";
import { MobileNavbar } from "./MobileNavbar";
export const Navbar = () => {
  return (
    <>
      <DeskTopNavbar />

      <MobileNavbar />
      <Border />
    </>
  );
};

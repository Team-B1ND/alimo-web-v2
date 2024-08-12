import { useState, useEffect } from "react";
import { NavigationProps } from "../../components/ui/Sidebar/types";
import { useNavigate, useLocation } from "react-router-dom";

export const useSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isClicked, setIsClicked] = useState<string>("");

  const handleNavigation = ({ location }: NavigationProps) => {
    switch (location.pathname) {
      case "/":
        setIsClicked("홈");
        break;
      case "/profile":
        setIsClicked("프로필");
        break;
      case "/manage":
        setIsClicked("관리");
        break;
      default:
        setIsClicked("");
        break;
    }
  };

  const handleItemClick = (item: string) => {
    setIsClicked(item);
    switch (item) {
      case "홈":
        navigate("/");
        break;
      case "프로필":
        navigate("/profile");
        break;
      case "관리":
        navigate("/manage");
        break;
      default:
        navigate("");
        break;
    }
  };

  useEffect(() => {
    handleNavigation({ location });
  }, [location.pathname]);

  return {
    isClicked,
    handleItemClick,
  };
};

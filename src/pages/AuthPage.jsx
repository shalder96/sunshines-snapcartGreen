import Lottie from "lottie-react";
import AuthForm from "../components/AuthForm";
import useTheme from '../contexts/theme';
import helloAnimation from '../assets/snapcartAnimations/Hello_animation.json';
// import {bgImage} from '../assets/login_background'

const AuthPage = () => {
  const themeMode = useTheme();

  return (
    <main
      className="flex items-center justify-center w-full min-h-[100vh] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url('/images/login_background.jpg')` }}
    >
      <div className="flex flex-col flex-wrap items-center justify-center gap-6 my-10 md:flex-row md:gap-10">
        <Lottie animationData={helloAnimation} loop style={{ height: 180 }} />
        <AuthForm />
      </div>
    </main>

  );
};

export default AuthPage;

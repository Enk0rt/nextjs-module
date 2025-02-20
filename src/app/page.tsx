import './Home.scss'
import {retrieveCookie} from "@/services/data/helpers/retrieveCookies";
import {IUserWithTokens} from "@/models/auth/IUserWithTokens";
import {jwtDecode} from "jwt-decode";

export default async function Home() {
    const {refreshToken} = await retrieveCookie()
    const decodeToken = (token:string):IUserWithTokens | undefined => {
        if(token){
            return jwtDecode(token);
        }
        return
    }
    const user = decodeToken(refreshToken)
  return (
    <div className={'wrapper'}>
        {
            !refreshToken ? (
                <div className={'home'}>
                    <h2 className={'home__title'}>Hey, Welcome to my app!</h2>
                    <h3 className={'home__desc'}>Tap Login to use the app</h3>
                </div>
            ) : (
                <div className={'home'}>
                    <h2 className={'home__title'}>Hey {user?.username}, Welcome to my app!</h2>
                    <h3 className={'home__desc'}>You can use this app now</h3>
                    <p className={'home__desc'}>Enjoy your access to users and recipes pages</p>
                </div>
            )
        }
    </div>
  );
}
